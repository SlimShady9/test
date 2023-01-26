const EstadoServiciosEnum = Object.freeze({
    SERVICIO_INCIADO: 1,
    SERVICIO_MENSAJERIA: 2, //Datos de Origen del envío
    //SERVICIO_DIRECCION_CONFIRMADA: 0, //Dirección de origen
    //SERVICIO_MENSAJERIA_ESPECIAL: 0, //Selecciona el/los motivos de condicones especiales como en el excel (frágil, confidencial, etc.)
   // SERVICIO_CONTENIDO_DECLARADO: 0, //Datos del contenido para cualquier mensajería
    //SERVICIO_LOGISTICA: 0, //Campos adicionales para solicitud directa
    //SERVICIO_GESTION_DOCUMENTAL: 0, //Campos adicionales para solicitud directa
    SERVICIO_USUARIOS_ASIGNADOS: 3,
    SERVICIO_CON_DETALLE: 4, //Tareas (task) asignadas
    SERVICIO_PENDIENTE: 5,
    SERVICIO_APROBADO: 6,
    SERVICIO_RECHAZADO: 7,
    SERVICIO_EN_PROCESO: 8,
    SERVICIO_APLAZADO: 10,
    SERVICIO_REALIZADO: 11,
    SERVICIO_ENTREGADO: 12,
});

const toStringEstadoServiciosEnum = (value) => {
    switch (value) {
        case EstadoServiciosEnum.SERVICIO_INCIADO:
            return "Iniciado";
        case EstadoServiciosEnum.SERVICIO_MENSAJERIA:
            return "Datos de Origen del envío";
        case EstadoServiciosEnum.SERVICIO_DIRECCION_CONFIRMADA:
            return "Dirección de origen";
        case EstadoServiciosEnum.SERVICIO_MENSAJERIA_ESPECIAL:
            return "Selecciona el/los motivos de condicones especiales como en el excel (frágil, confidencial, etc.)";
        case EstadoServiciosEnum.SERVICIO_CONTENIDO_DECLARADO:
            return "Datos del contenido para cualquier mensajería";
        case EstadoServiciosEnum.SERVICIO_LOGISTICA:
            return "Campos adicionales para solicitud directa";
        case EstadoServiciosEnum.SERVICIO_GESTION_DOCUMENTAL:
            return "Campos adicionales para solicitud directa";
        case EstadoServiciosEnum.SERVICIO_USUARIOS_ASIGNADOS:
            return "Usuarios asignados";
        case EstadoServiciosEnum.SERVICIO_CON_DETALLE:
            return "Tareas (task) asignadas";
        case EstadoServiciosEnum.SERVICIO_PENDIENTE:
            return "Pendiente";
        case EstadoServiciosEnum.SERVICIO_APROBADO:
            return "Aprobado";
        case EstadoServiciosEnum.SERVICIO_RECHAZADO:
            return "Rechazado";
        case EstadoServiciosEnum.SERVICIO_EN_PROCESO:
            return "En proceso";
        case EstadoServiciosEnum.SERVICIO_APLAZADO:
            return "Aplazado";
        case EstadoServiciosEnum.SERVICIO_REALIZADO:
            return "Realizado";
        case EstadoServiciosEnum.SERVICIO_ENTREGADO:
            return "Entregado";
        default:
            return "";
    }
};

export { EstadoServiciosEnum, toStringEstadoServiciosEnum };
