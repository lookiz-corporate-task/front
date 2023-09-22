import { InstagramButton } from '@/components/templates/InstagramButton/InstagramButton';
import { LankItemView } from '@/components/templates/LankView/LankItem/LankItemView';

const MyPage = () => {
  return (
    <div className="w-[440px] h-full px-5">
      <div className="flex items-center justify-between pb-2">
        <h1 className="font-bold text-[20px] mr-0.5">종현님의 마이페이지</h1>
        <button className="bg-yellow-500 p-1 rounded-lg text-sm text-white">로그아웃</button>
      </div>
      <div className="flex flex-col items-center justify-between pb-2 pt-2 border-t-2">
        <h1 className="font-bold text-[20px] mr-0.5">종현님의 게시물</h1>
        <div className=" grid grid-flow-row grid-cols-2">
          <LankItemView />
          <LankItemView />
          <LankItemView />
          <LankItemView />
        </div>
      </div>
      {/*FIXME: 인스타그램 연동여부에 따른 랜더링 로직 구현*/}
      <InstagramButton />
    </div>
  );
};

export default MyPage;
