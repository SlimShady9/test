import{r as a,j as t,F as h,a as b}from"./app.a05bb740.js";import{L as E,B as X,R as Te,D as De,P as ke,f as Ne,g as $,S as Le,C as k,A as B}from"./Authenticated.698c9c2d.js";import{a as f}from"./index.0edb6af2.js";import{t as y}from"./TipoDeCargaEnum.513c970d.js";import{t as C}from"./TipoDeServiciosEnum.f8824a38.js";import{t as I}from"./EstadoServiciosEnum.1def3d76.js";import"./TipoDeUsuariosEnum.2a2c2a7c.js";import"./iconBase.17a5e8ee.js";import"./transportes.87cfd211.js";const N="label";function D(e,n){typeof e=="function"?e(n):e&&(e.current=n)}function j(e,n){const l=e.options;l&&n&&Object.assign(l,n)}function L(e,n){e.labels=n}function q(e,n){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:N;const d=[];e.datasets=n.map(i=>{const p=e.datasets.find(s=>s[l]===i[l]);return!p||!i.data||d.includes(p)?{...i}:(d.push(p),Object.assign(p,i),p)})}function R(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N;const l={labels:[],datasets:[]};return L(l,e.labels),q(l,e.datasets,n),l}function G(e,n){const{height:l=150,width:d=300,redraw:i=!1,datasetIdKey:p,type:s,data:o,options:c,plugins:r=[],fallbackContent:u,updateMode:T,..._}=e,m=a.exports.useRef(null),g=a.exports.useRef(),v=()=>{!m.current||(g.current=new k(m.current,{type:s,data:R(o,p),options:c&&{...c},plugins:r}),D(n,g.current))},S=()=>{D(n,null),g.current&&(g.current.destroy(),g.current=null)};return a.exports.useEffect(()=>{!i&&g.current&&c&&j(g.current,c)},[i,c]),a.exports.useEffect(()=>{!i&&g.current&&L(g.current.config.data,o.labels)},[i,o.labels]),a.exports.useEffect(()=>{!i&&g.current&&o.datasets&&q(g.current.config.data,o.datasets,p)},[i,o.datasets]),a.exports.useEffect(()=>{!g.current||(i?(S(),setTimeout(v)):g.current.update(T))},[i,c,o.labels,o.datasets,T]),a.exports.useEffect(()=>{!g.current||(S(),setTimeout(v))},[s]),a.exports.useEffect(()=>(v(),()=>S()),[]),t("canvas",{...Object.assign({ref:m,role:"img",height:l,width:d},_),children:u})}const A=a.exports.forwardRef(G);function w(e,n){return k.register(n),a.exports.forwardRef((l,d)=>t(A,{...Object.assign({},l,{ref:d,type:e})}))}const V=w("line",E),P=w("bar",X);const x=w("pie",$);const M=async()=>{try{return(await f.get("/api/graph/costxSellBymonth")).data}catch(e){console.log(e)}},O=async()=>{try{return(await f.get("/api/graph/servicesxTimeRange")).data}catch(e){console.log(e)}},K=async()=>{try{return(await f.get("/api/graph/costXVolumen")).data}catch(e){console.log(e)}},W=async()=>{try{return(await f.get("/api/graph/costXWeight")).data}catch(e){console.log(e)}},F=async()=>{try{return(await f.get("/api/graph/priceXTService")).data}catch(e){console.log(e)}},J=async()=>{try{return(await f.get("/api/graph/costXTService")).data}catch(e){console.log(e)}},Z=async()=>{try{return(await f.get("/api/graph/profitXTContent")).data}catch(e){console.log(e)}},z=async()=>{try{return(await f.get("/api/graph/costXTContent")).data}catch(e){console.log(e)}},H=async()=>{try{return(await f.get("/api/graph/priceXTContent")).data}catch(e){console.log(e)}},Q=async()=>{try{return(await f.get("/api/graph/ServiceByStateService")).data}catch(e){console.log(e)}},U=async()=>{try{return(await f.get("/api/graph/ServiceXTypeServicePerc")).data}catch(e){console.log(e)}},Y={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Chart.js Bar Chart"}}},ee=()=>{const[e,n]=a.exports.useState(!1),[l,d]=a.exports.useState({datasets:[{label:"Costo",data:0,backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const p=[],s=[],o=[],c=[],r=await M();for(const u of r)u.month!=null&&u.cost!=null&&u.price!=null&&u.profits!=null&&(s.push(u.cost),o.push(u.price),c.push(u.profits),p.push(u.month));d({labels:p,datasets:[{label:"Costo",data:s,backgroundColor:"rgba(255, 99, 132, 0.5)",borderColor:"rgba(255, 50, 0, 0.7)"},{label:"Precio",data:o,backgroundColor:"rgba(53, 162, 235, 0.5)",borderColor:"rgba(255, 50, 0, 0.7)"},{label:"Ganancias",data:c,backgroundColor:"rgba(255, 120, 0, 0.7)",borderColor:"rgba(255, 50, 0, 0.7)",type:"line"}]})})()},[]),e?t("p",{children:"Loading..."}):t(h,{children:b("div",{children:[t("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Ventas x Mes"}),t(P,{className:"bg-semiwhite rounded-xl shadow-xl",data:l,options:Y})]})})};var te=ee;function ae(e){const n=a.exports.useState({responsive:!0,scales:{x:{beginAtZero:!0},y:{beginAtZero:!0}},plugins:{legend:{position:"top"},title:{display:!0,text:"Servicios x Tiempo"}}}),l=["January","February","March","April","May","June","July","August","September","October","November","December"],[d,i]=a.exports.useState({labels:l,datasets:[{fill:!0,label:"Servicios",data:0,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{O().then(p=>{const s=[],o=[];p.map(c=>{s.push(c.month),o.push(c.servicios)}),i({labels:s,datasets:[{fill:!0,label:"Servicios",data:o,borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"}]})})},[]),t(h,{children:b("div",{children:[t("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Servicios x Mes"}),t(V,{className:"bg-semiwhite rounded-xl shadow-xl",options:n,data:d})]})})}const re={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Chart.js Bar Chart"}}},oe=()=>{const[e,n]=a.exports.useState(!1),[l,d]=a.exports.useState({datasets:[{label:"Costo",data:0,backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const p=[],s=[],o=[],c=[],r=await K();for(const u of r)u.volumen!=null&&u.cost!=null&&u.price!=null&&u.profits!=null&&(s.push(u.cost),o.push(u.price),c.push(u.profits),p.push(u.volumen));d({labels:p,datasets:[{label:"Costo",data:s,backgroundColor:"rgba(255, 99, 132, 0.5)",borderColor:"rgba(255, 99, 132, 0.5)",type:"line"},{label:"Precio",data:o,backgroundColor:"rgba(53, 162, 235, 0.5)",borderColor:"rgba(53, 162, 235, 0.5)",type:"line"}]})})()},[]),e?t("p",{children:"Loading..."}):t(h,{children:b("div",{children:[t("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Volumen x Ventas"}),t(P,{className:"bg-semiwhite rounded-xl shadow-xl",data:l,options:re})]})})};var se=oe;const ne={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Chart.js Bar Chart"}}},ie=()=>{const[e,n]=a.exports.useState(!1),[l,d]=a.exports.useState({datasets:[{label:"Costo",data:0,backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const p=[],s=[],o=[],c=[],r=await W();for(const u of r)u.weigh!=null&&u.cost!=null&&u.price!=null&&u.profits!=null&&(s.push(u.cost),o.push(u.price),c.push(u.profits),p.push(u.weigh));d({labels:p,datasets:[{label:"Costo",data:s,backgroundColor:"rgba(255, 99, 132, 0.5)",borderColor:"rgba(255, 99, 132, 0.5)",type:"line"},{label:"Precio",data:o,backgroundColor:"rgba(53, 162, 235, 0.5)",borderColor:"rgba(53, 162, 235, 0.5)",type:"line"}]})})()},[]),e?t("p",{children:"Loading..."}):t(h,{children:b("div",{children:[t("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Peso Total x Ventas"}),t(P,{className:"bg-semiwhite rounded-xl shadow-xl",data:l,options:ne})]})})};var ce=ie;const le=()=>{const e={responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!0,text:"Ingresos totales por tipo de servicio"}}},[n,l]=a.exports.useState(!1),[d,i]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],o=[],c=await z();for(const r of c)r.cost!=null&&r.t_carga!=null&&(o.push(r.cost),s.push(y(r.t_carga)));i({labels:s,datasets:[{label:"Precio",data:o,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?t("p",{children:"Loading..."}):t(h,{children:b("div",{children:[t("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Precio x Tipo de Servicio"}),t(x,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:e})]})})};var de=le;const ue=()=>{const e={responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!0,text:"Ingresos totales por tipo de servicio"}}},[n,l]=a.exports.useState(!1),[d,i]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],o=[],c=await J();for(const r of c)r.cost!=null&&r.id_type_service!=null&&(o.push(r.cost),s.push(C(r.id_type_service)));i({labels:s,datasets:[{label:"Precio",data:o,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?t("p",{children:"Loading..."}):t(h,{children:b("div",{children:[t("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Precio x Tipo de Servicio"}),t(x,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:e})]})})};var pe=ue;const ge=()=>{const e={responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!0,text:"Ingresos totales por tipo de servicio"}}},[n,l]=a.exports.useState(!1),[d,i]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],o=[],c=await H();for(const r of c)r.price!=null&&r.t_carga!=null&&(o.push(r.price),s.push(y(r.t_carga)));i({labels:s,datasets:[{label:"Precio",data:o,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?t("p",{children:"Loading..."}):t(h,{children:b("div",{children:[t("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Precio x Tipo de Servicio"}),t(x,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:e})]})})};var be=ge;const he=()=>{const e={responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!0,text:"Ingresos totales por tipo de servicio"}}},[n,l]=a.exports.useState(!1),[d,i]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],o=[],c=await F();for(const r of c)r.price!=null&&r.id_type_service!=null&&(o.push(r.price),s.push(C(r.id_type_service)));i({labels:s,datasets:[{label:"Precio",data:o,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?t("p",{children:"Loading..."}):t(h,{children:b("div",{children:[t("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Precio x Tipo de Servicio"}),t(x,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:e})]})})};var fe=he;const xe=()=>{const e={responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!0,text:"Ingresos totales por tipo de servicio"}}},[n,l]=a.exports.useState(!1),[d,i]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],o=[],c=await Z();for(const r of c)r.ganancia!=null&&r.t_carga!=null&&(o.push(r.ganancia),s.push(y(r.t_carga)));i({labels:s,datasets:[{label:"Precio",data:o,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?t("p",{children:"Loading..."}):t(h,{children:b("div",{children:[t("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Precio x Tipo de Servicio"}),t(x,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:e})]})})};var me=xe;const ve=()=>{const e={responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!0,text:"Ingresos totales por tipo de servicio"}}},[n,l]=a.exports.useState(!1),[d,i]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],o=[],c=await Q();for(const r of c)r.id!=null&&r.id_state_service!=null&&(o.push(r.id),s.push(I(r.id_state_service)));i({labels:s,datasets:[{label:"Precio",data:o,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?t("p",{children:"Loading..."}):t(h,{children:b("div",{children:[t("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Precio x Tipo de Servicio"}),t(x,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:e})]})})};var Se=ve;const ye=()=>{const e={responsive:!0,plugins:{legend:{position:"bottom"},title:{display:!0,text:"Ingresos totales por tipo de servicio"}}},[n,l]=a.exports.useState(!1),[d,i]=a.exports.useState({datasets:[{label:"Precio",data:0,backgroundColor:"rgba(53, 162, 235, 0.5)"}]});return a.exports.useEffect(()=>{(async()=>{const s=[],o=[],c=await U();for(const r of c)r.perc!=null&&r.id_type_service!=null&&(o.push(r.perc),s.push(C(r.id_type_service)));i({labels:s,datasets:[{label:"Precio",data:o,backgroundColor:["rgba(255, 99, 132, 0.5)","rgba(54, 162, 235, 0.5)","rgba(255, 206, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)"],type:"pie"}]})})()},[]),n?t("p",{children:"Loading..."}):t(h,{children:b("div",{children:[t("h1",{className:"text-blue-primary text-3xl mb-1 font-bold  text-center ease-in duration-200",children:"Precio x Tipo de Servicio"}),t(x,{className:"bg-semiwhite rounded-xl shadow-xl m-5",data:d,options:e})]})})};var Ce=ye;function je(e){return t(h,{children:t(B,{...e,children:b("div",{className:"",children:[b("div",{className:"grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3  mx-5 gap-5",children:[t(de,{}),t(pe,{}),t(be,{}),t(fe,{}),t(me,{}),t(Se,{}),t(Ce,{})]}),b("div",{className:"grid sm:grid-cols-2  mx-5 gap-5",children:[t(ce,{}),t(se,{}),t(te,{}),t(ae,{})]})]})})})}export{je as default};
