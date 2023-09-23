import { LankView } from '@/components/templates/LankView/LankView';
import { PostListView } from '@/components/templates/PostListView/PostListVIew';
import { SortingButton } from '@/components/templates/PostListView/components/SortingButton';
import { Post } from '@/types/post';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {
  rankList: Post[];
  postList: Post[];
  email: string;
}

const likePost = async (id: number, email: string) => {
  await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/likes/${id}`,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: email,
      },
    },
  );
};

const unLikePost = async (id: number, email: string) => {
  await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/likes/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: email,
    },
  });
};

export async function getServerSideProps(context: any) {
  const email = context.req.cookies['user_email'];

  const rankResult = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/rank`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: email!,
    },
  });

  const postsResult = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: email!,
    },
  });

  const rankList = await rankResult.json();
  const postList = await postsResult.json();

  return { props: { rankList, postList, email } };
}

const Home = ({ rankList, postList, email }: Props) => {
  const router = useRouter();
  const toggleLike = async (postId: number, like: boolean) => {
    try {
      if (!like) {
        await likePost(postId, email);
      } else {
        await unLikePost(postId, email);
      }
      router.reload();
    } catch (error) {
      console.error('Error toggling like for the post:', error);
    }
  };

  return (
    <div className="max-w-md px-5">
      <div className="flex items-center pb-2">
        <h1 className="font-bold text-[20px] mr-0.5">이번주 랭킹</h1>
        <Image src={'/img/rank10.png'} width={30} height={30} alt="" priority />
      </div>
      <LankView rankList={rankList} />
      <div className="flex items-center justify-between pb-2 mt-4 pt-8 border-t-2">
        <h1 className="font-bold text-[20px] mr-0.5">오늘 뭐 입지?</h1>
        {/* <SortingButton /> */}
      </div>
      <PostListView postList={postList} toggleLike={toggleLike} />
    </div>
  );
};

export default Home;
