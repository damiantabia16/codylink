"use client"

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Card from '../course-card/card';
import courses from '@/app/json/courses.json'

function Slider() {

  const pathname = usePathname();

  const [swiper, setSwiper] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [paginationButtons, setPaginationButtons] = useState(null);
  const [arrows, setArrows] = useState(false);

  useEffect(() => {
    let calculateItemsPerPage = () => {
      let windowWidth = window.innerWidth;
      if (windowWidth >= 1440) {
        setItemsPerPage(4);
        setPaginationButtons(2);
      } else if (windowWidth >= 1280) {
        setItemsPerPage(4);
        setPaginationButtons(2);
      } else if (windowWidth >= 1024) {
        setItemsPerPage(3);
        setPaginationButtons(1.7)
      } else if (windowWidth >= 880) {
        setItemsPerPage(2.7);
        setPaginationButtons(1.5);
      } else if (windowWidth >= 645) {
        setItemsPerPage(2);
        setPaginationButtons(1.5);
      } else if (windowWidth >= 480) {
        setItemsPerPage(1.5);
        setPaginationButtons(1.3);
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
    <div>
      <div className="max-w-[1400px] mx-auto pt-[50px] pb-[100px]">
        <div className="relative">
          <div onMouseOver={() => setArrows(true)} onMouseLeave={() => setArrows(false)}>
            <Swiper
              slidesPerView={itemsPerPage}
              navigation={arrows ? true : false}
              onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex + 1)}
              onSwiper={setSwiper}
              modules={[Navigation]}
              className="custom-swipper">
              {courses.map(course => (
                (`/cursos/${course.course_path}` !== pathname) && (
                  <SwiperSlide key={course.id}>
                    <Card course={course} />
                  </SwiperSlide>
                )
              ))}
            </Swiper>
          </div>
          <div className="absolute bottom-[-100px] text-center w-full">
            {Array.from({ length: Math.ceil(courses.length / itemsPerPage * paginationButtons) }).map((_, index) => (
              <button
                key={index}
                className={`inline-block w-[10px] h-[10px] mx-[4px] rounded-full ${currentPage === index + 1 ? 'bg-[#3872ab]' : 'bg-[#e9e9e9] opacity-20'}`}
                onClick={() => goToPage(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider