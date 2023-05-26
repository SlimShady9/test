import{r as S,j as t,F as n,a as _}from"./app.5036f3a7.js";import{S as l,a as A,b as N,M as d,A as p,U as v,C as R,T as D}from"./ContentForm.e2041f59.js";import{A as T}from"./Authenticated.ea999be9.js";import{C as f}from"./Card.6fa5be16.js";import{C as h}from"./Container.0bdb10f6.js";import{E as e}from"./EstadoServiciosEnum.4fd202f0.js";import{u as x}from"./FetchService.4c811df7.js";import{L as V}from"./Label.7c7e1583.js";import{T as a}from"./TipoDeServiciosEnum.f8824a38.js";import{T as g}from"./TipoDeUsuariosEnum.c0dd3777.js";import"./Input.a001d7b3.js";import"./Button.3cbd48f3.js";import"./SelectInput.22766891.js";import"./hoist-non-react-statics.cjs.13665392.js";import"./ReactToastify.942c415a.js";import"./FetchContent.32e5fbc2.js";import"./index.9b570c6c.js";import"./FetchUsers.f82384b8.js";import"./Modal.10762648.js";import"./TipoDeCargaEnum.513c970d.js";import"./iconBase.cea3fdd1.js";import"./transportes.ca9f9614.js";function $(s){const m=[e.SERVICIO_INCIADO,e.SERVICIO_DIRECCION_CONFIRMADA,e.SERVICIO_MENSAJERIA,e.SERVICIO_USUARIOS_ASIGNADOS,e.SERVICIO_CON_CONTENIDO,e.SERVICIO_CON_TAREAS],[E,O]=S.exports.useState(m),[r,i]=S.exports.useState(e.SERVICIO_INCIADO),[o,c]=S.exports.useState({service:{},address:{},orders:[],tasks:[],messaging:{},content:{}});return t(n,{children:t(T,{...s,children:t(h,{className:"flex justify-center",children:_(f,{className:"",children:[t("h1",{className:"text-2xl font-bold text-center",children:"Crear Servicio"}),t(l,{currentStep:r,steps:E}),t(n,{}),_(A.Provider,{value:{serviceDTO:o,setServiceDTO:c},children:[r===e.SERVICIO_INCIADO&&t(N,{currentStep:r,setNextStep:i,setServicesAvailable:O,typeUser:s.auth.user.id_t_user,idUser:s.auth.user.id}),r===e.SERVICIO_MENSAJERIA&&t(d,{currentStep:r,setNextStep:i,user:s.auth.user}),r===e.SERVICIO_DIRECCION_CONFIRMADA&&t(p,{title:"Direcci\xF3n de Origen",api_token:s.api_token,onSubmit:async(u,C)=>{const I={...o.service,address:u.id};if(x(I),c({...o,service:I}),C){window.history.back();return}if(console.log(o.service.id_type_service),console.log(s.auth.user.id_t_user),s.auth.user.id_t_user===g.ADMIN&&o.service.id_type_service===a.LOGISTICA_DE_MENSJERIA||o.service.id_type_service===a.GESTION_DOCUMENTAL){console.log("Entre aqui! admin"),i(e.SERVICIO_USUARIOS_ASIGNADOS);return}console.log("Else!"),o.service.id_type_service===a.LOGISTICA_DE_MENSJERIA||o.service.id_type_service===a.GESTION_DOCUMENTAL?(console.log("Entre aqui!"),i(e.SERVICIO_CON_TAREAS)):(console.log("Else!"),i(e.SERVICIO_MENSAJERIA))}}),r===e.SERVICIO_USUARIOS_ASIGNADOS&&s.auth.user.id_t_user==1&&t(v,{currentStep:r,setNextStep:i}),r===e.SERVICIO_CON_CONTENIDO&&t(R,{currentStep:r,setNextStep:i}),r===e.SERVICIO_CON_TAREAS&&t(D,{api_token:s.api_token,currentStep:r,setNextStep:i,user:s.auth.user}),t(V,{className:"text-right",children:"Llene los espacios obligatorios con marca *"})]})]})})})})}export{$ as default};
