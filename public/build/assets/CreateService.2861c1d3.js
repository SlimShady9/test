import{r as S,j as r,F as c,a as n}from"./app.7cab3ae9.js";import{S as p,a as A,b as _,M as E,A as N,U as d,C as R,T as l}from"./ContentForm.7d192fe9.js";import{A as v}from"./Authenticated.98883433.js";import{C as x}from"./Card.74b5906e.js";import{C as D}from"./Container.6a62cd81.js";import{E as e}from"./EstadoServiciosEnum.4fd202f0.js";import{u as V}from"./FetchService.4e8c7e4d.js";import"./Input.8da8264b.js";import"./Label.d730bab7.js";import"./Button.f0abf33a.js";import"./SelectInput.fa32eb8f.js";import"./hoist-non-react-statics.cjs.13665392.js";import"./TipoDeServiciosEnum.f8824a38.js";import"./FetchContent.c961fa8b.js";import"./index.9b570c6c.js";import"./TipoDeUsuariosEnum.c0dd3777.js";import"./FetchUsers.f82384b8.js";import"./Modal.3b4dc65f.js";import"./TipoDeCargaEnum.513c970d.js";import"./iconBase.7342d9d4.js";import"./transportes.87cfd211.js";function Q(s){const m=[e.SERVICIO_INCIADO,e.SERVICIO_DIRECCION_CONFIRMADA,e.SERVICIO_MENSAJERIA,e.SERVICIO_USUARIOS_ASIGNADOS,e.SERVICIO_CON_CONTENIDO,e.SERVICIO_CON_TAREAS],[C,O]=S.exports.useState(m),[t,i]=S.exports.useState(e.SERVICIO_INCIADO),[a,o]=S.exports.useState({service:{},address:{},orders:[],tasks:[],messaging:{},content:{}});return r(c,{children:r(v,{...s,children:r(D,{className:"flex justify-center",children:n(x,{className:"sm:w-3/5",children:[r("h1",{className:"text-2xl font-bold text-center",children:"Crear Servicio"}),r(p,{currentStep:t,steps:C}),r(c,{}),n(A.Provider,{value:{serviceDTO:a,setServiceDTO:o},children:[t===e.SERVICIO_INCIADO&&r(_,{currentStep:t,setNextStep:i,setServicesAvailable:O,typeUser:s.auth.user.id_t_user,idUser:s.auth.user.id}),t===e.SERVICIO_MENSAJERIA&&r(E,{currentStep:t,setNextStep:i,user:s.auth.user}),t===e.SERVICIO_DIRECCION_CONFIRMADA&&r(N,{api_token:s.api_token,onSubmit:async u=>{const I={...a.service,address:u.id};V(I),o({...a,service:I}),i(e.SERVICIO_MENSAJERIA)}}),t===e.SERVICIO_USUARIOS_ASIGNADOS&&s.auth.user.id_t_user==1&&r(d,{currentStep:t,setNextStep:i}),t===e.SERVICIO_CON_CONTENIDO&&r(R,{currentStep:t,setNextStep:i}),t===e.SERVICIO_CON_TAREAS&&r(l,{api_token:s.api_token,currentStep:t,setNextStep:i,user:s.auth.user})]})]})})})})}export{Q as default};