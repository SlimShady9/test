import axios from "axios";
import react, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { GrArchive } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import DataTable from "react-data-table-component";
import { IoHelp } from "react-icons/io5";
import { Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import { container } from "tailwindcss/defaultTheme";
import Button from "./FormUtils/Button";


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
            name: "Ver",
            cell: (row) => (
                <Button className="bg-yellow">
                    <GrArchive />
                </Button>
            ),
        },
        {
            name: "Editar",
            cell: (row) => (
                <Button className="bg-blue">
                    <GrEdit />
                </Button>
            ),
        },
        {
            name: "Eliminar",
            cell: (row) => (
                <Button className="bg-red">
                    <RiDeleteBinLine />
                </Button>
            ),
        },
        {
            name: "Ayuda",
            cell: (row) => (
                <Link href={'pqrs/'+row.id} className="p-3 bg-blue-400">

                <Button  className="bg-red">
                    <IoHelp />
                </Button>
                </Link>

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
                    <Link href={"deliveryProof"} className="p-3 bg-blue-400">
                        <Container className="hover:scale-125 shadow-xl rounded-3xl bg-green-light">
                            Prueba de Entrega
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
