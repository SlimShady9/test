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

const toStringTipoDeUsuariosEnum2 = (value) => {
    switch (value) {
        case 1:
            return "Administrador";
        case 2:
            return "Cliente Jurídico";
        case 3:
            return "Cliente Natural";
        case 4:
            return "Courier";
        default:
            return "gf";
    }
};

export { TipoDeUsuariosEnum, toStringTipoDeUsuariosEnum ,toStringTipoDeUsuariosEnum2};
