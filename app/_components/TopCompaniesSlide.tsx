"use client";
import topCompanies from "@/lib/top-companies";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TopCompaniesCard from "./TopCompaniesCard";

export default function TopCompaniesSlide() {
  return (
    <div className="ml-5 relative">
      <Swiper
        spaceBetween={-60}
        slidesPerView={1.2}
        centeredSlides={true} // Add this line
        className="ml-5 pb-16"
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {topCompanies.map((company, i) => (
          <SwiperSlide key={`Company ${i + 1} `} className="!w-95">
            <TopCompaniesCard card={company} />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>
        {`
          .swiper-pagination-bullet {
            background-color: #999;
            opacity: 1;
            width: 12px;
            height: 12px;
            margin: 0 6px;
          }

          .swiper-pagination-bullet-active {
            background-color: #172554;
          }

          .swiper-pagination {
            position: static !important;
            margin-top: 1rem !important;
            text-align: center !important;
          }
        `}
      </style>
    </div>
  );
}
