import{r as t,e as r,j as s}from"./index-Ck0GWlkG.js";const o=()=>{const[l,c]=t.useState([]),e=r();return t.useEffect(()=>{e&&c(e.state.searchResult)},[]),console.log(l),s.jsxs("section",{className:"px-8 md:px-32 py-5 md:py-16 lg:py-40",children:[s.jsx("p",{className:"heading",children:"Search Results"}),s.jsxs("p",{className:"subHeading",children:["Search has found ",l.length," results"]}),s.jsx("div",{className:"gap-5 space-y-5 columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 w-full mx-auto",children:e.state.searchResult==null?"":e.state.searchResult.map(a=>s.jsx("div",{className:"grow",children:s.jsx("img",{loading:"lazy",src:"http://localhost:4000/images/"+a.image,alt:"image",className:"object-cover w-full h-[292px]"},a._id)},a.image))})]})};export{o as default};