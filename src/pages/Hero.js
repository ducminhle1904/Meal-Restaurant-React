import React from "react";
import fb from "../assets/facebook.svg";
import ig from "../assets/instagram.svg";
import tw from "../assets/twitter.svg";
import wa from "../assets/whatsapp.svg";

function Hero() {
  return (
    <section className="home">
      <div className="home_slider">
        <div className="slider_item-wrap">
          <div className="slider_item-text">
            <span className="caption">ENJOY YOUR HEALTHY DELICIOUS MEAL</span>
            <h1>Treat Yourself</h1>
            <a href="#" className="btn">
              Explore now
            </a>
          </div>
        </div>
        <div className="home_slider-bottom">
          <div className="container-fluid">
            <ul>
              <li>
                <a href="#">
                  <img src={fb} alt=""></img>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={ig} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={tw} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={wa} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
