import React from "react";

export default function Label({ forInput, value, className, children }) {
    return (
        <label
            htmlFor={forInput}
            className={
                `font-medium text-md text-blue-primary ` + className
            }
        >
            <b>{value ? value : children}</b>
        </label>
    );
}
