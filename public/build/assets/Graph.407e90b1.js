import{r as a,j as e,F as h,a as b}from"./app.14a3b57d.js";import{L as _,B as X,R as St,D as yt,P as wt,l as Pt,m as G,S as Tt,C as k,A as $}from"./Authenticated.eaa71d90.js";import{a as f}from"./index.d8622dc5.js";import{t as S}from"./TipoDeCargaEnum.0292e147.js";import{t as y}from"./TipoDeServiciosEnum.333dc939.js";import"./TipoDeUsuariosEnum.fd1e81a1.js";import"./EstadoServiciosEnum.74aa18f7.js";import"./iconBase.9679d326.js";import"./ReactToastify.62ab24cf.js";import"./transportes.ca9f9614.js";const N="label";function D(t,n){typeof t=="function"?t(n):t&&(t.current=n)}function j(t,n){const l=t.options;l&&n&&Object.assign(l,n)}function L(t,n){t.labels=n}function q(t,n){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:N;const d=[];t.datasets=n.map(c=>{const u=t.datasets.find(s=>s[l]===c[l]);return!u||!c.data||d.includes(u)?{...c}:(d.push(u),Object.assign(u,c),u)})}function R(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N;const l={labels:[],datasets:[]};return L(l,t.labels),q(l,t.datasets,n),l}function A(t,n){const{height:l=150,width:d=300,redraw:c=!1,datasetIdKey:u,type:s,data:r,options:i,plugins:o=[],fallbackContent:p,updateMode:T,...E}=t,x=a.exports.useRef(null),g=a.exports.useRef(),v=()=>{!x.current||(g.current=new k(x.current,{type:s,data:R(r,u),options:i&&{...i},plugins:o}),D(n,g.current))},C=()=>{D(n,null),g.current&&(g.current.destroy(),g.current=null)};return a.exports.useEffect(()=>{!c&&g.current&&i&&j(g.current,i)},[c,i]),a.exports.useEffect(()=>{!c&&g.current&&L(g.current.config.data,r.labels)},[c,r.labels]),a.exports.useEffect(()=>{!c&&g.current&&r.datasets&&q(g.current.config.data,r.datasets,u)},[c,r.datasets]),a.exports.useEffect(()=>{!g.current||(c?(C(),setTimeout(v)):g.current.update(T))},[c,i,r.labels,r.datasets,T]),a.exports.useEffect(()=>{!g.current||(C(),setTimeout(v))},[s]),a.exports.useEffect(()=>(v(),()=>C()),[]),e("canvas",{...Object.assign({ref:x,role:"img",height:l,width:d},E),children:p})}const B=a.exports.forwardRef(A);function w(t,n){return k.register(n),a.exports.forwardRef((l,d)=>e(B,{...Object.assign({},l,{ref:d,type:t})}))}const V=w("line",_),P=w("bar",X);const m=w("pie",G);const M=async()=>(await f.get("/api/graph/costxSellBymonth")).data,O=async()=>{try{return(await f.get("/api/graph/servicesxTimeRange")).data}catch(t){console.log(t)}},I=async()=>{try{return(await f.get("/api/graph/costXVolumen")).data}catch(t){console.log(t)}},K=async()=>{try{return(await f.get("/api/graph/costXWeight")).data}catch(t){console.log(t)}},W=async()=>{try{return(await f.get("/api/graph/priceXTService")).data}catch(t){console.log(t)}},F=async()=>{try{return(await f.get("/api/graph/costXTService")).data}catch(t){console.log(t)}},J=async()=>{try{return(await f.get("/api/graph/profitXTService")).data}catch(t){console.log(t)}},Z=async()=>{try{return(await f.get("/api/graph/profitXTContent")).data}catch(t){console.log(t)}},z=async()=>{try{return(await f.get("/api/graph/costXTContent")).data}catch(t){console.log(t)}},H=async()=>{try{return(await f.get("/api/graph/priceXTContent")).data}catch(t){console.log(t)}},Q={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Chart.js Bar Chart"}}},U=()=>{const[t,n]=a.exports.useState(!1),[l,d]=a.exports.useState({datasets:[{label:"Costo",data:0,backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const u=[],s=[],r=[],i=[],o=await M();for(const p of o)s.push(p.cost),r.push(p.price),i.push(p.profits),u.push(p.month);d({labels:u,datasets:[{label:"Costo",data:s,backgroundColor:"rgba(255, 99, 132, 0.5)",borderColor:"rgba(255, 50, 0, 0.7)"},{label:"Precio",data:r,backgroundColor:"rgba(53, 162, 235, 0.5)",borderColor:"rgba(255, 50, 0, 0.7)"},{label:"Ganancias",data:i,backgroundColor:"rgba(255, 120, 0, 0.7)",borderColor:"rgba(255, 50, 0, 0.7)",type:"line"}]})})()},[]),t?e("p",{children:"Loading..."}):e(h,{children:b("div",{children:[e("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Ventas por Mes"}),e(P,{className:"bg-semiwhite rounded-xl shadow-xl",data:l,options:Q})]})})};var Y=U;function tt(t){const n=a.exports.useState({responsive:!0,scales:{x:{beginAtZero:!0},y:{beginAtZero:!0}},plugins:{legend:{position:"top"},title:{display:!0,text:"Servicios x Tiempo"}}}),l=["January","February","March","April","May","June","July","August","September","October","November","December"],[d,c]=a.exports.useState({labels:l,datasets:[{fill:!0,label:"Servicios",data:0,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{O().then(u=>{const s=[],r=[];u.map(i=>{s.push(i.month),r.push(i.servicios)}),c({labels:s,datasets:[{fill:!0,label:"Servicios",data:r,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]})})},[]),e(h,{children:b("div",{children:[e("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Servicios por Mes"}),e(V,{className:"bg-semiwhite rounded-xl shadow-xl",options:n,data:d})]})})}const et={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Chart.js Bar Chart"}}},at=()=>{const[t,n]=a.exports.useState(!1),[l,d]=a.exports.useState({datasets:[{label:"Costo",data:0,backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const u=[],s=[],r=[],i=[],o=await I();for(const p of o)p.volumen!=null&&p.cost&&p.price&&p.profits&&(s.push(p.cost),r.push(p.price),i.push(p.profits),u.push(p.volumen));d({labels:u,datasets:[{label:"Costo",data:s,backgroundColor:"rgba(255, 99, 132, 0.5)",borderColor:"rgba(255, 99, 132, 0.5)",type:"line"},{label:"Precio",data:r,backgroundColor:"rgba(53, 162, 235, 0.5)",borderColor:"rgba(53, 162, 235, 0.5)",type:"line"}]})})()},[]),t?e("p",{children:"Loading..."}):e(h,{children:b("div",{children:[e("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Volumen por Ventas"}),e(P,{className:"bg-semiwhite rounded-xl shadow-xl",data:l,options:et})]})})};var rt=at;const ot={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Chart.js Bar Chart"}}},st=()=>{const[t,n]=a.exports.useState(!1),[l,d]=a.exports.useState({datasets:[{label:"Costo",data:0,backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const u=[],s=[],r=[],i=[],o=await K();for(const p of o)p.weigh!=null&&p.cost&&p.price&&p.profits&&(s.push(p.cost),r.push(p.price),i.push(p.profits),u.push(p.weigh));d({labels:u,datasets:[{label:"Costo",data:s,backgroundColor:"rgba(255, 99, 132, 0.5)",borderColor:"rgba(255, 99, 132, 0.5)",type:"line"},{label:"Precio",data:r,backgroundColor:"rgba(53, 162, 235, 0.5)",borderColor:"rgba(53, 162, 235, 0.5)",type:"line"}]})})()},[]),t?e("p",{children:"Loading..."}):e(h,{children:b("div",{children:[e("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Peso Total por Ventas"}),e(P,{className:"bg-semiwhite rounded-xl shadow-xl",data:l,options:ot})]})})};var nt=st;const ct=()=>{const t={responsive:!0,plugins:{legend:{position:"bottom"}}},[n,l]=a.exports.useState(!1),[d,c]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],r=[],i=await z();for(const o of i)o.cost!=null&&o.t_carga&&(r.push(o.cost),s.push(S(o.t_carga)));c({labels:s,datasets:[{label:"Precio",data:r,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?e("p",{children:"Loading..."}):e(h,{children:b("div",{className:"grid",children:[e("h1",{className:"text-blue-primary text-2xl mb-1 font-bold  text-center ease-in duration-200",children:"Costo por Tipo de Contenido"}),e(m,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:t})]})})};var it=ct;const lt=()=>{const t={responsive:!0,plugins:{legend:{position:"bottom"}}},[n,l]=a.exports.useState(!1),[d,c]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],r=[],i=await F();for(const o of i)o.cost!=null&&o.id_type_service&&(r.push(o.cost),s.push(y(o.id_type_service)));c({labels:s,datasets:[{label:"Precio",data:r,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?e("p",{children:"Loading..."}):e(h,{children:b("div",{children:[e("h1",{className:"text-blue-primary text-2xl mb-1 font-bold  text-center ease-in duration-200",children:"Costo por Tipo de Servicio"}),e(m,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:t})]})})};var dt=lt;const ut=()=>{const t={responsive:!0,plugins:{legend:{position:"bottom"}}},[n,l]=a.exports.useState(!1),[d,c]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],r=[],i=await H();for(const o of i)o.price!=null&&o.t_carga&&(r.push(o.price),s.push(S(o.t_carga)));c({labels:s,datasets:[{label:"Precio",data:r,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?e("p",{children:"Loading..."}):e(h,{children:b("div",{children:[e("h1",{className:"text-blue-primary text-2xl mb-1 font-bold  text-center ease-in duration-200",children:"Cobro por Tipo de Servicio"}),e(m,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:t})]})})};var pt=ut;const gt=()=>{const t={responsive:!0,plugins:{legend:{position:"bottom"}}},[n,l]=a.exports.useState(!1),[d,c]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],r=[],i=await W();for(const o of i)o.price!=null&&o.id_type_service&&(r.push(o.price),s.push(y(o.id_type_service)));c({labels:s,datasets:[{label:"Precio",data:r,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?e("p",{children:"Loading..."}):e(h,{children:b("div",{children:[e("h1",{className:"text-blue-primary text-2xl mb-1 font-bold  text-center ease-in duration-200",children:"Cobro por Tipo de Servicio"}),e(m,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:t})]})})};var bt=gt;const ht=()=>{const t={responsive:!0,plugins:{legend:{position:"bottom"}}},[n,l]=a.exports.useState(!1),[d,c]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],r=[],i=await Z();for(const o of i)o.ganancia!=null&&o.t_carga&&(r.push(o.ganancia),s.push(S(o.t_carga)));c({labels:s,datasets:[{label:"Precio",data:r,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?e("p",{children:"Loading..."}):e(h,{children:b("div",{children:[e("h1",{className:"text-blue-primary text-2xl mb-1 font-bold  text-center ease-in duration-200",children:"Ganancia por Tipo de Contenido"}),e(m,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:t})]})})};var ft=ht;const mt=()=>{const t={responsive:!0,plugins:{legend:{position:"bottom"}}},[n,l]=a.exports.useState(!1),[d,c]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],r=[],i=await J();for(const o of i)o.ganancia!=null&&o.id_type_service&&(r.push(o.ganancia),s.push(y(o.id_type_service)));c({labels:s,datasets:[{label:"Total",data:r,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?e("p",{children:"Loading..."}):e(h,{children:b("div",{children:[e("h1",{className:"text-blue-primary text-2xl mb-1 font-bold  text-center ease-in duration-200",children:"Ganancias por Tipo de Servicio"}),e(m,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:t})]})})};var xt=mt;function Gt(t){return e(h,{children:b($,{...t,children:[e("h1",{className:"text-blue-primary text-3xl mb-10 font-bold  text-center hover:scale-110 ease-in duration-200",children:"Gr\xE1ficas Anal\xEDticas"}),b("div",{className:"",children:[b("div",{className:"grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3  sm:mx-5 gap-5",children:[e(it,{}),e(pt,{}),e(ft,{}),e(dt,{}),e(bt,{}),e(xt,{})]}),b("div",{className:"grid sm:grid-cols-2  sm:mx-5 gap-5",children:[e(nt,{}),e(rt,{}),e(Y,{}),e(tt,{})]})]})]})})}export{Gt as default};
