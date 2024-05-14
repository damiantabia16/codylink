"use client"

import { motion } from "framer-motion";
import { RiLiveFill } from "react-icons/ri";

function Banner({ course }) {
    return (
        <section className="relative w-full py-[60px]">
            <div className="relative w-full h-[calc(100vh-60px)] md:h-[630px]" style={{ backgroundImage: "url(/img/cursos-bg.jpg)", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="relative max-w-[1400px] h-full mx-auto px-5 py-10">
                    <div
                        className="flex flex-col justify-end md:justify-start w-fit md:max-w-[50%] h-full">
                        <motion.div
                            initial={{ opacity: 0, x: -75 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.150 }}
                            className="bg-[#080d12]/50 md:bg-transparent rounded-lg p-5 md:p-0">
                            <div className="flex items-center gap-4 text-[24px]">
                                <RiLiveFill className="text-[#ff1c33]" />
                                <span>
                                    {course.course_modality}
                                </span>
                            </div>
                            <div className="pb-5">
                                <h1 className="text-[10vw] md:text-[68px] font-bold leading-tight tracking-tighter">Curso de {course.course_name}</h1>
                            </div>
                            <div>
                                <ul className="list-disc pt-0 p-5">
                                    <li className="text-[20px] font-light my-3">Correción de proyectos prácticos</li>
                                    <li className="text-[20px] font-light my-3">2 clases de prueba</li>
                                </ul>
                            </div>
                            <div>
                                <button className="h-[48px] py-2 px-[20px] font-medium whitespace-nowrap border border-[#3872ab] bg-[#3872ab] rounded-lg transition ease-in-out hover:brightness-125">
                                    Inscribirme ahora
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner