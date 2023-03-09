

const TransportadoraEnum = Object.freeze({
    SERVIENTREGA: 1,
    DHL: 2,
    INTERRAPIDISIMO: 3,
});

const toStringTransportadorasEnum = (value) => {
    console.log(value);
    switch (value) {
        case TransportadoraEnum.SERVIENTREGA:
            return "ServiEntrega";
        case TransportadoraEnum.DHL:
            return "DHL";
        case TransportadoraEnum.INTERRAPIDISIMO:
            return "Interrapidisimo";
        default:
            return "";
    }
};

export { TransportadoraEnum, toStringTransportadorasEnum };
