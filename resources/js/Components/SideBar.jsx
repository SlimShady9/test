import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineLogout } from "react-icons/ai";
import { FaAngular, FaBookOpen, FaClosedCaptioning, FaMicroscope, FaRegPaperPlane, FaServicestack, FaShippingFast, FaShoppingBag, FaShoppingBasket, FaStore, FaStoreAlt, FaStoreAltSlash, FaTable, FaTumblrSquare, FaUser, FaUsers } from "react-icons/fa";
import { BsFillFilePersonFill } from "react-icons/bs";
import ImageUploadForm from "./ImageUploadForm";
import { Head, Link } from "@inertiajs/inertia-react";
import { fontWeight } from "tailwindcss/defaultTheme";

const SideBar = ({ user }) => {
    const [open, setOpen] = useState(false);
    const [loggedUser, setLoggedUser] = useState(user);
    const Menus = [
        { title: "Perfil", icon: <BsFillFilePersonFill />, url: "profile" },
        { title: "Servicios", gap: true, icon: <FaBookOpen />, url: "services" },
        { title: "Ver envíos", icon: <FaShippingFast />, url: "envios" },
        { title: "Usuarios ", icon: <FaUsers />, url: "users" },
        { title: "Ventas", icon: <FaStore/>, url: "services" },
        { title: "Analíticas ", gap: true, icon: <FaMicroscope />, url: "services" },
        { title: "Cerrar sesión", icon: <FaRegPaperPlane />, url: "services" },
    ];

    return (
        <aside
            className={` ${
                open ? "w-72" : "w-20 "
            } bg-gradient-to-l from-white to-blue-light h-auto p-5 pt-8 relative duration-300 `}
            onMouseOver={() => setOpen(!open)}
            onMouseOut={() => setOpen(!open)}>
            <div className="flex gap-x-4 items-center ">
            <div className="shadow-xl overflow-hidden shadow-gray-dark bg-gradient-to-t from-gray-servi to-gray-dark rounded-full hover:opacity-30">
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
            </div>
            {/*<ImageUploadForm user={loggedUser} setUser={setLoggedUser} />*/}
            </div>
            <ul className="pt-6">
                {Menus.map((Menu, index) => (
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
