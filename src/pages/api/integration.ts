import type { NextApiRequest, NextApiResponse } from 'next'
import { generateInstagramRedirectUri } from '@/utils/uri';
import { cookies } from 'next/headers'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    const { email } = getPropsFromReq(req)
    
    const redirectUri = generateInstagramRedirectUri()

    res.redirect(`
    https://www.instagram.com/oauth/authorize?client_id=466905131159748&redirect_uri=${redirectUri}&scope=user_profile%2Cuser_media&response_type=code&logger_id=c7cdb0be-7e1e-4120-afc7-33323ef8515d&state=${email}
    `)
  }catch(ex: any){
    res.status(400).json({ message: ex.message })
  }
}

const getPropsFromReq = (req: NextApiRequest) => {
  const cookieStore = cookies()
  const email = cookieStore.get('user_email')

  if(email)
    throw new Error('Login First')

  return { email }
}