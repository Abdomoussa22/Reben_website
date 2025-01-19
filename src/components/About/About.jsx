import React from "react";
import styles from "./About.css";
import Img1 from "../../images/backgrounds/about1.jpeg";
import Img2 from "../../images/backgrounds/about2.jpeg";
import { Slide } from "react-awesome-reveal";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-title">
          <h2 className="animate__backInDown">عنا</h2>
        </div>
        <Slide direction="up">
          <article className="mb-5">
            <div className="about-data container">
              <div className="about-img-con">
                <img src={Img1} alt="reben-photo" loading="lazy"/>
              </div>
              <div className="about-text-con">
                <h3>شركة مساكن المجدل للخدمات البترولية ريبن</h3>
                <p>
                  تعمل الشركة في إدارة وتشغيل محطات الوقود طبقا لمعايير وزارة
                  الشؤون البلدية والقروية ولنا خبرة وطاقة هائلة لتقديم خدمات
                  مميزة وإبتكارات جديدة من خلال محطات وقود ريبن , وتطبيق معايير
                  الجودة العالمية والمحافظة علي البيئة. كما تعمل الشركة في
                  الأنشطة المكملة مثل الكوفي شوب و الماركت و خدمات السيارات.
                </p>
              </div>
            </div>
          </article>
        </Slide>

        <Slide direction="down">
          <article>
            <div className="about-data container">
              <div className="about-text-con">
                <h3>كلمة المدير العام</h3>
                <p>
                  لا شك أن فطنة فريق القيادة في الشركة، مدعومة من قوة وديناميكية
                  الاقتصاد السعودي وبثقة تامة في الأعضاء المؤسسين وقوتنا
                  العاملة. إننا نتقدم بالشكر الجزيل لعملائنا على إعطائنا الفرصة
                  للتتعاون وعن وجود مثل هذه الثقة في شركة مساكن المجدل للخدمات
                  البترولية (ريبن), و نقدر أيضا جهود جميع أصحاب المصلحة لدينا
                  والذين استجابوا بسرعة وكفاءة لطلباتنا. من دون هذا نحن لا يمكن
                  أن نكون قادرين على الوفاء بإلتزاماتنا تجاة عملائنا . وأخيرا،
                  وليس آخرا، الكلمة الدافئة بفضل موظفينا: هم الأساس وركائز
                  نجاحنا، الذين أظهروا الرعاية والمسؤولية في كل منعطف وهذا مكننا
                  من أن نصبح في غضون فترة قليلة واحدة من شركات إدارة وتشغيل
                  محطات الوقود الرائدة في المملكة..
                </p>
              </div>

              <div className="about-img-con">
                <img src={Img2} alt="reben-photo" />
              </div>
            </div>
          </article>
        </Slide>
      </section>
    </>
  );
};

export default About;
