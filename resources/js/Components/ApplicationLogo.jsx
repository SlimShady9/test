import React from "react";
import logo from "../../imgs/logo.png";

function ApplicationLogo({ className, classNameImg }) {
    return (
        <div
            className={`font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
            text-gray-800` + className} 
        >
            <img className={classNameImg} src={logo} />
        </div>
    );
}
export default ApplicationLogo;
