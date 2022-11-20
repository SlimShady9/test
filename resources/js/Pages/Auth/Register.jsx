import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Container from "@/Components/Container";
import Base from "@/Layouts/Base";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Checkbox from "@/Components/Checkbox";
import Select from "react-select";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register() {
    //Reemplazar por opciones en base de datos
    const options = [
        { value: "particular", label: "Particular" },
        { value: "empresa", label: "Empresa" },
        { value: "proveedor", label: "Proveedor" },
    ];
    //Constantes de la página
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        name: "",
        surname: "",
        t_user: "",
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
        t_document: "",
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

        post(route("register"));
    };

    return (
        <Base>
            <Head title="Register" />

            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
            <Container className={"justify-center"}>
            <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">Registro de Usuario</h1>
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
                        <Label forInput="username" value="Nombre de Usuario" />
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
                        <Label forInput="t_user" value="Tipo de Usuario" />
                        <Select
                            name="country"
                            options={options}
                            className="mt-1 block w-full"
                            autoComplete="country"
                            required
                        ></Select>
                    </div>

                    <div>
                        <Label forInput="country" value="País" />
                        <Select
                            name="country"
                            options={options}
                            className="mt-1 block w-full"
                            autoComplete="country"
                            
                            required
                        ></Select>
                    </div>

                    <div>
                        <Label forInput="city" value="Ciudad" />
                        <Select
                            name="city"
                            options={options}
                            className="mt-1 block w-full"
                            autoComplete="city"
                            
                            required
                        ></Select>
                    </div>

                    <div>
                        <Label forInput="region" value="Barrio/Localidad" />
                        <Input
                            type="text"
                            name="region"
                            value={data.region}
                            className="mt-1 block w-full"
                            autoComplete="region"
                            
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label forInput="address" value="Dirección" />
                        <Input
                            type="text"
                            name="address"
                            value={data.address}
                            className="mt-1 block w-full"
                            autoComplete="address"
                            
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label
                            forInput="address_detail"
                            value="Detalles de la Dirección"
                        />
                        <Input
                            type="text"
                            name="address_detail"
                            value={data.address_detail}
                            className="mt-1 block w-full"
                            autoComplete="address_detail"
                            
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label forInput="postal_code" value="Código Postal" />
                        <Input
                            type="text"
                            name="postal_code"
                            value={data.postal_code}
                            className="mt-1 block w-full"
                            autoComplete="postal_code"
                            
                            handleChange={onHandleChange}
                            required
                        />
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
                            type="text"
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
                        <Label forInput="doc" value="Documento de Identidad" />
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
                            forInput="t_document"
                            value="Tipo de Documento"
                        />
                        <Select
                            name="t_document"
                            options={options}
                            className="mt-1 block w-full"
                            autoComplete="t_document"
                            
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
                            handleChange={onHandleChange}
                            text="¿Desea recibir notificaciones sobre nuestras nuevas ofertas para usted?"
                        />
                    </div>

                    <div className="col-span-2 flex items-center justify-end mt-4 ">
                        <Link
                            href={route("login")}
                            className="underline text-sm text-gray-600 hover:text-gray"
                        >
                            ¿Ya se ha registrado?
                        </Link>

                        <Button className="ml-4" processing={processing}>
                            Registrarme
                        </Button>
                    </div>
                </div>
            </form>
        </Base>
    );
}
