import React from "react";
import "./AboutPage.css"; // ملف CSS للتنسيق
import AboutImage1 from "../../images/project/project-2-1.jpg";
import AboutImage2 from "../../images/project/a2.jpeg";
import AboutImage3 from "../../images/project/a3.jpeg";
import Footer from "../../components/Footer/Footer";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <>
      <section className="about_big_sec">
        <div className="about-section container">
          {/* القسم الأول: مقدمة النص والصورة */}
          <Fade direction="down">
            <div className="about-header d-flex">
              <div className="about-header-text">
                <h1 className="about-title">عنا</h1>
                <p className="about-description">
                  نشأت العلامة وسجلت بالهيئة السعودية للملكية الفكرية في العام
                  2018 م و تطمح ريبن في المشاركة في تطور قطاع محطات الوقود و
                  مراكز الخدمة وتطبيق المعايير و تحسين مستوي الخدمات المقدمة
                  داخل القطاع.
                </p>
              </div>
              <img
                src={AboutImage1}
                alt="محطة وقود"
                className="about-main-image"
              />
            </div>
          </Fade>

          {/* القسم الثاني: تاريخ الشركة والرؤية المستقبلية */}
          <Fade direction="up">
            <div className="about-history d-flex">
              <img
                src={AboutImage2}
                alt="محطة وقود"
                className="about-main-image"
              />
              <div className="data_text">
                <h2 className="section-title">رؤيتنا وأهدافنا</h2>
                <p className="section-text">
                  تضم ريبن عدد (120) من المحطات داخل المملكة بين الفروع العاملة
                  والفروع قيد الإنشاء. بدأت الشركة تطبيق نظام الإمتياز التجاري
                  المطبق من الهيئة العامة للمنشآت وبرنامج طموح. من المخطط أن تضم
                  ريبن أكثر من 200 محطة وقود تحت مظلة الإمتياز التجاري خلال خمس
                  سنوات.
                </p>
              </div>
            </div>
          </Fade>

          {/* القسم الثالث: خدمات الدعم */}
          <div className="about-services d-flex">
            <div className="data_text">
              <h2 className="section-title">خدمات الدعم لأصحاب الامتياز</h2>

              <ul className="services-list">
                <li>الدعم والتدريب لكافة عمليات التشغيل.</li>
                <li>الدعم في إدارة المرافق التجارية.</li>
                <li>الدعم الفني والتقني.</li>
                <li>إدارة العمليات التسويقية والدعائية.</li>
                <li>مراقبة الجودة والمعايير.</li>
                <li>تطوير وسائل البيع مثل تطبيق ريبن ولوحة التحكم.</li>
                <li>الدعم في إدارة المخاطر والأزمات.</li>
                <li>إدارة خدمة العملاء.</li>
              </ul>
            </div>
            <img
              src={AboutImage3}
              alt="محطة وقود"
              className="about-main-image"
            />
          </div>

          {/* القسم الرابع: إيجابيات الامتياز التجاري */}
          <div className="about-advantages">
            <Fade className="section-title" delay={1e-1} cascade damping={1e-1}>
            إيجابيات نظام الامتياز التجاري
            </Fade>
            <ul className="advantages-list">
              <li>
                تحسين الأداء للكيانات القائمة من خلال تطبيق نموذج الامتياز
                التجاري.
              </li>
              <li>نقل الخبرة من فريق ريبن للكيانات الجديدة.</li>
              <li>
                الاستفادة من قاعدة العملاء القائمة والخدمات الإضافية مثل تطبيق
                ريبن.
              </li>
              <li>تقليل المخاطر للبدء بنشاط تجاري جديد.</li>
              <li>
                نظام محوكم ومطابق لاشتراطات برنامج طموح من الهيئة العامة
                للمنشآت.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
