import React from "react";

export default function Button({
    type = "submit",
    className = "",
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={ 
                `inline-flex items-center px-4 py-2 bg-gray-300 border rounded-3xl font-semibold text-xs uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 hover:bg-blue-dark hover:text-gray-light ${
                    processing && "opacity-25"
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
