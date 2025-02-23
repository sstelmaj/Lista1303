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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false); // Para detectar el deslizamiento

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
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
    beforeChange: () => {
      setIsDragging(true); // El usuario está comenzando a deslizar
    },
    afterChange: () => {
      setIsDragging(false); // El deslizamiento ha terminado
    }
  };

  // Función para manejar el clic en la imagen
  const handleImageClick = (image) => {
    if (!isDragging) { // Solo abre el modal si no se está deslizando
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="slider-container w-300 mx-auto mt-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`carousel-${index}`}
              className="w-full h-70 rounded-lg object-cover border-4 border-black cursor-pointer"
              onClick={() => handleImageClick(image)} // Solo abre el modal si no se está deslizando
            />
          </div>
        ))}
      </Slider>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg relative">
            {/* Botón de cierre con fondo blanco circular */}
            <button
              className="absolute top-4 right-4 text-black text-4xl font-bold bg-white rounded-full p-2 shadow-md border-4 border-black cursor-pointer"
              onClick={closeModal}
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="full-size"
              className="max-w-400 max-h-200 rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
