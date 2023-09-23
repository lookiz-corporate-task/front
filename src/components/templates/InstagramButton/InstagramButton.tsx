import InstagramLogo from '../../../svg/instagram.svg';
import Link from 'next/link';

export const InstagramButton = () => {
  return (
    <div className="flex gap-1 px-2 py-8 items-center justify-between text-black text-md font-bold h-[50px] border-y-2 ">
      <div className="flex-col">
        <Link
          href={
            'https://www.instagram.com/accounts/login/?force_authentication=1&enable_fb_login=1&next=%2Foauth%2Fauthorize%3Fclient_id%3D466905131159748%26redirect_uri%3Dhttps%3A%2F%2F27.96.130.147%2Fauthorize%2Finstagram%26scope%3Duser_profile%2Cuser_media%26response_type%3Dcode%26logger_id%3Dc7cdb0be-7e1e-4120-afc7-33323ef8515d'
          }
          target="_blank"
          className="underline underline-offset-4"
        >
          인스타그램 연동하기
        </Link>
      </div>
      <InstagramLogo />
    </div>
  );
};
