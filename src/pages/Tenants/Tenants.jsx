import React from "react";
import "./Tenants.css";
import tenants_img from "../../images/tenants/1.jpeg";
import Footer from "../../components/Footer/Footer";
import partners_img1 from "../../images/شركاء النجاح/1.jpeg";
import partners_img2 from "../../images/شركاء النجاح/2.jpeg";
import partners_img3 from "../../images/شركاء النجاح/3.png";
import partners_img4 from "../../images/شركاء النجاح/4.jpg";
import partners_img5 from "../../images/شركاء النجاح/5.jpg";
import partners_img6 from "../../images/شركاء النجاح/6.jpg";
import partners_img7 from "../../images/شركاء النجاح/7.jpeg";
import partners_img8 from "../../images/شركاء النجاح/8.jpeg";
import partners_img9 from "../../images/شركاء النجاح/9.jpg";
import partners_img10 from "../../images/شركاء النجاح/10.jpeg";
import partners_img11 from "../../images/شركاء النجاح/11.jpeg";
import partners_img12 from "../../images/شركاء النجاح/12.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Tenants = () => {
  return (
    <>
      <section className="tenants">
        <h1>المستأجرون</h1>
        <div className="tenants-container container">
          <div className="tenants-text">
            <h3>
              إدارة كبار المستأجرين تعد من الإدارات المهمة في التنظيم الإداري
              لشركة ريبن، و تقوم بمهام تلبية طلبات كبار المستأجرين الخاصة بأعمال
              التأجير في محطات ريبن و تسعير الوحدات بشكل دوري لتتماشى مع متطلبات
              السوق.
            </h3>
          </div>
          <div className="tenants-img">
            <img src={tenants_img} alt="tenants-img" />
          </div>
        </div>
        <div className="info-container">
          <h3 className="info-title">لمزيد من المعلومات</h3>
          <div className="more-info">
            <a
              className="app-button google"
              href="mailto:reben@msaken-almejdl.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              البريد الإلكتروني
            </a>
            <a
              className="app-button google"
              href="tel:920004648"
              target="_blank"
              rel="noopener noreferrer"
            >
              920004648 اتصل بنا
            </a>
          </div>
        </div>
        <div className="partners">
          <h3>شركاء النجاح</h3>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="portfolio-slider"
          >
            <SwiperSlide>
              <div className="partner-item">
                <img src={partners_img1} alt="Partner 1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src={partners_img2} alt="Partner 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src={partners_img3} alt="Partner 3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src={partners_img4} alt="Partner 4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src={partners_img5} alt="Partner 5" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src={partners_img6} alt="Partner 6" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src={partners_img7} alt="Partner 7" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src={partners_img8} alt="Partner 8" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src={partners_img9} alt="Partner 9" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src={partners_img10} alt="Partner 10" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src={partners_img11} alt="Partner 11" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-item">
                <img src={partners_img12} alt="Partner 12" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Tenants;
