import React from "react";
import "./Testimonials.css";
import img1 from "./portfolio-1/img1.jpg";
function Testimonials() {
  return (
    <div className="testimonails">
      <div className="test-title mb-2">
        <h2>WHAT OUR CLIENTS SAY</h2>
      </div>

      <div className="testi-content mt-5">
      <div class="container-test">
          <img src={img1} alt="" />
          <div className="testi-text">

          <p> ""Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium necessitatibus sunt dignissimos ratione voluptatem. Pariatur?""</p>
          <p> <span>Rebecca Flex.</span> </p>
          </div>
        </div>

        <div class="container-test">
          <img src={img1} alt="" />
          <div className="testi-text">

          <p> ""Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium necessitatibus sunt dignissimos ratione voluptatem. Pariatur?""</p>
          <p> <span>Rebecca Flex.</span> </p>
          </div>
        </div>
        <div class="container-test">
          <img src={img1} alt="" />
          <div className="testi-text">

          <p> ""Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium necessitatibus sunt dignissimos ratione voluptatem. Pariatur?""</p>
          <p> <span>Rebecca Flex.</span> </p>
          </div>
        </div>
      </div>
      <div className="testi-content">
      <div class="container-test">
          <img src={img1} alt="" />
          <div className="testi-text">

          <p> ""Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium necessitatibus sunt dignissimos ratione voluptatem. Pariatur?""</p>
          <p> <span>Rebecca Flex.</span> </p>
          </div>
        </div>

        <div class="container-test">
          <img src={img1} alt="" />
          <div className="testi-text">

          <p> ""Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium necessitatibus sunt dignissimos ratione voluptatem. Pariatur?""</p>
          <p> <span>Rebecca Flex.</span> </p>
          </div>
        </div>
        <div class="container-test">
          <img src={img1} alt="" />
          <div className="testi-text">

          <p> ""Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium necessitatibus sunt dignissimos ratione voluptatem. Pariatur?""</p>
          <p> <span>Rebecca Flex.</span> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
