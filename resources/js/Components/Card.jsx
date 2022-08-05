import React from "react";
//Para que haya una sola columna no llenar "col"
function Card({ className, title, children, col }) {
    var add = "";
    if (!!col == true) {
        add = "grid grid-cols-${col} gap-4";
    }

    return (
        <div
        className={`w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg ${className}`}
        >
            <h1>{title}</h1>
            
            <div
                className={`${add}`}
            >
            {children}
            </div>
        </div>
    );
}

export default Card;
