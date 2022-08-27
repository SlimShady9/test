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
                <div className="gap-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            DASHBOARD
                            <Link
                                href={route("envios")}
                                className="p-3 bg-blue-400"
                            >
                                Ver envios
                            </Link>
                            <Link
                                href={route("services")}
                                className="p-3 bg-blue-400"
                            >
                                Servicios
                            </Link>
                            <Link
                                href={route("users")}
                                className="p-3 bg-blue-400"
                            >
                                Usuarios
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
