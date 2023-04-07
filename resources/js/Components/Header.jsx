import { VscThreeBars } from "react-icons/vsc";
import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import ApplicationLogo from "./ApplicationLogo";
import Label from "./FormUtils/Label";
import barras from "../../imgs/Barras.png";
import { GrHome, GrContact, GrLogin, GrEdit } from "react-icons/gr";

function NavBar({ className }) {
    let Links = [
        { name: "Inicio", link: "/", icon: <GrHome className="mr-0" /> },
        {
            name: "Contáctenos",
            link: "/",
            icon: <GrContact className="mr-0" />,
        },
        {
            name: "Registrarse",
            link: "register",
            icon: <GrEdit className="mr-0" />,
        },
        { name: "Ingresar", link: "login", icon: <GrLogin className="mr-0" /> },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className="shadow-md bg-gradient-to-r from-white to-blue-light w-full top-0 left-0 z-10">
            <div className="md:flex justify-center">
                <div className="flex m-5">
                    <ApplicationLogo />
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
                >
                    <VscThreeBars name={open ? "close" : "menu"} />
                </div>
                <img
                    className="hidden md:block"
                    height={200}
                    width={200}
                    src={barras}
                />
                <ul
                    className={`grid grid-cols-${
                        Links.length
                    } mx-10 bg-white bg-opacity-95 rounded-xl lg:bg-opacity-0 md:bg-opacity-0 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? "top-20 " : "top-[-490px]"
                    }`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className="my-auto transition ease-in-out cursor-pointer hover:scale-110 hover:underline"
                        >
                            <Link
                                href={link.link}
                                className="text-gray-800 hover:text-gray-400 duration-500"
                            >
                                <div className="flex m-4 gap-2">
                                    {link.icon}
                                    <Label>{link.name}</Label>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
