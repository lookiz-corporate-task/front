import InstagramLogo from '../../../svg/instagram.svg';

const InstagramButton = ({ cookieString }: any) => {
  console.log(cookieString);

  const redirectInstagramConnect = async () => {
    try {
      const response = await fetch('/api/integration', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      window.open(data.redirect_uri);

      return data.redirect_uri;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex gap-1 px-2 py-8 items-center justify-between text-black text-md font-bold h-[50px] border-y-2 ">
      <div className="flex-col">
        <button
          className="underline underline-offset-4"
          onClick={() => {
            redirectInstagramConnect();
          }}
        >
          인스타그램 연동하기
        </button>
      </div>
      <InstagramLogo />
    </div>
  );
};

export default InstagramButton;
