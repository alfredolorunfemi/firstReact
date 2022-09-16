import React from "react";
import "./Card.css";

function Card() {
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
                <p>Primary Production </p>
              </div>
              <div >
              <img className="card-logo" src="./images/primary.png" alt="primary production" />
            </div>
              <div>
                <p className="description">
                  We enhance yield outcomes in primary agricultural production,
                  through well-structured and organized support such as farm and
                  farmer management, mechanization and irrigation for small and
                  large out grower schemes
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
              <p>Agri Business </p>
            </div>
            <div >
              <img className="card-logo" src="./images/agribusiness.png" alt="agribusiness" />
            </div>
            <div>
              <p className="description">
                Our agribusiness services are geared towards supporting and
                enhancing activities such as aggregation and logistics that
                connect agricultural intermediaries and value chain
                participants.
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
                  <p>Financial Services </p>
                </div>
                <div >
              <img className="card-logo" src="./images/financialservices.png" alt="financialservices" />
            </div>
                <div>
                  <p className="description">
                    AgroMall is keen on creating inclusive prosperity by
                    improving financial inclusion. We use our close interaction
                    with farmers and other value chain participants to
                    facilitate the distribution of financial services in
                    agriculture.
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

    </>
  );
}

export default Card;
