const TipoDocumentoEnum = Object.freeze({
    CEDULA: 1,
    PASAPORTE: 2,
    CEDULA_EXTRANJERIA: 3,
});

const toStringTipoDocumentoEnum = (tipoDeCarga) => {
    switch (tipoDeCarga) {
        case TipoDocumentoEnum.CEDULA:
            return "Cédula";
        case TipoDocumentoEnum.PASAPORTE:
            return "Pasaporte";
        case TipoDocumentoEnum.CEDULA_EXTRANJERIA:
            return "Cédula de extranjeria";
        default:
            return "";
    }
};

export { TipoDocumentoEnum, toStringTipoDocumentoEnum };
