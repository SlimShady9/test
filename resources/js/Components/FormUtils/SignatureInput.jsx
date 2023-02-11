import React from "react";
import Select from "react-select";
import SignatureCanvas from 'react-signature-canvas'

function SignatureInput({
    name,
    className,
    value,
    onChange,

}) {
    return (
        <Signature
            name={name}
            className={`${className}`}
            value={value}
            onChange={onChange}
        ></Signature>
    );
}

export default SignatureInput;
