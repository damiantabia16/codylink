"use client"

import { MdKeyboardArrowDown } from "react-icons/md";

function Accordion({ data, isOpen, toggleAccordion }) {

    return (
        <div className="w-full lg:w-[60%]">
            <div onClick={() => toggleAccordion(data.id)} className={`flex items-center justify-between bg-[#080d12] py-5 md:p-5 border border-transparent cursor-pointer transition-all ease-in-out md:hover:brightness-150 ${!isOpen ? 'border-b-[#262829]' : ''}`}>
                <h4 className="md:text-[24px]">{data.faq_title}</h4>
                <MdKeyboardArrowDown className={`text-[36px] text-[#3872ab] transition-all ease-in-out ${isOpen ? 'rotate-[180deg]' : ''}`} />
            </div>
            {isOpen && (
                <div className="md:text-[20px] pt-2 pb-5 border border-b-[#262829] border-transparent">
                    <p className="text-[#888] md:p-5">{data.faq_content}</p>
                </div>
            )}
        </div>
    )
}

export default Accordion