import { useState } from "react";
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
    FaUserLock,
    FaUsers,
} from "react-icons/fa";
import { BsFillFilePersonFill } from "react-icons/bs";
import ImageUploadForm from "./FormUtils/ImageUploadForm";
import { Head, Link } from "@inertiajs/inertia-react";
import { fontWeight } from "tailwindcss/defaultTheme";
import { TipoDeUsuariosEnum } from "@/Constants/TipoDeUsuariosEnum";
import { getOpciones } from "@/Utils/NavigationOptions";

const SideBar = ({ user }) => {
    const [open, setOpen] = useState(false);
    const [loggedUser, setLoggedUser] = useState(user);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;
    const [secciones, setSecciones] = useState(getOpciones(user.id_t_user));

    const onTouchStart = (e) => {
        setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe || isRightSwipe)
            console.log("swipe", isLeftSwipe ? setOpen(false) : setOpen(true));
        // add your conditional logic here
    };

    return (
        <div
            className={` ${
                open ? "visible w-72" : "relative w-14"
            } bg-gradient-to-l from-white to-blue-light sm:h-auto p-5 pt-8 relative duration-300 hidden sm:block`}
            onMouseOver={() => setOpen(!open)}
            onMouseOut={() => setOpen(!open)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="flex mx-auto items-center">
                <ApplicationLogo />
            </div>
            <ul className="pt-10">
                {secciones.map((Menu, index) => (
                    <Link
                        href={route(Menu.url)}
                        key={index}
                        method={Menu.method}
                        className={`flex rounded-md cursor-pointer pl-1 hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                            Menu.gap ? "mt-9" : "mt-2"
                        } ${
                            index === 0 && "bg-light-white"
                        } hover:bg-gradient-to-r from-blue-servi to-white opacity-80 hover:text-white transition ease-in-out duration-300 hover:scale-110`}
                    >
                        {Menu.icon}
                        <span
                            className={`${
                                !open && "hidden"
                            } origin-left duration-200 p-2`}
                        >
                            {Menu.title}
                        </span>
                    </Link>
                ))}
            </ul>
        </div>
    );
};
export default SideBar;
