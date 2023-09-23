import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LankItemView } from './LankItem/LankItemView';

export const LankView = () => {
  return (
    <div className="flex justify-center items-center">
      <Swiper
        direction={'horizontal'}
        slidesPerView={2}
        spaceBetween={20}
        mousewheel={true}
        modules={[Mousewheel]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="mb-8">
          <LankItemView />
        </SwiperSlide>
        <SwiperSlide className="mb-8">
          <LankItemView />
        </SwiperSlide>
        <SwiperSlide className="mb-8">
          <LankItemView />
        </SwiperSlide>
        <SwiperSlide className="mb-8">
          <LankItemView />
        </SwiperSlide>
        <SwiperSlide className="mb-8">
          <LankItemView />
        </SwiperSlide>
        <SwiperSlide className="mb-8">
          <LankItemView />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
