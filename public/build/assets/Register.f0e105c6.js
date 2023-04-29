import{r as g,u as x,a,j as e,H as v,L as w}from"./app.14a3b57d.js";import{B as N}from"./Button.1051e882.js";import{C}from"./Container.a303ad17.js";import{B as b}from"./Base.fdedd4c9.js";import{T as y}from"./TipoDeUsuariosEnum.fd1e81a1.js";import{I as n}from"./Input.a26e4893.js";import{L as o}from"./Label.1d57773d.js";import{S as L}from"./SelectInput.4033d2ec.js";import{T as s,a as _}from"./TipoDocumentoEnum.c14ddb0c.js";import"./Header.84bb3711.js";import"./iconBase.9679d326.js";import"./index.esm.8067344b.js";import"./Card.64c75612.js";import"./ReactToastify.62ab24cf.js";import"./hoist-non-react-statics.cjs.13665392.js";function K(){const[u,I]=g.exports.useState(Object.keys(s).map(r=>({value:s[r],label:_(s[r])}))),{data:t,setData:d,post:c,processing:q,errors:k,reset:T}=x({username:"pedro123",name:"Pedro",surname:"Alcachofa",id_t_user:y.CLIENTE_NATURAL,picture:"",country:"",city:"",region:"",address:"",address_detail:"",postal_code:"",cellphone:"3178874957",phone:"3178874957",doc:"1019152187",id_t_doc:1,email:"jdquinterog@unbosque.edu.co",password:"Juancho9",password_confirmation:"Juancho9"}),l=(r,p)=>{var m,i;let h=((m=r.target)==null?void 0:m.name)||p,f=((i=r.target)==null?void 0:i.value)||r.value;d({...t,[h]:f})};return a(b,{children:[e(v,{title:"Register"}),a("form",{onSubmit:r=>{r.preventDefault(),c(route("register"))},children:[e(C,{className:"justify-center",children:e("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Registro de Usuario"})}),a("div",{className:"flex flex-col gap-4",children:[a("div",{className:"flex flex-col md:flex-row gap-4",children:[a("div",{className:"md:w-1/2 w-full",children:[e(o,{forInput:"name",value:"Nombre (s)"}),e(n,{type:"text",name:"name",value:t.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:l,required:!0,minLength:3,maxLength:50,onlyLetters:!0})]}),a("div",{className:"md:w-1/2 w-full",children:[e(o,{forInput:"surname",value:"Apellido (s)"}),e(n,{type:"text",name:"surname",value:t.surname,className:"mt-1 block w-full",autoComplete:"name",handleChange:l,required:!0,minLength:3,maxLength:50,onlyLetters:!0})]})]}),a("div",{className:"flex flex-col md:flex-row gap-4",children:[a("div",{className:"md:w-1/2",children:[e(o,{forInput:"username",value:"Nombre de Usuario"}),e(n,{type:"text",name:"username",value:t.username,className:"mt-1 block w-full",autoComplete:"username",handleChange:l,required:!0,minLength:8,maxLength:15,alpaNumeric:!0})]}),a("div",{className:"md:w-1/2",children:[e(o,{forInput:"email",value:"Email"}),e(n,{type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"email",handleChange:l,required:!0,email:!0})]})]}),a("div",{className:"flex flex-col gap-4 md:flex-row",children:[a("div",{className:"md:w-1/2",children:[e(o,{forInput:"phone",value:"Tel\xE9fono"}),e(n,{type:"text",name:"phone",value:t.phone,className:"mt-1 block w-full",autoComplete:"phone",handleChange:l,required:!0,onlyNumbers:!0,minLength:4,maxLength:30})]}),a("div",{className:"md:w-1/2",children:[e(o,{forInput:"cellphone",value:"Celular"}),e(n,{type:"text",name:"cellphone",value:t.cellphone,className:"mt-1 block w-full",autoComplete:"cellphone",handleChange:l,required:!0,onlyNumbers:!0,minLength:4,maxLength:30})]})]}),a("div",{className:"flex flex-col gap-4 md:flex-row",children:[a("div",{className:"md:w-1/2",children:[e(o,{forInput:"doc",value:"Documento de Identidad"}),e(n,{type:"text",name:"doc",value:t.doc,className:"mt-1 block w-full",autoComplete:"doc",handleChange:l,required:!0,onlyNumbers:!0,minLength:4,maxLength:30})]}),a("div",{className:"md:w-1/2",children:[e(o,{forInput:"id_t_doc",value:"Tipo de Documento"}),e(L,{name:"id_t_doc",options:u,className:"mt-1 block w-full",autoComplete:"id_t_doc",onChange:r=>l(r,"id_t_doc"),required:!0})]})]}),a("div",{className:"flex flex-col gap-4 md:flex-row",children:[a("div",{className:"md:w-1/2",children:[e(o,{forInput:"password",value:"Contrase\xF1a"}),e(n,{type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:l,required:!0,minLength:8})]}),a("div",{className:"md:w-1/2",children:[e(o,{forInput:"password_confirmation",value:"Confirmar Constrase\xF1a"}),e(n,{type:"password",name:"password_confirmation",value:t.password_confirmation,className:"mt-1 block w-full",handleChange:l,required:!0})]})]}),a("div",{className:"col-span-2 flex items-center justify-end mt-4 ",children:[e(w,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray",children:"\xBFYa se ha registrado?"}),e(N,{className:"ml-4",type:"submit",children:"Registrarme"})]})]})]})]})}export{K as default};
