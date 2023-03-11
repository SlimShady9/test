const EstadoDeTareaEnum = Object.freeze({
    PENDIENTE: 1,
    EN_PROCESO: 2,
    FINALIZADO: 3,
});

const toStringEstadoDeTareaEnum = (value) => {
    switch (value) {
        case EstadoDeTareaEnum.PENDIENTE:
            return "Pendiente";
        case EstadoDeTareaEnum.EN_PROCESO:
            return "En proceso";
        case EstadoDeTareaEnum.FINALIZADO:
            return "Finalizado";
        default:
            return "";
    }
};

export { EstadoDeTareaEnum, toStringEstadoDeTareaEnum };
