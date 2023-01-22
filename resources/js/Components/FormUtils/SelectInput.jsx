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
}) {
    return (
        <Select
            defaultInputValue={defaultInputValue}
            className={`mt-1 block w-full border-1 border-gray-border active:border-blue-border rounded
            transition-colors hover:border-gray-400 font-sans tracking-widest text-[16px] ${
                className ? className : ""
            } ${disabled ? "bg-gray-light" : ""}`}
            value={value}
            onChange={onChange}
            options={options}
            isMulti={isMulti}
        ></Select>
    );
}

export default SelectInput;
