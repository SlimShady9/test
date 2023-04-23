import React from "react";
import logo from "../../imgs/logo.png";
import { Link } from "@inertiajs/inertia-react";

function ApplicationLogo({ className }) {
    return (
        <Link
            href="/"
            className={`m-2 font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
            text-gray-800 transition ease-in-out duration-300 animate-pulse` + className} 
        >
            <img height={150} width={150} src={logo} />
        </Link>
    );
}
export default ApplicationLogo;
