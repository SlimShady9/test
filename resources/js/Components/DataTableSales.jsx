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

const DataTableService = () => {
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
            name: "Tracking ID",
            selector: (row) => row.tracking_id,
        },
        {
            name: "Nombre",
            selector: (row) => row.name,
        },
        {
            name: "Tipo",
            selector: (row) => toStringTipoDeServiciosEnum(row.id_type_service),
        },
        {
            name: "Estado",
            selector: (row) => toStringEstadoServiciosEnum(row.id_state_service),
        },
        {
            name: "Costo",
            selector: (row) => ("$ " + row.cost),
        },
        {
            name: "Price",
            selector: (row) => ("$ " + row.price),
        },
        {
            name: "Ganancias",
            selector: (row) => ("$ " + (row.price-row.cost)),
        },
        {
            name: "Inicio",
            selector: (row) => row.start_date,
        },
        {
            name: "Fin",
            selector: (row) => {
                if (row.end_date!=null) {return row.end_date}
                else{
                    return "No ha Finalizado";
                }
            },
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
