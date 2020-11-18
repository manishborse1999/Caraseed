import React from "react";
import "./css/contentOne.css";


const ContentOne = () => {
  return (
    <div className="contentOne">
      <div className="contentOne__rowOne">
        <div className="contentOne__rowOneData">
          <h3>Higher Forecast accuracy, Better sales management:</h3>
          <p>
            Apart from traditional forecasting techniques with an accuracy of up
            to 60 to 65 %, Justin’s a breakthrough in the arena of AI
            forecasting fields with an accuracy of more than 90%. It uses
            recurrent neural networks conventionally known as RNN in the AI
            field along with reinforcement learning. In tech agnostic words,
            Justin keeps learning from its prior forecasting blunders even at
            the peak of exactness at 90%. That means efficiency number over
            sales management keeps improving and the chances of any uncalculated
            risks get lower and lower with every projection. Our advance bot can
            be scaled at any level according to your sales pattern. That means
            whether you own a whole manufacturing unit, chain of retailing
            branches, or even a single retail store, Justin with the same
            accuracy at any level can provide you an estimation by calculating
            any factor that can cause variation in any manner whatsoever. It
            makes sure the data hits the maximum accuracy so either if you are a
            manufacturing unit, or ordering it for your retailing, the stock
            never gets piled up thus increasing your efficiency, conserving you
            a lot of resources and workforce. You can also designate for the
            time; an analysis is required for i.e. if you are producing at a
            mass level such as manufacturing units for a whole month or if you
            need data on a daily production basis, just ask our smart pal Justin
            and by the end of the day you will be amazed of the AI magic it
            holds within.
          </p>
          <button>Learn More</button>
        </div>
        {/* <div className="content__rowOneImage">
          <img src={logo} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default ContentOne;
