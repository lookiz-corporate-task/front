import { BottomSheet } from '@/components/common/BottomSheet';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const loginSubmitHander = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const loginFormData = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    try {
      const loginResult = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginFormData),
      });

      if (loginResult.status === 200) {
        router.push('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-[440px] h-full">
      <section className={'flex flex-col items-center gap-4 px-5'}>
        <h2 className={`mt-56 text-2xl font-semibold py-4 text-yellow-500`}>로그인</h2>
        <form onSubmit={loginSubmitHander}>
          <div className={`flex flex-col w-full gap-2`}>
            <input
              type="email"
              name="email"
              placeholder="이메일"
              className="border p-2 rounded-md"
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              className="border p-2 rounded-md"
            />
            <button type="submit" className="bg-yellow-500 text-white p-2 rounded-md">
              로그인 하기
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              가이드 보기
            </button>
          </div>
        </form>
      </section>
      {isOpen && (
        <BottomSheet
          title="테스트 가이드"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          {
            <div className="flex flex-col">
              <p className="font-bold"> [ 둘러보는 계정 ]</p>
              <p>* ID : test@naver.com</p>
              <p>* PW : test </p>
              <p className="mt-4 font-bold">[ 구현된 서비스 둘러보는 Tip ]</p>
              <p>* 위 계정으로 접속 후, 홈 메뉴를 둘러본다.</p>
              <p>
                * 인스타그램 @_lookiz 계정의 “태그된 게시물” 탭과 우리 서비스 Home 탭의 사진을
                비교해본다. (비교해보는 이유 : 인스타그램에 게시물을 올리면, 우리 서비스에도
                연동되어 게시물이 올라오는 것을 확인하기 위해)
              </p>
              <p>* 좋아요를 눌러보고, 홈 메뉴 최상단 랭킹의 변화를 확인한다.</p>
              <p>* 마이페이지 메뉴에서 내가 올린 게시물을 확인한다.</p>
              <p>
                * Point !! 둘러본 후, 직접 @_lookiz 태그하고, 우리 서비스에 사진 올라오는지 확인하고
                싶다면? 아래의 [ 참고해 주세요 ] 읽어보기!!
              </p>
              <p className="mt-4 font-bold"> [ 참고해 주세요 ]</p>
              <p>
                테스터 계정 추가를 원하실 경우, bku6713@gmail.com으로 인스타그램 로그인 이메일과
                아이디를 보내주시면 감사하겠습니다.
              </p>
              <p>* 현재 인스타그램의 테스트용 API 만 인가받은 상태입니다.</p>
              <p>
                * 정식 API 인가를 받으면, 누구나 룩키즈의 인스타그램 계정을 태그하고, 해당 게시물을
                우리 서비스에 가져올 수 있습니다.
              </p>
              <p>
                * 그러나 현재 테스트 API 는 테스터로 지정된 계정만 룩키즈 인스타그램을 태그했을 때,
                해당 게시물을 불러올 수 있으니 참고해 주세요.
              </p>
              <p>
                * 또한, 현재 Zapier 프리 티어를 사용하는 관계로 인스타그램에 사진을 올린 후 15-20분
                뒤에 우리 서비스에 사진이 업로드 되는 점 참고해 주세요.
              </p>
            </div>
          }
        </BottomSheet>
      )}
    </div>
  );
};

export default Login;
