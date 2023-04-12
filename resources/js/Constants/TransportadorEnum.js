const TransportadoraEnum = Object.freeze({
    SERVIENTREGA: 1,
    DHL: 2,
    INTERRAPIDISIMO: 3,
    FEDEX: 4,
    OTRO: 5,
});

const toStringTransportadorasEnum = (value) => {
    switch (value) {
        case TransportadoraEnum.SERVIENTREGA:
            return "ServiEntrega";
        case TransportadoraEnum.DHL:
            return "DHL";
        case TransportadoraEnum.INTERRAPIDISIMO:
            return "Interrapidisimo";
        case TransportadoraEnum.FEDEX:
            return "FedEx";
        case TransportadoraEnum.OTRO:
            return "Otro";
        default:
            return "";
    }
};

export { TransportadoraEnum, toStringTransportadorasEnum };
