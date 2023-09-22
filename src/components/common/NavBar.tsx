import Link from 'next/link';
import { usePathname } from 'next/navigation';

import HomeIcon from '../../svg/home.svg';
import MyPageIcon from '../../svg/mypage.svg';

export const NavBar = () => {
  const pathname = usePathname();

  const navbar = `flex justify-center items-center max-w-md h-[80px] border-t border-neutral-300`;
  const activeText = `font-semibold text-yellow-500`;
  const optionalText = 'text-black';

  return (
    <nav className={navbar}>
      <Link href="/" className={`flex-1`}>
        <div
          className={`flex  flex-col items-center ${pathname === '/' ? activeText : optionalText}`}
        >
          <HomeIcon />
          <p>홈</p>
        </div>
      </Link>
      <Link href="/mypage" className={`flex-1`}>
        <div
          className={`flex flex-col items-center ${
            pathname === '/mypage' ? activeText : optionalText
          }`}
        >
          <MyPageIcon />
          <p>마이페이지</p>
        </div>
      </Link>
    </nav>
  );
};
