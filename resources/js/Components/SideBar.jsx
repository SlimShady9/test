import { useState } from "react";
import {VscThreeBars} from 'react-icons/vsc'
import {AiOutlineLogout} from 'react-icons/ai'
import {FaShippingFast} from 'react-icons/fa'
import {BsFillFilePersonFill} from 'react-icons/bs'
import ImageUploadForm from "./ImageUploadForm";

const App = () => {
  const [open, setOpen] = useState(false);
  const [loggedUser, setLoggedUser] = useState(user);
  const Menus = [
    { title: "Perfil",icon: <BsFillFilePersonFill/>, url: "" },
    { title: "Ver envíos",icon: <FaShippingFast/>, url: ""  },
    { title: "Accounts", gap: true, icon: <AiOutlineLogout/>, url: ""},
    { title: "Schedule " ,icon: <AiOutlineLogout/>, url: "" },
    { title: "Search",icon:  <AiOutlineLogout/>, url: ""},
    { title: "Analytics" ,icon:  <AiOutlineLogout/>, url: ""},
    { title: "Files ", gap: true, icon:  <AiOutlineLogout/>, url: ""},
    { title: "Cerrar sesión" ,icon: <AiOutlineLogout/>, url: "" },
  ];

  return (
      <aside
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gradient-to-l from-gray-servi to-blue-light h-screen p-5  pt-8 relative duration-300`}
        onMouseOver={() => setOpen(!open)}
        onMouseOut={() => setOpen(!open)}
      >
        <div className="flex gap-x-4 items-center">
        <ImageUploadForm user={loggedUser} setUser={setLoggedUser} />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } hover:bg-gradient-to-r from-blue-servi to-white opacity-80 hover:text-white transition ease-in-out duration-300 hover:scale-110`}
            >
              {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </aside>
  );
};
export default SideBar;
