import{d as t,o as e,L as o,a as n,c as i,p as a,b as s,e as r,_ as l}from"./index-55bc20fe.js";const p=t=>(a("data-v-12f311e9"),t=t(),s(),t),c=[p((()=>r("div",{class:"marker-position"},null,-1))),p((()=>r("div",{id:"map"},null,-1)))],u=l(t({__name:"geoJsonExtendedAction",setup(t){let a={minZoom:5,maxZoom:18};return e((()=>{const t=o.map("map",a).setView([51.918904,19.1343786],6);function e(t){document.querySelector(".marker-position").textContent=t}o.tileLayer("http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=8c2992a8d82ecb284c857aa88102a057",{attribution:"stamen"}).addTo(t),fetch("/wojewodztwa-medium.geojson").then((function(t){return t.json()})).then((function(n){new o.GeoJSON(n,{onEachFeature:function(t,o){o.on("mouseover",(function(n){!function(t,e){t.properties&&t.properties.nazwa&&e.bindPopup(t.properties.nazwa)}(t,o),e(t.properties.nazwa),this.openPopup(),this.setStyle({fillColor:"#eb4034",weight:2,color:"#eb4034",fillOpacity:.7})})),o.on("mouseout",(function(){this.closePopup(),this.setStyle({fillColor:"#3388ff",weight:2,color:"#3388ff",fillOpacity:.2})})),o.on("click",(function(){e(t.properties.nazwa)}))}}).addTo(t)}))})),(t,e)=>(n(),i("div",null,c))}}),[["__scopeId","data-v-12f311e9"]]);export{u as default};