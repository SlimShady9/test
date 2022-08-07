import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Container from "@/Components/Container";
import Base from "@/Layouts/Base";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Checkbox from "@/Components/Checkbox";
import Select from "react-select";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
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
        document: "",
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
                            isFocused={true}
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
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label forInput="t_user" value="Tipo de Usuario" />
                        <Select
                            name="t_user"
                            options={options}
                            className="mt-1 block w-full"
                            autoComplete="t_user"
                            isFocused={true}
                            onChange={onHandleChange}
                            required
                        ></Select>
                    </div>

                    <div className="col-span-2">
                        <div className="grid gap-4">
                            <Label forInput="picture" value="Foto de Perfil" />
                            <Uploady
                                name="picture"
                                value={data.picture}
                                className="input mt-1 block w-full"
                                autoComplete="picture"
                                accept="image/*"
                            >
                                <UploadButton>
                                    <Container className="btn grid grid-cols-2 border-gray-200 border-2 ">
                                        <Container className="max-w-36 max-h-36 overflow-hidden">
                                            <UploadPreview />
                                        </Container>
                                        <Container>Subir Imagen</Container>
                                    </Container>
                                </UploadButton>
                            </Uploady>
                        </div>
                    </div>

                    <div>
                        <Label forInput="country" value="País" />
                        <Select
                            name="country"
                            options={options}
                            className="mt-1 block w-full"
                            autoComplete="country"
                            isFocused={true}
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
                            isFocused={true}
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
                            isFocused={true}
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
                            isFocused={true}
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
                            isFocused={true}
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
                            isFocused={true}
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
                            isFocused={true}
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
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label
                            forInput="document"
                            value="Documento de Identidad"
                        />
                        <Input
                            type="text"
                            name="document"
                            value={data.document}
                            className="mt-1 block w-full"
                            autoComplete="document"
                            isFocused={true}
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
                            isFocused={true}
                            required
                        ></Select>
                    </div>

                    <div>
                        <Label forInput="password" value="Password" />

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
                            value="Confirm Password"
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
