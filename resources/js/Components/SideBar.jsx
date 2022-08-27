import { useState, useEffect } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineLogout } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { BsFillFilePersonFill } from "react-icons/bs";
import ImageUploadForm from "./ImageUploadForm";

const SideBar = ({ user }) => {
    const [open, setOpen] = useState(true);
    const [loggedUser, setLoggedUser] = useState(user);

    const Menus = [
        { title: "Perfil", icon: <BsFillFilePersonFill />, url: "" },
        { title: "Ver envíos", icon: <FaShippingFast />, url: "" },
        { title: "Accounts", gap: true, icon: <AiOutlineLogout />, url: "" },
        { title: "Schedule ", icon: <AiOutlineLogout />, url: "" },
        { title: "Search", icon: <AiOutlineLogout />, url: "" },
        { title: "Analytics", icon: <AiOutlineLogout />, url: "" },
        { title: "Files ", gap: true, icon: <AiOutlineLogout />, url: "" },
        { title: "Cerrar sesión", icon: <AiOutlineLogout />, url: "" },
    ];

    return (
        <div className="fixed">
            <div
                className={` ${
                    open ? "w-72" : "w-20 "
                } bg-blue-light h-screen p-5  pt-8 relative duration-300`}
            >
                <VscThreeBars
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src=""
                        className={`cursor-pointer duration-500 ${
                            open && "rotate-[360deg]"
                        }`}
                    />
                    <h1
                        className={`text-black origin-left font-medium text-xl duration-200 flex ${
                            !open && "scale-0"
                        }`}
                    >
                        {user.name}
                    </h1>
                </div>
                <ImageUploadForm user={loggedUser} setUser={setLoggedUser} />
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-light-white"
                            } `}
                        >
                            {Menu.icon}
                            <span
                                className={`${
                                    !open && "hidden"
                                } origin-left duration-200`}
                            >
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default SideBar;
