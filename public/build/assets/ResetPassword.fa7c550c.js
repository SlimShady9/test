import{u as f,r as w,j as a,a as e,H as h}from"./app.7cab3ae9.js";import{B as x}from"./Button.f0abf33a.js";import{G as v}from"./Guest.99278fd9.js";import{I as t}from"./Input.8da8264b.js";import{L as n}from"./Label.d730bab7.js";import{C}from"./Card.74b5906e.js";import{V as b}from"./ValidationErrors.4e20bcde.js";import"./Header.583322c7.js";import"./iconBase.7342d9d4.js";import"./index.esm.e34d086d.js";function D({token:m,email:l}){const{data:r,setData:i,post:d,processing:c,errors:p,reset:u}=f({token:m,email:l,password:"",password_confirmation:""});w.exports.useEffect(()=>()=>{u("password","password_confirmation")},[]);const o=s=>{i(s.target.name,s.target.value)};return a(v,{children:e(C,{className:"mt-20 mx-auto w-11/12 sm:w-1/2",children:[a(h,{title:"Reset Password"}),a("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200",children:"Nueva Contrase\xF1a"}),a("div",{children:"Ingrese el correo, la nueva contrase\xF1a y la misma contrase\xF1a para cambiar sus credenciales."}),a(b,{errors:p}),e("form",{onSubmit:s=>{s.preventDefault(),d(route("password.update"))},children:[e("div",{children:[a(n,{forInput:"email",value:"Correo"}),a(t,{type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:o})]}),e("div",{className:"mt-4",children:[a(n,{forInput:"password",value:"Contrase\xF1a"}),a(t,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:o})]}),e("div",{className:"mt-4",children:[a(n,{forInput:"password_confirmation",value:"Confirmar Contrase\xF1a"}),a(t,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:o})]}),a("div",{className:"flex items-center justify-end mt-4",children:a(x,{className:"mx-auto",processing:c,children:"Reinicar Contrase\xF1a"})})]})]})})}export{D as default};
