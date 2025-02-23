import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imagen1 from "../assets/imagen1.jpeg";
import imagen2 from "../assets/imagen2.jpeg";
import imagen3 from "../assets/imagen3.jpeg";
import imagen4 from "../assets/imagen4.jpeg";
import imagen5 from "../assets/imagen5.jpeg";
import imagen6 from "../assets/imagen6.jpeg";

const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6];

export default function SidebarCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };

  return (
    <div className="slider-container w-400 mx-auto mt-100">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`carousel-${index}`} className="w-125 h-70 rounded-lg object-cover border-4 border-black" />
          </div>
        ))}
      </Slider>
    </div>
  );
}