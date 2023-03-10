const EstadoServiciosEnum = Object.freeze({
    SERVICIO_INCIADO: 1,
    SERVICIO_DIRECCION_CONFIRMADA: 2,
    SERVICIO_MENSAJERIA: 3, //Datos de Origen del envío
    SERVICIO_USUARIOS_ASIGNADOS: 4,
    SERVICIO_CON_CONTENIDO: 5,
    SERVICIO_CON_TAREAS: 6, //Tareas (task) asignadas
});

const toStringEstadoServiciosEnum = (value) => {
    switch (value) {
        case EstadoServiciosEnum.SERVICIO_INCIADO:
            return "Servicio iniciado";
        case EstadoServiciosEnum.SERVICIO_MENSAJERIA:
            return "Datos de Origen del envío";
        case EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA:
            return "Dirección confirmada";
        case EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS:
            return "Usuarios asignados";
        case EstadoServiciosEnum.SERVICIO_CON_CONTENIDO:
            return "Servicio con contenido";
        case EstadoServiciosEnum.SERVICIO_CON_TAREAS:
            return "Servicio con tareas";
        default:
            return "";
    }
};
const toStringEstadoServiciosEnum2 = (value) => {
    switch (value) {
        case 1:
            return "Servicio iniciado";
        case 2:
            return "Datos de Origen del envío";
        case 3:
            return "Dirección confirmada";
        case 4:
            return "Usuarios asignados";
        case 5:
            return "Servicio con contenido";
        case 6:
            return "Servicio con tareas";
        default:
            return "";
    }
};

export { EstadoServiciosEnum, toStringEstadoServiciosEnum,toStringEstadoServiciosEnum2 };
