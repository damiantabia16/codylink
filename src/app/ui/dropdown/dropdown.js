import { useEffect } from "react";
import Link from "next/link";
import courses from "@/app/json/courses.json"

function Dropdown({ arrowRef, coursesMenu, setCoursesMenu }) {
  
  if (!coursesMenu) return null;

  return (
    <div className={`absolute top-[60px] left-[225px] w-[320px] z-[20] shadow-xl ${coursesMenu ? 'display' : ''}`}>
      <ul>
        {courses.map(course => (
          <Link key={course.id} href={`/cursos/${course.course_path}`}>
            <li className="flex items-center bg-[#0c131b] p-[16px] pl-[36px] text-sm transition-all ease-in-out hover:brightness-150">
              {course.course_name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown