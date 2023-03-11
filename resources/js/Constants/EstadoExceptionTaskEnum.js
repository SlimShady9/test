const EstadoExceptionTaskEnum = Object.freeze({
    DESCONOCIDO: 1,
    DIRECCION_ERRADA: 2,
    NO_RESIVE: 3,
    REHUSADO: 4,
});

const toStringEstadoExceptionTaskEnum = (value) => {
    switch (value) {
        case EstadoExceptionTaskEnum.DESCONOCIDO:
            return "Desconocido";
        case EstadoExceptionTaskEnum.DIRECCION_ERRADA:
            return "Dirección Errada";
        case EstadoExceptionTaskEnum.NO_RESIVE:
            return "No Resive";
        case EstadoExceptionTaskEnum.REHUSADO:
            return "Rehusado";
        default:
            return "";
    }
};

export { EstadoExceptionTaskEnum, toStringEstadoExceptionTaskEnum };
