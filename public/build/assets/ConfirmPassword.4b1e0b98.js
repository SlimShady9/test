import{u as l,r as d,j as a,a as s,H as u}from"./app.7cab3ae9.js";import{B as p}from"./Button.f0abf33a.js";import{G as f}from"./Guest.99278fd9.js";import{I as x}from"./Input.8da8264b.js";import{C as h}from"./Card.74b5906e.js";import{L as w}from"./Label.d730bab7.js";import{V as b}from"./ValidationErrors.4e20bcde.js";import"./Header.583322c7.js";import"./iconBase.7342d9d4.js";import"./index.esm.e34d086d.js";function I(){const{data:t,setData:e,post:o,processing:m,errors:i,reset:n}=l({password:""});d.exports.useEffect(()=>()=>{n("password")},[]);const c=r=>{e(r.target.name,r.target.value)};return a(f,{children:s(h,{className:"mx-auto w-11/12 sm:w-1/2",children:[a(u,{title:"Confirm Password"}),a("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200",children:"\xBFSigues ah\xED?"}),a("div",{className:"mb-4 text-sm text-gray-600",children:"Has estado mucho tiempo inactivo. Por favor confirma tu contrase\xF1a antes de continuar."}),a(b,{errors:i}),s("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[s("div",{className:"mt-4",children:[a(w,{forInput:"password",value:"Contrase\xF1a"}),a(x,{type:"password",name:"password",value:t.password,className:"mt-1 block w-full",isFocused:!0,handleChange:c})]}),a("div",{className:"flex items-center mt-4",children:a(p,{className:"mx-auto",processing:m,children:"Confirmar"})})]})]})})}export{I as default};
