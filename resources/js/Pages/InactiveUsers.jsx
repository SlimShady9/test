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
            name: "Opciones",
            grow: 2.5,
            center: true,
            cell: (row) => (
                <div className="grid">
                <div className="text-center text-lg font-bold">{row.username}</div>
                <div className="mx-auto">
                    <ButtonGroup
                        listButtons={[
                        {
                            onClick: () => activate(row),
                            text: "Activar",
                            icon: <GrUserAdd />,
                        },
                    ]}
                    />
                </div>
            </div>
        ),
        },
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
            <div className="grid m-6 gap-4">
            <h1 className="text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200">
                        Usuarios Inactivos
                    </h1>
            <div className="">
            <input
                type="text"
                placeholder="Buscar"
                className="w-25 form-control rounded-3xl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            </div>
            <DataTable
                columns={columns}
                data={filteredUsers}
                highlightOnHover
                pagination
                noDataComponent="No se encontraron resultados"
                paginationComponentOptions={{
                    rowsPerPageText: "Filas por página",
                    rangeSeparatorText: "de",
                }}
            />
            </div>
        </Authenticated>
    );
};

export default InactiveUsers;
