import { Header } from '../common/Header';
import { NavBar } from '../common/NavBar';

const AppLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className={'flex flex-col justify-center items-center bg-[#f9f2e7]'}>
      <div className={'max-w-md  bg-white'}>
        <Header />
        <div className={'h-[calc(100vh-132px)] px-5 text-black'}>{props.children}</div>
        <NavBar />
      </div>
    </div>
  );
};

export default AppLayout;
