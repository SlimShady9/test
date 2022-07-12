import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";

export default function Base({ children }) {
    return (
        <>
            <Header />
            <Card>{children}</Card>
            <Footer />
        </>
    );
}
