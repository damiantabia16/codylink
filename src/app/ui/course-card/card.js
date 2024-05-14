import Link from "next/link";

function Card({ course }) {
  return (
    <div className="relative flex flex-col w-[310px] min-h-[460px] mx-auto p-5 bg-[#080d12] border border-[#e9e9e9] rounded-lg">
      <div className="w-full">
        <h3 className="text-[24px] font-semibold uppercase">{course.course_name}</h3>
      </div>
      <div className="w-full mt-[.75rem]">
        <span className="text-[14px] text-[#888]">{course.course_modality}</span>
      </div>
      <div className="w-full p-5 pb-8">
        <ul className="text-[14px] font-extralight list-disc">
          {course.course_topics.map(topic => (
            <li key={topic.topic_id}>{topic.topic}</li>
          ))}
        </ul>
      </div>
      <div className="w-full border-t border-[#262829] pb-5" />
      <div className="w-full ">
        <p className="text-[30px] font-medium">$ {course.course_price} ARS</p>
      </div>
      <div className="flex items-center w-full h-full my-auto">
        <button className="w-full whitespace-nowrap border border-[#3872ab] bg-[#3872ab] rounded-lg transition ease-in-out hover:brightness-125">
          <Link className="flex justify-center py-2 px-[20px]" href={`/cursos/${course.course_path}`}>
            Visitar curso
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Card