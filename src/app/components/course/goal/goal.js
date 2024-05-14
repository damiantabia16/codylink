function Goal({ course }) {
    return (
        <section className="relative w-full py-[100px]">
            <div className="relative max-w-[1400px] mx-auto border border-t-[#262829] border-b-[#262829] border-transparent">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 pl-5 p-8">
                        <h3 className="text-[60px] font-bold mb-[20px]">Objetivo</h3>
                        <p className="text-[20px] font-extralight">{course.course_purpose}</p>
                    </div>
                    <div className="w-full md:w-1/2 pr-5 p-8">
                        <h3 className="text-[60px] font-bold mb-[20px]">Público</h3>
                        <p className="text-[20px] font-extralight">{course.course_audience}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Goal