import axios from "axios";
import { GLOBALAPI } from "@/Constants/GlobalAPI";

const getOptionsTypeService = async () => {
    return Promise.resolve([
        { label: "Envío", value: 1 },
        { label: "Correspondencia", value: 2 },
        { label: "Coordinación de mensajería", value: 3 },
        { label: "Mandado", value: 4 },
    ]);
};

export { getOptionsTypeService };
