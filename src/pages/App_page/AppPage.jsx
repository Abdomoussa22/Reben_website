// import React from "react";
import { FaApple } from "react-icons/fa";
import { RiGooglePlayLine } from "react-icons/ri";
import Img_app1 from "../../images/App/app_howI1.jpg";
import Img_app2 from "../../images/App/2.jpg";
import Img_app3 from "../../images/App/3.jpg";
import Img_app4 from "../../images/App/4.jpg";
import video from '../../images/App/videoApp.m4v';
import Footer from '../../components/Footer/Footer'
import "./AppPage.css";

function AppPage() {
  return (
    <>
    <div className="app-section">
      <div className="app-container">
        {/* المحتوى النصي */}
        <div className="app-content">
          <h2 className="app-title animate__zoomInDown">تطبيق ريبن</h2>
          <p className="app-description">
            اكتشف أفضل خدماتنا واستمتع بتجربة فريدة من خلال تطبيق ريبن.
          </p>
          <div className="app-buttons">
            <a
              className="app-button google"
              href="https://play.google.com/store/apps/details?id=com.techsoft.bob.reben"
              target="_blank"
              rel="noopener noreferrer"
            >
              تحميل التطبيق <RiGooglePlayLine />
            </a>
            <a
              className="app-button apple"
              href="https://apps.apple.com/gb/app/%D8%B1%D9%8A%D8%A8%D9%86-reben/id6459054949"
              target="_blank"
              rel="noopener noreferrer"
            >
              تحميل التطبيق <FaApple />
            </a>
          </div>
        </div>

        {/* صورة التطبيق */}
        <div className="app-image-container">
          <img src={Img_app1} alt="Reben App" className="app-image" />
        </div>
      </div>
    </div>

    <div className="discover-section-reben">
  <div className="discover-container-reben">
    {/* النص الرئيسي */}
    <div className="discover-text-reben">
      <h2 className="discover-title-reben animate__flipInX">اكتشف تطبيق ريبن</h2>
      <p className="discover-description-reben">
        شاهد الفيديو التعريفي واكتشف كيف يمكنك الاستفادة من تطبيق ريبن لتحسين تجربتك.
      </p>
    </div>

    {/* الفيديو التعريفي */}
    <div className="discover-video-reben">
      <video autoPlay loop muted loading="lazy">
        <source src={video} type="video/mp4" />
        المتصفح الخاص بك لا يدعم تشغيل الفيديو.
      </video>
    </div>

    {/* الصور التوضيحية */}
    <div className="discover-images-reben">
      <img src={Img_app2} alt="ميزة التطبيق 1" className="app-image-reben" />
      <img src={Img_app3} alt="ميزة التطبيق 2" className="app-image-reben" />
      <img src={Img_app4} alt="ميزة التطبيق 3" className="app-image-reben" />
    </div>
  </div>
</div>
    <Footer/>
    </>
  );
}

export default AppPage;
