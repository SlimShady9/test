import React, { useEffect, useRef } from "react";

export default function Input({
    type = "text",
    name,
    defaultValue,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                className={`mt-1 block w-full border focus:border-blue-600 active:border-blue-600 rounded-3xl shadow-md py-1.5 px-3
                    transition-colors hover:border-white ${className ? className : ""}`}
                ref={input}
                defaultValue={defaultValue}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
