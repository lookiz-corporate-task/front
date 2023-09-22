import { LankView } from '@/components/templates/LankView/LankView';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="max-w-md px-5">
      <div className="flex items-center pb-2">
        <h1 className="font-bold text-[20px] mr-0.5">이번주 랭킹</h1>
        <Image src={'/img/rank10.png'} width={30} height={30} alt="" priority />
      </div>
      <LankView />
    </div>
  );
};

export default Home;
