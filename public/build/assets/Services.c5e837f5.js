import{r as o,j as r,a as l,F as f,L as D}from"./app.7cab3ae9.js";import{A as j}from"./Authenticated.98883433.js";import{C as A}from"./Container.6a62cd81.js";import{a as u}from"./index.9b570c6c.js";import{h as F,e as O}from"./index.esm.e34d086d.js";import{B as S}from"./Button.f0abf33a.js";import{Q as G}from"./index.es.09179ab0.js";import{G as L}from"./iconBase.7342d9d4.js";import{B as $}from"./ButtonGroup.da6537d7.js";import{a as I}from"./EstadoServiciosEnum.4fd202f0.js";import{t as P}from"./TipoDeServiciosEnum.f8824a38.js";import"./TipoDeUsuariosEnum.c0dd3777.js";import"./transportes.87cfd211.js";import"./hoist-non-react-statics.cjs.13665392.js";const H=async s=>{try{const a=await u.post("/api/tiempoLog",s);return a.status===200||a.status===201||a.status===202?{data:a.data,error:null}:{data:null,error:"Error al guardar el contenido"}}catch(a){return{data:null,error:a}}};function M(s){return L({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"40",d:"M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324"}},{tag:"circle",attr:{cx:"248",cy:"399.99",r:"32"}}]})(s)}const V=s=>{const[a,d]=o.exports.useState(""),[m,h]=o.exports.useState([]),[n,p]=o.exports.useState([]),[v,b]=o.exports.useState([]),E=()=>{console.log("guardar tiempo"),b({start_date:new Date}),console.log(v),H(v)};function N(e){let t;console.log(n);const i=",",c=`
`,x=Object.keys(n[0]);return t="",t+=x.join(i),t+=c,e.forEach(T=>{let g=0;x.forEach(B=>{g>0&&(t+=i),t+=T[B],g++}),t+=c}),t}function y(e){const t=document.createElement("a");let i=N(e);if(i==null)return;const c="export.csv";i.match(/^data:text\/csv/i)||(i=`data:text/csv;charset=utf-8,${i}`),t.setAttribute("href",encodeURI(i)),t.setAttribute("download",c),t.click()}const C=async()=>{try{const e=s.auth.user.id;if(s.auth.user.id_t_user==1){const t=await u.get("/api/service");h(t.data),p(t.data)}else{const t=await u.get(`/api/service/${e}/serviceByUser`);h(t.data),p(t.data)}}catch(e){console.log(e)}},_=({onExport:e})=>r(S,{onClick:t=>e(t.target.value),children:"Export"}),k=[{name:"No. de Gu\xEDa / Opciones",grow:2.7,center:!0,cell:e=>r(f,{children:l("div",{className:"grid gap-2 m-1",children:[r("div",{className:"text-center text-lg font-bold",children:e.tracking_id}),r("div",{className:"mx-auto",children:r($,{listButtons:[{href:`deliveryProof/${e.id}`,icon:r(F,{}),text:"Ver"},{href:`editService/${e.id}`,icon:r(O,{}),text:"Editar"},{href:`pqrs/${e.id}`,icon:r(M,{}),text:"Ayuda"}]})})]})})},{name:"Nombre",grow:1.7,sortable:!0,selector:e=>e.name},{name:"Tipo",sortable:!0,selector:e=>P(e.id_type_service)},{name:"Estado",sortable:!0,selector:e=>I(e.id_state_service)},{name:"Firmado",sortable:!0,selector:e=>e.signature!=null?"SI":"NO"},{name:"Inicio",sortable:!0,selector:e=>e.start_date},{name:"Fin",sortable:!0,selector:e=>e.end_date!=null?e.end_date:"No ha Finalizado"}];o.exports.useEffect(()=>{C()},[]),o.exports.useEffect(()=>{const e=m.filter(t=>t.name.toLowerCase().match(a.toLowerCase())||t.tracking_id.match(a));p(e)},[a]);const w=o.exports.useMemo(()=>r(_,{onExport:()=>y(n)}),[]);return l(f,{children:[l("div",{className:"grid grid-cols-1 gap-4 w-full",children:[r("div",{className:"m-auto",children:r(D,{href:"createService",className:"bg-blue-400",children:r(S,{className:" text-3xl",onClick:E,children:"Nuevo Servicio"})})}),r("div",{className:"m-auto sm:ml-5",children:r("input",{type:"text",placeholder:"Buscar",className:"w-25 form-control rounded-3xl",value:a,onChange:e=>d(e.target.value)})})]}),r(G,{columns:k,data:n,actions:w,highlightOnHover:!0,fixedHeader:!0,pagination:!0,subHeader:!0,noDataComponent:"No se encontraron resultados",paginationComponentOptions:{rowsPerPageText:"Filas por p\xE1gina",rangeSeparatorText:"de"}})]})};var q=V;function oe(s){const[a,d]=o.exports.useState([]);return o.exports.useState(""),o.exports.useState(null),o.exports.useEffect(()=>{u.get("/api/service/create").then(m=>{d(m.data.parameters)})},[]),r(f,{children:r(j,{...s,children:l(A,{className:"sm:m-6 justify-center bg-opacity-30 shadow-xl",children:[r("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200",children:"Tabla de Servicios"}),r(q,{auth:s.auth})]})})})}export{oe as default};