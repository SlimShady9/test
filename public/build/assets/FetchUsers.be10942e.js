import{a as n}from"./index.9b570c6c.js";const c=t=>{let r="";for(let a in t)t.hasOwnProperty(a)&&t[a]!==""&&(r+=`${a}=${t[a]}&`);return r};function l(t,r){for(var a=t.split(","),o=a[0].match(/:(.*?);/)[1],s=atob(a[1]),e=s.length,i=new Uint8Array(e);e--;)i[e]=s.charCodeAt(e);return new File([i],r,{type:o})}const p=async t=>(await n.get(`/api/user?${c(t)}`)).data,d=async t=>(await n.get(`/api/user/${t}`)).data,g=async t=>{try{return[await(await n.put(`/api/user/${t.id}`,t)).data,null]}catch(r){return[null,r]}},w=t=>"api/user/"+t+"/profileimg";export{p as a,l as d,d as g,w as l,g as u};
