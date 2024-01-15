import React, { useEffect, useState } from "react";
import data from "./slider.json";

const Slider = () => {
  const [active, setActive] = useState(1);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      handleSlider("next");
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  const handleSlider = (a) => {
    if (a === "prev") setActive((prev) => (prev === 1 ? (prev = 3) : prev - 1));
    if (a === "next") setActive((prev) => (prev === 3 ? (prev = 1) : prev + 1));
  };

  return (
    <div className="hero_area">
      <section className="slider_section ">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {data.map((item) => (
              <div
                key={item.id}
                className={`carousel-item ${active === item.id ? "active" : ""}`}
                style={
                  show
                    ? { transform: "translateX(0)" }
                    : { transform: "translateX(100%)" }
                }
              >
                <div className="container text-end">
                  <div className="detail-box">
                    <h1>
                      {item.title} <br />
                      {item.title2} <br />
                      {item.title3}
                    </h1>
                    <div className="btn-box d-flex justify-content-end">
                      <a href="" className="btn1">
                        {item.btn1}
                      </a>
                      <a href="" className="btn2">
                        {item.btn2}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel_btn-box">
            <a
              className="carousel-control-prev"
              href="#customCarousel1"
              role="button"
              data-slide="prev"
              onClick={() => handleSlider("prev")}
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#customCarousel1"
              role="button"
              data-slide="next"
              onClick={() => handleSlider("next")}
            >
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;