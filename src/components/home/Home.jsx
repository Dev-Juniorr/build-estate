import React from "react";
import "./Home.css";
import google from "..//..//img/google.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="img">
          <h3>
            Let's find a home <br /> that's perfect for you
          </h3>
        </div>
        <div className="logos">
          <img src={google} alt="Google" />
          <img src={google} alt="Google" />
          <img src={google} alt="Google" />
        </div>
      </div>
    </>
  );
};

export default Home;
