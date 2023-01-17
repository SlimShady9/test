const cocatenateParams = (params) => {
    let paramsString = "";
    for (let key in params) {
        if (params.hasOwnProperty(key) && params[key] !== "") {
            paramsString += `${key}=${params[key]}&`;
        }
    }
    return paramsString;
};
