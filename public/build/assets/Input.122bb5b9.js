import{j as t}from"./app.a566c16c.js";function m({type:o="text",name:l,defaultValue:s,className:r,autoComplete:n,required:i,isFocused:Z,handleChange:f,disabled:a=!1,ref:d,min:u,max:b,minLength:c,maxLength:g,onlyLetters:p=!1,alpaNumeric:v=!1,onlyNumbers:x=!1,email:z=!1}){var e=null;return v?e="[a-zA-Z0-9 ]*":p?e="[a-zA-Z ]*":z?e="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$":x&&(e="[0-9]*"),t("div",{children:t("input",{type:o,name:l,className:`mt-1 block w-full border-1 border-gray-border  rounded py-1.5 px-3
                    transition-colors hover:border-gray-400 font-sans tracking-widest text-md ${r||""} ${a?"bg-gray-light":"active:border-blue-border"}`,autoComplete:n,required:i,onChange:A=>f(A),disabled:a,ref:d,pattern:e,min:u,max:b,value:s,minLength:c,maxLength:g})})}export{m as I};
