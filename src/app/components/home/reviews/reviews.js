"use client"

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from "@/app/ui/review-card/card";
import { MdAccountCircle } from 'react-icons/md';

function Reviews() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView]);

    const reviewsArray = Array.from({ length: 6 }, (_, index) => ({
        id: index + 1,
        review_user_profile_pic: <MdAccountCircle />,
        review_user: `Usuario ${index + 1}`,
        review_user_profession: "Lorem impsum",
        review: "¡Increíble experiencia! Los cursos de Desarrollo web, JavaScript y React me han permitido mejorar mis habilidades y crear sitios web más atractivos y funcionales. ¡Altamente recomendados!"
    }));

    const [swiper, setSwiper] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const [paginationButtons, setPaginationButtons] = useState(null);
    const [arrows, setArrows] = useState(false);

    useEffect(() => {
        let calculateItemsPerPage = () => {
            let windowWidth = window.innerWidth;
            if (windowWidth >= 1024) {
                setItemsPerPage(3);
                setPaginationButtons(2)
            } else if (windowWidth >= 768) {
                setItemsPerPage(2);
                setPaginationButtons(1.5);
            } else {
                setItemsPerPage(1);
                setPaginationButtons(1);
            }
        };

        calculateItemsPerPage();

        window.addEventListener('resize', calculateItemsPerPage);
        return () => {
            window.removeEventListener('resize', calculateItemsPerPage);
        };
    }, []);

    const goToPage = pageNumber => {
        if (swiper !== null) {
            swiper.slideTo((pageNumber - 1) * 1);
            setCurrentPage(pageNumber);
        }
    };

    return (
        <section ref={ref} id="reseñas" className="relative w-full py-[100px]">
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.150, delay: 0.250 }}
                className="relative max-w-[1400px] mx-auto px-5">
                <h3 className="text-[10vw] md:text-[96px] font-bold text-center leading-tight tracking-tighter gradient">¿Qué opinan los estudiantes de nuestros cursos?</h3>
                <div className="relative py-[100px]">
                    <div onMouseOver={() => setArrows(true)} onMouseLeave={() => setArrows(false)}>
                        <Swiper
                            slidesPerView={itemsPerPage}
                            spaceBetween={30}
                            navigation={arrows ? true : false}
                            onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex + 1)}
                            onSwiper={setSwiper}
                            modules={[Navigation]}>
                            {reviewsArray.map(review => (
                                <SwiperSlide key={review.id}>
                                    <Card review={review} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="absolute bottom-[50px] text-center w-full">
                        {Array.from({ length: Math.ceil(reviewsArray.length / itemsPerPage * paginationButtons) }).map((_, index) => (
                            <button
                                key={index}
                                className={`inline-block w-[10px] h-[10px] mx-[4px] rounded-full ${currentPage === index + 1 ? 'bg-[#3872ab]' : 'bg-[#e9e9e9] opacity-20'}`}
                                onClick={() => goToPage(index + 1)}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Reviews