import { useEffect, useState } from "react";
import axios from "axios";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

import Modal from "@/Components/Modal";
import Container from "@/Components/Container";
import DataForm from "@/Components/FormUtils/DataForm";
import { Link } from "@inertiajs/inertia-react";
import DataTable from "react-data-table-component";

const DatatableUser = () => {
    const [search, setSearch] = useState("");
    const [user, setUser] = useState([]);
    const [filteredUser, setFilteredUser] = useState([]);
    const [idselected, setIdselected] = useState(null);

    const [userParams, setUserParams] = useState([]);
    const [showModal, setShowModal] = useState("");
    const onHide = () => setShowModal(false);

    const submitUser = (data) => {
        console.log(data);
        axios.put(`/api/user/${idselected}`, data).then((res) => {
            setUser((prevState) =>
                prevState.map((item) =>
                    item.email === res.data.email ? res.data : item
                )
            );
            setIdselected(null);
            console.log(user);
            setFilteredUser(user);
            setShowModal(false);
        });
    };

    const getUser = async () => {
        try {
            const res = await axios.get("/api/user");
            setUser(res.data.data);
            setFilteredUser(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const columns = [
        {
            name: "Nombre",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Apellido",
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
            cell: (row) => (
                <button onClick={() => loadUser(row.id)} className="bg-blue">
                    <GrEdit />
                </button>
            ),
        },
        {
            name: "Eliminar",
            cell: (row) => (
                <button className="bg-red py-4 px-3">
                    <RiDeleteBinLine />
                </button>
            ),
        },
    ];
    useEffect(() => {
        getUser();
    }, []);

    const loadUser = (id) => {
        axios.get(`/api/user/${id}/edit`).then((res) => {
            setUserParams(res.data.parameters);
            setShowModal(true);
            setIdselected(id);
        });
    };

    useEffect(() => {
        const result = user.filter((users) => {
            return (
                users.username.toLowerCase().match(search.toLowerCase()) ||
                users.surname.toLowerCase().match(search.toLowerCase()) ||
                users.phone.match(search) ||
                users.cellphone.match(search) ||
                users.doc.match(search) ||
                users.email.toLowerCase().match(search.toLowerCase())
            );
        });

        setFilteredUser(result);
    }, [search]);

    return (
        <DataTable
            columns={columns}
            data={filteredUser}
            selectableRows
            highlightOnHover
            fixedHeader
            pagination
            subHeader
            subHeaderComponent={
                <>
                    <Link href={"regUser"} className="p-3 bg-blue-400">
                        <Container className="hover:scale-125 shadow-xl rounded-3xl bg-green-light">
                            Nuevo Usuario
                        </Container>
                    </Link>
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-25 form-control rounded-3xl"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <Modal
                        onHide={onHide}
                        show={showModal}
                        title={"Editar usuario"}
                    >
                        <DataForm
                            parameters={userParams}
                            buttonText="Editar usuario"
                            onSubmit={submitUser}
                        />
                    </Modal>
                </>
            }
        />
    );
};

export default DatatableUser;
