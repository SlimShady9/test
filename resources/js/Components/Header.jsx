import { VscThreeBars } from "react-icons/vsc";
import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";

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
        <div className="shadow-md w-full sticky top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div
                    className="font-extrabold text-2xl cursor-pointer flex items-center
      text-gray-800"
                >
                    SERVICURRIER
                    <div
                        onClick={() => setOpen(!open)}
                        className="text-3xl cursor-pointer absolute right-8 md:hidden grid self-center"
                    >
                        <VscThreeBars name={open ? "close" : "menu"} />
                    </div>
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? "top-20 " : "top-[-490px]"
                    }`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className="md:ml-8 text-xl md:my-0 my-7"
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
