import{u as c,j as e,a as t,H as d}from"./app.14a3b57d.js";import{B as u}from"./Button.1051e882.js";import{C as p}from"./Card.64c75612.js";import{G as x}from"./Guest.52f0655f.js";import{I as f}from"./Input.a26e4893.js";import{j as h}from"./index.esm.8067344b.js";import{V as g}from"./ValidationErrors.5debc066.js";import"./Label.1d57773d.js";import"./Header.84bb3711.js";import"./iconBase.9679d326.js";function H({status:r}){const{data:o,setData:s,post:m,processing:i,errors:n}=c({email:""}),l=a=>{s(a.target.name,a.target.value)};return e(x,{children:t(p,{className:"mt-20 mx-auto w-11/12 sm:w-1/2",children:[e(d,{title:"Forgot Password"}),e("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200",children:"\xBFOlvidaste tu contrase\xF1a?"}),e("div",{className:"mb-4 text-sm text-gray-500 leading-normal",children:"No hay problema, ingresa tu correo electr\xF3nico asociado y te enviaremos un link para que cambies tu contrase\xF1a por una nueva."}),r&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),e(g,{errors:n}),t("form",{onSubmit:a=>{a.preventDefault(),m(route("password.email"))},children:[e(f,{type:"text",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,handleChange:l}),e("div",{className:"flex items-center mt-4",children:t(u,{className:"mx-auto flex gap-4",processing:i,children:["Enviar Enlace de Reinicio de Contrase\xF1a",e(h,{})]})})]})]})})}export{H as default};