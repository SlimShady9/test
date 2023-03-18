import react, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Container from "@/Components/Container";
import { getUsers, reactivateUser } from "@/Utils/FetchUsers";
import { GrUserAdd } from "react-icons/gr";
import { toStringTipoDeUsuariosEnum } from "@/Constants/TipoDeUsuariosEnum";
import Authenticated from "@/Layouts/Authenticated";
import ButtonGroup from "@/Components/FormUtils/ButtonGroup";
import { toStringTipoDocumentoEnumShort } from "@/Constants/TipoDocumentoEnum";
import { toast } from "react-toastify";

const InactiveUsers = (props) => {
    const [search, setSearch] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const getUsuarios = async () => {
        getUsers({ state: 0 }).then((res) => {
            setUsuarios(res.data);
            setFilteredUsers(res.data);
        });
    };

    const activate = async (user) => {
        reactivateUser(user).then((res) => {
            const [data, error] = res;
            if (error) {
                toast.error(
                    "Error al reactivar el usuario. Contacte al administrador"
                );
                return;
            }
            toast.success(`Usuario ${data.username} reactivado`);
            setUsuarios(usuarios.filter((u) => u.id !== user.id));
            setFilteredUsers(filteredUsers.filter((u) => u.id !== user.id));
        });
    };

    useEffect(() => {
        getUsuarios();
    }, []);

    const columns = [
        {
            name: "Nombre de usuario",
            selector: (row) => row.username,
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
        {
            name: "Opciones",
            grow: 1.5,
            center: true,
            cell: (row) => (
                <ButtonGroup
                    listButtons={[
                        {
                            onClick: () => activate(row),
                            text: "Activar",
                            icon: <GrUserAdd />,
                        },
                    ]}
                />
            ),
        },
    ];

    useEffect(() => {
        const result = usuarios.filter((user) => {
            return (
                user.name.toLowerCase().match(search.toLowerCase()) ||
                user.tracking_id.match(search)
            );
        });

        setFilteredUsers(result);
    }, [search]);
    return (
        <Authenticated {...props}>
            <DataTable
                columns={columns}
                data={filteredUsers}
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
        </Authenticated>
    );
};

export default InactiveUsers;
