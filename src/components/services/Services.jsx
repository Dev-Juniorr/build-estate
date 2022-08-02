import React from "react";
import "./Services.css";
import { BiMessageAltDetail, BiShieldQuarter, BiPaint, BiUserPin } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="text">
            <p className="color">EHM. SO?</p>
            <h2>What we do</h2>
            <p className="text_info">Full-Service Agents, Modern Technology</p>
          </div>
          <div className="tags">
            <div className="tag">
              <div className="tag_icon">
                <BiMessageAltDetail />
              </div>
              <div className="tag_title">Communication</div>
              <p className="info">
                Single point of contact, in sync with the tools you see, We
                speak your language.
              </p>
            </div>

            <div className="tag">
              <div className="tag_icon">
                <BiShieldQuarter />
              </div>
              <div className="tag_title">Realiability</div>
              <p className="info">
                We keep our promises, provide upfront timelines and bring predictability.
              </p>
            </div>

            <div className="tag">
              <div className="tag_icon">
                <BiPaint />
              </div>
              <div className="tag_title">Quality First</div>
              <p className="info">
                Quality first. All projects are backed by our fanatic support & 100% satisfaction guarantee.
              </p>
            </div>

            <div className="tag">
              <div className="tag_icon">
                <BiUserPin />
              </div>
              <div className="tag_title">Families</div>
              <p className="info">
                Rent a beautiful house for your family. Choose from flats in societies and individual apartments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
