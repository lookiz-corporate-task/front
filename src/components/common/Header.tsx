import Image from 'next/image';
import LookidsLogo from '../../svg/lookidsLogo.svg';

interface Props {
  tabIndex?: number;
}

export const Header = (props: Props) => {
  return (
    <div className="h-[52px]">
      <LookidsLogo />
    </div>
  );
};
