import{d as e,o as t,L as a,a as o,c as s,e as r}from"./index-55bc20fe.js";const n=[r("div",{id:"map"},null,-1)],i=e({__name:"simpleAnimationOfJumpingMarker",setup(e){let r={minZoom:5,maxZoom:18};return t((()=>{const e=a.map("map",r).setView([30.55227,117.07424],13);a.tileLayer("http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=8c2992a8d82ecb284c857aa88102a057",{attribution:"stamen"}).addTo(e);const t=a.marker([30.55227,117.07424]).addTo(e).bindPopup("Center Warsaw");let o=document.documentElement;function s(e,t,a,s){const r="--position-x",n="--position-y",i="--marker-height";"add"===e?(o.style.setProperty(r,t+"px"),o.style.setProperty(n,a+"px"),o.style.setProperty(i,s+"px")):(o.style.removeProperty(r),o.style.removeProperty(n),o.style.removeProperty(i))}t.on("click",(function(e){const t=e.target,a=t._icon,o=t._shadow,r=t._popup._container;a.classList.add("marker-icon-jump"),o.classList.add("marker-shadow-jump"),r.classList.add("popup-element-jump");const n=t._icon.naturalHeight,{x:i,y:m}=e.layerPoint;s("add",i,m,n)})),e.on("click",(t=>{e.eachLayer((function(e){e instanceof a.Marker&&(e._shadow.classList.remove("marker-shadow-jump"),e._icon.classList.remove("marker-icon-jump"),s())}))}))})),(e,t)=>(o(),s("div",null,n))}});export{i as default};