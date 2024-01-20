import{_ as f,a as h,b as y}from"./Plan.f7078481.js";import g from"./Icon.e6b889ac.js";import{_ as v}from"./nuxt-link.490ad890.js";import{j as b,f as t,o as a,c as i,a as e,b as o,d as l,t as m,g as k,w,F as D,k as T,h as P}from"./entry.af4dbb0d.js";import{a as d,c as j}from"./formatData.ce8d8843.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Button.e0586e57.js";import"./selectMenu.5351eefe.js";import"./upcoming.c5977135.js";import"./Modal.1f68afe7.js";import"./transition.3dba0860.js";import"./keyboard.2cedff81.js";import"./index.114af144.js";const N={key:0},z={key:0,class:"max-w-3xl p-4 mx-auto my-5 space-y-5 border-2 rounded-md"},B={class:"max-w-md mx-auto space-y-5"},V={class:"text-center"},$=e("h2",{class:"text-2xl font-semibold text-red-500 animate-pulse"}," Ongoing... ",-1),L={class:"max-w-md mx-auto my-5"},S={class:"p-3 my-5 border rounded-lg"},C=e("p",null," Start Time ",-1),E={class:"flex items-center justify-center gap-2 text-lg font-medium"},F=e("hr",{class:"my-2"},null,-1),M=e("p",null," End Time ",-1),A={class:"flex items-center justify-center gap-2 text-lg font-medium"},I={class:"max-w-3xl mx-auto space-y-7",id:"plans"},O={class:"flex justify-between"},R={class:"text-2xl font-semibold text-center underline decoration-wavy underline-offset-8"},q={key:1,class:"flex flex-col items-center justify-center min-h-[80vh]"},G=e("h2",{class:"mt-3 text-2xl font-semibold text-center text-gray-400"}," Loading... ",-1),ie={__name:"index",setup(H){const{$planStore:n}=P();return b(()=>{n.getRoutine()}),(s,J)=>{const _=f,c=g,u=h,p=v,x=y;return t(n).routine.length>0?(a(),i("div",N,[e("div",null,[t(n).upcomingPlan?(a(),i("div",z,[e("div",B,[e("div",V,[$,e("div",L,[o(_,{end:t(n).upcomingPlan.end},null,8,["end"])]),e("div",S,[C,e("h2",E,[o(c,{name:"lucide:calendar-clock",size:"22",class:"text-red-500"}),l(" "+m(("formatDateTime"in s?s.formatDateTime:t(d))(t(n).upcomingPlan.start)),1)]),F,M,e("h2",A,[o(c,{name:"lucide:calendar-check-2",size:"22",class:"text-green-500"}),l(" "+m(("formatDateTime"in s?s.formatDateTime:t(d))(t(n).upcomingPlan.end)),1)])])])]),o(u,{p:t(n).upcomingPlan},null,8,["p"])])):k("",!0)]),e("div",I,[e("div",O,[e("h2",R,m(("calculateDays"in s?s.calculateDays:t(j))(t(n).routine[0].start,t(n).routine[t(n).routine.length-1].end))+" Days Timeline ",1),o(p,{to:"/plan",class:"flex items-center justify-center gap-2 px-3 py-2 font-semibold text-white bg-gray-800 border rounded-md"},{default:w(()=>[o(c,{name:"lucide:cog",size:"22",class:"text-white"}),l(" Modify ")]),_:1})]),(a(!0),i(D,null,T(t(n).routine,r=>(a(),i("div",{key:r._id,class:"space-y-5"},[o(x,{plan:r},null,8,["plan"])]))),128))])])):(a(),i("div",q,[o(c,{name:"lucide:loader",size:"64",class:"text-gray-400 animate-spin"}),G]))}}};export{ie as default};
