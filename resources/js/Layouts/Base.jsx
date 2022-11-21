import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";
import Container from "@/Components/Container";

export default function Base({ children }) {
    return (
        <div className="">
            <Header className="mb-4 z-10" />
            <Container className="m-5 relative align-center">
            <Card className="m-auto">{children}</Card>
            </Container>
            <Footer />
        </div>
    );
}
