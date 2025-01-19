// 

import React, { useRef } from 'react';
import './contact_con.css';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { Fade } from "react-awesome-reveal";
const ContactComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // استخدام EmailJS لإرسال الرسالة
    emailjs
      .sendForm('service_99jmyfl', 'template_9mq7vzq', form.current, 'MLKfE93FLVL_opnlN')
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset(); // إعادة تعيين الحقول بعد الإرسال
        },
        (error) => {
          alert('Failed to send the message. Please try again later.');
          console.error(error);
        }
      );
  };

  return (
    <>
    <Fade
      delay={300}
      duration={1500} 
    >
      <section id="contact">
        <div className="contact-title">
          <h2>تواصل معنا</h2>
          <h5>
            المملكة العربية السعودية, الرياض 11497
            حي المروة, شارع الصحراء المغربية
          </h5>
        </div>

        <div className="container contact-container">
          {/* خيارات التواصل */}
          <div className="contact-options">
            <article className="contact-option">
              <MdOutlineMail className="contact-option-icon" />
              <h4>Email</h4>
              <h5>reben@msaken-almejdl.com</h5>
              <a href="mailto:reben@msaken-almejdl.com" target="_blank" rel="noopener noreferrer">
                Send a message
              </a>
            </article>
            <article className="contact-option">
              <RiMessengerLine className="contact-option-icon" />
              <h4>Messenger</h4>
              <h5>Reben</h5>
              <a href="https://m.me/177448635462826" target="_blank" rel="noopener noreferrer">
                Send a message
              </a>
            </article>
            <article className="contact-option">
              <BsWhatsapp className="contact-option-icon" />
              <h4>Whatsapp</h4>
              <h5>+966 50 626 7327</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+966506267327"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>

          {/* نموذج الإرسال */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              className="text"
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
      </Fade>
    </>
  );
};

export default ContactComponent;
