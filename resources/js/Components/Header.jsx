import { VscThreeBars } from "react-icons/vsc";
import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import ApplicationLogo from "./ApplicationLogo";

function NavBar({ className }) {
    let Links = [
        { name: "Inicio", link: "/" },
        { name: "Sobre nosotros", link: "/" },
        { name: "Contáctenos", link: "/" },
        { name: "Registrarse", link: "register" },
        { name: "Ingresar", link: "login" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className="shadow-md bg-gradient-to-r from-white to-blue-light w-full top-0 left-0 sticky z-10">
            <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
            <ApplicationLogo/>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    <VscThreeBars name={open ? "close" : "menu"} />
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? "top-20 " : "top-[-490px]"
                    }`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className="md:ml-8 md:my-0 my-7 transition ease-in-out hover:scale-125"
                        >
                            <Link
                                href={link.link}
                                className="text-gray-800 hover:text-gray-400 duration-500"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
