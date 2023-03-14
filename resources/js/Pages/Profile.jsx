import { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import Button from "@/Components/FormUtils/Button";
import ImageUploadForm from "@/Components/FormUtils/ImageUploadForm";
import Container from "@/Components/Container";
import Input from "@/Components/FormUtils/Input";
import SelectInput from "@/Components/FormUtils/SelectInput";
import Label from "@/Components/FormUtils/Label";
import {
    toStringTipoDocumentoEnum,
    TipoDocumentoEnum,
} from "@/Constants/TipoDocumentoEnum";
import {
    toStringTipoDeUsuariosEnum,
    TipoDeUsuariosEnum,
} from "@/Constants/TipoDeUsuariosEnum";
import { updateUsers } from "@/Utils/FetchUsers";

export default function Profile(props) {
    const [data, setData] = useState({});
    const optionsTU = Object.keys(TipoDeUsuariosEnum).map((key) => ({
        label: toStringTipoDeUsuariosEnum(TipoDeUsuariosEnum[key]),
        value: TipoDeUsuariosEnum[key],
    }));
    const optionsTD = Object.keys(TipoDocumentoEnum).map((key) => ({
        label: toStringTipoDocumentoEnum(TipoDocumentoEnum[key]),
        value: TipoDocumentoEnum[key],
    }));

    const [loggedUser, setLoggedUser] = useState(props.auth.user);

    const onChange = (e) => {
        setLoggedUser({ ...loggedUser, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const [response, error] = await updateUsers(loggedUser);

        if (error) {
            toast.error("Error al actualizar el usuario");
            return;
        }
        const userN = await response;
        setLoggedUser((prev) => {
            return { ...prev, loggedUser: userN };
        });
    };

    return (
        <>
            <form className="gap-4" onSubmit={submitForm}>
                <Authenticated {...props}>
                    <Container>
                        <Card
                            className={"justify-center tracking-widest m-auto"}
                            col={2}
                        >
                            <Container className={"col-span-2 justify-center"}>
                                <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200">
                                    Perfil de Usuario
                                </h1>
                                <ImageUploadForm
                                    user={loggedUser}
                                    setUser={setLoggedUser}
                                />
                            </Container>
                            <div className="sm:col-span-1 col-span-2">
                                <Label forInput="username" value="Username" />
                                <Input
                                    type="text"
                                    name="username"
                                    defaultValue={loggedUser.username}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    handleChange={onChange}
                                    required
                                    maxLength={15}
                                    minLength={8}
                                />
                            </div>
                            <div className="sm:col-span-1 col-span-2">
                                <Label forInput="name" value="Nombre(s)" />
                                <Input
                                    type="text"
                                    name="name"
                                    defaultValue={loggedUser.name}
                                    className="mt-1 block w-full"
                                    autoComplete="title"
                                    isFocused={true}
                                    handleChange={onChange}
                                    required
                                    maxLength={50}
                                    minLength={3}
                                />
                            </div>
                            <div className="sm:col-span-1 col-span-2">
                                <Label forInput="name" value="Apellido(s)" />
                                <Input
                                    type="text"
                                    name="surname"
                                    defaultValue={loggedUser.surname}
                                    className="mt-1 block w-full"
                                    autoComplete="title"
                                    isFocused={true}
                                    handleChange={onChange}
                                    required
                                    maxLength={50}
                                    minLength={3}
                                />
                            </div>
                            <div className="sm:col-span-1 col-span-2">
                                <Label
                                    forInput="t_user"
                                    value="Tipo de Usuario"
                                />
                                <SelectInput
                                    disabled={true}
                                    options={optionsTU}
                                    value={{
                                        value: loggedUser.id_t_user,
                                        label: toStringTipoDeUsuariosEnum(
                                            loggedUser.id_t_user
                                        ),
                                    }}
                                    onChange={(e) => {
                                        onChange({
                                            target: {
                                                name: "id_t_user",
                                                value: e.value,
                                            },
                                        });
                                    }}
                                />
                            </div>

                            <div className="col-span-2">
                                <Label forInput="email" value="Correo" />
                                <Input
                                    type="text"
                                    name="email"
                                    defaultValue={loggedUser.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    isFocused={true}
                                    handleChange={onChange}
                                    required
                                    email={true}
                                />
                            </div>
                            <div className="sm:col-span-1 col-span-2">
                                <Label forInput="phone" value="Teléfono" />
                                <Input
                                    type="text"
                                    name="phone"
                                    defaultValue={loggedUser.phone}
                                    className="mt-1 block w-full"
                                    autoComplete="phone"
                                    isFocused={true}
                                    handleChange={onChange}
                                    required
                                    onlyNumbers={true}
                                    maxLength={30}
                                />
                            </div>
                            <div className="sm:col-span-1 col-span-2">
                                <Label forInput="cellphone" value="Celular" />
                                <Input
                                    type="text"
                                    name="cellphone"
                                    defaultValue={loggedUser.cellphone}
                                    className="mt-1 block w-full"
                                    autoComplete="cellphone"
                                    isFocused={true}
                                    handleChange={onChange}
                                    required
                                    onlyNumbers={true}
                                    maxLength={30}
                                />
                            </div>
                            <div className="sm:col-span-1 col-span-2">
                                <Label
                                    forInput="doc"
                                    value="Documento de Identidad"
                                />
                                <Input
                                    type="text"
                                    name="doc"
                                    defaultValue={loggedUser.doc}
                                    className="mt-1 block w-full"
                                    autoComplete="doc"
                                    isFocused={true}
                                    handleChange={onChange}
                                    required
                                    onlyNumbers={true}
                                    maxLength={30}
                                    minLength={4}
                                />
                            </div>
                            <div className="sm:col-span-1 col-span-2">
                                <Label
                                    forInput="t_document"
                                    value="Tipo de Documento"
                                />
                                <SelectInput
                                    options={optionsTD}
                                    value={{
                                        value: loggedUser.id_t_doc,
                                        label: toStringTipoDocumentoEnum(
                                            loggedUser.id_t_doc
                                        ),
                                    }}
                                    onChange={(e) => {
                                        onChange({
                                            target: {
                                                name: "id_t_doc",
                                                value: e.value,
                                            },
                                        });
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-center mt-4 col-span-2 ">
                                <Button
                                    className="bg-green-light"
                                    type="submit"
                                >
                                    Guardar
                                </Button>
                            </div>
                        </Card>
                    </Container>
                </Authenticated>
            </form>
        </>
    );
}
