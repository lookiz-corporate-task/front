// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import https from 'https';
import axios from 'axios';
import querystring from 'querystring';
import { generateInstagramRedirectUri } from '@/utils/uri';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { code, state } = getPropsFromReq(req);

    const redirectUri = generateInstagramRedirectUri();

    const instagramToken = await getInstagramAccessToken({
      redirectUri,
      code,
    });

    await updateUserInstagramId({
      userId: instagramToken.user_id,
      email: state,
    });

    res.status(200).send(`
        <html>
          <body>
            <script>
              window.close();
            </script>
          </body>
        </html>
      `);
  } catch (ex: any) {
    res.status(400).json({
      message: ex.message,
    });
  }
}

const getPropsFromReq = (req: NextApiRequest) => {
  const { code, state } = req.query;

  if (!state || Array.isArray(state)) throw new Error('Login First');

  if (!code || Array.isArray(code)) throw new Error('Invalid Code');

  return { code, state };
};

const getInstagramAccessToken = async ({
  redirectUri,
  code,
}: {
  redirectUri: string;
  code: string;
}) => {
  const formData = {
    client_id: '402165171907832',
    client_secret: '13c1f9e2317060a5642ba94234ae084b',
    grant_type: 'authorization_code',
    redirect_uri: redirectUri,
    code,
  };

  const response = await axios.post<{
    access_token: string;
    user_id: string;
  }>('https://api.instagram.com/oauth/access_token', querystring.stringify(formData), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.data;
};

const updateUserInstagramId = async ({ userId, email }: { userId: string; email: string }) => {
  const payload = {
    instaId: userId,
    email: email,
  };

  const agent = new https.Agent({
    rejectUnauthorized: false, // 경고: 이 설정은 모든 TLS/SSL 인증서를 무시합니다.
  });

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/connect`,
    payload,
    {
      httpsAgent: agent, // 여기를 수정했습니다.
    },
  );

  return response.data;
};
