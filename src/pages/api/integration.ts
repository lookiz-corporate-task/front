import type { NextApiRequest, NextApiResponse, NextPageContext } from 'next';
import { generateInstagramRedirectUri } from '@/utils/uri';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email } = getPropsFromReq(req);

    const redirectUri = generateInstagramRedirectUri();

    const encodedEmail = encodeURIComponent(email);
    const encodedRedirectUri = encodeURIComponent(redirectUri);

    res.status(200).json({
      redirect_uri: `https://www.instagram.com/oauth/authorize?client_id=466905131159748&redirect_uri=${encodedRedirectUri}&scope=user_profile%2Cuser_media&response_type=code&logger_id=c7cdb0be-7e1e-4120-afc7-33323ef8515d&state=${encodedEmail}`,
    });
  } catch (ex: any) {
    console.error(ex);
    res.status(400).json({ message: ex.message });
  }
}

const getPropsFromReq = (req: NextApiRequest) => {
  const email = req.cookies['user_email'];

  if (!email) throw new Error('Login First');

  return { email };
};

