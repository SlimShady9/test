import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                        <Link
                            href={route("envios")}
                            className="p-3 bg-blue-400"
                        >
                            <div className="p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                    border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200">
                            Ver envios
                            </div>
                        </Link>
                    
                        <Link
                            href={route("services")}
                            className="p-3 bg-blue-400"
                        >
                    <div className="p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                    border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200">
                            Servicios
                            </div>
                        </Link>
                        <Link
                            href={route("users")}
                            className="p-3 bg-blue-400"
                        >
                    <div className="p-6 bg-white border-spacing-2 bg-gradient-to-t from-white to-gray-servi
                    border-gray-dark shadow-lg shadow-gray-dark overflow-visible rounded-lg hover:scale-110 ease-in duration-200">
                            Usuarios
                            </div>
                        </Link>
                    
                </div>
            </div>
        </Authenticated>
    );
}
