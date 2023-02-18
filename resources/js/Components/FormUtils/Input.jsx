import React from "react";

export default function Input({
    type = "text",
    name,
    defaultValue,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    disabled = false,
    ref,
    min,
    max,
    onlyLetters=false, // including spaces
    alpaNumeric=false, // ecxluding spaces
}) {
    var pattern = "/.*/";
    if (alpaNumeric) {
        pattern = "[a-zA-Z0-9]*";
    } else if (onlyLetters) {
        pattern ="[a-zA-Z ]*";
    }
    return (
        <div>
            <input
                type={type}
                name={name}
                className={`mt-1 block w-full border-1 border-gray-border  rounded py-1.5 px-3
                    transition-colors hover:border-gray-400 font-sans tracking-widest text-md ${
                        className ? className : ""
                    } ${
                    disabled ? "bg-gray-light" : "active:border-blue-border"
                }`}
                defaultValue={defaultValue}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                disabled={disabled}
                ref={ref}
                pattern={ onlyLetters == true ? "[a-zA-Z ]*" : pattern}
                min={min}
                max={max}
            />
        </div>
    );
}
