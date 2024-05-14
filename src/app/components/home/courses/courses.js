"use client"

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Card from "@/app/ui/course-card/card";
import course from "@/app/json/courses.json";

function Courses() {

    const titleRef = useRef(null);
    const gridRef = useRef(null);

    const isTitleInView = useInView(titleRef, { once: true });
    const isGridInView = useInView(gridRef, { once: true });
    
    const titleControls = useAnimation();
    const gridControls = useAnimation();

    useEffect(() => {
        if (isTitleInView) {
            titleControls.start("visible");
        }
        if (isGridInView) {
            gridControls.start("visible");
        }
    }, [isTitleInView, isGridInView]);

    return (
        <section id="cursos" className="relative w-full">
            <div className="flex flex-col items-center justify-center max-w-[1400px] mx-auto py-[100px] px-5">
                <div ref={titleRef}>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={titleControls}
                        transition={{ duration: 0.150, delay: 0.100 }}>
                        <h3
                            className="text-[10vw] text-center md:text-6xl font-bold gradient">
                            Cursos
                        </h3>
                    </motion.div>
                    <motion.div
                    ref={gridRef}
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={gridControls}
                        transition={{ duration: 0.150, delay: 0.200 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 min-[1397px]:grid-cols-4 gap-[40px] md:max-w-[711px] lg:max-w-[968px] min-[1397px]:min-w-[1360px] w-full mt-[64px] mx-auto">
                        {course.map(course => (
                            <Card key={course.id} course={course} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Courses