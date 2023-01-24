import React from "react";
import logo from "../../imgs/logo.png";

function ApplicationLogo({ className }) {
    return (
        <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
            text-gray-800 transition ease-in-out duration-300 animate-pulse"
        >
            <img height="150" width="150" src={logo} />
        </div>
    );
}
export default ApplicationLogo;
