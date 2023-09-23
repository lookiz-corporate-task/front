import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LankItemView } from './LankItem/LankItemView';
import { Post } from '@/types/post';
import Champion from '../../../svg/champion.svg';
import FullHeart from '../../../svg/fullheart.svg';

interface Props {
  rankList: Post[];
}

export const LankView = ({ rankList }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <Swiper
        direction={'horizontal'}
        slidesPerView={2}
        spaceBetween={20}
        mousewheel={true}
        modules={[Mousewheel, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {rankList?.map((rank: Post, index) => (
          <SwiperSlide className="mb-8" key={rank.id}>
            {index === 0 || index === 1 || index === 2 ? (
              <div className="relative flex flex-col items-center">
                <Champion
                  className={`${
                    index === 0
                      ? 'text-yellow-500'
                      : index === 1
                      ? 'text-gray-400'
                      : ' text-yellow-700'
                  } absolute top-0 left-0 bg-white`}
                />
                <LankItemView pageData={rank} isRanking={true} />
                <div className="flex flex-row justify-center items-center gap-1">
                  <FullHeart />
                  <p>{rank.likeCount}</p>
                </div>
              </div>
            ) : (
              <LankItemView pageData={rank} isRanking={true} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
