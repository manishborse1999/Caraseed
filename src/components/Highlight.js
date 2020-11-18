import React from "react";
import "./css/highlight.css";
import icon1 from '../images/Usability.png'
import icon2 from '../images/Connectivity.png'
import icon3 from '../images/ROI.png'
import icon4 from '../images/Sustainabilty.png' 


const Highlight = () => {
  return (
    <div className="highlight" id="highlight">
      <h2>Key Features</h2>
      <div className="highlight__content">
        <div className="highlight__item">
          <img src={icon1} alt="" />
          <h3>Usability</h3>
          <p>
         Reaching millions of farmers across the globe with simple to
use personal assistant conversational bot. Assists in soil
analysis, high yield, price discovery, weather, logistics and
insurance
          </p>
        </div>
        <div className="highlight__item">
          <img src={icon2} alt="" />
          <h3> Connectivity </h3>
          <p>
        Every stakeholder be it farmer, e-commerce
companies, retailers and vendors will be connected on a
single platform to maximize the profit
          </p>
        </div>
        <div className="highlight__item">
          <img src={icon3} alt="" />
          <h3>ROI</h3>
          <p>
          Highly affordable, scalable for any production arena, ensuring
maximum yields and profit for a very low cost
          </p>
        </div>
        <div className="highlight__item">
          <img src={icon4} alt="" />
          <h3> Sustainability </h3>
          <p>
          A most efficient way of using technology to
transform the farmers to move towards the sustainable
agriculture
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
