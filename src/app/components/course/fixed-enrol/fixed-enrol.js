"use client"

import { useState, useEffect } from "react"

function FixedEnrol({ course }) {

  const [showEnrol, setShowEnrol] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - windowHeight;
      const scrollPosition = window.scrollY;

      setShowEnrol(
        window.innerWidth > 768
          ? scrollPosition > 630 && scrollPosition < maxScroll - 1700
          : scrollPosition > windowHeight - 60 && scrollPosition < maxScroll - 1700
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed right-0 bottom-0 left-0 z-[9999] w-full h-[136px] bg-[#080d12] border-t border-t-[#262829] transition-all ease-in-out ${showEnrol ? "opacity-1 translate-y-0" : "opacity-0 translate-y-full"}`}>
      <div className="relative flex items-center justify-between max-w-[1400px] h-full mx-auto py-[20px] px-5">
        <div>
          <p className="text-[14px]">desde 3 cuotas sin interés de</p>
          <p className="text-[32px]">AR${parseFloat(course.course_price / 3).toFixed(3)}</p>
        </div>
        <button className="h-[48px] py-2 px-[20px] font-medium whitespace-nowrap border border-[#3872ab] bg-[#3872ab] rounded-lg transition ease-in-out hover:brightness-125">Inscribirme ahora</button>
      </div>
    </div>
  )
}

export default FixedEnrol