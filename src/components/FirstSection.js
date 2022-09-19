import React from "react";
// import { BsDashLg } from "react-icons/fa";
import "./FirstSection.css";

function FirstSection() {
  return (
    <>
      <div className="firstSectionStyle">
        <div className="columnText">
          <div className="firstText">
           
            <h1 className="people">People</h1>
            <h1 className="produce">Produce</h1>
            <h1 className="prosper">
              Prosper<span className="ity">ity</span>
            </h1>
       
          </div>

          <div className="paragraphText">
            <div className="paragraghAndImage">
              <p className="firstParagragh">For other actors</p>
              <img
                className="peopleImage"
                src="./images/people.png"
                alt="stock"
              />
            </div>
            <div className="animated-text">
            <div className="line">
            <p>Our work improves the flow of commerce and</p>
            </div>
            <div className="line">
            <p>conversion of opportunity by connection areas</p>
            </div>
            <div className="line">
            <p>of agricultural value chains</p>
            </div>
            
            </div>
          </div>
        </div>

        <div>
          <img
            className="firstImage"
            src="./images/firstImage.png"
            alt="stock"
          />
        </div>
      </div>
    </>
  );
}

export default FirstSection;
