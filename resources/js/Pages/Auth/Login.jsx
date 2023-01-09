import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/FormUtils/Input";
import Label from "@/Components/Label";
import Container from "@/Components/Container";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Base>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <Container className={"justify-center"}>
                    <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                        Ingreso de Usuario
                    </h1>
                </Container>
                <div>
                    <Label forInput="email" value="Nombre de Usuario" />
                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Contraseña" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Recuérdame
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    )}

                    <Button className="ml-4" processing={processing}>
                        Ingresar
                    </Button>
                </div>
            </form>
        </Base>
    );
}
