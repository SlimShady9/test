import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineLogout } from "react-icons/ai";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {
    FaAngular,
    FaBookOpen,
    FaClosedCaptioning,
    FaMicroscope,
    FaRegPaperPlane,
    FaServicestack,
    FaShippingFast,
    FaShoppingBag,
    FaShoppingBasket,
    FaStore,
    FaStoreAlt,
    FaStoreAltSlash,
    FaTable,
    FaTumblrSquare,
    FaUser,
    FaUsers,
} from "react-icons/fa";
import { BsFillFilePersonFill } from "react-icons/bs";
import ImageUploadForm from "./FormUtils/ImageUploadForm";
import { Head, Link } from "@inertiajs/inertia-react";
import { fontWeight } from "tailwindcss/defaultTheme";
import { TipoDeUsuariosEnum } from "@/Constants/TipoDeUsuariosEnum";

const SideBar = ({ user }) => {
    const seccionAdmin = [
        { title: "Usuarios ", icon: <FaUsers />, url: "users" },
        { title: "Ventas", icon: <FaStore />, url: "graph" ,
            gap: true
        },
        {
            title: "Analíticas ",
            icon: <FaMicroscope />,
            url: "services",
        },
    ];

    const seccionTodos = [
        { title: "Perfil", icon: <BsFillFilePersonFill />, url: "profile" },
        {
            title: "Servicios",
            gap: true,
            icon: <FaBookOpen />,
            url: "services",
        },
        //{ title: "Ver envíos", icon: <FaShippingFast />, url: "envios" },
        
    ];

    const seccionExtras = [
        {
            title: "Cerrar sesión",
            icon: <FaRegPaperPlane />,
            url: "services",
            gap: true,
            href: route("logout"),
            method: "post",
        },
    ];

    const [open, setOpen] = useState(false);
    const [loggedUser, setLoggedUser] = useState(user);

    return (
        <aside
            className={` ${
                open ? "w-72" : "w-20 "
            } bg-gradient-to-l from-white to-blue-light h-auto p-5 pt-8 relative duration-300 `}
            onMouseOver={() => setOpen(!open)}
            onMouseOut={() => setOpen(!open)}
        >
            <div className="flex gap-x-4 items-center ">
                <ApplicationLogo />
            </div>
            <ul className="pt-6">
                {seccionTodos.map((Menu, index) => (
                    <Link
                    href={route(Menu.url)}
                    key={index}
                    className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                    ${Menu.gap ? "mt-9" : "mt-2"} ${
                        index === 0 && "bg-light-white"
                    } hover:bg-gradient-to-r from-blue-servi to-white opacity-80 hover:text-white transition ease-in-out duration-300 hover:scale-110`}
                >
                    {Menu.icon}
                    <span
                        className={`${
                            !open && "hidden"
                        } origin-left duration-200`}
                    >
                        {Menu.title}
                    </span>
                </Link>
                ))}
                {user.id_t_user === TipoDeUsuariosEnum.ADMIN &&
                    seccionAdmin.map((Menu, index) => (
                        <Link
                            href={route(Menu.url)}
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                            ${Menu.gap ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-light-white"
                            } hover:bg-gradient-to-r from-blue-servi to-white opacity-80 hover:text-white transition ease-in-out duration-300 hover:scale-110`}
                        >
                            {Menu.icon}
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-200`}
                            >
                                {Menu.title}
                            </span>
                        </Link>
                    ))}
                {user.id_t_user === TipoDeUsuariosEnum.ADMIN &&
                    seccionExtras.map((Menu, index) => (
                        <Link
                            href={route(Menu.url)}
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                            ${Menu.gap ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-light-white"
                            } hover:bg-gradient-to-r from-blue-servi to-white opacity-80 hover:text-white transition ease-in-out duration-300 hover:scale-110`}
                        >
                            {Menu.icon}
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-200`}
                            >
                                {Menu.title}
                            </span>
                        </Link>
                    ))}
            </ul>
        </aside>
    );
};
export default SideBar;
