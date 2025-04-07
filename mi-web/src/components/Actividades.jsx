import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import actividad1 from "../assets/actividad1.jpeg";
import actividad2 from "../assets/actividad2.jpeg";
import actividad3 from "../assets/actividad3.jpeg";
import actividad4 from "../assets/actividad4.jpeg";
import actividad5 from "../assets/actividad07-03-25.jpeg";
import actividad6 from "../assets/actividad10-3.jpeg";
import actividad7 from "../assets/actividad18-03.jpeg";

import actividad8 from "../assets/actividad24-03.jpeg";

import actividad9 from "../assets/actividad31-03.jpeg";

import actividad10 from "../assets/actividad07-04.jpeg";

export default function Actividades() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const actividades = [
    {
      id: 1,
      titulo: "Agenda semanal Abril",
      fecha: "07, 08, 09, 10 y 11 de Abril 2025",
      descripcion: "Por los barrios mano a mano con la gente !",
      imagen: actividad10,
    },
    {
      id: 1,
      titulo: "Agenda semanal",
      fecha: "31 de Marzo, 01, 02, 03 y 04 de Abril 2025",
      descripcion: "Por los barrios mano a mano con la gente !",
      imagen: actividad9,
    },
    {
      id: 2,
      titulo: "Agenda semanal",
      fecha: "24, 25, 26, 27 y 28 de Marzo 2025",
      descripcion: "Por los barrios mano a mano con la gente !",
      imagen: actividad8,
    },
    {
      id: 3,
      titulo: "Agenda de esta semana",
      fecha: "18, 19, 20 y 21 de Marzo 2025",
      descripcion: "Concentraciones con los vecinos de diferentes barrios. Te esperamos !",
      imagen: actividad7,
    },
    {
      id: 4,
      titulo: "De frente mano a mano con la gente",
      fecha: "11, 12, 13 y 14 de Marzo 2025",
      descripcion: "Un encuentro con los vecinos de diferentes barrios.",
      imagen: actividad6,
    },
    {
      id: 5,
      titulo: "De frente mano a mano con la gente",
      fecha: "06 de Marzo, 07 de Marzo, 08 de Marzo 2025",
      descripcion: "Un encuentro para conocer la lista y sus propuestas.",
      imagen: actividad5,
    },
    {
      id: 6,
      titulo: "Jornada de militancia",
      fecha: "20, 21 y 22 de Febrero, 2025",
      descripcion: "Un encuentro para conocer la lista y sus propuestas.",
      imagen: actividad1,
    },
    {
      id: 7,
      titulo: "Jornada de militancia",
      fecha: "22 de Febrero, 2025",
      descripcion: "Un encuentro para conocer la lista y sus propuestas.",
      imagen: actividad2,
    },
    {
      id: 8,
      titulo: "Jornada de militancia",
      fecha: "24 de Febrero, 2025",
      descripcion: "Un encuentro para conocer la lista y sus propuestas.",
      imagen: actividad3,
    },
    {
      id: 9,
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
    <section className="w-full py-10 bg-gray-900 text-white rounded-2xl">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">📌 Actividades y noticias</h2>
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