import React from "react";

function Card({ className, children }) {
    return (
        <div
            className={`w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg ${className}`}
        >
            {children}
        </div>
    );
}

export default Card;
