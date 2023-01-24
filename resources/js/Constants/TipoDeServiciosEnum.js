const TipoDeServiciosEnum =
    Object -
    freeze({
        CORRESPONDENCIA: 1,
        MENSAJERIA_ESPECIALIZADA: 2,
        MENSAJERIA_MASIVA: 3,
        MENSAJERIA_INTERNACIONAL: 4,
        LOGISTICA_DE_MENSJERIA: 5,
        GESTION_DOCUMENTAL: 6,
    });

const toStringTipoDeServiciosEnum = (value) => {
    switch (value) {
        case TipoDeServiciosEnum.CORRESPONDENCIA:
            return "Correspondencia";
        case TipoDeServiciosEnum.MENSAJERIA_ESPECIALIZADA:
            return "Mensajería especializada";
        case TipoDeServiciosEnum.MENSAJERIA_MASIVA:
            return "Mensajería masiva";
        case TipoDeServiciosEnum.MENSAJERIA_INTERNACIONAL:
            return "Mensajería internacional";
        case TipoDeServiciosEnum.LOGISTICA_DE_MENSJERIA:
            return "Logística de mensajería";
        case TipoDeServiciosEnum.GESTION_DOCUMENTAL:
            return "Gestión documental";
        default:
            return "";
    }
};

export { TipoDeServiciosEnum, toStringTipoDeServiciosEnum };
