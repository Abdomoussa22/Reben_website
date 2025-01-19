import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import IMG1 from "../../images/team/team-1.jpg";
import IMG2 from "../../images/team/team-2.jpg";
import IMG3 from "../../images/team/team-3.jpg";
import IMG4 from "../../images/team/team5.jpg";
import IMG5 from "../../images/team/market.jpeg";
import "./Cards.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Cards = () => {
  const data = [
    {
      id: 4,
      image: IMG3,
      title: "الخدمات البترولية",
    },
    {
      id: 3,
      image: IMG4,
      title: "النقليات",
    },
    {
      id: 1,
      image: IMG5,
      title: "أسواق ريبن",
    },
    {
      id: 2,
      image: IMG2,
      title: "مايلز كوفي",
    },
    {
      id: 1,
      image: IMG1,
      title: "كيو واش",
    },
  ];

  return (
    <section id="portfolio">
      <div className="title-sec text-center mt-5 mb-5">
        <h2>خدماتانا</h2>
        <Fade className="h5" delay={1e-1} cascade damping={1e-1}>
      لدينا في ريبن افضل الخدمات البترولية
      </Fade>
      </div>
  
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="portfolio-slider"
      >
        {data.map(({ id, image, title }) => (
          <SwiperSlide key={id}>
            <article className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <div className="text-bt">
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <Link to="/contact" className="btn-contact btn">
                    تواصل معنا
                  </Link>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Cards;
