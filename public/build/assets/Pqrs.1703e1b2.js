import{r as i,a,F as m,j as e,H as u}from"./app.a566c16c.js";import{C as n}from"./Container.679e45d6.js";import{A as d}from"./Authenticated.8c78fd01.js";import{L as f}from"./Label.d558c561.js";import{B as p}from"./Button.2495e8c5.js";import{a as h}from"./index.9b570c6c.js";import{b as x}from"./TipoDeUsuariosEnum.c0dd3777.js";import{t as v}from"./EstadoServiciosEnum.5113cc2f.js";import{g as l}from"./FetchService.c6fc6210.js";import"./iconBase.ac963c5b.js";import"./transportes.87cfd211.js";const b=async t=>{try{h.post("/api/email/",t)}catch(r){return{data:null,error:r}}};function g({auth:t,serviceId:r}){const[o,c]=i.exports.useState(null);return i.exports.useEffect(()=>{l(r).then(s=>{c(s[0])})},[]),a(m,{children:[e(u,{title:"Datos del servicio"}),e("h1",{className:"text-xl font-bold text-left mb-3",children:"Escribe tu comentario acerca del servicio"}),e("form",{className:"gap-4",onSubmit:s=>{s.preventDefault(),b({servicio:r,comentario:s.target.Descripcion.value,usuario:t.user.email,tUsuario:x(t.user.id_t_user),stateService:v(o.id_state_service)})},children:a("div",{className:"flex flex-col w-full gap-4",children:[e("div",{className:"mt-3",children:e(f,{children:"Descripci\xF3n / Recomendaciones"})}),e("textarea",{className:"m-1 rounded-md font-sans tracking-widest",name:"Descripcion",id:"",cols:"30",rows:"4",required:!0}),e("div",{className:"my-3 m-auto",children:e(p,{className:"",type:"submit",children:"Enviar"})})]})})]})}function A(t){const[r,o]=i.exports.useState(null);return i.exports.useEffect(()=>{l(t.serviceId).then(c=>{o(c[0])})},[]),e(m,{children:e(d,{...t,children:e(n,{className:"justify-center bg-opacity-30 shadow-xl",children:a(n,{className:"justify-center",children:[a("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:[r==null?void 0:r.tracking_id," PQRs"]}),e(g,{serviceId:t.serviceId,auth:t.auth})]})})})})}export{A as default};
