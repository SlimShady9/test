import axios from "axios";
import react, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { GrArchive } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import DataTable from "react-data-table-component";
import { IoHelp } from "react-icons/io5";
import { Link } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import ButtonGroup from "@/Components/FormUtils/ButtonGroup";
import { toStringEstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
import { toStringTipoDeServiciosEnum } from "@/Constants/TipoDeServiciosEnum";

const DataTableService = (auth) => {
    const [search, setSearch] = useState("");
    const [servicios, setServicios] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);

    const getServicios = async () => {
        try {
            const id_user = auth.auth.user.id;
            if (auth.auth.user.id_t_user == 1) {
                const res = await axios.get("/api/service");
                setServicios(res.data);
                setFilteredServices(res.data);
            } else {
                const res = await axios.get(
                    `/api/service/${id_user}/serviceByUser`
                );
                setServicios(res.data);
                setFilteredServices(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const columns = [
        {
            name: "Tracking ID",
            sortable: true,
            selector: (row) => row.tracking_id,
        },
        {
            name: "Nombre",
            sortable: true,
            selector: (row) => row.name,
        },
        {
            name: "Tipo",
            sortable: true,
            selector: (row) => toStringTipoDeServiciosEnum(row.id_type_service),
        },
        {
            name: "Estado",
            sortable: true,
            selector: (row) =>
                toStringEstadoServiciosEnum(row.id_state_service),
        },
        {
            name: "Firmado",
            sortable: true,
            selector: (row) => {
                if (row.signature != null) {
                    return "SI";
                } else {
                    return "NO";
                }
            },
        },
        {
            name: "Inicio",
            sortable: true,
            selector: (row) => row.start_date,
        },
        {
            name: "Fin",
            sortable: true,
            selector: (row) => {
                if (row.end_date != null) {
                    return row.end_date;
                } else {
                    return "No ha Finalizado";
                }
            },
        },
        {
            name: "Opciones",
            grow: 2.5,
            center: true,
            cell: (row) => (
                <ButtonGroup
                    listButtons={[
                        {
                            href: `deliveryProof/${row.id}`,
                            icon: <GrArchive />,
                            text: "Ver",
                        },
                        {
                            href: `editService/${row.id}`,
                            icon: <GrEdit />,
                            text: "Editar",
                        },
                        {
                            href: `pqrs/${row.id}`,
                            icon: <IoHelp />,
                            text: "Ayuda",
                        },
                    ]}
                />
            ),
        },
    ];
    useEffect(() => {
        getServicios();
    }, []);

    useEffect(() => {
        const result = servicios.filter((services) => {
            return (
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
            highlightOnHover
            fixedHeader
            pagination
            subHeader
            noDataComponent="No se encontraron resultados"
            paginationComponentOptions={{
                rowsPerPageText: "Filas por página",
                rangeSeparatorText: "de",
            }}
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

export default DataTableService;
