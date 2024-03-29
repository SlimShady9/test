import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import ButtonGroup from "@/Components/FormUtils/ButtonGroup";
import Modal from "./Modal";
import DataForm from "./FormUtils/DataForm";
import { Link } from "@inertiajs/inertia-react";
import DataTable from "react-data-table-component";
import Button from "./FormUtils/Button";
import { toStringTipoDocumentoEnumShort } from "@/Constants/TipoDocumentoEnum";
import { toStringTipoDeUsuariosEnum } from "@/Constants/TipoDeUsuariosEnum";
import { getUsers, inactivateUser } from "@/Utils/FetchUsers";
import { toast } from "react-toastify";

const DatatableUser = ({ lUser }) => {
    const [search, setSearch] = useState("");
    const [user, setUser] = useState([]);
    const [filteredUser, setFilteredUser] = useState([]);
    const [idselected, setIdselected] = useState(null);
    const [userParams, setUserParams] = useState([]);
    const [showModal, setShowModal] = useState("");
    const onHide = () => setShowModal(false);

    const submitUser = (data) => {
        axios.put(`/api/user/${idselected}`, data).then((res) => {
            setUser((prevState) =>
                prevState.map((item) =>
                    item.id === res.data.id ? res.data : item
                )
            );
            setFilteredUser((prevState) =>
                prevState.map((item) =>
                    item.id === res.data.id ? res.data : item
                )
            );
            setIdselected(null);
            setShowModal(false);
        });
    };

    const getUser = async () => {
        try {
            const res = await getUsers({ state: 1 });
            setUser(res.data.filter((u) => lUser.id !== u.id));
            setFilteredUser(res.data.filter((u) => lUser.id !== u.id));
        } catch (error) {
            console.log(error);
        }
    };

    const deactiveUser = (user) => {
        inactivateUser(user).then((res) => {
            const [data, error] = res;
            if (error) {
                toast.error(
                    "No se pudo inactivar el usuario. Contacte al administrador"
                );
                return;
            }
            toast.success("Usuario inactivado correctamente");
            setUser((prevState) =>
                prevState.filter((item) => item.id !== data.id)
            );
            setFilteredUser((prevState) =>
                prevState.filter((item) => item.id !== data.id)
            );
        });
    };
    function convertArrayOfObjectsToCSV(array) {
        let result;
        const columnDelimiter = ",";
        const lineDelimiter = "\n";
        const keys = Object.keys(filteredUser[0]);

        result = "";
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        array.forEach((item) => {
            let ctr = 0;
            keys.forEach((key) => {
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
        const link = document.createElement("a");
        let csv = convertArrayOfObjectsToCSV(array);
        if (csv == null) return;

        const filename = "export.csv";

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }

        link.setAttribute("href", encodeURI(csv));
        link.setAttribute("download", filename);
        link.click();
    }
    const Export = ({ onExport }) => (
        <Button onClick={(e) => onExport(e.target.value)}>Exportar</Button>
    );

    const columns = [
        {
            name: "Usuario / Opciones",
            grow: 2.5,
            center: true,
            cell: (row) => (
                <div className="grid">
                    <div className="text-center text-lg font-bold">
                        {row.username}
                    </div>
                    <div className="mx-auto">
                        <ButtonGroup
                            listButtons={[
                                {
                                    onClick: () => loadUser(row.id),
                                    icon: <GrEdit />,
                                    text: "Editar",
                                    className: "bg-blue-400",
                                },
                                {
                                    onClick: () => deactiveUser(row),
                                    icon: <RiDeleteBinLine />,
                                    text: "Inactivar",
                                },
                            ]}
                        />
                    </div>
                </div>
            ),
        },
        {
            name: "Nombres",
            selector: (row) => row.name + " " + row.surname,
            sortable: true,
        },
        {
            name: "Tipo de usuario",
            selector: (row) => toStringTipoDeUsuariosEnum(row.id_t_user),
        },
        {
            name: "Correo",
            selector: (row) => (
                <a
                    href={"http://" + row.email}
                    target="_blank"
                    className="bg-blue"
                >
                    {row.email}
                </a>
            ),
        },
        {
            name: "Documento",
            selector: (row) =>
                toStringTipoDocumentoEnumShort(row.id_t_user) + " " + row.doc,
        },
        {
            name: "Celular",
            selector: (row) => row.cellphone,
        },
        {
            name: "Teléfono",
            selector: (row) => row.phone,
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
    const actionsMemo = useMemo(
        () => <Export onExport={() => downloadCSV(filteredUser)} />,
        [filteredUser]
    );

    return (
        <DataTable
            columns={columns}
            data={filteredUser}
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
                <>
                    <Link href={"regUser"} className="mx-auto p-3 bg-blue-400">
                        <Button>Nuevo Usuario</Button>
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
