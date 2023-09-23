import { Post } from '@/types/post';
import Image from 'next/image';

interface Props {
  pageData: Post;
  isRanking: boolean;
}

export const LankItemView = ({ pageData, isRanking }: Props) => {
  return (
    <div className="flex flex-col items-center w-[200px] h-[200px]">
      <div className="w-200 h-200 rounded-xl overflow-hidden">
        <Image
          src={pageData.mediaUrl}
          width={200}
          height={200}
          alt=""
          priority
          className="object-cover"
        />
      </div>
      {isRanking && (
        <div className="mt-2">
          <p className="font-bold"> 👑{pageData.username}👑</p>
        </div>
      )}
    </div>
  );
};
