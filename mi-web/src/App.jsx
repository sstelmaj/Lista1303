import React from 'react';

import FadeImage from "./components/FadeImage.jsx";
import ImageCarousel from "./components/CarruselImagenes.jsx";
import VideoGallery from "./components/VideoGallery";
import Actividades from './components/Actividades.jsx';

import imagen from "./assets/intendenteMarioDiaz.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
            <main >
                {/* Imagen principal */}
                <div className="flex justify-center mb-5 px-4">
                    <h1 className="text-xl sm:text-4xl font-bold text-center drop-shadow-lg animate-fadeIn text-gradient-border max-w-[90%] sm:max-w-[600px]">
                        ¡Bienvenid@ a la página de la lista 1303 DEFRENTE de Paysandú!<br /> <br /> 
                    </h1>
                </div>
                <div className="relative image-container max-w-full px-2">
                    <img src={imagen} alt="Lista" className="fade-img animate-fadeIn w-full max-w-[500px] mx-auto" />
                </div>

                <div className="bg-[rgb(30,41,59)] w-[95%] max-w-[900px] p-4 sm:p-8 rounded-2xl my-4 sm:my-10 mx-auto flex flex-col items-center text-center overflow-hidden">
                    <div>
                        <p className='text-2xl sm:text-4xl text-white text-center p-4 sm:p-10 mt-5 font-medium'>
                          🏛️ ¿Quiénes somos?
                        </p>
                        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center p-4 sm:p-10 mt-5 font-medium'>
                            Somos una lista que respalda al compañero Mario Díaz como candidato a la intendencia de Paysandú el próximo 11 de Mayo de 2025. <br /> <br />
                            Para que el próximo intendente del departamento represente los verdaderos valores de los sanduceros. <br /> <br />
                            Así como recuperar el gobierno departamental con personas que dediquen su esfuerzo y atención a la gente trabajadora y emprendedora tan olvidada en estos tiempos.
                        </p>
                        <hr className="my-6 sm:my-10 border-t-2 border-gray-700 mx-auto w-3/4" />
                    </div>
                    <div>
                        <p className="text-2xl sm:text-4xl text-white text-center p-4 sm:p-10 mt-5 font-medium">
                          🤝 Conócenos
                        </p>
                    </div>
                    {/* Carrusel de imágenes */}
                    <ImageCarousel />
                    <hr className="my-6 sm:my-10 border-t-2 border-gray-700 mx-auto w-3/4" />
                    <div>
                        <p className="text-2xl sm:text-4xl text-white text-center p-4 sm:p-10 mt-5 font-medium">
                          🎥 Videos
                        </p>
                        <VideoGallery />
                        <hr className="my-6 sm:my-10 border-t-2 border-gray-700 mx-auto w-3/4" />
                    </div>
                    <Actividades />
                    <hr className="my-6 sm:my-10 border-t-2 border-gray-700 mx-auto w-3/4" />
                    <div>
                        <p className='text-2xl sm:text-4xl text-white text-center p-4 sm:p-10 font-medium'>
                            📢 Más
                        </p>
                        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center p-4 sm:p-10 mt-5 font-medium'>
                            Como consigna, queremos volver a creer y disfrutar de representantes que tengan, como valores fundamentales, trabajar para la gente de nuestro departamento, con honestidad y con propuestas que ayuden a recuperar un departamento muy golpeado. Uno que, en los últimos 5 años, se dedicó́ a realizar obras que no han ayudado a la mayoría de la gente de nuestro territorio, y el cual se vio afectado de muchas maneras, una de ellas, es la falta de oportunidades laborales dignas, siendo las que existen, de baja calidad y pobre remuneración. <br /> <br /> 
                            Queremos que el próximo intendente esté en consonancia con el gobierno que elegimos todos los Uruguayos el Noviembre pasado, que las políticas sociales y económicas favorezcan a los más necesitados, que el dinero público sea para todos y no para el aprovechamiento de algunos pocos, como ha sido hasta ahora. <br /> <br /> 
                            Recordando que fuimos, somos y seremos una fuerza constructora. <br /> <br /> 
                            Hasta la victoria siempre ✊ <br /> <br /> 
                            Esta es la hora de los pueblos conscientes y organizados 🌍  <br /> 
                        </p>
                    </div>
                </div>
            </main>
    );
}

export default App;
