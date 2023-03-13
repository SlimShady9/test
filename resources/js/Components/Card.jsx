import React from "react";
import Label from "./FormUtils/Label";
//Para que haya una sola columna no llenar "col"
function Card({ className, title, subtitle, children, col, footer }) {
    var add = "";
    if (col >= 1) {
        add += `grid-cols-${col} `;
    }

    return (
        <div
            className={`px-6 py-4 m-4 bg-gradient-to-t from-white to-blue-light shadow-xl shadow-gray-dark overflow-visible rounded-lg ${className}`}
        >
            <div className="grid grid-rows-2 justify-center hover:scale-110 ease-in duration-200">
                <Label className="text-3xl text-blue-primary mx-auto">
                    {title}
                </Label>
                <Label className="text-2xl text-blue-clear mx-auto">
                    {subtitle}
                </Label>
            </div>
            <div className={`grid gap-4 ${add}`}>{children}</div>
            <div className="flex justify-center">{footer}</div>
        </div>
    );
}

export default Card;
