const EstadoServiciosEnum = Object.freeze({
    SERVICIOS_INCIADO: 1,
    SERVICIO_MENSAJERIA: 0, //Datos de Origen del envío
    SERVICIO_DIRECCION_CONFIRMADA: 2, //Dirección de origen
    SERVICIO_MENSAJERIA_ESPECIAL: 0, //Selecciona el/los motivos de condicones especiales como en el excel (frágil, confidencial, etc.)
    SERVICIO_CONTENIDO_DECLARADO: 0, //Datos del contenido para cualquier mensajería
    SERVICIO_LOGISTICA: 0, //Campos adicionales para solicitud directa
    SERVICIO_GESTION_DOCUMENTAL: 0, //Campos adicionales para solicitud directa
    SERVICIO_USUARIOS_ASIGNADOS: 3,
    SERVICIO_CON_DETALLE: 4, //Tareas (task) asignadas
    SERVICIO_PENDIENTE: 5,
    SERVICIO_APROBADO: 6,
    SERVICIO_RECHAZADO: 7,
    SERVICIO_EN_PROCESO: 8,
    SERVICIO_APLAZADO: 9,
    SERVICIO_REALIZADO: 10,
    SERVICIO_ENTREGADO: 11,
});

export default EstadoServiciosEnum;
