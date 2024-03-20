import React from "react";
import "./about.css";
import img from "./img.jpg";
function about() {
  return (
    <section id="about">
    <div className="about" >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={img} alt="" />
          </div>

          <div className="col-md-6 left-cont ">
            <h2 className="about-text">ABOUT</h2>
            <span></span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus
              libero vitae dolores similique delectus nemo aliquid eius soluta
              minima?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facilis repellat omnis fuga optio mollitia nulla dolore sunt
              nostrum sint necessitatibus?
            </p>
              <h3 >Why Choose Us</h3>
            <div className="choose">
              <div className="col-lg-6 col-sm-6">
                <ul className="list-items">
                  <li className="items">lorem ipsum</li>
                  <li className="items"> perspiciatis illum</li>
                  <li className="items"> quaerat dignissimos</li>
                  <li className="items"> optio mollitia?</li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6">
                <ul className="list-items">
                  <li className="items">lips umorem </li>
                  <li className="items">  perspiciatis </li>
                  <li className="items">  dignissimos quaerat</li>
                  <li className="items">  optio tia?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default about;
