import React from "react";
import CurrencyInput from "react-currency-input-field";

function CurrencyFormInput({
    onValueChange,
    defaultValue,
    className,
    autoComplete,
    disabled = false,
    id,
    decimalsLimit = 2,
    name,
    required = false,
}) {
    return (
        <CurrencyInput
            name={name}
            onValueChange={onValueChange}
            disabled={disabled}
            id={id}
            className={`mt-1 block w-full border-1 border-gray-border active:border-blue-border rounded
            transition-colors hover:border-gray-400 font-sans tracking-widest text-md ${
                className ? className : ""
            } ${disabled ? "bg-gray-light" : ""}`}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            decimalsLimit={decimalsLimit}
            required={required}
            max={9999999999}
        />
    );
}

export default CurrencyFormInput;
