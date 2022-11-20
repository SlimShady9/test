import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import Modal from "@/Components/Modal";
import Button from "@/Components/Button";
import ImageUploadForm from "@/Components/ImageUploadForm";
import axios from "axios";
import DataForm from "@/Components/DataForm";
import Container from "@/Components/Container";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Checkbox from "@/Components/Checkbox";
import Select from "react-select";
import AddressForm from "@/Components/AddressForm";

export default function Profile(props) {

    const options = [
        { value: "particular", label: "Particular" },
        { value: "empresa", label: "Empresa" },
        { value: "proveedor", label: "Proveedor" },
    ];

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
                    <Card className={"justify-center tracking-widest m-auto"} col={2}>
                    <Container className={"col-span-2 justify-center"}>
                    <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">Perfil de Usuario</h1>
                    <ImageUploadForm user={loggedUser} setUser={setLoggedUser} />
                    </Container>
                        <div className="col-span-1">
                            <Label forInput="name" value="Username" />
                            <Input
                                type="text"
                                name="title"
                                value={""}
                                className="mt-1 block w-full"
                                autoComplete="title"
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
                                value={""}
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
                                value={""}
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
                            name="country"
                            options={options}
                            className="mt-1 block w-full"
                            autoComplete="country"
                            required
                        ></Select>
                    </div>
                    <Button className="bg-gray-servi col-span-2" onClick={() => setShowModal(true)}>
                        Cambiar Dirección
                    </Button>

                    


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