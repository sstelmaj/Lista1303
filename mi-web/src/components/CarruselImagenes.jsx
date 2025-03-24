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

import imagen7 from "../assets/imagen3-3(1).jpeg"
import imagen8 from "../assets/imagen3-3(2).jpeg"
import imagen9 from "../assets/imagen3-3(3).jpeg"
import imagen10 from "../assets/imagen3-3(4).jpeg"
import imagen11 from "../assets/imagen3-3(5).jpeg"
import imagen12 from "../assets/imagen3-3(6).jpeg"
import imagen13 from "../assets/imagen3-3(7).jpeg"
import imagen14 from "../assets/imagen3-3(8).jpeg"

import imagen15 from "../assets/foto(1)18-03.jpeg"
import imagen16 from "../assets/foto(2)18-03.jpeg"
import imagen17 from "../assets/foto(3)18-03.jpeg"
import imagen18 from "../assets/foto(4)18-03.jpeg"
import imagen19 from "../assets/foto(5)18-03.jpeg"
import imagen20 from "../assets/foto(6)18-03.jpeg"

import imagen21 from "../assets/imagen24-03(2).jpeg"
import imagen22 from "../assets/imagen24-03.jpeg"

const images = [imagen22, imagen21, imagen15, imagen16, imagen17, imagen18, imagen19, imagen20, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13, imagen14, imagen1, imagen2, imagen3, imagen4, imagen5, imagen6];

export default function SidebarCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,  // En pantallas grandes se mostrarán 5 imágenes
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280, // Pantallas grandes
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleImageClick = (image) => {
    if (!isDragging) {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="slider-container w-full max-w-4xl mx-auto p-4 sm:p-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <div className="relative w-full p-4 bg-gray-900 rounded-xl shadow-lg">
              <img
                src={image}
                alt={`carousel-${index}`}
                className="w-full h-48 lg:h-64 rounded-lg object-cover border-2 border-gray-700 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => handleImageClick(image)}
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg relative max-w-2xl">
            <button
              className="absolute top-4 right-4 text-black text-2xl font-bold bg-white rounded-full p-2 shadow-md border border-black cursor-pointer"
              onClick={closeModal}
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Imagen"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
