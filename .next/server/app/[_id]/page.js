(()=>{var e={};e.id=508,e.ids=[508],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},30285:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=r(50482),i=r(69108),o=r(62563),n=r.n(o),a=r(68300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["[_id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,44160)),"C:\\Users\\Lenovo\\Desktop\\CvCode\\mk-online-store\\src\\app\\[_id]\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,63541)),"C:\\Users\\Lenovo\\Desktop\\CvCode\\mk-online-store\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\Lenovo\\Desktop\\CvCode\\mk-online-store\\src\\app\\[_id]\\page.tsx"],u="/[_id]/page",h={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/[_id]/page",pathname:"/[_id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},51151:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},64941:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,31900,23))},63485:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,61476,23)),Promise.resolve().then(r.bind(r,40972)),Promise.resolve().then(r.bind(r,6266))},40972:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(95344),i=r(31271),o=r(2288),n=r(40692);r(55541);let a=(0,n.OJ)({key:"root",version:1,storage:{getItem:()=>Promise.resolve(null),setItem:()=>Promise.resolve(),removeItem:()=>Promise.resolve()}},o.ZP),l=(0,i.xC)({reducer:{pro:a}}),c=(0,n.p5)(l);var d=r(47674),u=r(62322),h=r(9180);let p=({children:e})=>s.jsx(u.zt,{store:l,children:s.jsx(h.r,{loading:null,persistor:c,children:s.jsx(d.SessionProvider,{children:e})})})},6266:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(95344),i=r(20783),o=r.n(i),n=r(11453);r(3729);let a=({className:e,spanClassName:t})=>(0,s.jsxs)(o(),{href:"/",className:(0,n.cn)("text-zinc-950 text-xl underline underline-offset-4 decoration-[1px] group",e),children:[s.jsx("span",{className:(0,n.cn)("bg-zinc-950 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-2xl font-bold mr-1 group-hover:bg-blue-700 duration-200",t),children:"MK"}),"Store"]});var l=r(51354),c=r(73714),d=r(22254);let u=[{_id:910,title:"Home",href:"/"},{_id:911,title:"Phones",href:"/phones"},{_id:912,title:"Phone Cases",href:"/phonecases"},{_id:913,title:"Watches",href:"/watches"},{_id:914,title:"Accessories",href:"/accessories"}];var h=r(47674),p=r(62322);let m=()=>{let e=(0,d.usePathname)(),{data:t}=(0,h.useSession)(),{productData:r,favoriteData:i}=(0,p.v9)(e=>e.pro);return s.jsx("div",{className:"w-full h-20 border-b-[1px] border-b-zinc-500 bg-white text-zinc-600 sticky top-0 z-50 bg-white/80 backdrop-blur-2xl",children:(0,s.jsxs)("div",{className:"max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0",children:[s.jsx(a,{}),s.jsx("ul",{className:"hidden md:flex items-center gap-5 text-sm uppercase font-semibold",children:u.map(t=>s.jsx(o(),{href:t?.href,children:(0,s.jsxs)("li",{className:`hover:text-black cursor-pointer duration-200 relative overflow-hidden group ${t.href===e&&"text-designColor"}`,children:[t?.title,s.jsx("span",{className:`absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ${t.href===e&&"translate-x-0 bg-designColor"}`})]})},t._id))}),(0,s.jsxs)("div",{className:"flex items-center gap-x-5",children:[(0,s.jsxs)(o(),{href:"/wishlist",className:"hover:text-black cursor-pointer duration-200 relative group",children:[s.jsx(l.Z,{className:"w-7 h-7"}),s.jsx("span",{className:"absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white",children:i?i.length:0})]}),(0,s.jsxs)(o(),{href:"/cart",className:"hover:text-black cursor-pointer duration-200 relative group",children:[s.jsx(c.Z,{className:"w-7 h-7"}),s.jsx("span",{className:"absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white",children:r?r.length:0})]}),t?(0,s.jsxs)(o(),{href:"/profile",className:"hover:text-black cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold",children:["Profile",s.jsx("span",{className:"absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"})]}):(0,s.jsxs)("button",{onClick:()=>(0,h.signIn)(),className:"hover:text-black cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold",children:["Login",s.jsx("span",{className:"absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"})]})]})]})})}},11453:(e,t,r)=>{"use strict";r.d(t,{cn:()=>o});var s=r(56815),i=r(58423);function o(...e){return(0,i.m)((0,s.W)(e))}},2288:(e,t,r)=>{"use strict";r.d(t,{Ir:()=>a,Jh:()=>p,Qd:()=>o,Xq:()=>i,ZP:()=>x,a3:()=>n,a9:()=>f,r7:()=>m,s9:()=>l});let s=(0,r(31271).oM)({name:"pro",initialState:{productData:[],userInfo:null,orderData:[],favoriteData:[]},reducers:{addToCart:(e,t)=>{let r=e.productData.find(e=>e?._id===t.payload._id);r?r.quantity+=t.payload.quantity:e.productData.push(t.payload)},increaseQuantity:(e,t)=>{let r=e.productData.find(e=>e._id===t.payload._id);r&&r.quantity++},decreaseQuantity:(e,t)=>{let r=e.productData.find(e=>e._id===t.payload._id);r?.quantity===1?r.quantity:r&&r.quantity--},deleteProduct:(e,t)=>{e.productData=e.productData.filter(e=>e._id!==t.payload)},resetCart:e=>{e.productData=[]},addToFavorite:(e,t)=>{e.favoriteData.find(e=>e._id===t.payload._id)?e.favoriteData=e.favoriteData.filter(e=>e._id!==t.payload._id):e.favoriteData.push(t.payload)},deleteFavorite:(e,t)=>{e.favoriteData=e.favoriteData.filter(e=>e._id!==t.payload)},resetFavorite:e=>{e.favoriteData=[]},addUser:(e,t)=>{e.userInfo=t.payload},deleteUser:e=>{e.userInfo=null},addOrder:(e,t)=>{e.orderData.find(e=>e._id===t.payload._id)?e.orderData.push(t.payload):e.orderData=t.payload},resetOrder:e=>{e.orderData=[]}}}),{addToCart:i,increaseQuantity:o,decreaseQuantity:n,deleteProduct:a,resetCart:l,addUser:c,deleteUser:d,addOrder:u,resetOrder:h,addToFavorite:p,deleteFavorite:m,resetFavorite:f}=s.actions,x=s.reducer},96987:(e,t,r)=>{let{createProxy:s}=r(86843);e.exports=s("C:\\Users\\Lenovo\\Desktop\\CvCode\\mk-online-store\\node_modules\\next\\dist\\client\\image-component.js")},34470:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(46031);let s=r(76184),i=r(64180);function o(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,c,{src:d,sizes:u,unoptimized:h=!1,priority:p=!1,loading:m,className:f,quality:x,width:g,height:v,fill:b=!1,style:y,onLoad:j,onLoadingComplete:w,placeholder:_="empty",blurDataURL:P,fetchPriority:N,layout:C,objectFit:k,objectPosition:z,lazyBoundary:D,lazyRoot:S,...E}=e,{imgConf:I,showAltText:O,blurComplete:M,defaultLoader:q}=t,A=I||i.imageConfigDefault;if("allSizes"in A)a=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);a={...A,allSizes:e,deviceSizes:t}}let F=E.loader||q;delete E.loader,delete E.srcSet;let L="__next_img_default"in F;if(L){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...s}=t;return e(s)}}if(C){"fill"===C&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!u&&(u=t)}let U="",G=n(g),R=n(v);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,P=P||e.blurDataURL,U=e.src,!b){if(G||R){if(G&&!R){let t=G/e.width;R=Math.round(e.height*t)}else if(!G&&R){let t=R/e.height;G=Math.round(e.width*t)}}else G=e.width,R=e.height}}let W=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:U)||d.startsWith("data:")||d.startsWith("blob:"))&&(h=!0,W=!1),a.unoptimized&&(h=!0),L&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(h=!0),p&&(N="high");let B=n(x),Z=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:z}:{},O?{}:{color:"transparent"},y),T=M||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:G,heightInt:R,blurWidth:l,blurHeight:c,blurDataURL:P||"",objectFit:Z.objectFit})+'")':'url("'+_+'")',J=T?{backgroundSize:Z.objectFit||"cover",backgroundPosition:Z.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:T}:{},$=function(e){let{config:t,src:r,unoptimized:s,width:i,quality:o,sizes:n,loader:a}=e;if(s)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:s,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=e.exec(r);s)t.push(parseInt(s[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=s[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:s,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,n),d=l.length-1;return{sizes:n||"w"!==c?n:"100vw",srcSet:l.map((e,s)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:s+1)+c).join(", "),src:a({config:t,src:r,quality:o,width:l[d]})}}({config:a,src:d,unoptimized:h,width:G,quality:B,sizes:u,loader:F});return{props:{...E,loading:W?"lazy":m,fetchPriority:N,width:G,height:R,decoding:"async",className:f,style:{...Z,...J},sizes:$.sizes,srcSet:$.srcSet,src:$.src},meta:{unoptimized:h,priority:p,placeholder:_,fill:b}}}},76184:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:s,blurHeight:i,blurDataURL:o,objectFit:n}=e,a=s?40*s:t,l=i?40*i:r,c=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},64180:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return s}});let r=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},37751:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return l},default:function(){return c}});let s=r(46783),i=r(34470),o=r(46031),n=r(96987),a=s._(r(94534)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=n.Image},94534:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:s,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+s+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),r.__next_img_default=!0;let s=r},46031:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},15904:(e,t,r)=>{e.exports=r(37751)},44160:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(25036),i=r(24389),o=r(16744),n=r(15904),a=r.n(n),l=r(72245);let c=({amount:e,className:t})=>{let r=new Number(e).toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2});return s.jsx("span",{className:(0,l.cn)("text-base text-black",t),children:r})},d=async({searchParams:e})=>{let t=await (0,i.Xp)(),r=Number(e?._id),n=t.find(e=>e._id===r);return(0,s.jsxs)(o.Z,{className:"flex items-center flex-col md:flex-row px-4 xl:px-0",children:[s.jsx("div",{className:"w-full md:w-1/2 overflow-hidden bg-zinc-50 flex items-center justify-center p-10",children:s.jsx(a(),{src:n?.image,alt:"product image",width:500,height:500,className:"transform transition-transform hover:scale-110 duration-500"})}),(0,s.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col gap-2",children:[s.jsx("h2",{className:"text-3xl font-semibold",children:n?.title}),(0,s.jsxs)("p",{className:"flex items-center gap-10",children:[s.jsx(c,{amount:n?.price,className:"text-lg font-semibold"}),s.jsx(c,{amount:n?.previousPrice,className:"text-zinc-500 line-through"})]}),(0,s.jsxs)("p",{children:["You saved"," ",s.jsx(c,{amount:n?.previousPrice-n?.price,className:"text-base font-semibold bg-designColor underline underline-offset-2"})," ","from this product."]}),s.jsx("button",{className:"bg-designColor/80 text-zinc-700 px-6 py-2 font-medium rounded-md hover:bg-designColor hover:text-black cursor-pointer duration-200 hover:shadow-lg w-40 my-2",children:"add to cart"}),n?.isNew&&s.jsx("p",{className:"text-designColor font-semibold",children:"New Arrival"}),(0,s.jsxs)("p",{children:["Brand: ",s.jsx("span",{className:"font-semibold",children:n?.brand})]}),(0,s.jsxs)("p",{children:["Category: ",s.jsx("span",{className:"font-semibold",children:n?.category})]}),s.jsx("p",{children:n?.description})]})]})}},63541:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_,metadata:()=>w});var s=r(25036),i=r(53640),o=r.n(i);r(5023);var n=r(86843);let a=(0,n.createProxy)(String.raw`C:\Users\Lenovo\Desktop\CvCode\mk-online-store\src\components\Navbar.tsx`),{__esModule:l,$$typeof:c}=a,d=a.default;var u=r(72245);r(77047),r(40002);var h=r(16744),p=r(40646),m=r.n(p);let f=({className:e,spanClassName:t})=>(0,s.jsxs)(m(),{href:"/",className:(0,u.cn)("text-zinc-950 text-xl underline underline-offset-4 decoration-[1px] group",e),children:[s.jsx("span",{className:(0,u.cn)("bg-zinc-950 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-2xl font-bold mr-1 group-hover:bg-blue-700 duration-200",t),children:"MK"}),"Store"]}),x=[{_id:910,title:"Home",href:"/"},{_id:911,title:"Phones",href:"/phones"},{_id:912,title:"Phone Cases",href:"/phonecases"},{_id:913,title:"Watches",href:"/watches"},{_id:914,title:"Accessories",href:"/accessories"}],g=()=>s.jsx("div",{className:"bg-[#180735] mt-10 py-10 text-zinc-300",children:(0,s.jsxs)(h.Z,{className:"flex items-center justify-between",children:[s.jsx(f,{className:"text-white",spanClassName:"bg-white text-black"}),s.jsx("ul",{className:"flex gap-6 items-center justify-center",children:x.map(e=>s.jsx(m(),{href:e?.href,children:s.jsx("li",{className:"hover:text-white duration-200",children:e?.title})},e?._id))})]})}),v=(0,n.createProxy)(String.raw`C:\Users\Lenovo\Desktop\CvCode\mk-online-store\src\components\Layout.tsx`),{__esModule:b,$$typeof:y}=v,j=v.default,w={title:"MK online stor",description:"your best experience online shoping"};function _({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:(0,u.cn)("min-h-screen font-sans antialiased bgDesign",o().className),children:(0,s.jsxs)(j,{children:[s.jsx(d,{}),e,s.jsx(g,{})]})})})}},16744:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(25036),i=r(72245);let o=({children:e,className:t})=>s.jsx("div",{className:(0,i.cn)("py-10 max-w-screen-xl mx-auto px-4 xl:px-0",t),children:e})},24389:(e,t,r)=>{"use strict";r.d(t,{GJ:()=>n,NI:()=>o,Po:()=>i,Xp:()=>s,hj:()=>a});let s=async()=>{let e=await fetch("https://jsonserver.reactbd.com/amazonpro",{cache:"no-cache"});if(!e.ok)throw Error("Failed to fetch products");return e.json()},i=async()=>{let e=await fetch("https://jsonserver.reactbd.com/amazonpro/category/phone",{cache:"no-cache"});if(!e.ok)throw Error("Failed to fetch Phones");return e.json()},o=async()=>{let e=await fetch("https://jsonserver.reactbd.com/amazonpro/category/phone case",{cache:"no-cache"});if(!e.ok)throw Error("Failed to fetch Phones");return e.json()},n=async()=>{let e=await fetch("https://jsonserver.reactbd.com/amazonpro/category/watch",{cache:"no-cache"});if(!e.ok)throw Error("Failed to fetch Phones");return e.json()},a=async()=>{let e=await fetch("https://jsonserver.reactbd.com/amazonpro/category/accessories",{cache:"no-cache"});if(!e.ok)throw Error("Failed to fetch Phones");return e.json()}},72245:(e,t,r)=>{"use strict";r.d(t,{cn:()=>o});var s=r(70990),i=r(95132);function o(...e){return(0,i.m)((0,s.W)(e))}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,77,900],()=>r(30285));module.exports=s})();