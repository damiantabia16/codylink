function TeachersTutors({ course }) {
    return (
        <section className="relative w-full py-[100px]">
            <div className="relative max-w-[1400px] mx-auto px-5">
                <div>
                    <h3 className="text-[28px] font-semibold leading-tight tracking-tighter">Profesores y Tutores</h3>
                </div>
                <div className="relative grid lg:grid-cols-2 gap-8 items-center mt-[50px]">
                    {course.course_teachers_tutors.map((teacher_tutor, index) => (
                        <div key={index} className="flex">
                            <div className="min-w-[150px] min-h-[150px] md:min-w-[250px] md:min-h-[250px] bg-white rounded-full" />
                            <div className="p-5">
                                <h5 className="text-[24px]">{teacher_tutor.course_role}</h5>
                                <p className="text-[18px] font-light">{teacher_tutor.course_teacher_tutor}</p>
                                <span className="font-extralight">{teacher_tutor.course_teacher_tutor_profession}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeachersTutors