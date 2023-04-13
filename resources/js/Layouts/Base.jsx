import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";
import Container from "@/Components/Container";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Base({ children }) {
    return (
        <div className="min-h-screen relative left-0 right-0">
            <ToastContainer theme="light" draggable position="top-center" />
            <Header className="mb-4 z-10" />
            <Container className="m-auto lg:h-1/2 xl:w-2/4 md:w-1/2 sm:w-11/12 sm:mt-20">
                <Card className={"m-auto"}>{children}</Card>
            </Container>
        </div>
    );
}
