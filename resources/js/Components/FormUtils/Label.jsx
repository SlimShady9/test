import React from "react";

export default function Label({ forInput, value, className, children }) {
    return (
        <label
            htmlFor={forInput}
            className={
                `block font-medium text-sm text-blue-primary ` + className
            }
        >
            <b>{value ? value : children}</b>
        </label>
    );
}
