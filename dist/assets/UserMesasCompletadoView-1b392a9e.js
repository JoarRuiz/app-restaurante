import{_ as I,k as g,l as k,r as l,m as M,n as w,a as y,o as S,g as U,b as e,t as C,L as r,d as o,w as c,e as n,p as V,f as $}from"./index-b0d1de63.js";import{M as p}from"./MesaReserva-fb167afc.js";/* empty css                                                                    */const R=i=>(V("data-v-c3418aae"),i=i(),$(),i),B={class:"container"},N={class:"menu-sidebar"},A={class:"circle-container"},E={class:"circIcon"},P={class:"titname"},z={class:"menu"},D=R(()=>e("div",{class:"menu-title"},"Mi cuenta",-1)),L={class:"Mesas"},T={class:"rectangulo"},j={class:"Reserva"},q={class:"Completado"},x={class:"Cancelado"},F={__name:"UserMesasCompletadoView",setup(i){const u=g(),_=k(),m=l(!1),d=l(""),v=l(""),f=l(0),h=l(""),b=l("");return M(()=>{let a="cliente";const s=_.getUserInfo;s!==null?s.perfil===a?(m.value=!0,d.value=s.nombres,v.value=s.email,f.value=parseInt(s.telefono),h.value=s.contrasenia,b.value=s.id):u.push({name:"home"}):u.push({name:"home"})}),w(()=>{let a="cliente";const s=_.getUserInfo;s!==null?s.perfil===a?(m.value=!0,d.value=s.nombres,v.value=s.email,f.value=parseInt(s.telefono),h.value=s.constrasenia,b.value=s.id):u.push({name:"home"}):u.push({name:"home"})}),(a,s)=>{const t=y("router-link");return S(),U("section",B,[e("div",N,[e("div",A,[e("div",E,C(d.value.substring(0,2).toUpperCase()),1),e("div",P,C(d.value),1)]),e("div",z,[D,e("ul",null,[e("li",{class:r({active:a.$route.path==="/user/userperfil"})},[o(t,{to:"/user/userperfil",style:{color:"black"}},{default:c(()=>[n("Perfil")]),_:1})],2),e("li",{class:r({active:a.$route.path==="/user/usermesascompletado"})},[o(t,{to:"/user/usermesascompletado",style:{color:"rgb(0, 0, 0)","font-weight":"bold"}},{default:c(()=>[n("Mesas")]),_:1})],2),e("li",{class:r({active:a.$route.path==="/user/userpedidosproceso"})},[o(t,{to:"/user/userpedidosproceso",style:{color:"black"}},{default:c(()=>[n("Pedidos")]),_:1})],2)])])]),e("div",L,[e("div",T,[e("div",j,[e("ul",null,[e("li",{class:r({active:a.$route.path==="/user/usermesasreserva"})},[o(t,{to:"/user/usermesasreserva",style:{color:"black"}},{default:c(()=>[n("Mi Reserva")]),_:1})],2)])]),e("div",q,[e("ul",null,[e("li",{class:r({active:a.$route.path==="/user/usermesascompletado"})},[o(t,{to:"/user/usermesascompletado",style:{color:"black","font-weight":"bold"}},{default:c(()=>[n("Completado")]),_:1})],2)])]),e("div",x,[e("ul",null,[e("li",{class:r({active:a.$route.path==="/user/usermesascancelado"})},[o(t,{to:"/user/usermesascancelado",style:{color:"black"}},{default:c(()=>[n("Cancelado")]),_:1})],2)])])]),o(p),o(p),o(p),o(p)])])}}},K=I(F,[["__scopeId","data-v-c3418aae"]]);export{K as default};