import React, { useEffect, useState } from "react";
import Container from "@/Components/Container";
import Authenticated from "@/Layouts/Authenticated";
import PPqrsFormqrs from "@/Components/PqrsForm"

export default function Pqrs(props) {
    //Antes de que cargue la vista corgamos los datos


    return (
        <>
        <Authenticated {...props}>
        <Container className="justify-center bg-opacity-30 shadow-xl">
            <Container className={"justify-center"}>
                <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">Tabla de Usuarios</h1>
                <PPqrsFormqrs/>
            </Container>
        </Container>
        </Authenticated>
        </>
    );
}