import{a as m,o,b as s,e as c,t as d,h as _,v as u,x as p,y as x,z as h,w as f,F as v,A as g,u as y,B as b}from"./entry.857f729c.js";import{u as w}from"./fetch.c3cb9eca.js";const $=t=>(x("data-v-72df2b6c"),t=t(),h(),t),k={class:"card text-center"},C=["src"],N={class:"font-bold text-gray-500 m-4 truncate"},B=$(()=>c("p",{class:"btn my-4"},"View Details ",-1)),I={__name:"ProductCard",props:["product"],setup(t){return(e,a)=>{const n=p;return o(),s("div",k,[c("img",{src:t.product.image,alt:"product thumb",class:"button"},null,8,C),c("p",N,d(t.product.title),1),_(n,{to:`/products/${t.product.id}`},{default:u(()=>[B]),_:1},8,["to"])])}}},S=m(I,[["__scopeId","data-v-72df2b6c"]]),V={class:"grid grid-cols-4 gap-5"},D={__name:"index",async setup(t){let e,a;const{data:n}=([e,a]=f(()=>w("https://fakestoreapi.com/products","$U48yGv7YOO")),e=await e,a(),e);return(F,L)=>{const i=S,l=p;return o(),s("div",null,[c("div",V,[(o(!0),s(v,null,g(y(n),r=>(o(),s("div",null,[_(i,{product:r},null,8,["product"]),_(l,{to:`/products/${r.id}`},{default:u(()=>[b(d(r.title),1)]),_:2},1032,["to"])]))),256))])])}}};export{D as default};
