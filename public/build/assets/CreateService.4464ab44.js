import{r as o,j as t,F as n,a as _}from"./app.14a3b57d.js";import{S as u,a as N,b as p,M as d,A as v,U as R,C as l,T as D}from"./ContentForm.9936840f.js";import{A as T}from"./Authenticated.eaa71d90.js";import{C as f}from"./Card.64c75612.js";import{C as x}from"./Container.a303ad17.js";import{E as e}from"./EstadoServiciosEnum.74aa18f7.js";import{u as h}from"./FetchService.e66adc0e.js";import{L as V}from"./Label.1d57773d.js";import{T as S}from"./TipoDeServiciosEnum.333dc939.js";import{T as U}from"./TipoDeUsuariosEnum.fd1e81a1.js";import"./Input.a26e4893.js";import"./Button.1051e882.js";import"./SelectInput.4033d2ec.js";import"./hoist-non-react-statics.cjs.13665392.js";import"./ReactToastify.62ab24cf.js";import"./FetchContent.18bcef45.js";import"./index.d8622dc5.js";import"./FetchUsers.9f9b20fb.js";import"./Modal.84f76cdc.js";import"./TipoDeCargaEnum.0292e147.js";import"./iconBase.9679d326.js";import"./transportes.ca9f9614.js";function $(s){const m=[e.SERVICIO_INCIADO,e.SERVICIO_DIRECCION_CONFIRMADA,e.SERVICIO_MENSAJERIA,e.SERVICIO_USUARIOS_ASIGNADOS,e.SERVICIO_CON_CONTENIDO,e.SERVICIO_CON_TAREAS],[O,C]=o.exports.useState(m),[r,i]=o.exports.useState(e.SERVICIO_INCIADO),[a,I]=o.exports.useState({service:{},address:{},orders:[],tasks:[],messaging:{},content:{}});return t(n,{children:t(T,{...s,children:t(x,{className:"flex justify-center",children:_(f,{className:"",children:[t("h1",{className:"text-2xl font-bold text-center",children:"Crear Servicio"}),t(u,{currentStep:r,steps:O}),t(n,{}),_(N.Provider,{value:{serviceDTO:a,setServiceDTO:I},children:[r===e.SERVICIO_INCIADO&&t(p,{currentStep:r,setNextStep:i,setServicesAvailable:C,typeUser:s.auth.user.id_t_user,idUser:s.auth.user.id}),r===e.SERVICIO_MENSAJERIA&&t(d,{currentStep:r,setNextStep:i,user:s.auth.user}),r===e.SERVICIO_DIRECCION_CONFIRMADA&&t(v,{title:"Direcci\xF3n de Origen",api_token:s.api_token,onSubmit:async(E,A)=>{const c={...a.service,address:E.id};if(h(c),I({...a,service:c}),A){window.history.back();return}if(s.auth.user.id_t_user===U.ADMIN&&a.service.id_type_service===S.LOGISTICA_DE_MENSJERIA||a.service.id_type_service===S.GESTION_DOCUMENTAL){i(e.SERVICIO_USUARIOS_ASIGNADOS);return}a.service.id_type_service===S.LOGISTICA_DE_MENSJERIA||a.service.id_type_service===S.GESTION_DOCUMENTAL?i(e.SERVICIO_CON_TAREAS):i(e.SERVICIO_MENSAJERIA)}}),r===e.SERVICIO_USUARIOS_ASIGNADOS&&s.auth.user.id_t_user==1&&t(R,{currentStep:r,setNextStep:i}),r===e.SERVICIO_CON_CONTENIDO&&t(l,{currentStep:r,setNextStep:i}),r===e.SERVICIO_CON_TAREAS&&t(D,{api_token:s.api_token,currentStep:r,setNextStep:i,user:s.auth.user}),t(V,{className:"text-right",children:"Llene los espacios obligatorios con marca *"})]})]})})})})}export{$ as default};
