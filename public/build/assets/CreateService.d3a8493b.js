import{r as S,j as r,F as c,a as n}from"./app.5d84509d.js";import{S as u,a as A,b as _,M as E,A as N,U as R,C as d,T as l}from"./ContentForm.a6bc933e.js";import{A as v}from"./Authenticated.25569669.js";import{C as x}from"./Card.6397552c.js";import{C as D}from"./Container.16619b2f.js";import{E as e}from"./EstadoServiciosEnum.1def3d76.js";import{u as V}from"./FetchService.c6fc6210.js";import"./Input.ee6c9358.js";import"./Label.2c11d31f.js";import"./Button.bb5efe90.js";import"./SelectInput.154f1b78.js";import"./hoist-non-react-statics.cjs.13665392.js";import"./TipoDeServiciosEnum.f8824a38.js";import"./FetchContent.aba059b5.js";import"./index.9b570c6c.js";import"./TipoDeUsuariosEnum.c0dd3777.js";import"./FetchUsers.be10942e.js";import"./Modal.f337c1d8.js";import"./TipoDeCargaEnum.513c970d.js";import"./iconBase.92f03093.js";import"./transportes.87cfd211.js";function Q(s){const m=[e.SERVICIO_INCIADO,e.SERVICIO_DIRECCION_CONFIRMADA,e.SERVICIO_MENSAJERIA,e.SERVICIO_USUARIOS_ASIGNADOS,e.SERVICIO_CON_CONTENIDO,e.SERVICIO_CON_TAREAS],[C,O]=S.exports.useState(m),[t,i]=S.exports.useState(e.SERVICIO_INCIADO),[a,o]=S.exports.useState({service:{},address:{},orders:[],tasks:[],messaging:{},content:{}});return r(c,{children:r(v,{...s,children:r(D,{className:"flex justify-center",children:n(x,{className:"sm:w-3/5",children:[r("h1",{className:"text-2xl font-bold text-center",children:"Crear Servicio"}),r(u,{currentStep:t,steps:C}),r(c,{}),n(A.Provider,{value:{serviceDTO:a,setServiceDTO:o},children:[t===e.SERVICIO_INCIADO&&r(_,{currentStep:t,setNextStep:i,setServicesAvailable:O,typeUser:s.auth.user.id_t_user}),t===e.SERVICIO_MENSAJERIA&&r(E,{currentStep:t,setNextStep:i,user:s.auth.user}),t===e.SERVICIO_DIRECCION_CONFIRMADA&&r(N,{api_token:s.api_token,onSubmit:async p=>{const I={...a.service,address:p.id};V(I),o({...a,service:I}),i(e.SERVICIO_MENSAJERIA)}}),t===e.SERVICIO_USUARIOS_ASIGNADOS&&s.auth.user.id_t_user==1&&r(R,{currentStep:t,setNextStep:i}),t===e.SERVICIO_CON_CONTENIDO&&r(d,{currentStep:t,setNextStep:i}),t===e.SERVICIO_CON_TAREAS&&r(l,{api_token:s.api_token,currentStep:t,setNextStep:i,user:s.auth.user})]})]})})})})}export{Q as default};