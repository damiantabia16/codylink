"use client"

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Advising() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);

    return (
        <section ref={ref} id="asesorías" className="relative w-full md:py-[100px]">
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.150, delay: 0.250 }}
                className="flex items-center justify-center max-w-[1400px] mx-auto py-[50px] px-5 md:bg-[#3872ab]">
                <div className="flex flex-wrap justify-center w-full">
                    <div className="min-[1257px]:w-[50%] text-center min-[1257px]:text-left p-[24px]">
                        <h3 className="text-[6vw] md:text-[48px] font-bold tracking-tighter leading-tight">
                            ¿Estás teniendo dificultades para avanzar con tu proyecto?<br /><span className="text-[#3872ab] md:text-[#080d12]">Te podemos dar una mano</span>
                        </h3>
                        <p className="hidden min-[1257px]:block text-[24px] font-medium pt-[20px]">
                            Reserva una asesoría con un profesor/tutor para resolver tus dudas y conflictos con el código.
                        </p>
                    </div>
                    <div className="relative flex items-center justify-center w-full max-w-[600px] mt-[20px]">
                        <div className="absolute w-full h-full bg-[#3872ab] z-[-1]" />
                        <div className="aspect-video w-full h-full opacity-30" style={{ backgroundImage: "url(/img/advising.webp)", backgroundPosition: "center", backgroundSize: "cover" }} />
                        <button className="absolute py-[15px] px-[20px] font-medium text-[14px] whitespace-nowrap border border-[#3872ab] bg-[#3872ab] rounded-lg transition ease-in-out hover:brightness-125">RESERVA UNA ASESORÍA</button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Advising