import{c as C}from"./camera-Dqp1nqYP.js";import{r as y}from"./index.nbms-BpSYapCP.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=C("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=C("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=C("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);function E(e){const o=e.match(/^(?:BRG|CUL)-(.+)$/);return o?o[1]:/^[A-Z]/.test(e)?e:null}const j=["08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"],k=12;function G(e){const o=[];for(const n of j){const i=`20${n}`;for(let r=1;r<=k;r++){const u=r.toString().padStart(2,"0"),t=r.toString();o.push({url:`/s-photos/${e}/${e}_${n}_${u}.JPG`,year:i,yearCode:n,index:r,filename:`${e}_${n}_${u}.JPG`}),o.push({url:`/s-photos/${e}/${e}_${n}_${t}.JPG`,year:i,yearCode:n,index:r,filename:`${e}_${n}_${t}.JPG`}),o.push({url:`/s-photos/${e}/${e}_${n}_${u}.jpg.JPG`,year:i,yearCode:n,index:r,filename:`${e}_${n}_${u}.jpg.JPG`}),o.push({url:`/s-photos/${e}/${e}_${n}_${u}.jpg`,year:i,yearCode:n,index:r,filename:`${e}_${n}_${u}.jpg`}),o.push({url:`/s-photos/${e}/${e}_${n}_${t}.jpg`,year:i,yearCode:n,index:r,filename:`${e}_${n}_${t}.jpg`})}}return o}const m=new Map;let g=null;function R(){return g||(g=fetch("/bridgesandmajorculverts/data/photo_manifest.json").then(e=>e.ok?e.json():null).catch(()=>null)),g}function b(e,o){return o.map((n,i)=>({url:`/bridgesandmajorculverts/s-photos/${e}/${n.f}`,year:String(n.y),yearCode:String(n.y).slice(2),index:i+1,filename:n.f}))}function A(e){const[o,n]=y.useState([]),[i,r]=y.useState(!1),u=y.useRef(0),t=e?E(e):null;y.useEffect(()=>{if(!t){n([]);return}if(m.has(t)){n(m.get(t));return}let s=!1;const P=setTimeout(()=>{if(s)return;r(!0),R().then(h=>{if(s)return;const c=h==null?void 0:h[t];if(c!=null&&c.length){const l=b(t,c);m.set(t,l),n(l),r(!1);return}S()});function S(){if(s)return;r(!0),n([]),u.current=0;const h=G(t),c=[];let l=0;const x=new Set,_=()=>{if(!s&&(l++,l===h.length)){const a=[],f=new Set;c.sort(($,d)=>$.year.localeCompare(d.year)||$.index-d.index).forEach($=>{const d=`${$.year}-${$.index}`;f.has(d)||(f.add(d),a.push($))}),m.set(t,a),n(a),r(!1)}};h.forEach(a=>{if(x.has(a.url)){_();return}x.add(a.url);const f=new Image;f.onload=()=>{c.push({url:a.url,year:a.year,yearCode:a.yearCode,index:a.index,filename:a.filename}),_()},f.onerror=_,f.src=a.url})}},250);return()=>{s=!0,clearTimeout(P)}},[t]);const p={};return o.forEach(s=>{p[s.year]||(p[s.year]=[]),p[s.year].push(s)}),{photos:o,loading:i,byYear:p,folder:t}}export{J as C,M as I,L as a,A as u};
