import{r,j as t,a as m}from"./app.4d6b7aa4.js";import{Q as N}from"./index.es.03d876ff.js";import{a as U,r as b}from"./FetchUsers.2610b1d9.js";import{g as C}from"./index.esm.742a64bc.js";import{t as S}from"./TipoDeUsuariosEnum.2a2c2a7c.js";import{A as E,Q as u}from"./Authenticated.122302e3.js";import{B as T}from"./ButtonGroup.a1623c25.js";import{t as _}from"./TipoDocumentoEnum.2f13d358.js";import"./hoist-non-react-statics.cjs.13665392.js";import"./index.0edb6af2.js";import"./iconBase.5fbb9523.js";import"./transportes.87cfd211.js";const P=d=>{const[a,p]=r.exports.useState(""),[i,c]=r.exports.useState([]),[l,s]=r.exports.useState([]),h=async()=>{U({state:0}).then(e=>{c(e.data),s(e.data)})},f=async e=>{b(e).then(o=>{const[x,v]=o;if(v){u.error("Error al reactivar el usuario. Contacte al administrador");return}u.success(`Usuario ${x.username} reactivado`),c(i.filter(n=>n.id!==e.id)),s(l.filter(n=>n.id!==e.id))})};r.exports.useEffect(()=>{h()},[]);const g=[{name:"Opciones",grow:2.5,center:!0,cell:e=>m("div",{className:"grid",children:[t("div",{className:"text-center text-lg font-bold",children:e.username}),t("div",{className:"mx-auto",children:t(T,{listButtons:[{onClick:()=>f(e),text:"Activar",icon:t(C,{})}]})})]})},{name:"Nombre de usuario",selector:e=>e.username},{name:"Nombres",selector:e=>e.name+" "+e.surname,sortable:!0},{name:"Tipo de usuario",selector:e=>S(e.id_t_user)},{name:"Correo",selector:e=>t("a",{href:"http://"+e.email,target:"_blank",className:"bg-blue",children:e.email})},{name:"Documento",selector:e=>_(e.id_t_user)+" "+e.doc},{name:"Celular",selector:e=>e.cellphone},{name:"Tel\xE9fono",selector:e=>e.phone}];return r.exports.useEffect(()=>{const e=i.filter(o=>o.name.toLowerCase().match(a.toLowerCase())||o.tracking_id.match(a));s(e)},[a]),t(E,{...d,children:m("div",{className:"grid m-6 gap-4",children:[t("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center hover:scale-110 ease-in duration-200",children:"Usuarios Inactivos"}),t("div",{className:"",children:t("input",{type:"text",placeholder:"Buscar",className:"w-25 form-control rounded-3xl",value:a,onChange:e=>p(e.target.value)})}),t(N,{columns:g,data:l,highlightOnHover:!0,pagination:!0,noDataComponent:"No se encontraron resultados",paginationComponentOptions:{rowsPerPageText:"Filas por p\xE1gina",rangeSeparatorText:"de"}})]})})};export{P as default};
