import{a as e}from"./index.0edb6af2.js";const o=t=>{let r="";for(let a in t)t.hasOwnProperty(a)&&t[a]!==""&&(r+=`${a}=${t[a]}&`);return r};function l(t,r){for(var a=t.split(","),c=a[0].match(/:(.*?);/)[1],s=atob(a[1]),n=s.length,i=new Uint8Array(n);n--;)i[n]=s.charCodeAt(n);return new File([i],r,{type:c})}const p=async t=>(await e.get(`/api/user?${o(t)}`)).data,d=async t=>(await e.get(`/api/user/${t}`)).data,w=async t=>{try{return[await(await e.put(`/api/user/${t.id}`,t)).data,null]}catch(r){return[null,r]}},y=t=>"api/user/"+t+"/profileimg",q=async t=>{try{return[await(await e.put(`/api/user/${t.id}`,{...t,state:!1})).data,null]}catch(r){return[null,r]}},g=async t=>{try{return[await(await e.put(`/api/user/${t.id}`,{...t,state:!0})).data,null]}catch(r){return[null,r]}};export{p as a,l as d,d as g,q as i,y as l,g as r,w as u};
