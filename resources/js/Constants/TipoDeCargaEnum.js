const TipoDeCargaEnum = Object.freeze({
    PAQUETE: 1,
    CAJA: 2,
});

const toStringTipoDeCargaEnum = (tipoDeCarga) => {
    switch (tipoDeCarga) {
        case TipoDeCargaEnum.PAQUETE:
            return "Paquete";
        case TipoDeCargaEnum.CAJA:
            return "Caja";
        default:
            return "";
    }
};

export { TipoDeCargaEnum, toStringTipoDeCargaEnum };
