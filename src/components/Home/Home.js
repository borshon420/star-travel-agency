import React from "react";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="header-section">
        <h1>
          WE TRAVEL <span>NOT TO ESCAPE LIFE</span>
          <br />
          BUT FOR LIFE <span>NOT TO ESCAPE US</span>
        </h1>
      </div>
      <Services></Services>
    </div>
  );
};

export default Home;
