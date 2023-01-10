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
}) {
    return (
        <CurrencyInput
            onValueChange={onValueChange}
            disabled={disabled}
            id={id}
            className={`mt-1 block w-full border-1 border-gray-dark active:border-blue-600 rounded-3xl py-1.5 px-3
    transition-colors hover:border-gray-400 ${className ? className : ""} ${
                disabled ? "bg-gray-light" : ""
            }`}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            decimalsLimit={decimalsLimit}
        />
    );
}

export default CurrencyFormInput;
