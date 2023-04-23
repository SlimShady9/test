import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import Sidebar from "@/Components/SideBar";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { ToastContainer } from "react-toastify";
import nombre from "../../imgs/nombre.png";
import "react-toastify/dist/ReactToastify.css";
import trasnportes from "../../imgs/transportes.png";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement,
    ArcElement,
} from "chart.js";
import { getOpciones } from "@/Utils/NavigationOptions";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ArcElement,
    BarElement
);

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <div className="flex min-h-screen bg-">
            <img
                className="fixed w-full inset-y-3/4 sm:inset-y-2/4 -z-10 scale-125 opacity-50"
                src={trasnportes}
            />
            <ToastContainer theme="light" draggable position="top-center" />
            <Sidebar user={auth.user} />
            <main className="flex-1 overflow-auto">
                <nav className="bg-gradient-to-r from-white to-blue-light border-b border-gray-light">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        className={
                                            "text-gray-800 hover:text-gray-400 duration-500"
                                        }
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Dashboard
                                    </NavLink>
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="flex ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {auth.user.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Cerrar Sesión
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex gap-4  items-center justify-center p-2 rounded-md hover:bg-gray-dark focus:outline-none focus:bg-gray-light focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <div className="my-auto justify-start">
                                        <img src={nombre} className="h-10" />
                                    </div>
                                    <svg
                                        className="h-6 w-6 justify-end"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">
                                    {auth.user.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {auth.user.email}
                                </div>
                            </div>

                            <div className="mt-3  space-y-1">
                                {getOpciones(auth.user.id_t_user).map(
                                    (Nav, index) => (
                                        <div className="shadow-lg" key={index}>
                                            <ResponsiveNavLink
                                                key={index}
                                                method={Nav.method}
                                                href={route(Nav.url)}
                                                as="button"
                                            >
                                                <div className="flex gap-2 align-middle m-1">
                                                    <span className="grid self-center">
                                                        {Nav.icon}
                                                    </span>
                                                    {Nav.title}
                                                </div>
                                            </ResponsiveNavLink>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
                {children}
            </main>
        </div>
    );
}
