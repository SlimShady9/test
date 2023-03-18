const TipoDeRolEnum = Object.freeze({
    ADMINISTRADOR: 1,
    USUARIO: 2,
});

const toStringTipoDeRolEnum = (value) => {
    switch (value) {
        case TipoDeRolEnum.ADMINISTRADOR:
            return "Administrador";
        case TipoDeRolEnum.USUARIO:
            return "Usuario";
        default:
            return "";
    }
};

export { TipoDeRolEnum, toStringTipoDeRolEnum };
