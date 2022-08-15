import axios from "axios"
import {GrEdit} from "react-icons/gr";
import {RiDeleteBinLine} from "react-icons/ri";
import react, {useEffect, useState} from "react"
import DataTable from "react-data-table-component"
import Button from "./Button";

 const Datatable = () => {
    const[search, setSearch] = useState("");
    const[user, setUser] = useState([]);
    const[filteredUser, setFilteredUser] = useState([]);

    const getUser = async () => {
        try {
            const res = await axios.get("/api/users");
            setUser(res.data);
            setFilteredUser(res.data)
        }catch (error){
            console.log(error);
        }
    };

    const columns = [
    {
        name: "Nombre",
        selector: (row) => row.surname,
        sortable: true,
    },
    {
        name: "Nombre de usuario",
        selector: (row) => row.username,
    },
    {
        name: "Correo",
        selector: (row) => row.email,
    },
    {
        name: "Documento",
        selector: (row) => row.doc,
    },
    {
        name: "Telefono",
        selector: (row) => row.phone,
    },
    {
        name: "Celular",
        selector: (row) => row.cellphone,
    },
    {
        name: "Editar",
        cell: row => <button className="bg-blue"><GrEdit/></button>

    },
    {
        name: "Eliminar",
        cell: row => <button className="bg-red py-4 px-3"><RiDeleteBinLine/></button>
    },
    
];
useEffect(() =>{
    getUser();
}, []);

useEffect(() => {
    const result = user.filter((users) =>{
        return users.username.toLowerCase().match(search.toLowerCase()) 
        || users.surname.toLowerCase().match(search.toLowerCase())
        || users.phone.match(search)
        || users.cellphone.match(search)
        || users.doc.match(search)
        || users.email.toLowerCase().match(search.toLowerCase())
    });

    setFilteredUser(result);
},[search]);
return <DataTable 
            title="Usuarios"
            columns={columns} 
            data={filteredUser} 
            selectableRows
            highlightOnHover
            fixedHeader
            pagination
            subHeader
            subHeaderComponent={
            <input
            type="text"
            placeholder="Buscar"
            className="w-25 form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        }
        />;
};

 export default Datatable;
