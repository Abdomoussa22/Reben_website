import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Map.css";

const Map = () => {
  return (
    <Fade
    delay={400}
    duration={1500} 
    >
    <section className="container mt-5">
      <h3>الخريطة التفاعلية</h3>
    
      <div className="map-container">
        <iframe
        title="map_reben"
          src="https://www.google.com/maps/d/embed?mid=1JxX-c70ViNQ3BHG5L9pD1mbvsVMoFO0&ehbc=2E312F"
          width="100%"
          height="500"
          style={{ border: "none" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
       
     
    </section>
    </Fade>
  );
};

export default Map;
