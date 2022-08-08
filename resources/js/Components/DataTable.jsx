import axios from "axios"
import react, {useEffect, useState} from "react"
import DataTable from "react-data-table-component"

 const Datatable = () => {
    const[servicios, setServicios] = useState([]);

    const getServicios = async () => {
        try {
            const res = await axios.get("/api/services");
            setServicios(res.data);
        }catch (error){
            console.log(error);
        }
    };

    const columns = [
    {
        name: "No",
        selector: (row) => row.id,
        sortable: true,
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
        name: "No tracking",
        selector: (row) => row.tracking_id,
    },
];
useEffect(() =>{
    getServicios();
}, []);
return <DataTable 
            title="Servicios"
            columns={columns} 
            data={servicios} 
            selectableRows
            highlightOnHover
            fixedHeader
            pagination/>;
 };

 export default Datatable;
