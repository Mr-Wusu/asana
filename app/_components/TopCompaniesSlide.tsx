"use client";
import topCompanies from "@/lib/top-companies";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TopCompaniesCard from "./TopCompaniesCard";

export default function TopCompaniesSlide() {
  return (
    <div className="ml-5">
      <Swiper spaceBetween={-60} slidesPerView={1.2} className="ml-5">
        {topCompanies.map((company, i) => (
          <SwiperSlide key={`Company ${i + 1} `} className="!w-95">
            <TopCompaniesCard card={company} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
