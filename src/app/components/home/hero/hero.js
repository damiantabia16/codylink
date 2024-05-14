"use client"

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdArrowDownward } from "react-icons/md";
import ParticlesComponent from "./background";

function Hero() {

    const [moveArrow, setMoveArrow] = useState(false);

    return (
        <section id="hero" className="relative w-full overflow-x-hidden">
            <ParticlesComponent id="particles" />
            <div className="relative max-w-[1400px] m-auto px-5">
                <div className='min-h-screen'>
                    <div className="flex flex-wrap items-center justify-center content-center min-h-[calc(90vh)]">
                        <div className="relative w-[340px] p-[24px]" />
                        <div className='py-[34px]'>
                            <motion.h1
                                initial={{ opacity: 0, y: -40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.150 }}
                                className="text-[10vw] md:text-[68px] gradient text-center font-bold leading-tight tracking-tighter p-[24px] xl:py-4">
                                Sumergete en el mundo de la programación con los mejores cursos.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.150, delay: 0.150 }}
                                className="text-[15px] md:text-xl text-center text-[#888] tracking-tight p-[24px] xl:py-4">
                                Clases online en vivo y asesorías de la mano de
                                {' '}<span className="text-[#e9e9e9] font-medium">
                                    expertos en el desarrollo full-stack.
                                </span>
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.150, delay: 0.300 }}
                            className='flex items-center justify-center gap-[20px] w-full p-[24px] xl:py-4 text-center'>
                            <button className="h-[48px] font-medium whitespace-nowrap border border-[#3872ab] bg-[#3872ab] rounded-lg transition ease-in-out hover:brightness-125">
                                <Link className="h-full py-2 px-[20px]" href="#cursos">
                                    Ver Cursos
                                </Link>
                            </button>
                            <button className="h-[48px] font-medium whitespace-nowrap text-[#3872ab] border border-transparent bg-[#080d12] rounded-lg brightness-150 transition ease-in-out hover:bg-[#080d12] hover:brightness-200">
                                <Link className="h-full py-2 px-[20px]" href="#camino">
                                    El Camino
                                </Link>
                            </button>
                        </motion.div>
                    </div>
                </div>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.150, delay: 0.300 }}
                    onMouseOver={() => setMoveArrow(true)} onMouseOut={() => setMoveArrow(false)} className="hidden sm:block absolute w-[40px] h-[65px] border border-[#080d12] bg-[#080d12] rounded-full left-0 bottom-[100px] right-0 mx-auto brightness-150 transition ease-in-out hover:bg-[#080d12] hover:brightness-200">
                    <MdArrowDownward className={`mx-auto w-[24px] h-full transition-all ease-in-out ${moveArrow ? 'translate-y-[20%]' : ''}`} />
                </motion.button>
            </div>
        </section>
    )
}

export default Hero