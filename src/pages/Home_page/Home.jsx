import React from "react";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Services from "../../components/Services/Services";
import About from "../../components/About/About";
import Contact from "../../components/contact/Contact_con";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Map/Map";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Cards />
      <Services />
      <About />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
