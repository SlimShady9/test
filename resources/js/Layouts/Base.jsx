import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Container from "@/Components/Container";

export default function Base({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header className="mb-4 z-10" />
            <Container className="m-auto">{children}</Container>
            <Footer className="mt-4" />
        </div>
    );
}
