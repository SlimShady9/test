import{T as c}from"./TipoDeUsuariosEnum.fd1e81a1.js";import{a}from"./index.d8622dc5.js";const i=async t=>{try{return await a.post("/api/order/multiple",t)}catch(r){return{error:r,data:null}}},s=async t=>{try{return await a.post("/api/order",t)}catch(r){return{error:r,data:null}}},d=async t=>{try{return[(await a.get("/api/order",t)).data,null]}catch(r){return[null,r]}},l=async t=>{try{return{data:(await a.delete(`/api/order/${t}`)).data,error:null}}catch(r){return{data:null,error:r}}},p=async t=>{try{return[(await a.get(`/api/order/${t}`)).data,null]}catch(r){return[null,r]}},y=async(t,r,n)=>{try{const e=await a.post("/api/service",t);return(n===c.CLIENTE_JURIDICO||n===c.CLIENTE_NATURAL)&&s({id_service:e.data.id,id_user:r}),e}catch(e){return{error:e,data:null}}},h=async t=>{try{return[(await a.get(`/api/service/${t}`)).data,null]}catch(r){return[null,r]}},q=async t=>{try{return[(await a.put(`/api/service/${t.id}`,t)).data,null]}catch(r){return[null,r]}},w=async t=>{try{return[(await a.get(`/api/service/${t}/address`)).data,null]}catch(r){return[null,r]}};export{y as a,h as b,i as c,l as d,w as e,d as f,p as g,q as u};
