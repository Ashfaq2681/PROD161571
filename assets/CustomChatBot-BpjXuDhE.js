import{r as n,j as e}from"./index-BST-I6ML.js";const u=t=>{switch(console.log(t),t.toLowerCase()){case"images":return"What kind of images you want?";case"forest":return"Select your type of quality";case"hd":return"we have 3 images of forest, would you like to see them?";default:return"Sorry, we couldn't understand what you said. Can you tell us again about it!"}},p=()=>{const[t,c]=n.useState(!1),[o,i]=n.useState(""),[x,a]=n.useState([]);n.useEffect(()=>(a(s=>[...s,{text:"Hello There! How can i help you today?",user:!1}]),()=>{}),[]);const m=s=>{if(s.preventDefault(),!!o.trim())if(s.key=="Enter"){const l={text:o,user:!0};a(r=>[...r,l]);const d={text:u(o),user:!1};a(r=>[...r,d]),i("")}else{const l={text:o,user:!0};a(r=>[...r,l]);const d={text:u(o),user:!1};a(r=>[...r,d]),i("")}};return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:"./header/support.png",alt:"support",className:`w-28 h-28 p-2 rounded-full cursor-pointer ${t?"hidden":"block"}`,onClick:()=>c(!t)}),e.jsxs("div",{className:`${t?"block":"hidden"} block w-[500px]`,children:[e.jsxs("div",{className:"bg-[#4A16D8] flex flex-row justify-between items-center p-6 rounded-t-2xl ",children:[e.jsxs("div",{className:"flex flex-row items-center gap-5",children:[e.jsx("img",{src:"./chatbot/bot_white.png",alt:"bot_white",className:"w-12 h-15"}),e.jsx("p",{className:"text-white font-bold text-[20px]",children:"HarryPhoto Chat"})]}),e.jsx("div",{children:e.jsx("img",{src:"./chatbot/close_white.png",alt:"close",className:"w-6 h-6 cursor-pointer",onClick:()=>c(!t)})})]}),e.jsx("div",{className:"h-[500px] border border-x-[#4A16D8] border-b-white -mt-1 bg-white flex flex-col ",children:x.map((s,l)=>e.jsx("div",{className:`text-[18px] m-5 p-5 rounded-2xl overflow-hidden ${s.user?"float-left bg-[#4A16D8] text-white  rounded-tr-none ml-40":"float-right bg-[#F5F5F5] text-[#505153] rounded-tl-none mr-40"}`,children:s.text},l))}),e.jsx("div",{className:" border border-x-[#4A16D8] border-t-white border-b-[#4A16D8] rounded-b-2xl bg-white",children:e.jsxs("form",{className:"m-5 border border-gray-400 rounded-2xl",onSubmit:m,children:[e.jsx("textarea",{value:o,onChange:s=>i(s.target.value),name:"contactMessage",id:"contactMessage",className:"rounded-md p-2 lg:py-3 lg:px-5 focus:outline-none my-3 w-full",placeholder:"Type Your Message Here",rows:1}),e.jsxs("div",{className:"flex flex-row justify-between items-center mb-5 mx-5",children:[e.jsxs("div",{className:"flex flex-row gap-5 items-center",children:[e.jsx("img",{src:"./chatbot/mic.png",alt:"mic",className:"w-6 h-8 cursor-pointer"}),e.jsx("img",{src:"./chatbot/file.png",alt:"file",className:"w-8 h-8 cursor-pointer"}),e.jsx("img",{src:"./chatbot/happy_emoji.png",alt:"emoji",className:"w-8 h-8 cursor-pointer"})]}),e.jsx("button",{type:"submit",children:e.jsx("img",{src:"./chatbot/send.png",alt:"send",className:"w-10 h-8 cursor-pointer"})})]})]})})]})]})};export{p as default};