import React from "react";
import { FaGasPump, FaTruck, FaPaintBrush, FaShoppingBasket, FaCoffee } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const data = [
    {
      id: 1,
      icon: <FaGasPump />,
      number: 60,
      title: "خدمات بترولية",
    },
    {
      id: 2,
      icon: <FaTruck />,
      number: 50,
      title: "نقلات",
    },
    {
      id: 3,
      icon: <FaPaintBrush />,
      number: 5,
      title: "كيو واش",
    },
    {
      id: 4,
      icon: <FaShoppingBasket />,
      number: 2,
      title: "ريبن ماركت",
    },
    {
      id: 5,
      icon: <FaCoffee />,
      number: 5,
      title: "مايلز كوفي",
    },
  ];

  return (
   
          <section className="services-section mt-5 mb-5">
      <div className="container services-icon d-flex justify-content-center align-items-center">
        {data.map(({ id, icon, number, title }) => (
          <div key={id} className="service-item text-center">
            <div className="icon">{icon}</div>
            <h3>{number}</h3>
            <p>{title}</p>
          </div>
        ))}
      </div>
    </section>
  

  )
};

export default Services;
