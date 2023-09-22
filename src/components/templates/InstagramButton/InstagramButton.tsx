import InstagramLogo from '../../../svg/instagram.svg';

export const InstagramButton = () => {
  return (
    <div className="flex gap-1 px-2 py-8 items-center justify-between text-black text-md font-bold h-[50px] border-y-2 ">
      <div className="flex-col">
        <button className="underline underline-offset-4">인스타그램 연동하기</button>
      </div>
      <InstagramLogo />
    </div>
  );
};
