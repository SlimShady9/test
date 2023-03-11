import React from "react";
import { GrEdit, GrAdd, GrAddCircle } from "react-icons/gr";

function ButtonGroup({ listButtons, className }) {
    return (
        <div
            className={
                "inline-flex rounded-md shadow-sm w-full justify-center " +
                className
            }
            role="group"
        >
            {listButtons.map((button, index) => (
                <button
                    key={index}
                    onClick={button.onClick}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-gray-200 ${
                        index === 0 && "rounded-l-lg"
                    } ${
                        index === listButtons.length - 1 && "rounded-r-lg"
                    } hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  transition ease-in-out duration-150 hover:bg-blue-dark hover:text-gray-light`}
                >
                    {button.icon}
                    {button.text}
                </button>
            ))}
        </div>
    );
}

export default ButtonGroup;
