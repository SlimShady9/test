import{a as r,j as e,u as h,r as f,H as g,L as x}from"./app.4d6b7aa4.js";import{B as b}from"./Button.19f1063b.js";import{I as m}from"./Input.64fc0386.js";import{L as c}from"./Label.fc25a627.js";import{C as N}from"./Container.64a7f150.js";import{V as v}from"./ValidationErrors.d33b95c1.js";import{B as y}from"./Base.ec02d891.js";import"./Header.868ab999.js";import"./iconBase.5fbb9523.js";import"./index.esm.742a64bc.js";import"./Card.65dddf88.js";function w({name:a,value:o,text:s,handleChange:i}){return r("div",{className:"flex gap-3 justify-center items-center",children:[e("input",{type:"checkbox",name:a,id:a,value:o,className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",onChange:n=>i(n)}),e("label",{htmlFor:a,children:s})]})}function q({status:a,canResetPassword:o}){const{data:s,setData:i,post:n,processing:d,errors:u,reset:p}=h({email:"",password:"",remember:""});f.exports.useEffect(()=>()=>{p("password")},[]);const l=t=>{i(t.target.name,t.target.type==="checkbox"?t.target.checked:t.target.value)};return r(y,{children:[e(g,{title:"Log in"}),a&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:a}),e(v,{errors:u}),r("form",{onSubmit:t=>{t.preventDefault(),n(route("login"))},children:[e(N,{className:"justify-center",children:e("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200",children:"Ingreso de Usuario"})}),r("div",{children:[e(c,{forInput:"email",value:"Nombre de Usuario"}),e(m,{type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,handleChange:l})]}),r("div",{className:"mt-4",children:[e(c,{forInput:"password",value:"Contrase\xF1a"}),e(m,{type:"password",name:"password",value:s.password,className:"mt-1 block w-full",autoComplete:"current-password",handleChange:l})]}),e("div",{className:"block mt-4",children:r("label",{className:"flex items-center",children:[e(w,{name:"remember",value:s.remember,handleChange:l}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Recu\xE9rdame"})]})}),r("div",{className:"flex items-center justify-end mt-4",children:[o&&e(x,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900",children:"\xBFOlvidaste tu contrase\xF1a?"}),e(b,{className:"ml-4",processing:d,children:"Ingresar"})]})]})]})}export{q as default};
