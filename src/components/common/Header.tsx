import Link from 'next/link';
import LookidsLogo from '../../svg/lookidsLogo.svg';

export const Header = () => {
  return (
    <div className="h-[52px]">
      <Link href={'/'}>
        <LookidsLogo />
      </Link>
    </div>
  );
};
