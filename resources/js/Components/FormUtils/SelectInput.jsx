import React from "react";
import Select from "react-select";

function SelectInput({
    value,
    onChange,
    options,
    className,
    disabled,
    defaultInputValue,
    isMulti,
    name,
    required = false,
    placeholder,
}) {
    return (
        <Select
            name={name}
            defaultInputValue={defaultInputValue}
            className={`mt-1 block w-full border-1 border-gray-border active:border-blue-border rounded
            transition-colors hover:border-gray-400 font-sans tracking-widest text-[16px] ${
                className ? className : ""
            } ${disabled ? "bg-gray-light" : ""}`}
            value={value}
            onChange={onChange}
            options={options}
            isMulti={isMulti}
            required={required}
            placeholder={placeholder || "Seleccione una opción..."}
            isDisabled={disabled}
        />
    );
}

export default SelectInput;
