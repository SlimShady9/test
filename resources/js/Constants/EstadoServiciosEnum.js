const EstadoServiciosEnum = Object.freeze({
    SERVICIO_INCIADO: 1,
    SERVICIO_MENSAJERIA: 2, //Datos de Origen del envío
    SERVICIO_DIRECCION_CONFIRMADA: 3,
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

export { EstadoServiciosEnum, toStringEstadoServiciosEnum };
