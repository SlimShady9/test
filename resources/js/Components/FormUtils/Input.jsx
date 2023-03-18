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
    minLength,
    maxLength,
    onlyLetters = false, // including spaces
    alpaNumeric = false, // ecxluding spaces
    onlyNumbers = false,
    email = false,
}) {
    var pattern = null;
    if (alpaNumeric) {
        pattern = "[a-zA-Z0-9 ]*";
    } else if (onlyLetters) {
        pattern = "[a-zA-Z ]*";
    } else if (email) {
        pattern = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$";
    } else if (onlyNumbers) {
        pattern = "[0-9]*";
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
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                disabled={disabled}
                ref={ref}
                pattern={pattern}
                min={min}
                max={max}
                value={defaultValue}
                minLength={minLength}
                maxLength={maxLength}
            />
        </div>
    );
}
