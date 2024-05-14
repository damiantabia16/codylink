function About() {
    return (
        <section id="acerca-de" className="relative w-full mb-[100px]" style={{ backgroundImage: "url(/img/about-bg.png)", backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className="absolute w-full h-full bg-[#3872ab] opacity-50" />
            <div className="relative w-full py-[100px]">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-1.5 md:gap-5 pb-2">
                        <h3 className="inline-block text-[6.5vw] md:text-[64px] whitespace-nowrap">
                            Acerca de
                        </h3>
                        <img className="w-[35vw] md:w-[330px]" src="/img/codylinkfff.png" alt="Codylink - Aprende Programación en Línea" />
                    </div>
                    <h5 className="font-medium text-center md:text-[20px] pb-2">10 años impulsando talentos</h5>
                    <p className="font-light max-w-[620px] text-center md:text-[20px] p-6 md:py-6 md:px-0">En nuestro espacio, nos comprometemos a ofrecerte una experiencia educativa única y consciente en el mundo de la tecnología. Estamos al tanto de las últimas tendencias y avances en el campo de la tecnología, lo que nos permite ofrecerte propuestas de aprendizaje enfocadas y actualizadas.</p>
                </div>
            </div>
        </section>
    )
}

export default About