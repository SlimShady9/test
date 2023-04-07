import React from "react";
import Button from "@/Components/FormUtils/Button";
import Guest from "@/Layouts/Guest";
import { GrLogout, GrMail } from "react-icons/gr";
import Card from "@/Components/Card";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm();

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <Guest>
            <Card className="mt-20 mx-auto w-11/12 sm:w-1/2">
            <Head title="Email Verification" />
            <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                Verificación 
            </h1>
            <div className="mb-4 text-sm text-gray-600">
                ¡Bienvenido al Sistema! Antes de ingresar, verifica tu buzón
                de correo, encontrarás un link de acceso enviado por Servicurrier 
                para entrar al sistema.
            </div>
            <div className="mb-4 text-sm text-gray-600">
                Si no recibes el correo puedes presionar el botón de abajo para volverlo a enviar.
            </div>

            {status === "verification-link-sent" && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    Un nuevo link de verificación ha sido enviado a tu correo.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button processing={processing}
                    className="flex gap-4">
                        Reenviar Correo
                        <GrMail/>
                    </Button>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="flex gap-4 underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Cerrar Sesión <GrLogout/>
                    </Link>
                </div>
            </form>
            </Card>
        </Guest>
    );
}
