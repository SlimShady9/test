import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";
import Container from "@/Components/Container";

export default function Base({ children }) {
    return (
        <div className="min-h-screen relative left-0 right-0">
            <Header className="mb-4 z-10" />
            <Container className="lg:m-auto lg:h-3/4 xl:w-1/2 my-8">
                <Card className={" m-auto"}>{children}</Card>

            </Container>
            <Footer className="md:absolute relative bottom-0 left-0 right-0" />
        </div>
    );
}
