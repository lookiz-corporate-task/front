import Image from 'next/image';
import Heart from '../../../../../svg/heart.svg';
import FullHeart from '../../../../../svg/fullheart.svg';
import { Post } from '@/types/post';

interface Props {
  post: Post;
  toggleLike: any;
}

export const PostItemView = ({ post, toggleLike }: Props) => {
  return (
    <div className="flex flex-col w-[200px] h-full">
      <div className="w-[200px] border rounded-xl bg-[#f9f2e7]">
        <Image
          src={post.mediaUrl}
          alt=""
          width={200}
          height={200}
          priority
          className="rounded-xl w-full h-auto"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold mr-10">{post.username}</p>
        <div className={'flex items-center'}>
          <div
            className={`h-full w-full`}
            onClick={() => {
              toggleLike(post.id, post.liked);
            }}
          >
            {post.liked ? <FullHeart /> : <Heart />}
          </div>
          <p className="ml-1">{post.likeCount}</p>
        </div>
      </div>
    </div>
  );
};
