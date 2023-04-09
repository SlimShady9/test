import axios from "axios";
import react, { useEffect, useState, useMemo } from "react";
import { GrEdit } from "react-icons/gr";
import { GrArchive } from "react-icons/gr";
import Button from "@/Components/FormUtils/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import DataTable from "react-data-table-component";
import { IoHelp } from "react-icons/io5";
import { Link } from "@inertiajs/inertia-react";
import Button from "./FormUtils/Button";
import Container from "@/Components/Container";
import ButtonGroup from "@/Components/FormUtils/ButtonGroup";
import { toStringEstadoServiciosEnum } from "@/Constants/EstadoServiciosEnum";
import { toStringTipoDeServiciosEnum } from "@/Constants/TipoDeServiciosEnum";
import { storeTiempo } from "@/Utils/FetchTiempoLog";

const DataTableService = (auth) => {
    const [search, setSearch] = useState("");
    const [servicios, setServicios] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [tiempo, setTiempo] = useState([]);

    const guardarTiempo = () => {
        console.log("guardar tiempo");
        setTiempo({
            start_date: new Date(),
        });
        console.log(tiempo);
        storeTiempo(tiempo);
    };

    function convertArrayOfObjectsToCSV(array) {
    	let result;
        console.log(filteredServices);
        	const columnDelimiter = ',';
        	const lineDelimiter = '\n';
        	const keys = Object.keys(filteredServices[0]);
        
        	result = '';
        	result += keys.join(columnDelimiter);
        	result += lineDelimiter;
        
        	array.forEach(item => {
        		let ctr = 0;
        		keys.forEach(key => {
        			if (ctr > 0) result += columnDelimiter;
        
        			result += item[key];
        			
        			ctr++;
        		});
        		result += lineDelimiter;
        	});
        
        	return result;
        }
        
        // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
        function downloadCSV(array) {
        	const link = document.createElement('a');
        	let csv = convertArrayOfObjectsToCSV(array);
        	if (csv == null) return;
        
        	const filename = 'export.csv';
        
        	if (!csv.match(/^data:text\/csv/i)) {
        		csv = `data:text/csv;charset=utf-8,${csv}`;
        	}
        
        	link.setAttribute('href', encodeURI(csv));
        	link.setAttribute('download', filename);
        	link.click();
        }

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
    const Export = ({ onExport }) => <Button onClick={e => onExport(e.target.value)}>Export</Button>;
    const columns = [
        {
            name: "No. de Guía / Opciones",
            grow: 2.7,
            center: true,
            cell: (row) => (
                <>
                <div className="grid gap-2 m-1">
                <div className="text-center text-lg font-bold">{row.tracking_id}</div>
                <div className="mx-auto">
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
                </div>
                </div>
                </>
            ),
        },
        {
            name: "Nombre",
            grow: 1.7,
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
    const actionsMemo = useMemo(() => <Export onExport={() => downloadCSV(filteredServices)} />, []);
    return (
        <>
        <div className="grid grid-cols-1 gap-4 w-full">
            <div className="m-auto">
            <Link href={"createService"} className="bg-blue-400">
                <Button className=" text-3xl">Nuevo Servicio</Button>
            </Link>
            </div>
            <div className="m-auto sm:ml-5">
                <input
                    type="text"
                    placeholder="Buscar"
                    className="w-25 form-control rounded-3xl"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
        <DataTable
            columns={columns}
            data={filteredServices}
            actions={actionsMemo}
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
                    <Link href={"createService"} className="p-3 bg-blue-400" onClick={guardarTiempo}>
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
        </>
    );
};

export default DataTableService;
