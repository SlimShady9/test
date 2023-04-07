import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import Welcome from "./Welcome";
import Label from "@/Components/FormUtils/Label";
import { TipoDeUsuariosEnum } from "@/Constants/TipoDeUsuariosEnum";
export default function Dashboard(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />

            <div className="py-5 px-5">
                <div className="text-center">
                <Label className="text-5xl text-blue-servi">
                    DASHBOARD
                </Label>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-4 max-w-7xl mx-auto sm:px-6 lg:px-8"></div>
                {props.auth.user.id_t_user == TipoDeUsuariosEnum.ADMIN && (
                    <div className="grid sm:grid-cols-5 text-center">
                        <Link href={route("services")} className="w-3/4 sm:w-full mx-auto flex p-3 bg-blue-400 text-center">
                            <div
                                className="w-full text-center p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                            border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200"
                            >
                                <Label className={"text-2xl text-center"}>Servicios</Label>
                            </div>
                        </Link>
                        <Link href={route("users")} className="w-3/4 sm:w-full mx-auto flex p-3 bg-blue-400 text-center">
                            <div
                                className="w-full text-center p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                            border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200"
                            >
                                <Label className={"text-2xl text-center"}>Usuarios</Label>
                            </div>
                        </Link>
                        <Link href={route("sales")} className="w-3/4 sm:w-full mx-auto flex p-3 bg-blue-400 text-center">
                            <div
                                className="w-full text-center p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                            border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200"
                            >
                                <Label className={"text-2xl text-center"}>Ventas</Label>
                            </div>
                        </Link>
                        <Link href={route("graph")} className="w-3/4 sm:w-full mx-auto flex p-3 bg-blue-400 text-center">
                            <div
                                className="w-full text-center p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                            border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200"
                            >
                                <Label className={"text-2xl text-center"}>Gráficas</Label>
                            </div>
                        </Link>
                        <Link href={route("inactiveUsers")} className="w-3/4 sm:w-full mx-auto flex p-3 bg-blue-400 text-center">
                            <div
                                className="w-full text-center p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                            border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200"
                            >
                                <Label className={"text-2xl text-center"}>Inactivos</Label>
                            </div>
                        </Link>

                        
                        
                    </div>
                )}
                <Welcome hasHeader={false} hasFooter={false} />
            </div>
        </Authenticated>
    );
}
