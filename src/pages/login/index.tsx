import { useRouter } from 'next/navigation';

const Login = () => {
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
    <div className="w-[440px] h-full px-5 ">
      <section className={'flex flex-col items-center gap-4'}>
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
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
