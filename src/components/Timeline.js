import React from "react";
import "./css/timeline.css";
const Timeline = () => {
  return (
    <div className="timeline" id='timeline'>
      <h3>Proven results in weeks, not years</h3>
      <div className="timeline__content">
        <div className="timeline__col1">
          <div className="timeline__col1row1">
            <p>Exec. Briefing</p>
          </div>
          <div className="timeline__col1row2">2 hours</div>
        </div>
        <div className="timeline__col2">
          <div className="timeline__col2row1">
            <p>Technology Accessment</p>
          </div>
          <div className="timeline__col2row2">2-3 days</div>
        </div>
        <div className="timeline__col3">
          <div className="timeline__col3row1">
            <p>Productional Trial</p>
          </div>
          <div className="timeline__col3row2">8-12 weeks</div>
        </div>
        <div className="timeline__col4">
          <div className="timeline__col4row1">
            <p>Productional Trial</p>
          </div>
          <div className="timeline__col4row2">3-6 months</div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
