import{u as l,r as p,a,j as s,H as c}from"./app.a566c16c.js";import{B as u}from"./Button.2495e8c5.js";import{G as f}from"./Guest.ef8aa38d.js";import{I as w}from"./Input.122bb5b9.js";import{L as h}from"./Label.d558c561.js";import{V as b}from"./ValidationErrors.cb329b3c.js";import"./Footer.dae98972.js";import"./iconBase.ac963c5b.js";import"./index.esm.dbe59cf3.js";function B(){const{data:e,setData:t,post:o,processing:i,errors:m,reset:n}=l({password:""});p.exports.useEffect(()=>()=>{n("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(f,{children:[s(c,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s(b,{errors:m}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(h,{forInput:"password",value:"Password"}),s(w,{type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(u,{className:"ml-4",processing:i,children:"Confirm"})})]})]})}export{B as default};
