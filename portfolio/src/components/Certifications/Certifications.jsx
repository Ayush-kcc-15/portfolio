import "./Certifications.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Certifications() {
  const certs = [
    "IBM Generative AI",
    "IBM Prompt Engineering",
    "IBM Ethical AI",
    "IBM LLM Fundamentals",
    "AWS EC2",
    "Microsoft Cloud Computing",
    "HackCraft 3.0",
  ];

  return (
    <section
      id="certificates"
      className="cert-section"
    >
      <h4>CERTIFICATIONS</h4>

      <h2>My Certifications</h2>

      <Swiper
        modules={[
          Autoplay,
          Navigation,
          Pagination,
        ]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {certs.map((cert, index) => (
          <SwiperSlide key={index}>
            <div className="cert-card">
              <h3>{cert}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Certifications;