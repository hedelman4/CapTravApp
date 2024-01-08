(()=>{"use strict";var e={207:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(81),r=a.n(n),i=a(645),o=a.n(i)()(r());o.push([e.id,'.container{display:grid;width:100%;grid-template-areas:"head head head"\n "cityName placeText cityImage"\n "cityDate placeText cityImage"\n "submit forecast cityImage"\n "submit forecast cityImage";border:1px solid black;grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(5, 1fr)}#header{grid-area:head;text-align:center;background-color:lightgrey}#name{grid-area:cityName;padding:20px 20px 20px 20px;margin:10px 10px 10px 10px}#date{grid-area:cityDate;padding:20px 20px 20px 20px;margin:10px 10px 10px 10px}#image{grid-area:cityImage;background-size:contain;background-repeat:no-repeat;background-position:center;margin:10px 10px 10px 10px}#submit{grid-area:submit;display:flex;align-items:center;justify-content:center;padding:50px 20px 50px 20px}#placeholder{grid-area:placeText;display:flex;align-items:flex-end;justify-content:center;text-align:center;margin:20px 20px 20px 20px;font-size:large}#forecast{grid-area:forecast;display:flex;align-items:flex-start;justify-content:center;text-align:center;margin:20px 20px 20px 20px;font-size:large}input[type=text],select{border:0;box-shadow:0 0 5px 0 lightgray;border-radius:10px;width:100%;height:100%;font-size:medium;padding:10px}button[type=button]{width:100%;height:100%;font-size:medium;border:0;box-shadow:0 0 5px 0 darkgray;border-radius:10px}@media (max-width: 600px){.container{display:grid;width:100%;grid-template-areas:"head"\n "cityName"\n "cityDate"\n "submit"\n "submit"\n "placeText"\n "placeText"\n "forecast"\n "forecast"\n "cityImage"\n "cityImage";border:1px solid black;grid-template-columns:1fr;grid-template-rows:repeat(11, 1fr)}}\n',""]);const c=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",n=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),n&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),n&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var p=0;p<e.length;p++){var d=[].concat(e[p]);n&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),a&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=a):d[2]=a),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function a(e){for(var a=-1,n=0;n<t.length;n++)if(t[n].identifier===e){a=n;break}return a}function n(e,n){for(var i={},o=[],c=0;c<e.length;c++){var s=e[c],p=n.base?s[0]+n.base:s[0],d=i[p]||0,l="".concat(p," ").concat(d);i[p]=d+1;var u=a(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,n);n.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}o.push(l)}return o}function r(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,r){var i=n(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=a(i[o]);t[c].references--}for(var s=n(e,r),p=0;p<i.length;p++){var d=a(i[p]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,a){var n=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var n="";a.supports&&(n+="@supports (".concat(a.supports,") {")),a.media&&(n+="@media ".concat(a.media," {"));var r=void 0!==a.layer;r&&(n+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),n+=a.css,r&&(n+="}"),a.media&&(n+="}"),a.supports&&(n+="}");var i=a.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,a),i.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.nc=void 0,(()=>{var e=a(379),t=a.n(e),n=a(795),r=a.n(n),i=a(569),o=a.n(i),c=a(565),s=a.n(c),p=a(216),d=a.n(p),l=a(589),u=a.n(l),m=a(207),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,projectData={};let g="";document.getElementById("submit").addEventListener("click",(async function(){g=document.getElementById("inputName").value,travDate=document.getElementById("inputDate").value,async function(e){await fetch("https://api.weatherbit.io/v2.0/forecast/daily?city="+e+"&units=I&key="+weatherbit_Key).then((e=>e.json())).then((e=>{weatherForecast=e.data[document.getElementById("inputDate").selectedIndex-1]})),document.getElementById("forecast").innerHTML="Temperature: "+weatherForecast.temp+"<br>"+weatherForecast.weather.description}(g),async function(e){await fetch("https://pixabay.com/api/?key="+pixabay_Key+"&q="+e+"&image_type=photo").then((e=>e.json())).then((e=>{imageURL=e.hits[0].largeImageURL})),document.getElementById("image").style.backgroundImage="url('"+imageURL+"')"}(g),document.getElementById("placeholder").innerHTML="The weather forecast in "+g+" on "+travDate+" will be:"}));for(let e=0;e<16;e++){let t=new Date;t.setDate(t.getDate()+e);let a=t.getDate(),n=t.getMonth()+1+"-"+a+"-"+t.getFullYear();var x=document.createElement("option");x.text=n,document.getElementById("inputDate").add(x)}})()})();