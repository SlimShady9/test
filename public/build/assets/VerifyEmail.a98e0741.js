import{u as s,j as e,a as r,H as n,L as m}from"./app.7cab3ae9.js";import{B as l}from"./Button.f0abf33a.js";import{G as c}from"./Guest.99278fd9.js";import{i as d,j as u}from"./index.esm.e34d086d.js";import{C as x}from"./Card.74b5906e.js";import"./Header.583322c7.js";import"./iconBase.7342d9d4.js";import"./Label.d730bab7.js";function F({status:t}){const{post:i,processing:a}=s();return e(c,{children:r(x,{className:"mt-20 mx-auto w-11/12 sm:w-1/2",children:[e(n,{title:"Email Verification"}),e("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200",children:"Verificaci\xF3n"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"\xA1Bienvenido al Sistema! Antes de ingresar, verifica tu buz\xF3n de correo, encontrar\xE1s un link de acceso enviado por Servicurrier para entrar al sistema."}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Si no recibes el correo puedes presionar el bot\xF3n de abajo para volverlo a enviar."}),t==="verification-link-sent"&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:"Un nuevo link de verificaci\xF3n ha sido enviado a tu correo."}),e("form",{onSubmit:o=>{o.preventDefault(),i(route("verification.send"))},children:r("div",{className:"mt-4 flex items-center justify-between",children:[r(l,{processing:a,className:"flex gap-4",children:["Reenviar Correo",e(d,{})]}),r(m,{href:route("logout"),method:"post",as:"button",className:"flex gap-4 underline text-sm text-gray-600 hover:text-gray-900",children:["Cerrar Sesi\xF3n ",e(u,{})]})]})})]})})}export{F as default};