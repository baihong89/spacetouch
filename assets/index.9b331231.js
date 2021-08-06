var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,n=(e,n)=>{for(var r in n||(n={}))o.call(n,r)&&a(e,r,n[r]);if(t)for(var r of t(n))s.call(n,r)&&a(e,r,n[r]);return e};import{_ as r,a as l,c as i,p as c,b as g,i as d,r as p,o as u,d as m,e as _,u as f,f as h,F as b,g as v,h as j,j as y,k as O,l as E,m as L,n as P,A as S}from"./vendor.a9a1ba91.js";const T={en:n(n({},{user:{name:"Able",changeLang:"Change Language"},home:{toLogin:"To Login"},login:{toHome:"To Home"}}),r),"zh-cn":n(n({},{user:{name:"艾布尔",changeLang:"切换语言"},home:{toLogin:"去登录"},login:{toHome:"去首页"}}),l)},k=i({locale:localStorage.getItem("lang")||"zh-cn",messages:T});var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/homebg.fca6ff27.png"}),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/login-bg.94863a17.png"}),$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/login_background.b7e70992.png"}),x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/logo.03d6d6da.png"}),w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/login_background.b7e70992.png"}),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/login_form.48a8d831.png"});c("data-v-66dda115");const H={class:"header-wrap"},M={key:0,class:"header-wrap-right"},D=_("div",{class:"line"},null,-1),R={key:1,class:"header-wrap-right"},V=_("div",{class:"line"},null,-1),C=_("span",null,"spacetouch",-1);g();const q={expose:[],setup(e){const t=d("global");return(e,o)=>{const s=p("a-image"),a=p("a-avatar");return u(),m("div",H,[_(s,{src:"https://xuanci.spacetouch.co/user/images/2017/top.jpg"}),"/login"===e.$route.fullPath||"/register"===e.$route.fullPath?(u(),m("div",M,[_("span",{onClick:o[1]||(o[1]=e=>f(t).$router.push({name:"login"}))},"登录"),D,_("span",{onClick:o[2]||(o[2]=t=>e.$router.push("/register"))},"注册")])):(u(),m("div",R,[_(a,{size:"large",src:"https://img.yzcdn.cn/vant/cat.jpeg"}),V,C]))])}},__scopeId:"data-v-66dda115"};c("data-v-5f2c575d");const F={class:"app-body"};g();const N={expose:[],setup:e=>(h(),(e,t)=>{const o=p("router-view");return u(),m(b,null,[_(q),_("div",F,[_(o)])],64)}),__scopeId:"data-v-5f2c575d"};var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const B={expose:[],setup(e){const t=h(),o=v(),{ctx:s,appContext:a}=y(),r={"/src/assets/img/homebg.png":z,"/src/assets/img/login-bg.png":I,"/src/assets/img/login_background.png":$,"/src/assets/img/logo.png":x,"/src/assets/login_images/login_background.png":w,"/src/assets/login_images/login_form.png":A},l={},i=e=>n(n({},r),l)[e];a.config.globalProperties.getSrc=e=>{const{darkTheme:t}=s.$store.state.app;if(t){const t=i(e.replace("/img/","/dark/"));if(t)return t.default}return i(e).default},a.config.globalProperties.$t=e=>e;const c=Object.assign(s,n({$router:t,$store:o},a.config.globalProperties));return j("global",Object.assign(s,c)),j("store",o),(e,t)=>{const o=p("router-view");return u(),m(o)}}};let G;const J={},K=function(e,t){if(!t)return e();if(void 0===G){const e=document.createElement("link").relList;G=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in J)return;J[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":G,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))};var Q=[{path:"/",redirect:{name:"login"},component:()=>K((()=>Promise.resolve().then((function(){return W}))),void 0),children:[{path:"/home",name:"home",meta:{homeHeader:!0,title:"首页"},component:()=>K((()=>import("./index.5e8823d1.js")),["./assets/index.5e8823d1.js","./assets/index.de28ec05.css","./assets/vendor.a9a1ba91.js"])},{path:"/good-add",name:"goodAdd",meta:{homeHeader:!0,title:"添加商品"},component:()=>K((()=>import("./add.839c1765.js")),["./assets/add.839c1765.js","./assets/add.7ec171e6.css","./assets/vendor.a9a1ba91.js"])},{path:"/login",name:"login",meta:{homeHeader:!0,title:"登录"},component:()=>K((()=>import("./index.f2f511df.js")),["./assets/index.f2f511df.js","./assets/index.7a3dcca8.css","./assets/vendor.a9a1ba91.js"])},{path:"/register",name:"register",meta:{homeHeader:!0,title:"注册"},component:()=>K((()=>import("./index.b1c25ff4.js")),["./assets/index.b1c25ff4.js","./assets/index.65bf1c41.css","./assets/vendor.a9a1ba91.js"])},{path:"/success",name:"success",meta:{homeHeader:!0,title:"成功"},component:()=>K((()=>import("./success.61f8b8ae.js")),["./assets/success.61f8b8ae.js","./assets/success.5e3849b0.css","./assets/vendor.a9a1ba91.js"])}]}];const U=O({history:E(),routes:Q});var X=L({modules:{app:{state:{id:0,isLoading:!1},mutations:{setIsLoading(e,t){e.isLoading=t}},getters:{},actions:{}}}});const Y=P(B);Y.config.globalProperties.$ELEMENT={size:"small",zIndex:3e3},Y.use(S),Y.use(U),Y.use(X),Y.use(k),Y.mount("#app");