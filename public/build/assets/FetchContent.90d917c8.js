import{a as e}from"./index.9b570c6c.js";const a=Object.freeze({CORRESPONDENCIA:1,MENSAJERIA_ESPECIALIZADA:2,MENSAJERIA_MASIVA:3,MENSAJERIA_INTERNACIONAL:4,LOGISTICA_DE_MENSJERIA:5,GESTION_DOCUMENTAL:6}),d=t=>{switch(t){case a.CORRESPONDENCIA:return"Correspondencia";case a.MENSAJERIA_ESPECIALIZADA:return"Mensajer\xEDa especializada";case a.MENSAJERIA_MASIVA:return"Mensajer\xEDa masiva";case a.MENSAJERIA_INTERNACIONAL:return"Mensajer\xEDa internacional";case a.LOGISTICA_DE_MENSJERIA:return"Log\xEDstica de mensajer\xEDa";case a.GESTION_DOCUMENTAL:return"Gesti\xF3n documental";default:return""}},O=async t=>{try{return[(await e.delete(`/api/file/${t}`)).data,null]}catch(r){return[null,r]}},A=async t=>{const r=new FormData;r.append("file",t);try{return await e.post("/api/file",r,{headers:{"Content-Type":"multipart/form-data"}})}catch(s){return{error:s,data:null}}},o="https://api.countrystatecity.in/v1",u=t=>({headers:{"X-CSCAPI-KEY":t}}),p=async t=>(await e.get(`${o}/countries`,u(t))).data,I=async(t,r)=>(await e.get(`${o}/countries/${r}/states`,u(t))).data,N=async(t,r,s)=>(await e.get(`${o}/countries/${r}/states/${s}/cities`,u(t))).data,C=async t=>(t.country=t.country.label,t.region=t.region.label,t.city=t.city.label,(await e.post("/api/address",t)).data),y=async t=>(t.country=t.country.label,t.region=t.region.label,t.city=t.city.label,(await e.put(`/api/address/${t.id}`,t)).data),T=async t=>{try{return[(await e.delete(`/api/address/${t}`)).data,null]}catch(r){return[null,r]}},g=async t=>{try{return[(await e.get(`/api/address/${t}`)).data,null]}catch(r){return[null,r]}},D=async t=>{try{return[(await e.get(`/api/task/${t}/address/`)).data,null]}catch(r){return[null,r]}},S=async t=>{try{return await e.post("/api/order/multiple",t)}catch(r){return{error:r,data:null}}},q=async t=>{try{return[(await e.get("/api/order",t)).data,null]}catch(r){return[null,r]}},_=async t=>{try{return{data:(await e.delete(`/api/order/${t}`)).data,error:null}}catch(r){return{data:null,error:r}}},R=async t=>{try{return[(await e.get(`/api/order/${t}`)).data,null]}catch(r){return[null,r]}},c=Object.freeze({PENDIENTE:1,EN_PROCESO:2,FINALIZADO:3}),w=t=>{switch(t){case c.PENDIENTE:return"Pendiente";case c.EN_PROCESO:return"En proceso";case c.FINALIZADO:return"Finalizado";default:return""}},h=async t=>{try{return{data:(await e.post("/api/task",t)).data,error:null}}catch(r){return{data:null,error:r}}},m=async t=>{try{return{data:(await e.delete(`/api/task/${t}`)).data,error:null}}catch(r){return{data:null,error:r}}},f=async t=>{try{return[await(await e.get(`/api/task/${t}`)).data,null]}catch(r){return[null,r]}},L=async t=>{try{return[await(await e.put(`/api/task/${t.id}`,t)).data,null]}catch(r){return[null,r]}},i=Object.freeze({PAQUETE:1,CAJA:2}),M=t=>{switch(t){case i.PAQUETE:return"Paquete";case i.CAJA:return"Caja";default:return""}},n=Object.freeze({CONTENIDO_FRAGIL:1,CONTENIDO_RIESGO_BIOLOGICO:2,CONTENIDO_DOCUMENTO_PRIVADO:3,CONTENIDO_TRAMITE_PERSONAL:4,CONTENIDO_VALORES:5,CONTENIDO_VACIO:6}),P=t=>{switch(t){case n.CONTENIDO_FRAGIL:return"Contenido fr\xE1gil";case n.CONTENIDO_RIESGO_BIOLOGICO:return"Riesgo biol\xF3gico";case n.CONTENIDO_DOCUMENTO_PRIVADO:return"Documento privado";case n.CONTENIDO_TRAMITE_PERSONAL:return"Tr\xE1mite personal";case n.CONTENIDO_VALORES:return"Valores";case n.CONTENIDO_VACIO:return"Contenido vac\xEDo";default:return""}},$=t=>{switch(t){case"1":return"Contenido fr\xE1gil";case"2":return"Riesgo biol\xF3gico";case"3":return"Documento privado";case"4":return"Tr\xE1mite personal";case"5":return"Valores";case"6":return"Contenido vac\xEDo";default:return""}},b=async t=>{try{const r=await e.post("/api/content",t);return r.status===200||r.status===201||r.status===202?{data:r.data,error:null}:{data:null,error:"Error al guardar el contenido"}}catch(r){return{data:null,error:r}}},G=async t=>{try{return[(await e.put(`/api/content/${t.id}`,t)).data,null]}catch(r){return[null,r]}},j=async t=>{try{return[(await e.get(`/api/content/${t}`)).data[0],null]}catch(r){return[null,r]}};export{f as A,D as B,c as E,a as T,I as a,N as b,y as c,O as d,_ as e,q as f,p as g,S as h,L as i,h as j,T as k,m as l,g as m,i as n,M as o,n as p,P as q,$ as r,C as s,d as t,A as u,G as v,b as w,j as x,w as y,R as z};
