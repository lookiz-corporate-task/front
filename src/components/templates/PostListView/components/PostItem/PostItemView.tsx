import Image from 'next/image';

interface Props {
  imgPath: string;
  hashTags: string;
}

export const PostItemView = ({ imgPath, hashTags }: Props) => {
  return (
    <div className="flex flex-col items-center w-[200px]">
      <div className="w-[200px] border rounded-xl bg-[#f9f2e7]">
        <Image
          src={imgPath}
          alt=""
          width={200}
          height={200}
          layout="responsive"
          priority
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col">
        <p className="font-bold">{hashTags}</p>
      </div>
    </div>
  );
};
