import React from "react";

export default function Button({
    type = "submit",
    className = "",
    processing,
    children,
    onClick,
    value,
    name,
}) {
    return (
        <button
            onClick={onClick}
            name={name}
            value={value}
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-gray-900 border rounded-md font-semibold text-xs uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 hover:bg-blue-dark hover:text-gray-light hover:scale-105 ${
                    processing && "opacity-25 "
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
