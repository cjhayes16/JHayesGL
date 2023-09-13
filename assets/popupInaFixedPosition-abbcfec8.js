import{d as t,o as e,L as n,a as o,c as a,e as i}from"./index-55bc20fe.js";const c=[i("div",{id:"map"},null,-1)],s=t({__name:"popupInaFixedPosition",setup(t){let i={minZoom:5,maxZoom:18};const s=30.55227,d=117.07424;return e((()=>{const t=n.map("map",i).setView([s,d],13);n.tileLayer("http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=8c2992a8d82ecb284c857aa88102a057",{attribution:"stamen"}).addTo(t),t.createPane("fixed",document.getElementById("map"));const e=n.divIcon({className:"marker",html:'\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n    <path d="M25 7.335c-2.23-2.069-5.217-3.335-8.5-3.335s-6.27 1.265-8.5 3.335v0c2.46 2.283 4 5.544 4 9.165s-1.54 6.882-4 9.165c2.23 2.069 5.217 3.335 8.5 3.335s6.27-1.265 8.5-3.335c-2.46-2.283-4-5.544-4-9.165s1.54-6.882 4-9.165v0 0zM25.706 8.044c2.045 2.226 3.294 5.195 3.294 8.456s-1.249 6.23-3.294 8.456c-2.279-2.101-3.706-5.112-3.706-8.456s1.427-6.355 3.706-8.456v0 0zM7.294 8.044c-2.045 2.226-3.294 5.195-3.294 8.456s1.249 6.23 3.294 8.456c2.279-2.101 3.706-5.112 3.706-8.456s-1.427-6.355-3.706-8.456v0z"></path>\n  </svg>\n',iconSize:[40,40],iconAnchor:[12,24],popupAnchor:[7,-16]});[{lat:30.55227,lng:117.07424,text:"<h3>First popup 😀</h3><br>Grab the lower right corner and reduce the width of the map."},{lat:30.54227,lng:117.04424,text:"<h3>Second popup 😀</h3><br>Grab the lower right corner and reduce the width of the map."}].map((({lat:o,lng:a,text:i})=>{const s=n.marker([o,a],{icon:e}).addTo(t),d=n.popup({pane:"fixed",className:"popup-fixed test",autoPan:!1}).setContent(i);s.bindPopup(d).on("click",c)})),t.on("popupclose",(function(t){r()}));const o=window.matchMedia("(min-width: 700px)");function a(t){t.matches?document.documentElement.style.setProperty("--min-width","true"):document.documentElement.style.removeProperty("--min-width")}function c(e){r();const o=document.querySelector(".leaflet-popup-content-wrapper").offsetWidth;e.target._icon.classList.add("animation");const a=n.featureGroup([e.target]).addTo(t),i=document.documentElement.style.getPropertyValue("--min-width");t.fitBounds(a.getBounds(),{paddingTopLeft:[i?-o:0,10]})}function r(){document.querySelectorAll(".animation").forEach((t=>{t.classList.remove("animation")})),t.setView([s,d],13)}o.addEventListener("change",(t=>a(t))),a(o)})),(t,e)=>(o(),a("div",null,c))}});export{s as default};
