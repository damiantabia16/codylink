"use client"

import { useRouter } from "next/navigation";


function NotFound() {

    const router = useRouter();

    return (
        <section className="relative w-full h-screen py-[100px]">
            <div className="relative max-w-[1400px] h-full m-auto px-5">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-[10vw] md:text-[40px] text-center font-semibold leading-tight tracking-tighter py-[20px]">404 - Parece que esta página no existe</h1>
                    <button onClick={() => router.push("/")} className="h-[48px] py-2 px-[20px] my-[20px] font-medium whitespace-nowrap text-[#080d12] border border-[#3872ab] bg-[#3872ab] rounded-lg transition ease-in-out hover:brightness-125">Volver al inicio</button>
                </div>
            </div>
        </section>

    )
}

export default NotFound