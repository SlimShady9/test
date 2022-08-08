import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-white leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="gap-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                            <Link
                                href={route("envios")}
                                className="p-3 bg-blue-400 text-white"
                            >
                                Ver envios
                            </Link>
                            <Link
                                href={route("services")}
                                className="p-3 bg-blue-400 text-white"
                            >
                                Servicios
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
