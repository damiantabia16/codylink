function Presentation() {
  return (
    <section id="presentacion" className="relative w-full h-full py-[100px] px-5 lg:p-0">
      <div className="relative max-w-[1400px] mx-auto bg-[#e9e9e9]">
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center w-full h-full px-5 py-10 lg:p-[60px]">
          <div className="lg:w-[33.33333%] lg:flex-[0_0_auto]">
            <h3 className="text-[10vw] md:text-6xl text-[#080d12] font-bold leading-tight tracking-tighter text-center mb-[60px] lg:mb-0">¿Por qué <span className="text-[#3872ab]">CODYLINk</span>?</h3>
          </div>
          <div className="flex flex-wrap lg:w-[66.66667%] lg:flex-[0_0_auto] gap-y-10">
            <div className="md:w-[50%] md:px-10 space-y-2">
              <h5 className="text-[7vw] md:text-3xl text-[#080d12] font-semibold">Tendencias</h5>
              <p className="text-[#080d12] font-light">Trabajamos al día con las nuevas tendencias y la sostenibilidad, junto a referentes de la industria.</p>
            </div>
            <div className="md:w-[50%] md:px-10 space-y-2">
              <h5 className="text-[7vw] md:text-3xl text-[#080d12] font-semibold">Trayectoria</h5>
              <p className="text-[#080d12] font-light">Somos la escuela con mayor trayectoria, pionera en formación especializada.</p>
            </div>
            <div className="md:w-[50%] md:px-10 space-y-2">
              <h5 className="text-[7vw] md:text-3xl text-[#080d12] font-semibold">Resultados</h5>
              <p className="text-[#080d12] font-light">Contamos con programas dinámicos y prácticas que fortalecen tu perfil profesional.</p>
            </div>
            <div className="md:w-[50%] md:px-10 space-y-2">
              <h5 className="text-[7vw] md:text-3xl text-[#080d12] font-semibold">Alcance global</h5>
              <p className="text-[#080d12] font-light">Somos referentes en América Latina. Te preparamos para que trabajes estés donde estés.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation