import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import Welcome from "./Welcome";
import Label from "@/Components/FormUtils/Label";
import { TipoDeUsuariosEnum } from "@/Constants/TipoDeUsuariosEnum";
import {
    FaBookOpen,
    FaUserLock,
    FaChartArea,
    FaStore,
    FaUsers,
    FaHome,
    FaRegPaperPlane,
} from "react-icons/fa";
export default function Dashboard(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />

            <div className="py-5 px-5">
                <div className="w-full text-center">
                <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                            DASHBOARD
                        </h1>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-4 max-w-7xl mx-auto md:px-6 lg:px-8"></div>
                {props.auth.user.id_t_user == TipoDeUsuariosEnum.ADMIN && (
                    <div className="grid md:grid-cols-3 text-center">
                        <Link href={route("services")} className="w-3/4 sm:w-full mx-auto flex p-3 bg-blue-400 text-center">
                            <div
                                className="flex w-full p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                            border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200"
                            >
                                <div className="flex mx-auto gap-4">
                                    <Label className={"text-2xl text-center"}>Servicios</Label>
                                    <span className="grid self-center">
                                        <FaBookOpen className="scale-150"/>
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <Link href={route("users")} className="w-3/4 sm:w-full mx-auto flex p-3 bg-blue-400 text-center">
                            <div
                                className="flex w-full p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                            border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200"
                            >
                                <div className="flex mx-auto gap-4">
                                    <Label className={"text-2xl text-center"}>Usuarios</Label>
                                    <span className="grid self-center">
                                        <FaUsers className="scale-150"/>
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <Link href={route("sales")} className="w-3/4 sm:w-full mx-auto flex p-3 bg-blue-400 text-center">
                            <div
                                className="flex w-full p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                            border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200"
                            >
                                <div className="flex mx-auto gap-4">
                                    <Label className={"text-2xl text-center"}>Contabilidad</Label>
                                    <span className="grid self-center">
                                        <FaStore className="scale-150"/>
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <Link href={route("graph")} className="w-3/4 sm:w-full mx-auto flex p-3 bg-blue-400 text-center">
                            <div
                                className="flex w-full p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                            border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200"
                            >
                                <div className="flex mx-auto gap-4">
                                    <Label className={"text-2xl text-center"}>Gráficas</Label>
                                    <span className="grid self-center">
                                        <FaChartArea className="scale-150"/>
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <Link href={route("inactiveUsers")} className="w-3/4 sm:w-full mx-auto flex p-3 bg-blue-400 text-center">
                            <div
                                className="flex w-full p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                            border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200"
                            >
                                <div className="flex mx-auto gap-4">
                                    <Label className={"text-2xl text-center"}>Inactivos</Label>
                                    <span className="grid self-center">
                                        <FaUserLock className="scale-150"/>
                                    </span>
                                </div>
                            </div>
                        </Link>

                        
                        
                    </div>
                )}
                <Welcome hasHeader={false} hasFooter={false} />
            </div>
        </Authenticated>
    );
}
