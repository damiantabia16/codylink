function Purpose() {
  return (
    <section className="relative w-full my-[100px]">
      <div className="relative max-w-[1400px] mx-auto px-5">
        <div className="relative flex flex-row w-full border border-transparent">
          <div className="absolute top-0 right-0 w-[100px] h-[100px] border border-t-[#e9e9e9] border-r-[#e9e9e9] border-transparent" />
          <div className="hidden relative min-[1410px]:inline-block h-full">
            <div className="absolute w-full h-full bg-[#3872ab] opacity-50" />
            <img className="min-w-[680px] h-[680px] object-cover" src="/img/purpose1.jpg" alt="" />
          </div>
          <div className="flex items-center justify-center p-10">
            <p className="font-extralight md:text-[28px]">Nuestro objetivo es{' '}<span className="font-normal">brindarte las herramientas y el conocimiento</span>{' '}necesarios para destacarte en la industria tecnológica en constante evolución. Ya sea que estés interesado en el desarrollo de software, la inteligencia artificial, la ciberseguridad o cualquier otro campo tecnológico,{' '}<span className="font-normal">estamos aquí para acompañarte en tu viaje de aprendizaje y desarrollo profesional.</span></p>
          </div>
        </div>
        <div className="relative flex flex-row w-full border border-transparent">
          <div className="absolute bottom-0 left-0 w-[100px] h-[100px] border border-b-[#e9e9e9] border-l-[#e9e9e9] border-transparent" />
          <div className="flex items-center justify-center p-10">
            <p className="font-extralight md:text-[28px]">¿Estás listo para{' '}<span className="font-normal">conectar con tu pasión</span>{' '}por la tecnología y abrirte camino en esta industria emocionante y dinámica?{' '}<span className="font-normal">Te invitamos a unirte a nosotros</span>{' '}y descubrir todo lo que nuestro centro de formación tiene para ofrecerte.{' '}<span className="font-normal italic">¡Juntos, podemos alcanzar nuevas alturas en el mundo digital!</span></p>
          </div>
          <div className="hidden relative min-[1410px]:inline-block h-[680px]">
            <div className="absolute w-full h-full bg-[#3872ab] opacity-50" />
            <img className="min-w-[680px] h-[680px] object-cover shrink-0" src="/img/purpose2.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Purpose