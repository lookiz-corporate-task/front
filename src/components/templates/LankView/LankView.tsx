import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LankItemView } from './LankItem/LankItemView';
import { Post } from '@/types/post';

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
        {rankList?.map((rank: Post) => (
          <SwiperSlide className="mb-8" key={rank.id}>
            <LankItemView pageData={rank} isRanking={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
