import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'



const Worksandproject = () => {
        useEffect(()=> {
        AOS.init({duration: 3000});
        }, []);

  return (
    <>
      <section>
        <div className="m-5" data-aos="slide-up">
          <div >
          <span  className='rounded colorBlueText colorBlue p-2 fw-semibold'>
            🔗 Portfólio
          </span>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <span className="h1 text-light fw-semibold">
                Works and projects
              </span>
            </div>
            <div className="col-lg-6 gap-2">
              <button className="btn colorBlueText borderColor me-3">
                <i class="bi bi-filetype-html">html</i>
                <i class="bi bi-filetype-css">css</i>
              </button>
              <button className="btn colorBlueText borderColor me-3">
                <i class="bi bi-filetype-js"></i> JavaScript
              </button>
              <button className="btn colorBlueText borderColor me-3">
                <i class="bi bi-filetype-jsx"></i> React
              </button>
              <button className="btn colorBlueText borderColor me-3">
                Angular
              </button>
            </div>
          </div>
          <div className="row">
            <div>
              <div>
                <br />
                <br />
                <div
                  className="card bg-transparent borderColor"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body text-light">
                    <h5 className="card-title fw-semibold">Weather App</h5>
                    <p className="card-text">
                      My weather application delivers up-to-date weather
                      forecasts and real-time information in an easily
                      accessible format. Users can explore current weather
                      conditions, including temperature, humidity, wind speed,
                      and more, for their current location or any searched
                      location globally. Using api and React Js
                    </p>
                    <p className="card-text">
                      <small className="btn text-body-secondary">
                        <span className="p-2 rounded colorBlueText borderColor">
                          View Live
                        </span>
                      </small>
                    </p>
                  </div>
                  <img
                    src="../src/assets/Surface Pro 8 - 4.png"
                    className="card-img-bottom"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Worksandproject;
