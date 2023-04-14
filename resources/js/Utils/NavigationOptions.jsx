import { TipoDeUsuariosEnum } from "@/Constants/TipoDeUsuariosEnum";
import { BsFillFilePersonFill } from "react-icons/bs";
import {
    FaBookOpen,
    FaUserLock,
    FaMicroscope,
    FaStore,
    FaUsers,
    FaHome,
    FaRegPaperPlane,
    FaQuestion,
} from "react-icons/fa";

const seccionAdmin = [
    {
        title: "Usuarios ",
        icon: <FaUsers />,
        url: "users",
        method: "get",
    },
    {
        title: "Contabilidad",
        icon: <FaStore />,
        url: "sales",
        gap: true,
        method: "get",
    },
    {
        title: "Analíticas ",
        icon: <FaMicroscope />,
        url: "graph",
        method: "get",
    },
    {
        title: "Usuarios Inactivos",
        icon: <FaUserLock />,
        url: "inactiveUsers",
        method: "get",
    },
];

const seccionTodos = [
    {
        title: "Inicio",
        icon: <FaHome />,
        url: "dashboard",
        method: "get",
    },
    {
        title: "Perfil",
        icon: <BsFillFilePersonFill />,
        url: "profile",
        method: "get",
    },

    {
        title: "Servicios",
        gap: true,
        icon: <FaBookOpen />,
        url: "services",
        method: "get",
    },
    {
        title: "PQR",
        icon: <FaQuestion />,
        url: "pqrauth",
        method: "get",
    },
    //{ title: "Ver envíos", icon: <FaShippingFast />, url: "envios" },
];

const seccionExtras = [
    {
        title: "Cerrar sesión",
        icon: <FaRegPaperPlane />,
        url: "logout",
        method: "post",
        gap: true,
    },
];

const getOpciones = (tipoDeUsuario) => {
    let opciones = [...seccionTodos];

    if (tipoDeUsuario === TipoDeUsuariosEnum.ADMIN) {
        opciones = [...opciones, ...seccionAdmin];
    }

    return [...opciones, ...seccionExtras];
};

export { getOpciones };
