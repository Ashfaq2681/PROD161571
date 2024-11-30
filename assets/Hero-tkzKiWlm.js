import{x as m,r as u,j as s,L as z}from"./index-Cmow-nIL.js";var N={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w=m.createContext&&m.createContext(N),I=["attr","size","title"];function A(e,t){if(e==null)return{};var r=M(e,t),n,l;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function M(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(n){R(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function R(e,t,r){return t=F(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e){var t=H(e,"string");return typeof t=="symbol"?t:t+""}function H(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function O(e){return e&&e.map((t,r)=>m.createElement(t.tag,g({key:r},t.attr),O(t.child)))}function P(e){return t=>m.createElement(T,p({attr:g({},e.attr)},t),O(e.child))}function T(e){var t=r=>{var{attr:n,size:l,title:o}=e,h=A(e,I),d=l||r.size||"1em",i;return r.className&&(i=r.className),e.className&&(i=(i?i+" ":"")+e.className),m.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,h,{className:i,style:g(g({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&m.createElement("title",null,o),e.children)};return w!==void 0?m.createElement(w.Consumer,null,r=>t(r)):t(N)}function v(e){return P({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z"},child:[]}]})(e)}function B(e){return P({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"},child:[]}]})(e)}const W=()=>{const[e,t]=u.useState(""),[r,n]=u.useState(null),[l,o]=u.useState(!1),[h,d]=u.useState(!1),[i,C]=u.useState("Search Image..."),[y,S]=u.useState(""),E=a=>{fetch("http://localhost:4000/api/user/getimage").then(f=>f.json()).then(f=>{const b=f.data;console.log(b);const k=b.filter(x=>a&&x.image&&x.image&&x.image.toLowerCase().includes(a));n(k)})},D=a=>{t(a),E(a),o(!1)},L=()=>{e===""&&o(!0)},_=()=>{d(!h)},c=a=>{S(a),C(`Search ${a.charAt(0).toUpperCase()+a.slice(1)}...`),d(!1)};return s.jsx(s.Fragment,{children:s.jsx("section",{className:"px-8 md:px-32 py-5 md:py-16 lg:py-20",children:s.jsxs("div",{className:"flex flex-col md:flex-row-reverse justify-between md:items-center md:gap-12 lg:gap-28 max-w-[1400px] mx-auto",children:[s.jsx("img",{loading:"lazy",src:"./home/heroimagesmall.webp",alt:"heroImage",className:"w-[190px] md:w-[400px] lg:w-[446px] h-[182px] md:h-[300px] lg:h-[428px] my-6 rounded-3xl md:rounded-lg lg:rounded-sm"}),s.jsxs("div",{className:"max-w-[525px]",children:[s.jsx("p",{className:"heading",children:"Your Masterpiece Starts Here"}),s.jsx("p",{className:"subHeading w-full",children:"Elevate your projects with stunning visuals and captivating sounds. From pixels to polygons, find the perfect asset to bring your ideas to life. Fuel your imagination with high-quality digital resources."}),s.jsxs("div",{className:"sm:my-8 my-4 border items-center border-[#4E4E55] rounded-full lg:w-[25rem] sm:w-96 flex justify-between shadow-md",children:[s.jsxs("div",{className:"",children:[s.jsxs("button",{className:"flex hover:opacity-80 bg-blue-700 text-sm sm:text-lg w-20 sm:w-36 justify-center items-center text-white font-normal rounded-full p-2",onClick:_,children:[y.charAt(0).toUpperCase()+y.slice(1)||"Category",s.jsx(B,{className:"text-2xl"})]}),s.jsx("div",{className:`bg-white mt-2 text-gray-500 w-20 sm:w-36 text-center absolute transition-transform duration-300 transform ${h?"scale-y-100":"scale-y-0"} origin-top z-10 border border-gray-200 shadow-lg rounded-xl overflow-hidden`,children:s.jsxs("ul",{children:[s.jsx("li",{className:"p-2 bg-white hover:bg-gray-100 cursor-pointer",onClick:()=>c("all"),children:"All"}),s.jsx("li",{className:"p-2 bg-white hover:bg-gray-100 cursor-pointer",onClick:()=>c("psds"),children:"Psds"}),s.jsx("li",{className:"p-2 bg-white hover:bg-gray-100 cursor-pointer",onClick:()=>c("photos"),children:"Photos"}),s.jsx("li",{className:"p-2 bg-white hover:bg-gray-100 cursor-pointer",onClick:()=>c("mockups"),children:"Mockups"}),s.jsx("li",{className:"p-2 bg-white hover:bg-gray-100 cursor-pointer",onClick:()=>c("social_media"),children:"Social Media"}),s.jsx("li",{className:"p-2 bg-white hover:bg-gray-100 cursor-pointer",onClick:()=>c("pngs"),children:"Pngs"}),s.jsx("li",{className:"p-2 bg-white hover:bg-gray-100 cursor-pointer",onClick:()=>c("vectors"),children:"Vectors"})]})})]}),s.jsx("form",{children:s.jsxs("div",{className:"flex",children:[l&&s.jsxs("p",{className:"bg-red-300 p-5 flex flex-row items-center gap-4 my-5  rounded-xl text-[20px]",children:[s.jsx("img",{src:"./header/warning.png",className:"w-10 h-10",alt:"warning"}),"Search bar is Empty, please type something to search"]}),s.jsx("input",{value:e,onChange:a=>D(a.target.value),type:"text",name:"image",placeholder:i,className:"bg-transparent outline-none pl-4 w-[80%] p-1 placeholder:text-gray-400"}),e===""&&s.jsx("button",{onClick:L,className:"hover:opacity-80 text-xl text-gray-500 font-semibold rounded-full p-1",children:s.jsx(v,{})}),e!==""&&s.jsx(z,{to:"/searchResult",className:"hover:opacity-80 text-xl text-gray-500 font-semibold rounded-full p-1",state:{searchResult:r},children:s.jsx(v,{})},r)]})})]})]})]})})})},$=u.memo(W);export{$ as default};