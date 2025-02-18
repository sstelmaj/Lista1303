import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import imagen1 from "../assets/imagen1.jpeg";
import imagen2 from "../assets/imagen2.jpeg";
import imagen3 from "../assets/imagen3.jpeg";
import imagen4 from "../assets/imagen4.jpeg";
import imagen5 from "../assets/imagen5.jpeg";
import imagen6 from "../assets/imagen6.jpeg";

const images = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6];

export default function SidebarCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 4; // Cantidad de imágenes visibles

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 w-48 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center p-4">
      <button onClick={prevImage} className="mb-2 text-white">
        <ChevronLeft size={24} />
      </button>

      <div className="flex gap-2 overflow-hidden w-40">
        {Array.from({ length: visibleImages }).map((_, index) => {
          const imgIndex = (currentIndex + index) % images.length;
          return (
            <img
              key={imgIndex}
              src={images[imgIndex]}
              alt="carousel"
              className="carousel-image"
            />
          );
        })}
      </div>

      <button onClick={nextImage} className="mt-2 text-white">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

