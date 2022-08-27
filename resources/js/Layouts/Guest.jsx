import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Container from "@/Components/Container";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen">
            <Header className="mb-4 z-10" />
            <Container className="m-auto justify-center">{children}</Container>
            <Footer className="mt-4" />
        </div>
    );
}
