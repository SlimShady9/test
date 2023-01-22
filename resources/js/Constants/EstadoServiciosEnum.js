const EstadoServiciosEnum = Object.freeze({
    SERVICIO_INCIADO: 1,
    SERVICIO_MENSAJERIA: 2, //Datos de Origen del envío
    SERVICIO_DIRECCION_CONFIRMADA: 3, //Dirección de origen
    SERVICIO_MENSAJERIA_ESPECIAL: 0, //Selecciona el/los motivos de condicones especiales como en el excel (frágil, confidencial, etc.)
    SERVICIO_CONTENIDO_DECLARADO: 0, //Datos del contenido para cualquier mensajería
    SERVICIO_LOGISTICA: 0, //Campos adicionales para solicitud directa
    SERVICIO_GESTION_DOCUMENTAL: 0, //Campos adicionales para solicitud directa
    SERVICIO_USUARIOS_ASIGNADOS: 4,
    SERVICIO_CON_DETALLE: 5, //Tareas (task) asignadas
    SERVICIO_PENDIENTE: 6,
    SERVICIO_APROBADO: 7,
    SERVICIO_RECHAZADO: 8,
    SERVICIO_EN_PROCESO: 9,
    SERVICIO_APLAZADO: 10,
    SERVICIO_REALIZADO: 11,
    SERVICIO_ENTREGADO: 12,
});

export default EstadoServiciosEnum;
