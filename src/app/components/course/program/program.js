function Program({ course }) {

    const program = course.course_program;

    const firstHalf = program.slice(0, Math.ceil(program.length / 2));
    const secondHalf = program.slice(Math.ceil(program.length / 2));

    return (
        <section className="relative w-full pb-[100px]">
            <div className="relative max-w-[1400px] mx-auto py-10 px-5">
                <div>
                    <h3 className="text-[60px] font-bold leading-tight tracking-tighter mb-[40px]">Programa del curso</h3>
                </div>
                <div className="flex flex-wrap justify-between rounded-lg">
                    <div className="w-full md:w-[50%]">
                        <div className="list-decimal">
                            {firstHalf.map((program, index) => (
                                <p className="py-2" key={index}>{program}</p>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-[50%]">
                        <div className="list-decimal">
                            {secondHalf.map((program, index) => (
                                <p className="py-2" key={index}>{program}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Program