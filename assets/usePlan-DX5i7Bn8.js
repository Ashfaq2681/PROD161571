import{a as n}from"./axios-DXsv3KKR.js";import{b as i,l as p}from"./index-Cmow-nIL.js";const m=()=>{const{dispatch:a}=i();return{checkSubscription:s=>{const o=s;s&&((async()=>{const r=await p("pk_test_51PRW2aGJyOdTC98YnoQJCsrBfUdajxs1kcqbCFV8nOOHr2UadrrUdGD2GrmCBmaZSiRcfFfhdaJyr8pc6BtX1Rkc00XX4oI78s");try{const c=await(await n.post("http://localhost:4000/api/user/create-checkout-session",o,{headers:{"Content-Type":"application/json"}})).data,e=r.redirectToCheckout({sessionId:c.id});e.error&&console.log(e.error)}catch(t){console.log(t)}})(),a({type:"PLAN",payload:o})),console.log(o)}}};export{m as u};