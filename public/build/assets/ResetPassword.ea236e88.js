import{u as f,r as w,a as s,j as a,H as h}from"./app.a05bb740.js";import{B as v}from"./Button.f580da67.js";import{G as C}from"./Guest.f6c25546.js";import{I as t}from"./Input.d4906371.js";import{L as m}from"./Label.ac7cf7d7.js";import{V as b}from"./ValidationErrors.3ac2fabf.js";import"./Footer.dcd4a9ab.js";import"./iconBase.17a5e8ee.js";import"./index.esm.eb32d5aa.js";function H({token:n,email:l}){const{data:o,setData:i,post:d,processing:p,errors:u,reset:c}=f({token:n,email:l,password:"",password_confirmation:""});w.exports.useEffect(()=>()=>{c("password","password_confirmation")},[]);const r=e=>{i(e.target.name,e.target.value)};return s(C,{children:[a(h,{title:"Reset Password"}),a(b,{errors:u}),s("form",{onSubmit:e=>{e.preventDefault(),d(route("password.update"))},children:[s("div",{children:[a(m,{forInput:"email",value:"Email"}),a(t,{type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:r})]}),s("div",{className:"mt-4",children:[a(m,{forInput:"password",value:"Password"}),a(t,{type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:r})]}),s("div",{className:"mt-4",children:[a(m,{forInput:"password_confirmation",value:"Confirm Password"}),a(t,{type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:r})]}),a("div",{className:"flex items-center justify-end mt-4",children:a(v,{className:"ml-4",processing:p,children:"Reset Password"})})]})]})}export{H as default};