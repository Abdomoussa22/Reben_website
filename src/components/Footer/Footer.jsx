import React from "react";
import "./Footer.css";
import badge1 from "../../images/imagesrebn/logo.jpeg";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { BsTwitterX, BsSnapchat } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { RiGooglePlayLine } from "react-icons/ri";
import { Slide } from "react-awesome-reveal";
const Footer = () => {
  return (
    <Slide direction="down" delay={200} duration={1000}>
      <footer className="footer">
        <div className="footer-container container m-auto">
          {/* قسم التواصل معنا */}
          <div className="footer-section">
            <h3>تواصل معنا</h3>
            <p> المملكة العربية السعودية, الرياض 11497 حي المروة,</p>
            <p> شارع الصحراء المغربية</p>
            <p>الرمز البريدي 12411، المملكة العربية السعودية</p>
            <p>
              خدمة العملاء: <a href="tel:920004648">920004648</a>
            </p>
            <p>
              البريد الإلكتروني:{" "}
              <a href="mailto:reben@msaken-almejdl.com">
                reben@msaken-almejdl.com
              </a>
            </p>
            <p></p>
          </div>

          {/* قسم النشرة البريدية */}
          <div className="footer-section">
            <h3>تابع مواقع التواصل الخاصه بنا</h3>
            <p>
              ابقَ على اطلاع من خلال تلقي أحدث نشرتنا الإخبارية بما في ذلك جميع
              المعلومات والعروضات والأنشطة المتعلقة بريبن.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="اكتب البريد الإلكتروني"
                required
              />
              <button type="submit">اشترك</button>
            </form>
          </div>

          {/* قسم التطبيقات */}
          <div className="footer-section apps">
            <div className="footer-badges">
              <img src={badge1} alt="Badge 1" loading="lazy" />
            </div>
            <p>يمكنك تحميل تطبيق ريبن على:</p>
            <div className="app-links">
              <div className="d-flex gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.techsoft.bob.reben"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <RiGooglePlayLine />
                  </li>
                </a>
                <a
                  href="https://apps.apple.com/gb/app/%D8%B1%D9%8A%D8%A8%D9%86-reben/id6459054949"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <FaApple />
                  </li>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* الجزء السفلي */}
        <div className="footer-bottom">
          <p>جميع الحقوق محفوظة © ريبن</p>
          <ul className="footer-links">
            <li>
              <a href="#">سياسة الخصوصية</a>
            </li>
            <li>
              <a href="#">سياسة الاستخدام</a>
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61556450964510&mibextid=LQQJ4d"
                target="_blank"
              >
                <TiSocialFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rebenksa?igsh=dG0wYjZsNDU2Ym9l&utm_source=qr"
                target="_blank"
              >
                <SlSocialInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCTGIgKvLqYugikPkDypE3ZQ"
                target="_blank"
              >
                <SlSocialYoutube />
              </a>
            </li>
            <li>
              <a href="https://x.com/rebenksa?s=21" target="_blank">
                <BsTwitterX />
              </a>
            </li>
            <li>
              <a href="https://accounts.snapchat.com/" target="_blank">
                <BsSnapchat />
              </a>
            </li>
          </ul>
        </div>
        <h3 className="my-logo">Designed By Eng/Abdel Hamid Moussa</h3>
      </footer>
    </Slide>
  );
};

export default Footer;
