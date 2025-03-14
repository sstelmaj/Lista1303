import React from 'react';
import {motion} from "framer-motion"
import { Analytics } from "@vercel/analytics/react"


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
                <Analytics />
                {/* Imagen principal */}
                <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg border-2 border-white bg-white p-1 z-50 max-w-full">
                    <img src="/logoLista.jpeg" alt="Logo Lista" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="flex justify-center mb-5 mx-auto w-3/4">
                    <h1
                        className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-center drop-shadow-md bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent animate-fadeIn transition-all duration-200 ease-in-out"
                    >
                        <span className="text-gray-200">¡Bienvenid@ a la página de la <br /></span>
                        lista 1303 <br />
                        <span className="text-gray-200">DEFRENTE de Paysandú !</span>
                    </h1>
                </div>
                <div className="relative image-container max-w-full px-2">
                    <img src={imagen} alt="Lista" className="fade-img animate-fadeIn w-full max-w-[500px] mx-auto" />
                </div>

                <div className="bg-[rgb(30,41,59)] w-[95%] max-w-[900px] p-4 sm:p-8 rounded-2xl my-4 sm:my-10 mx-auto flex flex-col items-center text-center overflow-hidden">
                    <motion.div
                    initial={{opacity: 0, translateY: "10%"}}
                    whileInView={{opacity: 1, translateY: 0, transition: {duration: 1}
                    }}
                    >
                        <p className='text-2xl sm:text-4xl text-white text-center sm:p-10 mt-5 font-medium'>
                          🏛️ ¿Quiénes somos?
                        </p>
                        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center mt-5 font-medium'>
                            Somos una lista que respalda al compañero Mario Díaz como candidato a la intendencia de Paysandú el próximo 11 de Mayo de 2025. <br /> <br />
                            Para que el próximo intendente del departamento represente los verdaderos valores de los sanduceros. <br /> <br />
                            Así como recuperar el gobierno departamental con personas que dediquen su esfuerzo y atención a la gente trabajadora y emprendedora tan olvidada en estos tiempos.
                        </p>
                    </motion.div>
                    <hr className="my-6 sm:my-10 border-t-2 border-gray-700 mx-auto w-3/4" />
                    <motion.div className="w-full max-w-full"
                    initial={{opacity: 0, translateY: "10%"}}
                    whileInView={{opacity: 1, translateY: 0, transition: {duration: 1}
                    }}>
                        <p className="text-2xl sm:text-4xl text-white text-center font-medium">
                            🤝 Conócenos
                        </p>
                        <ImageCarousel/>
                    </motion.div>
                    <hr className="my-6 sm:my-10 border-t-2 border-gray-700 mx-auto w-3/4" />
                    <motion.div className="w-full max-w-full"
                    initial={{opacity: 0, translateY: "10%"}}
                    whileInView={{opacity: 1, translateY: 0, transition: {duration: 1}
                    }}>
                        <p className="text-2xl sm:text-4xl text-white text-center font-medium">
                          🎥 Videos
                        </p>
                        <VideoGallery />
                    </motion.div>
                    <hr className="my-6 sm:my-10 border-t-2 border-gray-700 mx-auto w-3/4" />
                    <motion.div className="w-full max-w-full"
                    initial={{opacity: 0, translateY: "10%"}}
                    whileInView={{opacity: 1, translateY: 0, transition: {duration: 1}
                    }}>
                        <Actividades />
                    </motion.div>
                    
                    <hr className="my-6 sm:my-10 border-t-2 border-gray-700 mx-auto w-3/4" />
                    <motion.div
                    initial={{opacity: 0, translateY: "10%"}}
                    whileInView={{opacity: 1, translateY: 0, transition: {duration: 1}
                    }}>
                        <p className='text-2xl sm:text-4xl text-white text-center sm:p-10 font-medium'>
                            📢 Más
                        </p>
                        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center p-4 sm:p-10 mt-5 font-medium'>
                            Como consigna, queremos volver a creer y disfrutar de representantes que tengan, como valores fundamentales, trabajar para la gente de nuestro departamento, con honestidad y con propuestas que ayuden a recuperar un departamento muy golpeado. Uno que, en los últimos 5 años, se dedicó́ a realizar obras que no han ayudado a la mayoría de la gente de nuestro territorio, y el cual se vio afectado de muchas maneras, una de ellas, es la falta de oportunidades laborales dignas, siendo las que existen, de baja calidad y pobre remuneración. <br /> <br /> 
                            Queremos que el próximo intendente esté en consonancia con el gobierno que elegimos todos los Uruguayos el Noviembre pasado, que las políticas sociales y económicas favorezcan a los más necesitados, que el dinero público sea para todos y no para el aprovechamiento de algunos pocos, como ha sido hasta ahora. <br /> <br /> 
                            Recordando que fuimos, somos y seremos una fuerza constructora. <br /> <br /> 
                            Hasta la victoria siempre ✊ <br /> <br /> 
                            Esta es la hora de los pueblos conscientes y organizados <br /> 
                        </p>
                    </motion.div>
                </div>
            </main>
    );
}

export default App;
