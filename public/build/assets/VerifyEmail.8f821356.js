import{u as s,j as e,a as r,H as n,L as m}from"./app.5036f3a7.js";import{B as l}from"./Button.3cbd48f3.js";import{G as c}from"./Guest.48504f01.js";import{j as d,k as u}from"./index.esm.40836d35.js";import{C as x}from"./Card.6fa5be16.js";import"./Header.03a33e42.js";import"./iconBase.cea3fdd1.js";import"./Label.7c7e1583.js";function F({status:t}){const{post:a,processing:i}=s();return e(c,{children:r(x,{className:"mt-20 mx-auto w-11/12 sm:w-1/2",children:[e(n,{title:"Email Verification"}),e("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200",children:"Verificaci\xF3n"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"\xA1Bienvenido al Sistema! Antes de ingresar, verifica tu buz\xF3n de correo, encontrar\xE1s un link de acceso enviado por Servicurrier para entrar al sistema."}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Si no recibes el correo puedes presionar el bot\xF3n de abajo para volverlo a enviar."}),t==="verification-link-sent"&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:"Un nuevo link de verificaci\xF3n ha sido enviado a tu correo."}),e("form",{onSubmit:o=>{o.preventDefault(),a(route("verification.send"))},children:r("div",{className:"mt-4 flex items-center justify-between",children:[r(l,{processing:i,className:"flex gap-4",children:["Reenviar Correo",e(d,{})]}),r(m,{href:route("logout"),method:"post",as:"button",className:"flex gap-4 underline text-sm text-gray-600 hover:text-gray-900",children:["Cerrar Sesi\xF3n ",e(u,{})]})]})})]})})}export{F as default};