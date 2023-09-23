import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import https from 'https';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = getPropsFromReq(req);

    requestLogin({ email, password });

    res.setHeader('Set-Cookie', `user_email=${email}; Path=/; Max-Age=3600; HttpOnly; Secure`);

    res.status(200).json({ message: 'success' });
  } catch (ex: any) {
    res.status(400).json({ message: ex.message });
  }
}

const getPropsFromReq = (req: NextApiRequest) => {
  const { email, password } = req.body;

  if (!email || !password) throw new Error('Invalid Inputs');

  return { email, password };
};

const requestLogin = async ({ email, password }: { email: string; password: string }) => {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const response = await axios.post<String>(
    'https://27.96.130.147/users/signin',
    {
      email,
      password,
    },
    {
      httpsAgent: agent,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};
