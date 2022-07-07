import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Base({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
