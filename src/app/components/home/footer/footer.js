import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="relative w-full pt-[100px]">
            <div className="relative max-w-[1400px] mx-auto px-5">
                <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start">
                    <div className="mx-auto lg:pt-5">
                        <img className="w-[50vw] md:w-[330px] lg:pt-5" src="/img/codylinkfff.png" alt="Codylink - Aprende Programación en Línea" />
                    </div>
                    <div className="pt-5 lg:p-5 w-full">
                        <ul className="lg:flex items-center justify-around">
                            <li className="border lg:border-none border-t-[#262829] border-b-[#262829] border-transparent my-[1rem] py-[1rem] cursor-pointer lg:m-0 lg:p-5 lg:bg-[#080d12] transition-all ease-in-out rounded-lg lg:hover:brightness-200">
                                <Link href="/acerca-de" className="text-[#888] transition-all ease-in-out max-[1024px]:hover:text-[#e9e9e9]">
                                    <p className="text-[14px] pb-[8px]">Acerca de Codylink</p>
                                    <p className="text-[12px] font-extralight">Qué hay detrás de los cursos.</p>
                                </Link>
                            </li>
                            <li className="border lg:border-none border-b-[#262829] border-transparent mb-[1rem] pb-[1rem] cursor-pointer lg:m-0 lg:p-5 lg:bg-[#080d12] transition-all ease-in-out rounded-lg lg:hover:brightness-200">
                                <Link href="/equipo" className="text-[#888] transition-all ease-in-out max-[1024px]:hover:text-[#e9e9e9]">
                                    <p className="text-[14px] pb-[8px]">Equipo</p>
                                    <p className="text-[12px] font-extralight">Los guías de tu camino.</p>
                                </Link>
                            </li>
                            <li className="border lg:border-none border-transparent pb-[1rem] cursor-pointer lg:m-0 lg:p-5 lg:bg-[#080d12] transition-all ease-in-out rounded-lg lg:hover:brightness-200">
                                <Link href="/contactanos" className="text-[#888] transition-all ease-in-out max-[1024px]:hover:text-[#e9e9e9]">
                                    <p className="text-[14px] pb-[8px]">Contáctanos</p>
                                    <p className="text-[12px] font-extralight">¿Tienes alguna duda? Ponte en contacto con nosotros.</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full border border-t-[#262829] border-transparent">
                <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between gap-y-2 p-5">
                    <div className="flex gap-2">
                        <p className="text-[12px] font-light text-[#888]">
                            Hecho por{' '}
                            <Link href="https://damiantabia.vercel.app" target="_blank" className="transition-all ease-in-out hover:text-[#e9e9e9]">Damián Tabia</Link>
                        </p>
                        <Link href="https://github.com/damiantabia16" target="_blank">
                            <FaGithubSquare />
                        </Link>
                        <Link href="https://www.linkedin.com/in/damiantabia" target="_blank">
                            <FaLinkedin />
                        </Link>
                    </div>
                    <div>
                        <p className="text-[12px] font-light text-[#888]">&copy;2024 Codylink, todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer