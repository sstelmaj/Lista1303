import React from 'react';
import FadeImage from "./components/FadeImage.jsx";
import ImageCarousel from "./components/CarruselImagenes.jsx";
import imagen from "./assets/intendenteMarioDiaz.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <div>
            <main>
                {/* Aquí tu imagen principal */}
                <div className="image-container">
                    <img src={imagen} alt="Lista" className="fade-img" />
                </div>
                
                {/* Carrusel de imágenes debajo */}
                <ImageCarousel />
            </main>
        </div>
    );
}

export default App;