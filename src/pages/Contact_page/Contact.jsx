/* 8. pages/Contact.js */
import React from 'react';
import ContactComponent from '../../components/contact/Contact_con'
import Footer from '../../components/Footer/Footer';
function Contact() {
  return (
    <div className="contact_page">
      <ContactComponent/>
      <Footer/>
    </div>
  );
}

export default Contact;