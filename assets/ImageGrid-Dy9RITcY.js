import{r as a,j as e,H as d,L as h}from"./index-BST-I6ML.js";import{p as i}from"./index-0Au0eGlT.js";import{a as j}from"./axios-B6xwUs71.js";const N=()=>{const r=[{}],c=[{}],m=[{}],n=[{}],g=[{}],[p,f]=a.useState("2"),[w,t]=a.useState(i),[o,u]=a.useState(null);a.useEffect(()=>{(async()=>{const l=await j.get("http://localhost:4000/api/user/getimage");l&&u(l.data.data),console.log("Images:",o)})()},[]);const x=s=>{f(s),s=="1"?t(r):s=="2"?t(i):s=="3"?t(c):s=="4"?t(m):s=="5"?t(n):s=="6"&&t(g)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-1/2 mx-auto",children:e.jsx("hr",{className:"mx-auto"})}),e.jsx("div",{className:"flex flex-row flex-wrap gap-x-4 gap-y-3 justify-start md:justify-center md:my-5 px-8 md:px-32 py-5 mb-10",children:d.map(s=>e.jsx("a",{href:s.link,className:`heroButtons ${p===s.id?"bg-[#E3A9FC] text-white border-[#E3A9FC]":"text-[#505153] border-[#969696] bg-white"}`,onClick:()=>x(s.id),children:s.name},s.id))}),e.jsx("div",{className:"flex flex-row flex-wrap gap-2",children:o==null?"":o.map(s=>e.jsx(h,{to:"/imagedownload",className:"grow",state:{data:s},children:e.jsx("img",{loading:"lazy",src:"http://localhost:4000/images/"+s.image,alt:"image",className:"object-cover w-full h-[292px]"},s._id)},s.image))})]})};export{N as default};