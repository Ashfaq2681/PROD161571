import{r as a,j as e,H as h,L as o}from"./index-DahKA9vt.js";import{p as c}from"./index-0Au0eGlT.js";import{a as j}from"./axios-B6xwUs71.js";const L=()=>{const i=[{}],m=[{}],n=[{}],g=[{}],p=[{}],[x,f]=a.useState("2"),[w,t]=a.useState(c),[l,d]=a.useState(null);a.useEffect(()=>{(async()=>{const r=await j.get("http://localhost:4000/api/user/getimage");r&&d(r.data.data),console.log("Images:",l)})()},[]);const u=s=>{f(s),s=="1"?t(i):s=="2"?t(c):s=="3"?t(m):s=="4"?t(n):s=="5"?t(g):s=="6"&&t(p)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-1/2 mx-auto",children:e.jsx("hr",{className:"mx-auto"})}),e.jsx("div",{className:"flex flex-row flex-wrap gap-x-4 gap-y-3 justify-start md:justify-center md:my-5 px-8 md:px-32 py-5 mb-10",children:h.map(s=>e.jsx(o,{to:s.link,className:`heroButtons ${x===s.id?"bg-[#E3A9FC] text-white border-[#E3A9FC]":"text-[#505153] border-[#969696] bg-white"}`,onClick:()=>u(s.id),children:s.name},s.id))}),e.jsx("div",{className:"flex flex-row flex-wrap gap-2",children:l==null?"":l.map(s=>e.jsx(o,{to:"/imagedownload",className:"grow",state:{data:s},children:e.jsx("img",{loading:"lazy",src:"http://localhost:4000/images/"+s.image,alt:"image",className:"object-cover w-full h-[292px]"},s._id)},s.image))}),e.jsx("div",{className:"flex flex-row flex-wrap gap-2 mt-2",children:c.map(s=>e.jsx(o,{to:"/imagedownload",state:{i:s},className:"grow",children:e.jsx("img",{loading:"lazy",src:s,alt:s,className:"object-cover w-full h-[292px]"})},s))})]})};export{L as default};