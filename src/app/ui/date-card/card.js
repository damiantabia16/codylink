import Link from "next/link";
import { MdHourglassFull, MdStart, MdCalendarMonth, MdAccessTimeFilled } from "react-icons/md";

function Card({ date }) {

    const formatDate = (dateString) => {
        const options = { day: "numeric", month: "long" };
        const date = new Date(dateString);
        return date.toLocaleDateString("es-ES", options);
    }
    
    const formatTime = (timeString) => {
        return timeString.slice(0, 5);
    }

    return (
        <div className="flex flex-col gap-10 w-full border border-[#262829] rounded-lg p-5">
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <MdStart className="text-xl" />
                    <p className="text-xl font-semibold">Inicio de cursada</p>
                </div>
                <p className="font-extralight">{formatDate(date.course_start_date)}</p>
            </div>
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <MdStart className="text-xl rotate-[180deg]" />
                    <p className="text-xl font-semibold">Finalización de cursada</p>
                </div>
                <p className="font-extralight">{formatDate(date.course_finish_date)}</p>
            </div>
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <MdHourglassFull className="text-xl" />
                    <p className="text-xl font-semibold">Duración</p>
                </div>
                <p className="font-extralight">{date.course_duration}</p>
            </div>
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <MdCalendarMonth className="text-xl" />
                    <p className="text-xl font-semibold">Días de cursada</p>
                </div>
                <p className="font-extralight">{date.course_days}</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <MdAccessTimeFilled className="text-xl" />
                    <p className="text-xl font-semibold">Horarios de cursada</p>
                </div>
                <div className="flex gap-20">
                    <div>
                        <p className="text-lg font-medium">De</p>
                        <p className="font-extralight">{formatTime(date.course_class_start_hour)}hs</p>
                    </div>
                    <div>
                        <p className="text-lg font-medium">A</p>
                        <p className="font-extralight">{formatTime(date.course_class_end_hour)}hs</p>
                    </div>
                </div>
            </div>
            <button className="w-full whitespace-nowrap border border-[#0c131b] bg-[#0c131b] rounded-lg transition ease-in-out hover:brightness-125">
                <Link className="flex justify-center py-3 px-[20px]" href="/">
                    INSCRIBIRME
                </Link>
            </button>
        </div>
    )
}

export default Card