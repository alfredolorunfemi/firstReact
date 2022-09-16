import React from "react";
import "./CardTwo.css";

function CardTwo() {
  return (
    <>
      <div className="full-container">
        <div className="first-card">
          <div className="card">
            <div className="card-image">
              <img src="./images/01.png" alt="primary production" />
            </div>

            <div className="card-content">
              <div className="card-title">
                <p>Processing and Mills </p>
              </div>
              <div >
              <img className="card-logo" src="./images/processing.png" alt="processing & mills" />
            </div>
              <div>
                <p className="description">
                 AgroMall understands the importance of post-harvest value addition to the creation of prpsperity. Hence, we support processing and milling of tomato, mango and rice.
                </p>
              </div>
            </div>

            <div className="btn">
              <button>
                <a>Read more</a>
              </button>
            </div>
          </div>
        </div>

        <div className="second-card">
          <div className="card">
            <div className="card-image">
              <img src="./images/02.png" alt="primary production" />
            </div>

            <div className="card-content"></div>
            <div className="card-title">
              <p>Dairy Development </p>
            </div>
            <div >
              <img className="card-logo" src="./images/dairy.png" alt="dairy development" />
            </div>
            <div>
              <p className="description">
                AgroMall is developing capabilities to support forage development, herd management and milk production using integrated and small-holder out grower models.
              </p>
            </div>

            <div className="btn">
              <button>
                <a>Read more</a>
              </button>
            </div>
          </div>
        </div>

        <div className="third-card">
          <div className="card">
            <div className="card-image">
              <img src="./images/03.png" alt="primary production" />
            </div>

            <div className="card-content">
              <div className="card-title">
                <p>Education </p>
              </div>
              <div >
              <img className="card-logo" src="./images/education.png" alt="education" />
            </div>
              <div>
                <p className="description">
                  Improving research and innovation in Agriculture is at the core of our outlook. Our development of digital agriculture hubs and ranch schools is designed to  expose young...
                </p>
              </div>
            </div>

            <div className="btn">
              <button>
                <a>Read more</a>
              </button>
            </div>
          </div>
        </div>

      
      </div>
      <div className="milestone">
              <img src="./images/milestone.png" alt="milestone-image" />
            </div>
    </>
  );
}

export default CardTwo;
