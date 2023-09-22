import Image from 'next/image';
import Rank from '../../../../svg/rank10.svg';

export const LankItemView = () => {
  return (
    <div className="flex flex-col items-center w-[200px]">
      <div className="w-[200px] h-[200px] border rounded-xl bg-[#f9f2e7]">
        <Image
          src={'/img/baby.jpg'}
          width={200}
          height={200}
          alt=""
          priority
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col">
        <p className="font-bold">#룩키즈 #만세 #흥행 #보장</p>
      </div>
    </div>
  );
};
