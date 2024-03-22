import React from "react";
import "./Gallery.css";
import img from "./portfolio/img1.jpg";
import gallery2 from "../imgs/gallery-2.jpg";
import gallery3 from "../imgs/gallery-3.jpg";
import gallery4 from "../imgs/gallery-4.jpg";
import gallery5 from "../imgs/gallery-5.jpg";
import gallery6 from "../imgs/gallery-6.jpg";
import gallery7 from "../imgs/gallery-7.jpg";
import gallery8 from "../imgs/gallery-8.jpg";
import gallery9 from "../imgs/gallery-9.jpg";
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
          <img src={gallery2} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={gallery3} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
      </div>
      <div class="container-sam">
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={gallery4} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={gallery5} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={gallery6} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
      </div>
      <div class="container-sam">
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={gallery7} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={gallery8} alt="" />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title">PROJECT TITLE</h3>
          </div>
        </div>
        <div class="content ">
          <div class="content-overlay"></div>
          <img src={gallery9} alt="" />
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
