"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import courses from "@/app/json/courses.json"
import { MdMenu, MdSearch, MdClose, MdKeyboardArrowDown, MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function Navbar() {

    const pathname = usePathname();

    const menuRef = useRef(null);
    const arrowRef = useRef(null);

    const [menu, setMenu] = useState(false);
    const [coursesMenu, setCoursesMenu] = useState(false);
    const [accordionMenu, setAccordionMenu] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menu && menuRef.current && !menuRef.current.contains(e.target)) {
                setMenu(false);
                setAccordionMenu(false);
            }
            if (coursesMenu && arrowRef.current && !arrowRef.current.contains(e.target)) {
                setCoursesMenu(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [menu, coursesMenu]);

    return (
        <>

            <motion.header
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.150 }}
                className="fixed w-full h-[60px] bg-[#080d12]/50 border-b border-[#262829] z-[9999] backdrop-blur">
                <nav className="relative flex items-center max-w-[1400px] h-full m-auto">
                    <div className="flex items-center lg:justify-between w-full h-full">
                        <div className="lg:hidden">
                            <button
                                onClick={() => setMenu(!menu)}
                                aria-expanded={menu}
                                className="m-5">
                                <MdMenu className="w-[28px] h-[28px]" />
                            </button>
                        </div>
                        <div className="flex-auto lg:flex-none lg:ml-5 lg:mr-10">
                            <div
                                className="w-[160px] cursor-pointer">
                                <Link href="/">
                                    <img className="w-full h-full" src="/img/codylinkfff.png" alt="Codylink- Aprende Programación en Línea" />
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-1 items-center gap-10 mr-12">
                            <div className="flex items-center justify-between gap-2 text-[#a9a9a9] transition-all ease-in-out hover:text-[#e9e9e9]">
                                <Link href={pathname === "/" ? '#cursos' : ''}>
                                    <div className="text-sm font-medium whitespace-nowrap">
                                        Cursos
                                    </div>
                                </Link>
                                <button onClick={() => setCoursesMenu(!coursesMenu)}>
                                    <MdKeyboardArrowDown className={`text-lg transition-transform ease-in-out ${coursesMenu ? 'rotate-[180deg]' : ''}`} />
                                </button>
                            </div>
                            {pathname === "/" && (
                                <>
                                    <Link href="#camino">
                                        <div className="text-sm text-[#a9a9a9] font-medium whitespace-nowrap transition-all ease-in-out hover:text-[#e9e9e9]">El Camino</div>
                                    </Link>
                                    <Link href='#asesorías'>
                                        <div className="text-sm text-[#a9a9a9] font-medium whitespace-nowrap transition-all ease-in-out hover:text-[#e9e9e9]">Asesorías</div>
                                    </Link>
                                    <Link href="#reseñas">
                                        <div className="text-sm text-[#a9a9a9] font-medium whitespace-nowrap transition-all ease-in-out hover:text-[#e9e9e9]">Reseñas</div>
                                    </Link>
                                    <Link href="#faq">
                                        <div className="text-sm text-[#a9a9a9] font-medium whitespace-nowrap transition-all ease-in-out hover:text-[#e9e9e9]">FAQ</div>
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center justify-between gap-2 border border-[#262829] rounded-full p-1 mx-5">
                                <button className="p-1 rounded-full text-[#a9a9a9] transition-all ease-in-out hover:text-[#e9e9e9]">
                                    <MdOutlineLightMode className="text-lg" />
                                </button>
                                <button className="p-1 bg-[#262829] rounded-full transition-all ease-in-out">
                                    <MdOutlineDarkMode className="text-lg" />
                                </button>
                            </div>
                            <button className="hidden lg:inline text-sm font-medium py-2 px-[20px] m-5 bg-[#3872ab] whitespace-nowrap rounded-lg transition-all ease-in-out hover:brightness-125">
                                <Link href="/registrarse">
                                    Unirse ahora
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div ref={arrowRef} className={`absolute top-[60px] left-[100px] w-[320px] z-[20] shadow-xl ${coursesMenu ? 'display' : 'hidden'}`}>
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
                </nav>
            </motion.header>

            <div ref={menuRef} className={`fixed lg:hidden top-[60px] left-0 w-[320px] h-[calc(100vh-60px)] bg-[#080d12]/50 border-r-2 border-[#262829] z-[9999] backdrop-blur transition-all duration-150 ease-in-out ${menu ? 'opacity-1 translate-x-0 visible' : 'opacity-0 -translate-x-full invisible'}`}>
                <div>
                    <div>
                        <div className="flex items-center justify-between gap-2 border-b-2 border-[#262829] px-5 py-3">
                            <Link onClick={() => { setMenu(false); setAccordionMenu(false) }} href="#cursos">
                                <div className="text-sm font-medium">
                                    Cursos
                                </div>
                            </Link>
                            <button onClick={() => { setAccordionMenu(!accordionMenu) }}>
                                <MdKeyboardArrowDown className={`text-lg ${accordionMenu ? 'rotate-[180deg]' : ''}`} />
                            </button>
                        </div>
                        {accordionMenu && (
                            <ul>
                                {courses.map(course => (
                                    <li className="text-sm font-thin px-10 py-2 border-b border-[#262829]" key={course.id}>
                                        <Link href={`/cursos/${course.course_path}`}>
                                            {course.course_name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <Link onClick={() => { setMenu(false); setAccordionMenu(false) }} href="#camino">
                            <div className="text-sm font-medium px-5 py-3 border-b-2 border-[#262829]">El Camino</div>
                        </Link>
                        <Link onClick={() => { setMenu(false); setAccordionMenu(false) }} href="#asesorías">
                            <div className="text-sm font-medium px-5 py-3 border-b-2 border-[#262829]">Asesorías</div>
                        </Link>
                        <Link onClick={() => { setMenu(false); setAccordionMenu(false) }} href="#reseñas">
                            <div className="text-sm font-medium px-5 py-3 border-b-2 border-[#262829]">Reseñas</div>
                        </Link>
                        <Link onClick={() => { setMenu(false); setAccordionMenu(false) }} href="#faq">
                            <div className="text-sm font-medium px-5 py-3 border-b-2 border-[#262829]">FAQ</div>
                        </Link>
                    </div>
                    <div>
                        <div className="py-3 px-5">
                            <Link href="registrarse">
                                <button className="text-sm font-medium py-2 px-[20px] bg-[#3872ab] rounded-lg transition-all ease-in-out hover:hover:brightness-125">Unirse ahora</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar