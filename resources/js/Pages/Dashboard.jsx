import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import Welcome from "./Welcome";
import Label from "@/Components/FormUtils/Label";
import { TipoDeUsuariosEnum } from "@/Constants/TipoDeUsuariosEnum";
export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className="py-5 px-5">
                <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                </div>
                {(props.auth.user.id_t_user==TipoDeUsuariosEnum.ADMIN) && ( 
                <div className="grid sm:grid-cols-3 text-center">
                <Link
                            href={route("envios")}
                            className="p-3 bg-blue-400"
                        >
                            <div className="p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                    border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200">
                            <Label className={"text-2xl"}>
                                Ventas
                            </Label>
                            </div>
                        </Link>
                    
                        <Link
                            href={route("services")}
                            className="p-3 bg-blue-400"
                        >
                    <div className="p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                    border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200">
                            <Label className={"text-2xl"}>
                                Servicios
                            </Label>
                            </div>
                        </Link>
                        <Link
                            href={route("users")}
                            className="p-3 bg-blue-400"
                        >
                    <div className="p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                    border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200">
                            <Label className={"text-2xl"}>
                                Usuarios
                            </Label>
                            </div>
                        </Link>
                </div>
                )}
                <Welcome
                    hasHeader={false}
                    hasFooter={false}
                />
            </div>
        </Authenticated>
    );
}
