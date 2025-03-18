import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videos = [

  //Video 18/03/25
  {
    id: 2,
    title: "Utilización de recursos",
    thumbnail: "https://img.youtube.com/vi/YYZP2KKXqAw/hqdefault.jpg",
    url: "https://www.youtube.com/embed/YYZP2KKXqAw"
  },

  // ---------------------------------------------------------------------------------------

  //Videos 14/03/25
  {
    id: 3,
    title: "El impacto de cada decisión",
    thumbnail: "https://img.youtube.com/vi/4gofTFdpvY4/hqdefault.jpg",
    url: "https://www.youtube.com/embed/4gofTFdpvY4"
  },
  {
    id: 4,
    title: "El gobierno debe ser claro con el ciudadano ",
    thumbnail: "https://img.youtube.com/vi/TlkdSJDleh8/hqdefault.jpg",
    url: "https://www.youtube.com/embed/TlkdSJDleh8"
  },
  {
    id: 5,
    title: "El rol de la intendencia ",
    thumbnail: "https://img.youtube.com/vi/0kZyzj3bbEM/hqdefault.jpg",
    url: "https://www.youtube.com/embed/0kZyzj3bbEM"
  },
  {
    id: 6,
    title: "La intendencia como generadora de oportunidades",
    thumbnail: "https://img.youtube.com/vi/D_9qDzWu5RQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/D_9qDzWu5RQ"
  },
  {
    id: 7,
    title: "La importancia de los municipios",
    thumbnail: "https://img.youtube.com/vi/DwPFxriRNbQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/DwPFxriRNbQ"
  },
  

  // ---------------------------------------------------------------------------------------

  //Videos 10/03/25
  {
    id: 8,
    title: "Intendente Mario Diaz",
    thumbnail: "https://img.youtube.com/vi/Kc3FJwpFKHA/hqdefault.jpg",
    url: "https://www.youtube.com/embed/Kc3FJwpFKHA"
  },
  {
    id: 9,
    title: "Nuestro proyecto político",
    thumbnail: "https://img.youtube.com/vi/f1fqZ1Y8Mpc/hqdefault.jpg",
    url: "https://www.youtube.com/embed/f1fqZ1Y8Mpc"
  },
  {
    id: 10,
    title: "¿Dónde van los fondos de Paysandú?",
    thumbnail: "https://img.youtube.com/vi/7Ad-u2gP9UM/hqdefault.jpg",
    url: "https://www.youtube.com/embed/7Ad-u2gP9UM"
  },
  {
    id: 11,
    title: "¿Qué necesitamos los sanduceros?",
    thumbnail: "https://img.youtube.com/vi/dkdUFePIOsI/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dkdUFePIOsI"
  },
  {
    id: 12,
    title: "¿Qué queremos hacer?",
    thumbnail: "https://img.youtube.com/vi/lnZ--IB8O_8/hqdefault.jpg",
    url: "https://www.youtube.com/embed/lnZ--IB8O_8"
  },
  // ---------------------------------------------------------------------------------------

  {
    id: 13,
    title: "¿Que necesita Paysandú?",
    thumbnail: "https://img.youtube.com/vi/yWqFxp_6jFo/hqdefault.jpg",
    url: "https://www.youtube.com/embed/yWqFxp_6jFo?si=75dZxH4X9Qw7wePB"
  },
  {
    id: 14,
    title: "Presupuesto participativo",
    thumbnail: "https://img.youtube.com/vi/X6LRoHMp7ww/hqdefault.jpg",
    url: "https://www.youtube.com/embed/X6LRoHMp7ww"
  },
  
  {
    id: 15,
    title: "Video 1",
    thumbnail: "https://img.youtube.com/vi/QqYSqYv--Oo/hqdefault.jpg",
    url: "https://www.youtube.com/embed/QqYSqYv--Oo?si=hReQCoBDlAa1YQI1"
  },
  {
    id: 16,
    title: "Video 2",
    thumbnail: "https://img.youtube.com/vi/xZLI0W_hYT8/hqdefault.jpg",
    url: "https://www.youtube.com/embed/xZLI0W_hYT8?si=wKhKHLnvgsrKLIhL"
  },
  {
    id: 17,
    title: "Video 3",
    thumbnail: "https://img.youtube.com/vi/5eO6dLjiGXU/hqdefault.jpg",
    url: "https://www.youtube.com/embed/5eO6dLjiGXU?si=wbW20z-IS3RSnzxb"
  }
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // En pantallas grandes se mostrarán 5 videos
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280, // Pantallas grandes
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    beforeChange: () => {
      setIsDragging(true);
    },
    afterChange: () => {
      setIsDragging(false);
    },
  };

  const handleVideoClick = (videoUrl) => {
    if (!isDragging) {
      setSelectedVideo(videoUrl);
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="slider-container w-full max-w-4xl mx-auto p-4 sm:p-10">
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id} className="px-2">
            <div className="relative w-full p-4 bg-gray-900 rounded-xl shadow-lg">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 lg:h-64 rounded-lg object-cover border-2 border-gray-700 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => handleVideoClick(video.url)}
              />
              <p className="text-center text-white mt-2 text-sm sm:text-base">
                {video.title}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 rounded-lg relative w-full max-w-2xl">
            <button
              className="absolute top-2 right-2 text-black text-2xl bg-white rounded-full p-2 border border-black cursor-pointer"
              onClick={closeModal}
            >
              ✖
            </button>
            <div className="w-full aspect-video">
              <iframe
                src={selectedVideo}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <button
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}