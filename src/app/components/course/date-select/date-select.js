"use client"

import { useState, useRef } from 'react';
import Card from '@/app/ui/date-card/card';
import { MdArrowDownward } from "react-icons/md";

const DateSelect = ({ course }) => {

  const [ showMore, setShowMore ] = useState(false);
  const [ visibleDates, setVisibleDates ] = useState(course.course_dates.slice(0, 6));
  const ref = useRef(null);

  const toggleShow = () => {
    setShowMore(!showMore);
    if (!showMore) {
      setVisibleDates(course.course_dates);
    } else {
      setVisibleDates(course.course_dates.slice(0, 6));
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={ref} className="relative w-full py-[100px]">
      <div className="relative max-w-[1400px] mx-auto px-5">
        <div>
          <h3 className="text-[60px] font-bold leading-tight tracking-tighter mb-[40px]">Fechas</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[60px]">
          {visibleDates.map((date, index) => (
            <Card key={index} date={date} />
          ))}
        </div>
        <button onClick={toggleShow} className="flex items-center gap-2 mx-auto text-xl text-[#3872ab] font-semibold transition-all ease-in-out hover:brightness-125">
          {!showMore ? "Ver más fechas" : "Ver menos fechas"}
          <MdArrowDownward className={`${!showMore ? "" : "rotate-[180deg]"}`} />
          </button>
      </div>
    </section>
  )
}

export default DateSelect