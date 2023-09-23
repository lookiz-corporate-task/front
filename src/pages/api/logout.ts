import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Set-Cookie', `user_email=; Path=/; Max-Age=0; HttpOnly; Secure`);
  res.status(200).json({ message: 'Logout successful' });
}
