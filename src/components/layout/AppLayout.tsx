import { Header } from '../common/Header';
import { NavBar } from '../common/NavBar';

const AppLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className={'flex flex-col justify-center items-center bg-[#f9f2e7]'}>
      <div className={'max-w-md h-full bg-white'}>
        <Header />
        <div className={'top-[52px] h-[calc(100vh-112px)] max-w-md text-black overflow-y-auto'}>
          {props.children}
        </div>
        <div className="z-10 h-[60px]">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
