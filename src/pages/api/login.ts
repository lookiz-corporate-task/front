import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import https from 'https';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const { email, password } = req.body;

  try {
    const response = await axios.post<String>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/signin`,
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
    console.log(response.data);
    res.setHeader('Set-Cookie', `user_email=${email}; Path=/; Max-Age=3600; HttpOnly; Secure`);
    res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'fail' });
  }
}
