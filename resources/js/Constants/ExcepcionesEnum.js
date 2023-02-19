import { GrObjectUngroup } from "react-icons/gr";

const ExcepcionesEnum = Object.freeze({
    CONTENIDO_FRAGIL: 1,
    CONTENIDO_RIESGO_BIOLOGICO: 2,
    CONTENIDO_DOCUMENTO_PRIVADO: 3,
    CONTENIDO_TRAMITE_PERSONAL: 4,
    CONTENIDO_VALORES: 5,
    CONTENIDO_VACIO: 6,
});

const toStringExcepcionesEnum = (value) => {
    switch (value) {
        case ExcepcionesEnum.CONTENIDO_FRAGIL:
            return "Contenido frágil";
        case ExcepcionesEnum.CONTENIDO_RIESGO_BIOLOGICO:
            return "Riesgo biológico";
        case ExcepcionesEnum.CONTENIDO_DOCUMENTO_PRIVADO:
            return "Documento privado";
        case ExcepcionesEnum.CONTENIDO_TRAMITE_PERSONAL:
            return "Trámite personal";
        case ExcepcionesEnum.CONTENIDO_VALORES:
            return "Valores";
        case ExcepcionesEnum.CONTENIDO_VACIO:
            return "Contenido vacío";
        default:
            return "";
    }
};

export { ExcepcionesEnum, toStringExcepcionesEnum };
