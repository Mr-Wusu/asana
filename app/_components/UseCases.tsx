"use client"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import UseCasesCard from "./UseCasesCard";
import acrossContainer from "@/lib/moving-accross";

export default function UseCases() {
  return (
     <Swiper
      spaceBetween={10}
      slidesPerView={1.2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {acrossContainer.map((card, index) => (
        <SwiperSlide key={index}>
          <UseCasesCard card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
