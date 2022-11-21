import React from "react";
//Para que haya una sola columna no llenar "col"
function Card({ className, title, children, col, footer }) {
    var add = "";
    if (col >= 1) {
        add += `grid-cols-${col} `;
    }

    return (
        <div
            className={`w-full sm:max-w-md px-6 py-4 m-4 bg-gradient-to-t from-white to-blue-light shadow-xl shadow-gray-dark overflow-visible rounded-lg ${className}`}
        >
            <div className="flex justify-center hover:scale-110 ease-in duration-200">
                <h1>
                    <b>{title}</b>
                </h1>
            </div>
            <div className={`grid gap-4 ${add}`}>{children}</div>
            <div className="flex justify-center">{footer}</div>
        </div>
    );
}

export default Card;
