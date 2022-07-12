import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Base({ children }) {
    return (
        <>
            <Header />
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">_
            {children}
            </div>
            <Footer />
        </>
    );
}
