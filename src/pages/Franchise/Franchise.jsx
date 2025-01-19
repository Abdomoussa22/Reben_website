import React from "react";
import "./Franchise.css"; // ملف CSS للتنسيق
import FranchiseImage from "../../images/franchise/2.jpeg"; // صورة تمثيلية
import BarcodeImage from "../../images/franchise/barcode.jpeg"; // صورة الباركود
import Footer from "../../components/Footer/Footer";

const Franchise = () => {
  return (
    <>
      <section className="franchise-section">
        {/* العنوان الرئيسي */}
        <div className="franchise-header">
          <h1 className="franchise-title">
            اكتشفوا عالم من الفرص مع محطات ريبن!
          </h1>
          <p className="franchise-description">
            يسرنا أن نقدم فرص الامتياز التجاري لمن يرغب في الإنضمام إلى علامة تجارية عنوانها التميز والابتكار في صناعة الوقود. إذا عندك الرؤية والطموح للقيادة، هذي فرصتك لإمتلاك جزء من علامة تجارية ناجحة. اكشف إمكانيات النجاح وانضم لنا لإعادة تعريف مستقبل الوقود!
          </p>
        </div>

        {/* الخدمات والإيجابيات */}
        <div className="franchise-details d-flex justify-content-around flex-wrap mb-5">
          {/* قسم خدمات الدعم */}
          <div className="franchise-support">
            <h2 className="section-title">خدمات الدعم لأصحاب الامتياز</h2>
            <ul className="support-list">
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

          {/* قسم إيجابيات الامتياز التجاري */}
          <div className="franchise-advantages">
            <h2 className="section-title">إيجابيات نظام الامتياز التجاري</h2>
            <ul className="advantages-list">
              <li>تحسين الأداء للكيانات القائمة من خلال تطبيق نموذج الامتياز التجاري.</li>
              <li>نقل الخبرة من فريق ريبن للكيانات الجديدة.</li>
              <li>الاستفادة من قاعدة العملاء القائمة والخدمات الإضافية مثل تطبيق ريبن.</li>
              <li>تقليل المخاطر للبدء بنشاط تجاري جديد.</li>
              <li>نظام محوكم ومطابق لاشتراطات برنامج طموح من الهيئة العامة للمنشآت.</li>
            </ul>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="franchise-content container">
          {/* صورة تمثيلية */}
          <div className="franchise-image-container">
            <img src={FranchiseImage} alt="فرصة الامتياز التجاري" className="franchise-image" />
          </div>

          {/* الباركود والرابط */}
          <div className="franchise-info">
            <div className="barcode-container">
              <img src={BarcodeImage} alt="باركود الامتياز التجاري" className="barcode-image" />
              <p>امسح الباركود لاكتشاف المزيد عن فرص الامتياز التجاري!</p>
            </div>
            <a
              href="https://franchisecenter.sa/ar/opportunities/rybn"
              className="franchise-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              اكتشف المزيد
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Franchise;
