import React from "react";
//Para que haya una sola columna no llenar "col"
function Card({ className, title, children, col , footer}) {
    var add = "";
    if (!!col == true) {
        add = `grid-cols-${col}`;
    }

    return (
        <div
        style={{ flex: "1 50%" }}
        className={`w-full sm:max-w-md px-6 py-4 m-5 bg-white shadow-xl shadow-gray-dark overflow-hidden rounded-lg ${className}`}
        >
            <div className="flex justify-center">
            <h1><b>{title}</b></h1>
            </div>
            <div
                className={`grid gap-4 ${add}`}
            >
            {children}
            </div>
            <div className="flex justify-center">
                {footer}
            </div>
        </div>
    );
}

export default Card;
