import{r as m,a,j as e,H as C}from"./app.14a3b57d.js";import{B as b}from"./Button.1051e882.js";import{C as y}from"./Container.a303ad17.js";import{Q as i}from"./ReactToastify.62ab24cf.js";import{A as _}from"./Authenticated.eaa71d90.js";import{C as L}from"./Card.64c75612.js";import{I as s}from"./Input.a26e4893.js";import{a as I}from"./index.d8622dc5.js";import{L as l}from"./Label.1d57773d.js";import{T as u,a as T}from"./TipoDocumentoEnum.c14ddb0c.js";import{T as d,t as q}from"./TipoDeUsuariosEnum.fd1e81a1.js";import{S as h}from"./SelectInput.4033d2ec.js";import"./iconBase.9679d326.js";import"./transportes.ca9f9614.js";import"./hoist-non-react-statics.cjs.13665392.js";function M(f){const[v,U]=m.exports.useState(Object.keys(u).map(r=>({value:u[r],label:T(u[r])}))),[x,k]=m.exports.useState(Object.keys(d).map(r=>({value:d[r],label:q(d[r])}))),[t,g]=m.exports.useState({username:"",name:"",surname:"",id_t_user:"",picture:"",country:"",city:"",region:"",address:"",address_detail:"",postal_code:"",cellphone:"",phone:"",doc:"",id_t_doc:"",email:"",password:"",password_confirmation:""}),o=(r,n)=>{var c,p;let w=((c=r.target)==null?void 0:c.name)||n,N=((p=r.target)==null?void 0:p.value)||r.value;g({...t,[w]:N})};return a(_,{...f,children:[e(C,{title:"RegisterUser"}),e("div",{children:e(L,{className:"mx-auto my-10",children:a("form",{onSubmit:r=>{if(r.preventDefault(),t.password!==t.password_confirmation){i.error("Las contrase\xF1as no coinciden");return}I.post("/api/user",t).then(n=>{i.success("Usuario registrado correctamente"),window.location.href="/users"}).catch(n=>i.error("Error al registrar el usuario. Por favor valide los campos"))},children:[e(y,{className:"justify-center",children:e("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200",children:"Registro de Usuario"})}),a("div",{className:"flex flex-col gap-4",children:[a("div",{className:"flex flex-col md:flex-row gap-4",children:[a("div",{className:"md:w-1/2 w-full",children:[e(l,{forInput:"name",value:"Nombre (s)"}),e(s,{type:"text",name:"name",value:t.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:o,required:!0,minLength:3,maxLength:50,onlyLetters:!0})]}),a("div",{className:"md:w-1/2 w-full",children:[e(l,{forInput:"surname",value:"Apellido (s)"}),e(s,{type:"text",name:"surname",value:t.surname,className:"mt-1 block w-full",autoComplete:"name",handleChange:o,required:!0,minLength:3,maxLength:50,onlyLetters:!0})]})]}),a("div",{children:[e(l,{forInput:"email",value:"Email"}),e(s,{type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"email",handleChange:o,required:!0,email:!0})]}),a("div",{className:"flex flex-col md:flex-row gap-4",children:[a("div",{className:"md:w-1/2",children:[e(l,{forInput:"username",value:"Nombre de Usuario"}),e(s,{type:"text",name:"username",value:t.username,className:"mt-1 block w-full",autoComplete:"username",handleChange:o,required:!0,minLength:8,maxLength:15,alpaNumeric:!0})]}),a("div",{className:"md:w-1/2",children:[e(l,{forInput:"id_t_user",value:"Tipo de usuario"}),e(h,{name:"id_t_user",options:x,required:!0,onChange:r=>o(r,"id_t_user")})]})]}),a("div",{className:"flex flex-col gap-4 md:flex-row",children:[a("div",{className:"md:w-1/2",children:[e(l,{forInput:"phone",value:"Tel\xE9fono"}),e(s,{type:"text",name:"phone",value:t.phone,className:"mt-1 block w-full",autoComplete:"phone",handleChange:o,required:!0,onlyNumbers:!0,minLength:4,maxLength:30})]}),a("div",{className:"md:w-1/2",children:[e(l,{forInput:"cellphone",value:"Celular"}),e(s,{type:"text",name:"cellphone",value:t.cellphone,className:"mt-1 block w-full",autoComplete:"cellphone",handleChange:o,required:!0,onlyNumbers:!0,minLength:4,maxLength:30})]})]}),a("div",{className:"flex flex-col gap-4 md:flex-row",children:[a("div",{className:"md:w-1/2",children:[e(l,{forInput:"doc",value:"Documento de Identidad"}),e(s,{type:"text",name:"doc",value:t.doc,className:"mt-1 block w-full",autoComplete:"doc",handleChange:o,required:!0,onlyNumbers:!0,minLength:4,maxLength:30})]}),a("div",{className:"md:w-1/2",children:[e(l,{forInput:"id_t_doc",value:"Tipo de Documento"}),e(h,{name:"id_t_doc",options:v,className:"mt-1 block w-full",autoComplete:"id_t_doc",onChange:r=>o(r,"id_t_doc"),required:!0})]})]}),a("div",{className:"flex flex-col gap-4 md:flex-row",children:[a("div",{className:"md:w-1/2",children:[e(l,{forInput:"password",value:"Contrase\xF1a"}),e(s,{type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:o,required:!0,minLength:8})]}),a("div",{className:"md:w-1/2",children:[e(l,{forInput:"password_confirmation",value:"Confirmar Constrase\xF1a"}),e(s,{type:"password",name:"password_confirmation",value:t.password_confirmation,className:"mt-1 block w-full",handleChange:o,required:!0})]})]}),e("div",{className:"flex justify-center",children:e(b,{className:"bg-green-light",type:"submit",children:"Guardar"})})]})]})})})]})}export{M as default};
