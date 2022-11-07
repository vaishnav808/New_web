import React from "react";
import "../App.css"
import "./Slides.css"

const Slides = () =>{
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="slideimg" src="./img/1.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img id="slideimg" src="./img/2.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img id="slideimg" src="./img/3.jpg" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    );
};

export default Slides;