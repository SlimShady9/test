import{u as $,r as c,a as g,j as r,F as U,L as A}from"./app.a566c16c.js";import{C as M}from"./Container.679e45d6.js";import{A as P}from"./Authenticated.8c78fd01.js";import{a as j}from"./index.9b570c6c.js";import{a as R}from"./index.esm.dbe59cf3.js";import{Q as _,R as V}from"./index.es.206c60f2.js";import{B as G}from"./ButtonGroup.391a45e8.js";import{M as Q}from"./Modal.298c3a5c.js";import{I as k}from"./Input.122bb5b9.js";import{S as z}from"./SelectInput.e6589eca.js";import{B as D}from"./Button.2495e8c5.js";import{L as J}from"./Label.d558c561.js";import{R as K}from"./react-loading.81b2c7c4.js";import{a as W}from"./TipoDocumentoEnum.5de49903.js";import"./iconBase.ac963c5b.js";import"./TipoDeUsuariosEnum.c0dd3777.js";import"./transportes.87cfd211.js";import"./hoist-non-react-statics.cjs.13665392.js";import"./Card.7655ca5f.js";function X({parameters:u=[],onSubmit:l,titleForm:p,buttonText:f,cols:v,className:N}){const{data:o,setData:d,processing:b,errors:S,reset:w}=$(u.map(a=>({...a,value:a.value||""}))),[x,h]=c.exports.useState(!1),C=(a,i,n)=>{a.label?(d(e=>{const t=e.find(s=>s.name==n),m=e.findIndex(s=>s.name==n);return t.value={name:a.label,value:a.value},e[m]=t,e}),i({label:a.label,value:a.value})):(d(e=>{const t=e.find(s=>s.name==a.target.name),m=e.findIndex(s=>s.name==a.target.name);return t.value=a.target.value,e[m]=t,e}),i(a.target.value))};return g("form",{onSubmit:a=>{a.preventDefault(),h(!0);const i=Object.keys(o).map(e=>o[e].type=="select"?{[o[e].name]:o[e].value.value||o[e].value[0].value}:o[e].type=="text"?{[o[e].name]:o[e].value}:o[e]),n={};i.map(e=>{isNaN(Object.keys(e)[0])&&(n[Object.keys(e)[0]]=Object.values(e)[0])}),l(n)},children:[u.map(({label:a,extend:i,name:n,type:e,value:t,required:m,options:s,onlyLetters:O,alpaNumeric:E,onlyNumbers:F,email:I,min:y,max:B,minLenght:H,maxLenght:T})=>r(Y,{label:a,extend:i,name:n,type:e,value:t,required:m,options:s,handleChange:C,onlyLetters:O,alpaNumeric:E,onlyNumbers:F,email:I,min:y,max:B,minLenght:H,maxLenght:T},`${a}_${n}`)),g("div",{className:"flex col-span-2 justify-center m-4",children:[r("br",{}),g(D,{className:"justify-center ",processing:b,children:[x&&r(K,{type:"spin",color:"#808080",height:16,width:16}),!x&&f]})]})]})}function Y({label:u,extend:l,name:p,type:f,value:v,required:N,options:o,handleChange:d,onlyLetters:b,alpaNumeric:S,onlyNumbers:w,email:x,min:h,max:C,minLenght:L,maxLenght:a}){const[i,n]=c.exports.useState(v);return g("div",{className:"col-span-"+l,children:[r(J,{forInput:p,value:u}),f==="select"?r(z,{options:o,value:i,onChange:e=>d(e,n,p),required:N}):r(k,{type:f,name:p,defaultValue:i,autoComplete:p,handleChange:e=>d(e,n,p),required:N,onlyLetters:b,alpaNumeric:S,onlyNumbers:w,email:x,min:h,max:C,minLength:L,maxLength:a})]})}const Z=({lUser:u})=>{const[l,p]=c.exports.useState(""),[f,v]=c.exports.useState([]),[N,o]=c.exports.useState([]),[d,b]=c.exports.useState(null),[S,w]=c.exports.useState([]),[x,h]=c.exports.useState(""),C=()=>h(!1),L=e=>{j.put(`/api/user/${d}`,e).then(t=>{v(m=>m.map(s=>s.id===t.data.id?t.data:s)),o(m=>m.map(s=>s.id===t.data.id?t.data:s)),b(null),h(!1)})},a=async()=>{try{const e=await j.get("/api/user");v(e.data.data.filter(t=>u.id!==t.id)),o(e.data.data.filter(t=>u.id!==t.id))}catch(e){console.log(e)}},i=[{name:"Nombre de usuario",selector:e=>e.username},{name:"Nombres",selector:e=>e.name+" "+e.surname,sortable:!0},{name:"Correo",selector:e=>r("a",{href:"http://"+e.email,target:"_blank",className:"bg-blue",children:e.email})},{name:"Documento",selector:e=>W(e.id_t_user)+" "+e.doc},{name:"N\xFAmero de contacto",selector:e=>e.phone||e.cellphone},{name:"Opciones",grow:1.5,center:!0,cell:e=>r(G,{listButtons:[{onClick:()=>n(e.id),icon:r(R,{}),text:"Editar",className:"bg-blue-400"},{onClick:()=>console.log("Eliminar"),icon:r(V,{}),text:"Eliminar"}]})}];c.exports.useEffect(()=>{a()},[]);const n=e=>{j.get(`/api/user/${e}/edit`).then(t=>{w(t.data.parameters),h(!0),b(e)})};return c.exports.useEffect(()=>{const e=f.filter(t=>t.username.toLowerCase().match(l.toLowerCase())||t.surname.toLowerCase().match(l.toLowerCase())||t.phone.match(l)||t.cellphone.match(l)||t.doc.match(l)||t.email.toLowerCase().match(l.toLowerCase()));o(e)},[l]),r(_,{columns:i,data:N,highlightOnHover:!0,fixedHeader:!0,pagination:!0,subHeader:!0,noDataComponent:"No se encontraron resultados",paginationComponentOptions:{rowsPerPageText:"Filas por p\xE1gina",rangeSeparatorText:"de"},subHeaderComponent:g(U,{children:[r(A,{href:"regUser",className:"p-3 bg-blue-400",children:r(D,{children:"Nuevo Usuario"})}),r("input",{type:"text",placeholder:"Buscar",className:"w-25 form-control rounded-3xl",value:l,onChange:e=>p(e.target.value)}),r(Q,{onHide:C,show:x,title:"Editar usuario",children:r(X,{parameters:S,buttonText:"Editar usuario",onSubmit:L})})]})})};var q=Z;function ve(u){return c.exports.useState([]),r(U,{children:r(P,{...u,children:g(M,{className:"justify-center bg-opacity-30 shadow-xl flex flex-col ",children:[r("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200",children:"Tabla de Usuarios"}),r(q,{lUser:u.auth.user})]})})})}export{ve as default};
