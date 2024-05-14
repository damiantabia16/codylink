"use client"

import { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Selector from "@/app/ui/select/select";

function Path() {

    const selector = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (selector.current && !selector.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [selector])

    return (
        <>
            <section id="camino" className="relative w-full">
                <div className="relative max-w-[1400px] mx-auto pt-[100px] px-5">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                        <div>
                            <h3 className="text-[10vw] text-center lg:text-left md:text-6xl font-bold pt-0 p-[24px] lg:p-0 gradient">El Camino</h3>
                        </div>
                        <div ref={selector} className="relative">
                            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-[320px] mx-auto mt-[24px] lg:mt-0 py-3 px-5 bg-[#080d12] border border-[#3872ab] rounded-lg transition-all ease-in-out hover:brightness-150">
                                <span className="text-[14px]">{selectedOption ? selectedOption : "Selecciona un camino"}</span>
                                <MdKeyboardArrowDown />
                            </button>
                            <Selector selector={selector} isOpen={isOpen} setIsOpen={setIsOpen} setSelectedOption={setSelectedOption} />
                        </div>
                    </div>
                    <div className="w-full h-[620px] overflow-auto mt-[50px] mb-[100px] bg-[#0c131b] rounded-lg select-none cursor-default">
                        {selectedOption ? (
                            <>
                                <div className="flex items-center w-full">
                                    <div className="min-w-[480px] h-[480px] bg-[#ffcc00]"></div>
                                    <div className="flex flex-wrap items-center justify-center h-[480px]">
                                        <div className="p-5 pt-0">
                                            <div className="p-5">
                                                <h3 className="text-[32px] font-semibold text-[#3872ab]">• Curso de Desarrollo Web</h3>
                                            </div>
                                            <div className="p-5 pb-0 font-extralight">
                                                <p>En este curso aprenderás desde los fundamentos hasta las técnicas más avanzadas para crear sitios web impresionantes y funcionales. Comenzaremos desde cero, explorando HTML y CSS, los ladrillos fundamentales de la web, para que puedas entender cómo se estructura y se estiliza el contenido en línea.</p><br />
                                                <p>A medida que avancemos, te familiarizarás con herramientas modernas como Bootstrap, TailwindCSS y Material UI, que te permitirán diseñar interfaces elegantes y responsivas de manera eficiente. Además, profundizaremos en aspectos cruciales como el SEO (Optimización de Motores de Búsqueda), para que tus sitios puedan ser encontrados y clasificados fácilmente por los motores de búsqueda.</p><br />
                                                <p>No solo aprenderás a codificar, sino que también te enseñaremos buenas prácticas de desarrollo web, desde la organización del código hasta la accesibilidad y el rendimiento del sitio. Y lo más importante, te mostraremos cómo llevar tu sitio web del entorno de desarrollo local a la web pública, permitiéndote compartir tu trabajo con el mundo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="min-w-[480px] h-[480px] bg-[#ff00cc]"></div>
                                    <div className="flex flex-wrap items-center justify-center h-[480px]">
                                        <div className="p-5 pt-0">
                                            <div className="p-5">
                                                <h3 className="text-[32px] font-semibold text-[#3872ab]">• Curso de Javascript</h3>
                                            </div>
                                            <div className="p-5 pb-0 font-extralight">
                                                <p>En este curso nos adentraremos en el lenguaje de programación que impulsa la interactividad y la dinámica en la web. Comenzaremos explorando la sintaxis y las variables, los bloques de construcción fundamentales que te permitirán escribir código JavaScript claro y conciso. Aprenderás a declarar variables, comprender los diferentes tipos de datos y utilizar operadores para realizar operaciones en tus programas.</p><br />
                                                <p>Nos sumergiremos en los ciclos e iteraciones, descubrirás cómo utilizar los bluces for, while y do-while para automatizar tareas y procesar conjuntos de datos de manera eficiente, llevando tus habilidades de programación al siguiente nivel.</p><br />
                                                <p>Descubrirás cómo las funciones pueden ayudarte a modularizar tu código, haciéndolo más fácil de entender, mantener y reutilizar en diferentes partes de tu aplicación. Además, exploraremos temas avanzados como el alcance de las variables y el concepto de funciones de flecha, que te permiten escribir código más elegante y funcional.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center justify-center w-full h-full">
                                <img className={`w-[300px] ${!selectedOption ? 'animate-blur-pulse' : ''}`} src="/img/codylinkfff.png" alt="Codylink - Aprende a Programación en Línea" />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Path