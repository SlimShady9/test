import React, { useEffect, useState } from "react";
import Button from "@/Components/Button";
import Container from "@/Components/Container";
import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import Input from "@/Components/FormUtils/Input";
import axios from "axios";
import Label from "@/Components/Label";
import Checkbox from "@/Components/Checkbox";
import Select from "react-select";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function RegisterUser(props) {
    //Reemplazar por opciones en base de datos
    const [user, setUser] = useState([]);
    const optionsTU = [
        { value: "1", label: "Admin" },
        { value: "2", label: "Cliente juridico" },
        { value: "3", label: "Cliente natural" },
    ];
    const optionsTD = [
        { value: "1", label: "Cédula" },
        { value: "2", label: "Pasaporte" },
        { value: "3", label: "Cédula de extranjeria" },
    ];
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
        notifications: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation", "notifications");
        };
    }, []);
    const onHandleChange = (e, param) => {
        let target = e.target?.name || param;
        let value = e.target?.value || e.value;
        setData({
            ...data,
            [target]: value,
        });
        console.log(target);
        console.log(value);
    };

    const submitUser = (e) => {
        //Load address on data
        e.preventDefault();
        axios.post("/api/user", data).then((res) => {
            // Modal de juabito
        });
    };

    useEffect(() => {
        axios.get("/api/user/create").then((res) => {
            setUser(res.data.parameters);
        });
    }, []);

    return (
        <Authenticated {...props}>
            <Head title="RegisterUser" />
            <Card className={"mx-auto my-10"}>
                <form onSubmit={submitUser}>
                    <Container className={"justify-center"}>
                        <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                            Registro de Usuario
                        </h1>
                    </Container>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
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
                            />
                        </div>
                        <div>
                            <Label forInput="surname" value="Apellido (s)" />
                            <Input
                                type="text"
                                name="surname"
                                value={data.surname}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                handleChange={onHandleChange}
                                required
                            />
                        </div>
                        <div>
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
                            />
                        </div>
                        <div>
                            <Label
                                forInput="id_t_user"
                                value="Tipo de Usuario"
                            />
                            <Select
                                name="id_t_user"
                                options={optionsTU}
                                className="mt-1 block w-full"
                                autoComplete="id_t_user"
                                onChange={(e) => onHandleChange(e, "id_t_user")}
                                required
                            ></Select>
                        </div>

                        <div className="col-span-2">
                            <Label forInput="email" value="Email" />
                            <Input
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                handleChange={onHandleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label forInput="phone" value="Teléfono" />
                            <Input
                                type="number"
                                name="phone"
                                value={data.phone}
                                className="mt-1 block w-full"
                                autoComplete="phone"
                                handleChange={onHandleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label forInput="cellphone" value="Celular" />
                            <Input
                                type="text"
                                name="cellphone"
                                value={data.cellphone}
                                className="mt-1 block w-full"
                                autoComplete="cellphone"
                                handleChange={onHandleChange}
                                required
                            />
                        </div>

                        <div>
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
                            />
                        </div>

                        <div>
                            <Label
                                forInput="id_t_doc"
                                value="Tipo de Documento"
                            />
                            <Select
                                name="id_t_doc"
                                options={optionsTD}
                                className="mt-1 block w-full"
                                autoComplete="id_t_doc"
                                onChange={(e) => onHandleChange(e, "id_t_doc")}
                                required
                            ></Select>
                        </div>
                        <div>
                            <Label forInput="password" value="Contraseña" />

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                                required
                            />
                        </div>

                        <div>
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

                        <div className="col-span-2 flex gap-x-2">
                            <Checkbox
                                name="notifications"
                                text="¿Desea recibir notificaciones sobre nuestras nuevas ofertas para usted?"
                            />
                        </div>

                        <div className="flex items-center justify-start mt-4 ">
                            <Button className="bg-red-light">Cancelar</Button>
                        </div>
                        <div className="flex items-center justify-end mt-4 ">
                            <Button className="bg-green-light" type="submit">
                                Generar
                            </Button>
                        </div>
                    </div>
                </form>
            </Card>
        </Authenticated>
    );
}
