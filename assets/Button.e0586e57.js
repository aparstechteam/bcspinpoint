import{_ as O,u as P}from"./selectMenu.5351eefe.js";import{_ as j}from"./nuxt-link.490ad890.js";import{y as U,o as b,l as h,w as C,G as p,E as x,a5 as H,a as M,ac as R,Q as T,R as G,N as J,A as g,j as V,H as _,aa as E,v as Q,x as B,z as D,B as W,C as w,q as S,g as I,c as X,t as Y}from"./entry.af4dbb0d.js";import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";const $=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function A(e,s){s?s={...$,...s}:s=$;const a=q(s);return a.dispatch(e),a.toString()}const Z=Object.freeze(["prototype","__proto__","constructor"]);function q(e){let s="",a=new Map;const t=r=>{s+=r};return{toString(){return s},getContext(){return a},dispatch(r){return e.replacer&&(r=e.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const i=Object.prototype.toString.call(r);let n="";const u=i.length;u<10?n="unknown:["+i+"]":n=i.slice(8,u-1),n=n.toLowerCase();let d=null;if((d=a.get(r))===void 0)a.set(r,a.size);else return this.dispatch("[CIRCULAR:"+d+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return t("buffer:"),t(r.toString("utf8"));if(n!=="object"&&n!=="function"&&n!=="asyncfunction")this[n]?this[n](r):e.ignoreUnknown||this.unkown(r,n);else{let o=Object.keys(r);e.unorderedObjects&&(o=o.sort());let c=[];e.respectType!==!1&&!N(r)&&(c=Z),e.excludeKeys&&(o=o.filter(l=>!e.excludeKeys(l)),c=c.filter(l=>!e.excludeKeys(l))),t("object:"+(o.length+c.length)+":");const y=l=>{this.dispatch(l),t(":"),e.excludeValues||this.dispatch(r[l]),t(",")};for(const l of o)y(l);for(const l of c)y(l)}},array(r,i){if(i=i===void 0?e.unorderedArrays!==!1:i,t("array:"+r.length+":"),!i||r.length<=1){for(const d of r)this.dispatch(d);return}const n=new Map,u=r.map(d=>{const o=q(e);o.dispatch(d);for(const[c,y]of o.getContext())n.set(c,y);return o.toString()});return a=n,u.sort(),this.array(u,!1)},date(r){return t("date:"+r.toJSON())},symbol(r){return t("symbol:"+r.toString())},unkown(r,i){if(t(i),!!r&&(t(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return t("error:"+r.toString())},boolean(r){return t("bool:"+r)},string(r){t("string:"+r.length+":"),t(r)},function(r){t("fn:"),N(r)?this.dispatch("[native]"):this.dispatch(r.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),e.respectFunctionProperties&&this.object(r)},number(r){return t("number:"+r)},xml(r){return t("xml:"+r.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(r){return t("regex:"+r.toString())},uint8array(r){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return t("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return t("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return t("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return t("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return t("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return t("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return t("url:"+r.toString())},map(r){t("map:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},set(r){t("set:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},file(r){return t("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(e.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(r){return t("bigint:"+r.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const F="[native code] }",ee=F.length;function N(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-ee)===F}function re(e,s,a={}){return e===s||A(e,a)===A(s,a)}const te=U({inheritAttrs:!1,props:{...j.props,as:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function s(a,t,{isActive:r,isExactActive:i}){return e.exactQuery&&!re(a.query,t.query)||e.exactHash&&a.hash!==t.hash?e.inactiveClass:e.exact&&i||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:s}}}),ae=["href","aria-disabled","role","rel","target","onClick"];function ie(e,s,a,t,r,i){const n=j;return e.to?(b(),h(n,x({key:1},e.$props,{custom:""}),{default:C(({route:u,href:d,target:o,rel:c,navigate:y,isActive:l,isExactActive:m,isExternal:v})=>[M("a",x(e.$attrs,{href:e.disabled?void 0:d,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:c,target:o,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(u,e._.provides[R]||e.$route,{isActive:l,isExactActive:m}),onClick:k=>!v&&y(k)}),[p(e.$slots,"default",T(G({isActive:e.exact?m:l})))],16,ae)]),_:3},16)):(b(),h(H(e.as),x({key:0,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:C(()=>[p(e.$slots,"default")]),_:3},16,["disabled","class"]))}const K=L(te,[["render",ie]]);function ne({ui:e,props:s}){const a=E();let t=a.parent,r;for(;t&&!r;){if(t.type.name==="ButtonGroup"){r=J(`group-${t.uid}`);break}t=t.parent}const i=g(()=>r==null?void 0:r.value.children.indexOf(a));return V(()=>{r==null||r.value.register(a)}),_(()=>{r==null||r.value.unregister(a)}),{size:g(()=>(r==null?void 0:r.value.size)||s.size),rounded:g(()=>!r||i.value===-1?e.value.rounded:r.value.children.length===1?r.value.ui.rounded:i.value===0?r.value.rounded.start:i.value===r.value.children.length-1?r.value.rounded.end:"rounded-none")}}const se={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},f=Q(B.ui.strategy,B.ui.button,se),le=U({components:{UIcon:O,ULink:K},inheritAttrs:!1,props:{type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>f.default.size,validator(e){return Object.keys(f.size).includes(e)}},color:{type:String,default:()=>f.default.color,validator(e){return[...B.ui.colors,...Object.keys(f.color)].includes(e)}},variant:{type:String,default:()=>f.default.variant,validator(e){return[...Object.keys(f.variant),...Object.values(f.color).flatMap(s=>Object.keys(s))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>f.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:s}){const{ui:a,attrs:t}=P("button",D(e,"ui"),f),{size:r,rounded:i}=ne({ui:a,props:e}),n=g(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),u=g(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),d=g(()=>e.square||!s.default&&!e.label),o=g(()=>{var k,z;const v=((z=(k=a.value.color)==null?void 0:k[e.color])==null?void 0:z[e.variant])||a.value.variant[e.variant];return W(w(a.value.base,a.value.font,i.value,a.value.size[r.value],a.value.gap[r.value],e.padded&&a.value[d.value?"square":"padding"][r.value],v==null?void 0:v.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),c=g(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),y=g(()=>e.loading&&!n.value?e.loadingIcon:e.trailingIcon||e.icon),l=g(()=>w(a.value.icon.base,a.value.icon.size[r.value],e.loading&&a.value.icon.loading)),m=g(()=>w(a.value.icon.base,a.value.icon.size[r.value],e.loading&&!n.value&&a.value.icon.loading));return{ui:a,attrs:t,isLeading:n,isTrailing:u,isSquare:d,buttonClass:o,leadingIconName:c,trailingIconName:y,leadingIconClass:l,trailingIconClass:m}}});function oe(e,s,a,t,r,i){const n=O,u=K;return b(),h(u,x({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},e.attrs),{default:C(()=>[p(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(b(),h(n,{key:0,name:e.leadingIconName,class:S(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):I("",!0)]),p(e.$slots,"default",{},()=>[e.label?(b(),X("span",{key:0,class:S([e.truncate?e.ui.truncate:""])},Y(e.label),3)):I("",!0)]),p(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(b(),h(n,{key:0,name:e.trailingIconName,class:S(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):I("",!0)])]),_:3},16,["type","disabled","class"])}const fe=L(le,[["render",oe]]);export{fe as _,se as b,ne as u};
