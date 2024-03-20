import React from "react";
import "./Gallery.css";
import img from "./portfolio/img1.jpg";
function Gallery() {
  return (
    <section id="gallery">
    <div className="gallery">
      <div className="title">
        <h2>GALLERY</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias?
        </p>
      </div>
      <div class="container-sam">
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={img} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={img} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={img} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
      </div>
      <div class="container-sam">
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={img} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={img} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={img} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
      </div>
      <div class="container-sam">
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={img} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={img} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={img} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Gallery;
