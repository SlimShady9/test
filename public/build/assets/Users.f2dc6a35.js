import{u as M,r as m,a as v,j as r,F as E,L as z}from"./app.4d6b7aa4.js";import{C as _}from"./Container.64a7f150.js";import{Q as H,A as $}from"./Authenticated.122302e3.js";import{a as O}from"./index.0edb6af2.js";import{e as G}from"./index.esm.742a64bc.js";import{G as P}from"./iconBase.5fbb9523.js";import{B as A}from"./ButtonGroup.a1623c25.js";import{M as Q}from"./Modal.0b298d60.js";import{I as R}from"./Input.64fc0386.js";import{S as k}from"./SelectInput.ab71d96e.js";import{B as I}from"./Button.19f1063b.js";import{L as J}from"./Label.fc25a627.js";import{R as K}from"./react-loading.2a5c7fb7.js";import{Q as W}from"./index.es.03d876ff.js";import{t as X}from"./TipoDocumentoEnum.2f13d358.js";import{t as Y}from"./TipoDeUsuariosEnum.2a2c2a7c.js";import{a as Z,i as q}from"./FetchUsers.2610b1d9.js";import"./transportes.87cfd211.js";import"./Card.65dddf88.js";import"./hoist-non-react-statics.cjs.13665392.js";function ee(l){return P({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"}}]}]})(l)}function te({parameters:l=[],onSubmit:c,titleForm:p,buttonText:g,cols:x,className:C}){const{data:s,setData:h,processing:b,errors:L,reset:j}=M(l.map(o=>({...o,value:o.value||""}))),[N,f]=m.exports.useState(!1),S=(o,u,i)=>{o.label?(h(t=>{const e=t.find(n=>n.name==i),a=t.findIndex(n=>n.name==i);return e.value={name:o.label,value:o.value},t[a]=e,t}),u({label:o.label,value:o.value})):(h(t=>{const e=t.find(n=>n.name==o.target.name),a=t.findIndex(n=>n.name==o.target.name);return e.value=o.target.value,t[a]=e,t}),u(o.target.value))};return v("form",{onSubmit:o=>{o.preventDefault(),f(!0);const u=Object.keys(s).map(t=>s[t].type=="select"?{[s[t].name]:s[t].value.value||s[t].value[0].value}:s[t].type=="text"?{[s[t].name]:s[t].value}:s[t]),i={};u.map(t=>{isNaN(Object.keys(t)[0])&&(i[Object.keys(t)[0]]=Object.values(t)[0])}),c(i)},children:[l.map(({label:o,extend:u,name:i,type:t,value:e,required:a,options:n,onlyLetters:d,alpaNumeric:U,onlyNumbers:w,email:B,min:T,max:V,minLenght:y,maxLenght:F})=>r(ae,{label:o,extend:u,name:i,type:t,value:e,required:a,options:n,handleChange:S,onlyLetters:d,alpaNumeric:U,onlyNumbers:w,email:B,min:T,max:V,minLenght:y,maxLenght:F},`${o}_${i}`)),v("div",{className:"flex col-span-2 justify-center m-4",children:[r("br",{}),v(I,{className:"justify-center ",processing:b,children:[N&&r(K,{type:"spin",color:"#808080",height:16,width:16}),!N&&g]})]})]})}function ae({label:l,extend:c,name:p,type:g,value:x,required:C,options:s,handleChange:h,onlyLetters:b,alpaNumeric:L,onlyNumbers:j,email:N,min:f,max:S,minLenght:D,maxLenght:o}){const[u,i]=m.exports.useState(x);return v("div",{className:"col-span-"+c,children:[r(J,{forInput:p,value:l}),g==="select"?r(k,{options:s,value:u,onChange:t=>h(t,i,p),required:C}):r(R,{type:g,name:p,defaultValue:u,autoComplete:p,handleChange:t=>h(t,i,p),required:C,onlyLetters:b,alpaNumeric:L,onlyNumbers:j,email:N,min:f,max:S,minLength:D,maxLength:o})]})}const re=({lUser:l})=>{const[c,p]=m.exports.useState(""),[g,x]=m.exports.useState([]),[C,s]=m.exports.useState([]),[h,b]=m.exports.useState(null),[L,j]=m.exports.useState([]),[N,f]=m.exports.useState(""),S=()=>f(!1),D=e=>{O.put(`/api/user/${h}`,e).then(a=>{x(n=>n.map(d=>d.id===a.data.id?a.data:d)),s(n=>n.map(d=>d.id===a.data.id?a.data:d)),b(null),f(!1)})},o=async()=>{try{const e=await Z({state:1});x(e.data.filter(a=>l.id!==a.id)),s(e.data.filter(a=>l.id!==a.id))}catch(e){console.log(e)}},u=e=>{q(e).then(a=>{const[n,d]=a;if(d){H.error("No se pudo inactivar el usuario. Contacte al administrador");return}H.success("Usuario inactivado correctamente"),x(U=>U.filter(w=>w.id!==n.id)),s(U=>U.filter(w=>w.id!==n.id))})},i=[{name:"Usuario / Opciones",grow:2.5,center:!0,cell:e=>v("div",{className:"grid",children:[r("div",{className:"text-center text-lg font-bold",children:e.username}),r("div",{className:"mx-auto",children:r(A,{listButtons:[{onClick:()=>t(e.id),icon:r(G,{}),text:"Editar",className:"bg-blue-400"},{onClick:()=>u(e),icon:r(ee,{}),text:"Inactivar"}]})})]})},{name:"Nombres",selector:e=>e.name+" "+e.surname,sortable:!0},{name:"Tipo de usuario",selector:e=>Y(e.id_t_user)},{name:"Correo",selector:e=>r("a",{href:"http://"+e.email,target:"_blank",className:"bg-blue",children:e.email})},{name:"Documento",selector:e=>X(e.id_t_user)+" "+e.doc},{name:"Celular",selector:e=>e.cellphone},{name:"Tel\xE9fono",selector:e=>e.phone}];m.exports.useEffect(()=>{o()},[]);const t=e=>{O.get(`/api/user/${e}/edit`).then(a=>{j(a.data.parameters),f(!0),b(e)})};return m.exports.useEffect(()=>{const e=g.filter(a=>a.username.toLowerCase().match(c.toLowerCase())||a.surname.toLowerCase().match(c.toLowerCase())||a.phone.match(c)||a.cellphone.match(c)||a.doc.match(c)||a.email.toLowerCase().match(c.toLowerCase()));s(e)},[c]),r(W,{columns:i,data:C,highlightOnHover:!0,fixedHeader:!0,pagination:!0,subHeader:!0,noDataComponent:"No se encontraron resultados",paginationComponentOptions:{rowsPerPageText:"Filas por p\xE1gina",rangeSeparatorText:"de"},subHeaderComponent:v(E,{children:[r(z,{href:"regUser",className:"mx-auto p-3 bg-blue-400",children:r(I,{children:"Nuevo Usuario"})}),r("input",{type:"text",placeholder:"Buscar",className:"w-25 form-control rounded-3xl",value:c,onChange:e=>p(e.target.value)}),r(Q,{onHide:S,show:N,title:"Editar usuario",children:r(te,{parameters:L,buttonText:"Editar usuario",onSubmit:D})})]})})};var oe=re;function Le(l){return m.exports.useState([]),r(E,{children:r($,{...l,children:v(_,{className:"justify-center bg-opacity-30 shadow-xl flex flex-col ",children:[r("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200",children:"Tabla de Usuarios"}),r(oe,{lUser:l.auth.user})]})})})}export{Le as default};