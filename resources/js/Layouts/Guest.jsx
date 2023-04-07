import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen w-full">
            <Header className="mt-1/2 z-10" />
            <div className="m-auto justify-center">{children}</div>
            
        </div>
    );
}
