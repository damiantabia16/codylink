import Link from "next/link"

function Panel() {
    return (
        <div className="relative hidden h-full flex-col p-10 lg:flex border-r border-[#262829]" style={{ backgroundImage: "url(/img/auth-panel-bg-login.jpg)", backgroundPosition: "center", backgroundSize: "cover" }}>
            <Link href="/">
                <img className="w-[250px] z-[20]" src="/img/codylinkfff.png" alt="Codylink - Aprende Programación en Línea" />
            </Link>
            <div className="relative z-[20] mt-auto">
                <blockquote className="space-y-2">
                    <p className="text-lg italic">"Una experiencia de aprendizaje valiosa. Los cursos proporcionan un sólido fundamento en programación con recursos interactivos que hacen que el proceso sea divertido y efectivo."</p>
                    <footer className="flex flex-col">
                        <span className="text-md">Andrés Cruz</span>
                        <span className="text-sm">Estudiante de Ingeniería Informática</span>
                    </footer>
                </blockquote>
            </div>
        </div>
    )
}

export default Panel