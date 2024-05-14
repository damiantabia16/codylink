import Slider from "@/app/ui/courses-slider/courses-slider"

function MoreCourses() {
    return (
        <>
            <section className="relative w-full pt-[100px]">
                <div className="relative max-w-[1400px] mx-auto px-5">
                    <div>
                        <h3 className="text-[60px] font-bold leading-tight tracking-tighter">Otros cursos</h3>
                    </div>
                </div>
                <Slider />
            </section>
        </>
    )
}

export default MoreCourses