const EstadoDeTareaEnum = Object.freeze({
    CREADO: 1,
    HECHO: 2,
    PENDIENTE: 3,
    FINALIZADO: 4,
});

const toStringEstadoDeTareaEnum = (value) => {
    switch (value) {
        case EstadoDeTareaEnum.CREADO:
            return "Creado";
        case EstadoDeTareaEnum.HECHO:
            return "Hecho";
        case EstadoDeTareaEnum.PENDIENTE:
            return "Pendiente";
        case EstadoDeTareaEnum.FINALIZADO:
            return "Finalizado";
        default:
            return "";
    }
};

export { EstadoDeTareaEnum, toStringEstadoDeTareaEnum };
