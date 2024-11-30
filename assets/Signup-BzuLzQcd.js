import{r,b as k,j as e,G as C,L as A}from"./index-Cmow-nIL.js";import{j as E}from"./index-VWaDGczM.js";const L=()=>{const[p,n]=r.useState(null),[l,a]=r.useState(null),{dispatch:c}=k();return{signup:async(o,i)=>{a(!0),n(null);const t=await fetch("http://localhost:4000/api/user/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:i})}),d=await t.json();t.ok||(a(!1),n(d.error)),t.ok&&(localStorage.setItem("user",JSON.stringify(d)),c({type:"LOGIN",payload:d}),a(!1))},googleSignup:async(o,i)=>{a(!0),n(null);const t={name:o,picture:i};t||(a(!1),n(json.error)),t&&(localStorage.setItem("user",JSON.stringify(t)),c({type:"LOGIN",payload:t}),a(!1))},isLoading:l,error:p}},O=()=>{const[p,n]=r.useState(""),[l,a]=r.useState(""),[c,x]=r.useState(""),[u,o]=r.useState(!1),[i,t]=r.useState(!1),[d,h]=r.useState(""),{signup:f,googleSignup:j,error:m,isLoading:y}=L(),w=async s=>{s.preventDefault(),l!=c?t(!0):await f(p,l).then(()=>{t(!1),o(!1),h("")})},N=async s=>{const S=s.credential,g=E(S);try{await j(g.name,g.picture)}catch(v){console.error(v)}},b=()=>{console.error("Google Login Failed")};return e.jsxs("section",{className:"bg-[#F9FAFB] h-lvh flex flex-row justify-center my-10",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center text-center rounded-xl md:rounded-r-none border border-[#c7c7c7] md:border-r-0 p-12 lg:px-2 m-4 md:m-0 md:mr-0 shadow-2xl bg-white text-[#727272] h-[680px] lg:h-[664px] max-w-[400px] lg:max-w-[600px] 2xl:max-w-full",children:[e.jsx("p",{className:"text-[36px] font-bold",children:"Signup"}),e.jsx("p",{className:"text-[16px]",children:"Welcome back please enter your details to start your creative journey"}),e.jsxs("form",{className:"my-4 space-y-3",children:[e.jsx("input",{type:"email",placeholder:"Email",name:"signup",value:p,onChange:s=>n(s.target.value),className:"inputAuth"}),e.jsx("input",{type:"password",placeholder:"Password",name:"password",value:l,onChange:s=>a(s.target.value),className:"inputAuth"}),e.jsx("input",{type:"password",placeholder:"Retype Password",name:"repassword",value:c,onChange:s=>x(s.target.value),className:"inputAuth"}),i&&e.jsx("p",{className:"text-red-500 text-[18px]",children:"Passwords don't match"})]}),e.jsxs("form",{className:"flex flex-row gap-2 mx-2 mt-6 items-center justify-center",children:[e.jsx("input",{type:"checkbox",name:"terms",id:"terms",className:"w-5 h-5",value:u,onClick:()=>o(!u)}),e.jsxs("label",{htmlFor:"terms",className:"text-[13px] text-start leading-4",children:["By signing the account. you accept our"," ",e.jsx("a",{href:"#",className:"text-[#4A16D8] hover:underline",children:"Terms & Conditions"})," ","and"," ",e.jsx("a",{href:"#",className:"text-[#4A16D8] hover:underline",children:"Privacy Policy"})]})]}),e.jsx("p",{className:"text-red-500 text-[18px]",children:d}),e.jsx("button",{disabled:y,type:"button",onClick:w,className:"cursor-pointer px-8 rounded-full bg-[#4A16D8] text-white py-3 my-5 w-[280px] text-[24px] font-semibold",children:"Sign Up"}),m&&e.jsx("p",{className:"text-red-500 text-[18px]",children:m}),e.jsx("p",{children:"Or Continue With"}),e.jsxs("div",{className:"flex flex-row justify-center items-center gap-2 my-2",children:[e.jsx(C,{onSuccess:N,onError:b,render:s=>e.jsxs("button",{onClick:s.onClick,disabled:s.disabled,className:"flex items-center px-4 py-2 bg-blue-500 text-white rounded",children:[e.jsx("img",{src:"./login/google.png",alt:"Google",className:"w-5 h-5 mr-2"}),"Continue with Google"]})}),e.jsx("button",{href:"#",className:"border border-[#d6d6d6] rounded-lg p-2 flex flex-row justify-center items-center gap-4  text-[#969696]",children:e.jsx("img",{loading:"lazy",src:"./login/apple.png",alt:"apple",className:"w-6 h-6"})})]}),e.jsxs("p",{className:"mt-5",children:["Already Have An Account",e.jsx(A,{to:"/login",className:"underline underline-offset-3 font-semibold ml-1",children:"Log In"})]})]}),e.jsx("img",{loading:"lazy",src:"./grid/black-girl-pose-jeans-top-sitting.jpeg",alt:"login-image",className:"hidden rounded-r-[16px] md:inline-block md:h-[680px] lg:h-[664px] md:w-[363px] lg:w-[481px] object-cover"})]})};export{O as default};