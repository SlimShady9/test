const TipoDeUsuariosEnum = Object.freeze({
    ADMIN: 1,
    CLIENTE_JURIDICO: 2,
    CLIENTE_NATURAL: 3,
    COURIER: 4,
});

const toStringTipoDeUsuariosEnum = (value) => {
    switch (value) {
        case TipoDeUsuariosEnum.ADMIN:
            return "Administrador";
        case TipoDeUsuariosEnum.CLIENTE_JURIDICO:
            return "Cliente Jurídico";
        case TipoDeUsuariosEnum.CLIENTE_NATURAL:
            return "Cliente Natural";
        case TipoDeUsuariosEnum.COURIER:
            return "Courier";
        default:
            return "";
    }
};

export { TipoDeUsuariosEnum, toStringTipoDeUsuariosEnum };
