import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import Modal from "@/Components/Modal";
import Button from "@/Components/Button";
import axios from "axios";
import DataForm from "@/Components/DataForm";
import Container from "@/Components/Container";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Checkbox from "@/Components/Checkbox";
import Select from "react-select";
import AddressForm from "@/Components/AddressForm";

export default function Profile(props) {
    return (
        <>
            <Authenticated {...props}>
                <Container className={"justify-center"}>
                <form onSubmit={submitService}>
                    <Card className={"justify-center tracking-widest m-auto"} col={1}>
                    <Container className={"col-span-2 justify-center"}>
                    <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">Nuevo Servicio</h1>
                    <ImageUploadForm user={loggedUser} setUser={setLoggedUser} />
                    </Container>
                        <div className="col-span-2">
                            <Label forInput="name" value="Título del Servicio" />
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
                        <div className="col-span-2">
                            <Label forInput="t_service" value="Tipo de Servicio" />
                            <Select
                                name="t_service"
                                options={options}
                                className="mt-1 block w-full"
                                autoComplete="t_service"
                                required
                            ></Select>
                        </div>
                        <div className="col-span-2">
                            <Label forInput="desc" value="Descripción" />
                            <textarea
                                type="textarea"
                                name="desc"
                                className="mt-1 h-28 block w-full rounded-xl"
                                autoComplete="desc"
                                handleChange={onHandleChange}
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <Button className="bg-gray-servi" onClick={() => setShowModal(true)}>
                            Detalles de dirección de Origen
                            </Button>
                        </div>
                        <div className="col-span-2">
                            <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                handleChange={onHandleCheck}
                            />

                            <span className="ml-2 text-sm text-gray-600">
                                Usar última dirección
                            </span>
                            </label>
                        </div>
                        <div className="col-span-2">
                            <Label forInput="date" value="Fecha de Realización" />
                            <Input
                                type="date"
                                name="value"
                                value={""}
                                className="mt-1 block w-full"
                                autoComplete="value"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <Label forInput="value" value="Valor del Servicio" />
                            (Pesos Colombianos)
                            <Input
                                type="number"
                                name="value"
                                value={""}
                                className="mt-1 block w-full"
                                autoComplete="value"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
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
                    {/* Custom address form due to the fact of dynamism */}
                    </Card>
                </form>
                </Container>
            </Authenticated>
        </>
    );
}