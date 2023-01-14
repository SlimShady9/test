import axios from "axios";
import react, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import DataTable from "react-data-table-component";
import { Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { container } from "tailwindcss/defaultTheme";

const Datatable = () => {
    const [search, setSearch] = useState("");
    const [servicios, setServicios] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);

    const getServicios = async () => {
        try {
            const res = await axios.get("/api/service");
            setServicios(res.data);
            setFilteredServices(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const columns = [
        {
            name: "No tracking",
            selector: (row) => row.tracking_id,
        },
        {
            name: "Nombre",
            selector: (row) => row.name,
        },
        {
            name: "Descripción",
            selector: (row) => row.description,
        },
        {
            name: "Precio",
            selector: (row) => row.price,
        },
        {
            name: "Editar",
            cell: (row) => (
                <button className="bg-blue">
                    <GrEdit />
                </button>
            ),
        },
        {
            name: "Eliminar",
            cell: (row) => (
                <button className="bg-red">
                    <RiDeleteBinLine />
                </button>
            ),
        },
    ];
    useEffect(() => {
        getServicios();
    }, []);

    useEffect(() => {
        const result = servicios.filter((services) => {
            return (
                services.description
                    .toLowerCase()
                    .match(search.toLowerCase()) ||
                services.name.toLowerCase().match(search.toLowerCase()) ||
                services.tracking_id.match(search)
            );
        });

        setFilteredServices(result);
    }, [search]);
    return (
        <DataTable
            columns={columns}
            data={filteredServices}
            selectableRows
            highlightOnHover
            fixedHeader
            pagination
            subHeader
            subHeaderComponent={
                <Container className="flex">
                    <Link href={"createService"} className="p-3 bg-blue-400">
                        <Container className="hover:scale-125 shadow-xl rounded-3xl bg-green-light">
                            Nuevo Servicio
                        </Container>
                    </Link>
                    <Container>
                        <input
                            type="text"
                            placeholder="Buscar"
                            className="w-25 form-control rounded-3xl"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Container>
                </Container>
            }
        />
    );
};

export default Datatable;
