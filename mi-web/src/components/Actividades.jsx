import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import actividad1 from "../assets/actividad1.jpeg";
import actividad2 from "../assets/actividad2.jpeg";
import actividad3 from "../assets/actividad3.jpeg";
import actividad4 from "../assets/actividad4.jpeg";

export default function Actividades() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const actividades = [
    {
      id: 1,
      titulo: "Jornada de militancia",
      fecha: "20, 21 y 22 de Febrero, 2025",
      descripcion: "Un encuentro para conocer la lista y sus propuestas.",
      imagen: actividad1,
    },
    {
      id: 2,
      titulo: "Jornada de militancia",
      fecha: "22 de Febrero, 2025",
      descripcion: "Un encuentro para conocer la lista y sus propuestas.",
      imagen: actividad2,
    },
    {
      id: 3,
      titulo: "Jornada de militancia",
      fecha: "24 de Febrero, 2025",
      descripcion: "Un encuentro para conocer la lista y sus propuestas.",
      imagen: actividad3,
    },
    {
      id: 4,
      titulo: "Abrimos las puertas de la casa a todos",
      fecha: "26 de Febrero, 2025",
      descripcion: "Inauguramos nuestro lugar de encuentro, reflexión y militancia.",
      imagen: actividad4,
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="w-full py-10 bg-gray-900 text-white">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">📌 Actividades</h2>
      <div className="container mx-auto">
        <Slider {...settings}>
          {actividades.map((actividad) => (
            <div key={actividad.id} className="px-2">
              <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src={actividad.imagen}
                  alt={actividad.titulo}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => openModal(actividad.imagen)}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{actividad.titulo}</h3>
                  <p className="text-gray-400 text-sm">{actividad.fecha}</p>
                  <p className="mt-2 text-gray-300">{actividad.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

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
            <img src={selectedImage} alt="Actividad" className="max-w-full max-h-[80vh] rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
}