import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";
import Datatable from "@/Components/DataTable";

export default function Base({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header className="mb-4 z-10" />
            <Card className="m-auto">{children}</Card>
            <Footer className="mt-4" />
            <Datatable/>
        </div>
    );
}
