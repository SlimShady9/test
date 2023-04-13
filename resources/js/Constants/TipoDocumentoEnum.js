const TipoDocumentoEnum = Object.freeze({
    CEDULA: 1,
    PASAPORTE: 2,
    CEDULA_EXTRANJERIA: 3,
    NIT: 4,
});

const toStringTipoDocumentoEnum = (tipoDeCarga) => {
    switch (tipoDeCarga) {
        case TipoDocumentoEnum.CEDULA:
            return "Cédula";
        case TipoDocumentoEnum.PASAPORTE:
            return "Pasaporte";
        case TipoDocumentoEnum.CEDULA_EXTRANJERIA:
            return "Cédula de extranjeria";
        case TipoDocumentoEnum.NIT:
            return "NIT";
        default:
            return "";
    }
};

const toStringTipoDocumentoEnumShort = (tipoDeCarga) => {
    switch (tipoDeCarga) {
        case TipoDocumentoEnum.CEDULA:
            return "CC";
        case TipoDocumentoEnum.PASAPORTE:
            return "PA";
        case TipoDocumentoEnum.CEDULA_EXTRANJERIA:
            return "CE";
        case TipoDocumentoEnum.NIT:
            return "NI";
        default:
            return "";
    }
};

export {
    TipoDocumentoEnum,
    toStringTipoDocumentoEnum,
    toStringTipoDocumentoEnumShort,
};
