import{r as i,j as e,F as c,a}from"./app.14a3b57d.js";import{C as s}from"./Container.a303ad17.js";import{A as n}from"./Authenticated.eaa71d90.js";import{P as l}from"./PqrsForm.a6133e8d.js";import{b as d}from"./FetchService.e66adc0e.js";import"./iconBase.9679d326.js";import"./TipoDeUsuariosEnum.fd1e81a1.js";import"./ReactToastify.62ab24cf.js";import"./transportes.ca9f9614.js";import"./Label.1d57773d.js";import"./Button.1051e882.js";import"./index.d8622dc5.js";import"./EstadoServiciosEnum.74aa18f7.js";import"./Input.a26e4893.js";import"./react-loading.62faeea4.js";function q(t){const[r,o]=i.exports.useState(null);return i.exports.useEffect(()=>{d(t.serviceId).then(m=>{o(m[0])})},[]),e(c,{children:e(n,{...t,children:e(s,{className:"justify-center bg-opacity-30 shadow-xl",children:a(s,{className:"justify-center",children:[a("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:[r==null?void 0:r.tracking_id," PQRs"]}),e(l,{serviceId:t.serviceId,auth:t.auth})]})})})})}export{q as default};