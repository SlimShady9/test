import { useState } from "react";
import {VscThreeBars} from 'react-icons/vsc'
import {AiOutlineLogout} from 'react-icons/ai'
import {FaShippingFast} from 'react-icons/fa'
import {BsFillFilePersonFill} from 'react-icons/bs'
const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Perfil",icon: <BsFillFilePersonFill/> },
    { title: "Ver envíos",icon: <FaShippingFast/>  },
    { title: "Accounts", gap: true, icon: <AiOutlineLogout/>},
    { title: "Schedule " ,icon: <AiOutlineLogout/> },
    { title: "Search",icon:  <AiOutlineLogout/>},
    { title: "Analytics" ,icon:  <AiOutlineLogout/>},
    { title: "Files ", gap: true, icon:  <AiOutlineLogout/>},
    { title: "Cerrar sesión" ,icon: <AiOutlineLogout/> },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <VscThreeBars className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}/>
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Bienvenido "usuario"
          </h1>
        </div>
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
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;