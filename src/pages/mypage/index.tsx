import InstagramButton from '@/components/templates/InstagramButton/InstagramButton';
import { LankItemView } from '@/components/templates/LankView/LankItem/LankItemView';
import { Post } from '@/types/post';

interface Props {
  myPageList: Post[];
}

export async function getServerSideProps(context: any) {
  const email = context.req.cookies['user_email'];

  const loginResult = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/my`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: email!,
    },
  });

  const myPageList = await loginResult.json();

  return { props: { myPageList } };
}

const MyPage = ({ myPageList }: Props) => {
  return (
    <div className="w-[440px] h-full">
      <div className="px-5">
        <div className="flex items-center justify-between pb-2">
          <h1 className="font-bold text-[20px] mr-0.5">
            {myPageList[0]
              ? `${myPageList[0].username}님의 마이페이지`
              : '인스타그램과 연동해주세요.'}
          </h1>
          {/* <button className="bg-yellow-500 p-1 rounded-lg text-sm text-white">로그아웃</button> */}
        </div>
        {myPageList[0] && (
          <div className="flex flex-col items-center justify-between pb-2 pt-2 border-t-2">
            <h1 className="font-bold text-[20px] mr-0.5">{myPageList[0]?.username}님의 게시물</h1>
            <div className=" grid grid-flow-row grid-cols-2 gap-8">
              {myPageList.map((mypage: Post) => (
                <div key={mypage.id}>
                  <LankItemView pageData={mypage} isRanking={false} />
                </div>
              ))}
            </div>
          </div>
        )}
        {!myPageList[0] && <InstagramButton />}
      </div>
    </div>
  );
};

export default MyPage;
