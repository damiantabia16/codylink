import Link from "next/link"

function Panel() {
  return (
    <div className="relative hidden h-full flex-col p-10 lg:flex border-r border-[#262829]" style={{ backgroundImage: "url(/img/auth-panel-bg-register.jpg)", backgroundPosition: "center", backgroundSize: "cover" }}>
      <Link href="/">
        <img className="w-[250px] z-[20]" src="/img/codylinkfff.png" alt="Codylink - Aprende Programación en Línea" />
      </Link>
      <div className="relative z-[20] mt-auto">
        <blockquote className="space-y-2">
          <p className="text-lg italic">"Esta plataforma ofrece una amplia gama de cursos de programación de alta calidad, ideales para principiantes y profesionales. Brinda recursos interactivos y proyectos prácticos que garantizan un aprendizaje efectivo."</p>
          <footer className="flex flex-col">
            <span className="text-md">Santiago Torres</span>
            <span className="text-sm">Desarrollador Senior Fullstack</span>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

export default Panel