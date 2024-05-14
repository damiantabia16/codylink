"use client"

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Accordion from "@/app/ui/accordion/accordion";

function FAQ() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);

    const [openAccordionId, setOpenAccordionId] = useState(null);

    const accordionData = [
        {
            id: 1,
            faq_title: '¿Cómo es la modalidad de la cursada?',
            faq_content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`
        },
        {
            id: 2,
            faq_title: '¿Cómo funcionan las asesorías?',
            faq_content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`
        },
        {
            id: 3,
            faq_title: '¿Cuáles son los métodos de pago?',
            faq_content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`
        }
    ];

    const toggleAccordion = (id) => {
        setOpenAccordionId(openAccordionId === id ? null : id);
    };

    return (
        <section ref={ref} id="faq" className="relative w-full py-[100px]">
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.150, delay: 0.250 }}
                className="relative max-w-[1400px] mx-auto px-5">
                <h3 className="text-[10vw] md:text-[60px] font-bold text-center md:text-left leading-tight tracking-tighter gradient">Preguntas frecuentes</h3>
                <div className="relative pt-[50px]">
                    {accordionData.map(data => (
                        <Accordion key={data.id} data={data} isOpen={openAccordionId === data.id} toggleAccordion={toggleAccordion} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default FAQ