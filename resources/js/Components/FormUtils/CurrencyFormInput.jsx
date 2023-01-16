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
            className={`mt-1 block w-full border-1 border-gray-border active:border-blue-border rounded
            transition-colors hover:border-gray-400 font-sans tracking-widest text-lg ${
                className ? className : ""
            } ${disabled ? "bg-gray-light" : ""}`}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            decimalsLimit={decimalsLimit}
        />
    );
}

export default CurrencyFormInput;