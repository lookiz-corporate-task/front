import Image from 'next/image';
import Heart from '../../../../../svg/heart.svg';
import FullHeart from '../../../../../svg/fullheart.svg';
import { useState } from 'react';

interface Props {
  imgPath: string;
  hashTags: string;
}

export const PostItemView = ({ imgPath, hashTags }: Props) => {
  const [isLike, setIsLike] = useState<boolean>();

  const toggleLike = async () => {
    if (isLike === false) {
      await setIsLike(!isLike);
    }
    await setIsLike(!isLike);
  };

  return (
    <div className="flex flex-col items-center w-[200px]">
      <div className="w-[200px] border rounded-xl bg-[#f9f2e7]">
        <Image
          src={imgPath}
          alt=""
          width={200}
          height={200}
          priority
          className="rounded-xl w-full h-auto"
        />
      </div>
      <div className="flex">
        <p className="font-bold">{hashTags}</p>
        <div
          className={`h-full`}
          onClick={() => {
            toggleLike();
          }}
        >
          {isLike ? <FullHeart /> : <Heart />}
        </div>
      </div>
    </div>
  );
};
