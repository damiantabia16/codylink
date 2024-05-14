"use client"

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function Selector({ selector, isOpen, setIsOpen, setSelectedOption }) {

    const options = [
        "Diseñador/a web",
        "Desarrollador/a frontend",
        "Desarrollador/a backend",
        "Desarrollador/a fullstack"
    ];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className={`absolute left-0 right-0 w-full py-[5px] mx-auto z-[1] transition-all ease-in-out ${isOpen ? "display" : ""}`}>
            <div className="w-full mx-auto bg-[#080d12] border border-[#3872ab] rounded-lg">
                <ul>
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)} className="text-[14px] bg-[#080d12] px-5 py-3 rounded-lg cursor-pointer transition-all ease-in-out hover:brightness-150">
                            <button>{option}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Selector