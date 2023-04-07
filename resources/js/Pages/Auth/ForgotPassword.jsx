import React from "react";
import Button from "@/Components/FormUtils/Button";
import Card from "@/Components/Card";
import Guest from "@/Layouts/Guest";
import Label from "@/Components/FormUtils/Label";
import Input from "@/Components/FormUtils/Input";
import { GrMail } from "react-icons/gr";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <Guest>
            <Card className="mt-20 mx-auto w-11/12 sm:w-1/2">
            <Head title="Forgot Password" />
            <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                ¿Olvidaste tu contraseña?  
            </h1>
            <div className="mb-4 text-sm text-gray-500 leading-normal">
                No hay problema,
                ingresa tu correo electrónico asociado y te enviaremos
                un link para que cambies tu contraseña por una nueva.
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <div className="flex items-center mt-4">
                    <Button className="mx-auto flex gap-4" processing={processing}>
                        Enviar Enlace de Reinicio de Contraseña
                        <GrMail/>
                    </Button>
                </div>
            </form>
            </Card>
        </Guest>
    );
}
