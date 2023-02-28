import { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import Modal from "@/Components/Modal";
import Button from "@/Components/FormUtils/Button";
import ImageUploadForm from "@/Components/FormUtils/ImageUploadForm";
import Container from "@/Components/Container";
import Input from "@/Components/FormUtils/Input";
import Label from "@/Components/FormUtils/Label";
import Select from "react-select";
import AddressForm from "@/Components/AddressForm";
import axios from "axios";

export default function Profile(props) {
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
    const [user, setUser] = useState([]);
    const getUser = async () => {
        try {
            const res = await axios.get("/api/user/" + loggedUser.id);
            setUser(await res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    const [profileParams, setProfileParams] = useState([]);
    const [showModal, setShowModal] = useState("");
    const [idAddress, setIdAddress] = useState(null);

    const onHide = () => setShowModal(false);

    const [loggedUser, setLoggedUser] = useState(props.auth.user);

    const succesAddressLoad = (data) => {
        setIdAddress(data.id);
        setShowModal(false);
    };

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    return (
        <>
            <Authenticated {...props}>
                <Container>
                    <Card
                        className={"justify-center tracking-widest m-auto"}
                        col={2}
                    >
                        <Container className={"col-span-2 justify-center"}>
                            <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                                Perfil de Usuario
                            </h1>
                            <ImageUploadForm
                                user={loggedUser}
                                setUser={setLoggedUser}
                            />
                        </Container>
                        <div className="col-span-1">
                            <Label forInput="username" value="Username" />
                            <Input
                                type="text"
                                name="username"
                                defaultValue={user.username}
                                className="mt-1 block w-full"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <Label forInput="name" value="Nombre(s)" />
                            <Input
                                type="text"
                                name="title"
                                defaultValue={user.name}
                                className="mt-1 block w-full"
                                autoComplete="title"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <Label forInput="name" value="Apellido(s)" />
                            <Input
                                type="text"
                                name="title"
                                defaultValue={user.surname}
                                className="mt-1 block w-full"
                                autoComplete="title"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                        </div>
                        <div>
                            <Label forInput="t_user" value="Tipo de Usuario" />
                            <Select
                                name="t_user"
                                options={optionsTU}
                                defaultValue={user.id_t_user}
                                className="mt-1 block w-full"
                                autoComplete="t_user"
                                required
                            ></Select>
                        </div>
                        <Button
                            className="bg-gray-servi col-span-2"
                            onClick={() => setShowModal(true)}
                        >
                            Cambiar Dirección
                        </Button>

                        <div className="col-span-2">
                            <Label forInput="email" value="Correo" />
                            <Input
                                type="text"
                                name="email"
                                defaultValue={user.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <Label forInput="phone" value="Teléfono" />
                            <Input
                                type="number"
                                name="phone"
                                defaultValue={user.phone}
                                className="mt-1 block w-full"
                                autoComplete="phone"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <Label forInput="cellphone" value="Celular" />
                            <Input
                                type="number"
                                name="cellphone"
                                defaultValue={user.cellphone}
                                className="mt-1 block w-full"
                                autoComplete="cellphone"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <Label
                                forInput="doc"
                                value="Documento de Identidad"
                            />
                            <Input
                                type="number"
                                name="doc"
                                defaultValue={user.doc}
                                className="mt-1 block w-full"
                                autoComplete="doc"
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
                                options={optionsTD}
                                className="mt-1 block w-full"
                                autoComplete="t_document"
                                required
                            ></Select>
                        </div>
                        <div className="flex items-center justify-start mt-4 ">
                            <Button className="bg-red-light" type="submit">
                                Cancelar
                            </Button>
                        </div>
                        <div className="flex items-center justify-end mt-4 ">
                            <Button className="bg-green-light" type="submit">
                                Generar
                            </Button>
                        </div>
                        <Modal
                            onHide={onHide}
                            show={showModal}
                            title={"Ingrese una nueva dirección"}
                        >
                            <AddressForm
                                api_token={props.api_token}
                                onSubmit={succesAddressLoad}
                            />
                        </Modal>
                    </Card>
                </Container>
            </Authenticated>
        </>
    );
}
