import React, { useState } from "react";
import Button from "@/Components/FormUtils/Button";
import Container from "@/Components/Container";
import { toast } from "react-toastify";
import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import Input from "@/Components/FormUtils/Input";
import axios from "axios";
import Label from "@/Components/FormUtils/Label";
import { Head } from "@inertiajs/inertia-react";
import {
    TipoDocumentoEnum,
    toStringTipoDocumentoEnum,
} from "@/Constants/TipoDocumentoEnum";
import {
    TipoDeUsuariosEnum,
    toStringTipoDeUsuariosEnum,
} from "@/Constants/TipoDeUsuariosEnum";
import SelectInput from "@/Components/FormUtils/SelectInput";

export default function RegisterUser(props) {
    const [optionsTypeDoc, setoptionsTypeDoc] = useState(
        Object.keys(TipoDocumentoEnum).map((key) => ({
            value: TipoDocumentoEnum[key],
            label: toStringTipoDocumentoEnum(TipoDocumentoEnum[key]),
        }))
    );

    const [optionsTypeUser, setOptionsTypeUser] = useState(
        Object.keys(TipoDeUsuariosEnum).map((key) => ({
            value: TipoDeUsuariosEnum[key],
            label: toStringTipoDeUsuariosEnum(TipoDeUsuariosEnum[key]),
        }))
    );
    //Constantes de la página
    const [data, setData] = useState({
        username: "",
        name: "",
        surname: "",
        id_t_user: "",
        picture: "",
        country: "",
        city: "",
        region: "",
        address: "",
        address_detail: "",
        postal_code: "",
        cellphone: "",
        phone: "",
        doc: "",
        id_t_doc: "",
        email: "",
        password: "",
        password_confirmation: "",
        //notifications: "",
    });

    const onHandleChange = (e, param) => {
        let target = e.target?.name || param;
        let value = e.target?.value || e.value;
        setData({
            ...data,
            [target]: value,
        });
    };

    const submitUser = (e) => {
        //Load address on data
        e.preventDefault();

        if (data.password !== data.password_confirmation) {
            toast.error("Las contraseñas no coinciden");
            return;
        }

        axios
            .post("/api/user", data)
            .then((res) => {
                toast.success("Usuario registrado correctamente");
                window.location.href = "/users";
            })
            .catch((err) =>
                toast.error(
                    "Error al registrar el usuario. Por favor valide los campos"
                )
            );
    };

    return (
        <Authenticated {...props}>
            <Head title="RegisterUser" />
            <div>
                <Card className={"mx-auto my-10"}>
                    <form onSubmit={submitUser}>
                        <Container className={"justify-center"}>
                            <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                                Registro de Usuario
                            </h1>
                        </Container>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-1/2 w-full">
                                    <Label forInput="name" value="Nombre (s)" />
                                    <Input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                        minLength={3}
                                        maxLength={50}
                                        onlyLetters={true}
                                    />
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <Label
                                        forInput="surname"
                                        value="Apellido (s)"
                                    />
                                    <Input
                                        type="text"
                                        name="surname"
                                        value={data.surname}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        handleChange={onHandleChange}
                                        required
                                        minLength={3}
                                        maxLength={50}
                                        onlyLetters={true}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label forInput="email" value="Email" />
                                <Input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    handleChange={onHandleChange}
                                    required
                                    email={true}
                                />
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-1/2">
                                    <Label
                                        forInput="username"
                                        value="Nombre de Usuario"
                                    />
                                    <Input
                                        type="text"
                                        name="username"
                                        value={data.username}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        handleChange={onHandleChange}
                                        required
                                        minLength={8}
                                        maxLength={15}
                                        alpaNumeric={true}
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <Label
                                        forInput="id_t_user"
                                        value="Tipo de usuario"
                                    />
                                    <SelectInput
                                        name="id_t_user"
                                        options={optionsTypeUser}
                                        required={true}
                                        onChange={(e) =>
                                            onHandleChange(e, "id_t_user")
                                        }
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="md:w-1/2">
                                    <Label forInput="phone" value="Teléfono" />
                                    <Input
                                        type="text"
                                        name="phone"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        autoComplete="phone"
                                        handleChange={onHandleChange}
                                        required
                                        onlyNumbers={true}
                                        minLength={4}
                                        maxLength={30}
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <Label
                                        forInput="cellphone"
                                        value="Celular"
                                    />
                                    <Input
                                        type="text"
                                        name="cellphone"
                                        value={data.cellphone}
                                        className="mt-1 block w-full"
                                        autoComplete="cellphone"
                                        handleChange={onHandleChange}
                                        required
                                        onlyNumbers={true}
                                        minLength={4}
                                        maxLength={30}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="md:w-1/2">
                                    <Label
                                        forInput="doc"
                                        value="Documento de Identidad"
                                    />
                                    <Input
                                        type="text"
                                        name="doc"
                                        value={data.doc}
                                        className="mt-1 block w-full"
                                        autoComplete="doc"
                                        handleChange={onHandleChange}
                                        required
                                        onlyNumbers={true}
                                        minLength={4}
                                        maxLength={30}
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <Label
                                        forInput="id_t_doc"
                                        value="Tipo de Documento"
                                    />
                                    <SelectInput
                                        name="id_t_doc"
                                        options={optionsTypeDoc}
                                        className="mt-1 block w-full"
                                        autoComplete="id_t_doc"
                                        onChange={(e) =>
                                            onHandleChange(e, "id_t_doc")
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 md:flex-row">
                                <div className="md:w-1/2">
                                    <Label
                                        forInput="password"
                                        value="Contraseña"
                                    />
                                    <Input
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        handleChange={onHandleChange}
                                        required
                                        minLength={8}
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <Label
                                        forInput="password_confirmation"
                                        value="Confirmar Constraseña"
                                    />
                                    <Input
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* 
                            <div className="col-span-2 flex gap-x-2">
                                <Checkbox
                                    name="notifications"
                                    text="¿Desea recibir notificaciones sobre nuestras nuevas ofertas para usted?"
                                />
                            </div>
                            */}

                            <div className="flex justify-center">
                                <Button
                                    className="bg-green-light"
                                    type="submit"
                                >
                                    Guardar
                                </Button>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </Authenticated>
    );
}
