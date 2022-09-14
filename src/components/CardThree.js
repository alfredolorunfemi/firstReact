import React from "react";
import "./CardThree.css";

function CardThree() {
  return (
    <>
      <div className="full-container">
        <div className="first-card">
          <div className="card3">
            <div className="card-pic">
              <img src="./images/04.jpg" alt="forage" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <p>Our Work with Forage </p>
              </div>
              <div>
                <p className="description">
                  We are committed to boosting animal nutrition and milk
                  production in Africa and are supporting this through the
                  supply of best forege
                </p>
              </div>
            </div>

            <div className="btn">
              <button>
                <a>Read more</a>
              </button>
            </div>
            <div className="LastCard">
              <img
                src="./images/01.png"
                alt="primary production"
                className="LastCardImage"
              />
            </div>
          </div>
        </div>

       <div className="first-card">
          <div className="card3">
            <div className="card-pic">
              <img src="./images/agronomy.jpg" alt="digital-agronomy" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <p>AgroMall Digital Agricultural Platform (ADAP) </p>
              </div>
              <div>
                <p className="description">
                 AgroMall developed and uses ADAP-The AgroMall Digital Agricultural Platform, to deliver agronomy and extension information to farm... 
                </p>
              </div>
            </div>

            <div className="btn">
              <button>
                <a>Read more</a>
              </button>
            </div>
            <div className="LastCard">
              <img
                src="./images/02.png"
                alt="primary production"
                className="LastCardImage"
              />
            </div>
          </div>
        </div>

        <div className="first-card">
          <div className="card3">
            <div className="card-pic">
              <img src="./images/community_card.jpg" alt="community" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <p>Community </p>
              </div>
              <div>
                <p className="description">
           AgroMall values youth and community. Weare creating connected and thriving agricultural communities where young people play pivotal roles.
                </p>
              </div>
            </div>

            <div className="btn">
              <button>
                <a>Read more</a>
              </button>
            </div>
            <div className="LastCard">
              <img
                src="./images/01.png"
                alt="primary production"
                className="LastCardImage"
              />
            </div>
          </div>
        </div>

        <div className="first-card">
          <div className="card3">
            <div className="card-pic">
              <img src="./images/banner_300.jpg" alt="sector" />
            </div>
            <div className="card-content">
              <div className="card-title">
                <p> Sector</p>
              </div>
              <div>
                <p className="description">
                Our focus is keenly on areas such as finance, technology, delivering effective agronomy and extension support and facilitating value...
                </p>
              </div>
            </div>

            <div className="btn">
              <button>
                <a>Read more</a>
              </button>
            </div>
            <div className="LastCard">
              <img
                src="./images/03.png"
                alt="primary production"
                className="LastCardImage"
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default CardThree;
