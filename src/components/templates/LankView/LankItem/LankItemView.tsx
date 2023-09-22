import Image from 'next/image';

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
    </div>
  );
};
