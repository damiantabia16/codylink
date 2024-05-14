import courses from "@/app/json/courses.json";
import Banner from "@/app/components/course/banner/banner";
import Goal from "@/app/components/course/goal/goal";
import Program from "@/app/components/course/program/program";
import TeachersTutors from "@/app/components/course/teachers-tutors/teachers-tutors";
import DateSelect from "@/app/components/course/date-select/date-select";
import PaymentMethods from "@/app/components/course/payment-methods/payment-methods";
import MoreCourses from "@/app/components/course/more-courses/more-courses";
import FixedEnrol from "@/app/components/course/fixed-enrol/fixed-enrol";

export function generateMetadata({ params }) {

    const course = courses.find((course) => course.course_path === params.courseName);

    return {
        title: `Curso de ${course.course_name}`
    }
}

function page({ params }) {

    const course = courses.find((course) => course.course_path === params.courseName);

    return (
        <>
            <Banner course={course} />
            <Goal course={course} />
            <Program course={course} />
            <PaymentMethods />
            <TeachersTutors course={course} />
            <DateSelect course={course} />
            <MoreCourses />
            <FixedEnrol course={course} />
        </>
    )
}

export default page