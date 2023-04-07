import React, { useEffect } from "react";
import Button from "@/Components/FormUtils/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/FormUtils/Input";
import Card from "@/Components/Card";
import Label from "@/Components/FormUtils/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <Guest>
            <Card className="mx-auto w-11/12 sm:w-1/2">
            <Head title="Confirm Password" />
            <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                ¿Sigues ahí?  
            </h1>
            <div className="mb-4 text-sm text-gray-600">
                Has estado mucho tiempo inactivo. Por favor confirma tu
                contraseña antes de continuar.
            </div>

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="mt-4">
                    <Label forInput="password" value="Contraseña" />
                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center mt-4">
                    <Button className="mx-auto" processing={processing}>
                        Confirmar
                    </Button>
                </div>
            </form>
            </Card>
        </Guest>
    );
}
