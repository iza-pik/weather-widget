(this["webpackJsonpweather-widget"]=this["webpackJsonpweather-widget"]||[]).push([[0],{20:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var i,a,c,o,r,d,u,l,s=e(0),b=e.n(s),j=e(11),h=e.n(j),m=(e(20),e(5)),v=e(2),g=e(9),O=e(3),p=e(4),f=e(15),x=e(1),w=p.a.div(i||(i=Object(O.a)(["\n  margin: 1vmin;\n  padding: 1vmin;\n  input#text {\n    background-color: bisque;\n    border-radius: 1vmin;\n    font-size: 3vmin;\n    margin: 1vmin;\n  }\n  input#submit {\n    background-color: darksalmon;\n    border: solid bisque;\n    border-radius: 1vmin;\n    font-weight: bold;\n    font-size: 3vmin;\n  }\n  label {\n    padding: 3vmin; //???\n  }\n"]))),y=function(n){var t=n.id,e=n.label,i=Object(f.a)(n,["id","label"]);return Object(x.jsx)(w,{children:Object(x.jsxs)("label",{htmlFor:t,children:[e,Object(x.jsx)("input",Object(v.a)({id:t},i))]})})},k=p.a.form(a||(a=Object(O.a)(["\n  min-height: 50vmin;\n  min-width: 50vmin;\n  background-color: white;\n  border-radius: 2vmin;\n  box-shadow: 0 0 5vmin 5vmin white;\n  color: navy;\n"]))),C=function(n){var t=n.onChange,e=n.onSubmit,i=n.value;return Object(x.jsxs)(k,{onSubmit:e,children:[Object(x.jsx)(y,{onChange:t,id:"city","data-id":"city",label:"City: ",type:"text",placeholder:"Insert the city - empty for current location",value:i.city}),Object(x.jsx)(y,{id:"submit",type:"submit",value:"Submit"}),Object(x.jsx)(y,{checked:"metric"===i.units,"data-id":"units",id:"metric",label:"Metric",type:"radio",value:"metric",name:"units",onChange:t}),Object(x.jsx)(y,{"data-id":"units",id:"imperial",label:"Imperial",type:"radio",value:"imperial",name:"units",onChange:t})]})},S="847c4dda05c3a22fb02d777556a5510f",q=function(n){var t=new Date(1e3*n);return"".concat(z(t.getHours()),":").concat(z(t.getMinutes()))},z=function(n){return n<10?"0".concat(n):"".concat(n)},F=e.p+"static/media/clouds.a90bcbf0.jpg",D=p.a.div(c||(c=Object(O.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: bottom;\n  border-radius: 2vmin;\n  color: black;\n  font-weight: 900;\n  min-height: 50vmin;\n  min-width: 50vmin;\n  ul {\n    list-style-type: none;\n  }\n  text-shadow: 0 0 2vmin white;\n  transition: 0.4s ease-out;\n"])),F),P=function(n){var t,e,i,a,c,o,r,d=n.query,u=n.weatherData;return Object(x.jsxs)(D,{children:[Object(x.jsxs)("h2",{children:["Weather in ",u.name||"current location"]}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Math.floor(null===u||void 0===u||null===(t=u.main)||void 0===t?void 0:t.temp),"metric"===d.queriedUnits?" \xb0C":" \xb0F"]}),Object(x.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(null===u||void 0===u||null===(e=u.weather[0])||void 0===e?void 0:e.icon,".png"),alt:"".concat(null===u||void 0===u||null===(i=u.weather[0])||void 0===i?void 0:i.description," in ").concat(d.city)}),Object(x.jsx)("li",{children:"".concat(null===u||void 0===u||null===(a=u.main)||void 0===a?void 0:a.pressure," hPa")}),Object(x.jsx)("li",{children:"Humidity: ".concat(null===u||void 0===u||null===(c=u.main)||void 0===c?void 0:c.humidity,"%")}),Object(x.jsx)("li",{children:"Sunrise: ".concat(q(null===u||void 0===u||null===(o=u.sys)||void 0===o?void 0:o.sunrise))}),Object(x.jsx)("li",{children:"Sunset: ".concat(q(null===u||void 0===u||null===(r=u.sys)||void 0===r?void 0:r.sunset))})]})]})},U=p.a.div(o||(o=Object(O.a)([""]))),I=function(n){return Object(x.jsx)(U,{children:Object(x.jsx)(P,Object(v.a)({},n))})},M=e.p+"static/media/sun.42ddd9ac.svg",E=p.a.div(r||(r=Object(O.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: blue;\n  transition: opacity 0.2s, z-index 0.2s;\n  opacity: ",";\n  z-index: ",";\n"])),(function(n){return n.isOn?1:0}),(function(n){return n.isOn?99:-1})),T=Object(p.b)(d||(d=Object(O.a)(["\nfrom {\n  transform: rotate(0deg);\n}\n\nto {\n  transform: rotate(360deg);\n}\n"]))),B=p.a.div(u||(u=Object(O.a)(["\n  animation: "," 1s infinite;\n  width: 25vmin;\n  height: 25vmin;\n  background-image: url(",");\n  background-position: center;\n  background-size: contain;\n"])),T,M),H=function(n){return Object(x.jsx)(E,Object(v.a)(Object(v.a)({},n),{},{children:Object(x.jsx)(B,{})}))},J=p.a.div(l||(l=Object(O.a)(["\n  position: relative;\n  align-items: center;\n  background-color: navy;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 120vh;\n  padding-top: 0;\n  text-align: center;\n"])));var L=function(){var n=Object(s.useState)({city:"",units:"metric",queriedUnits:""}),t=Object(g.a)(n,2),e=t[0],i=t[1],a=Object(s.useState)({error:"",loading:!1,data:null}),c=Object(g.a)(a,2),o=c[0],r=c[1],d=function(){var n;null===(n=navigator.geolocation)||void 0===n||n.getCurrentPosition((function(n){var t=n.coords;u("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t.latitude,"&lon=").concat(t.longitude,"&appid=").concat(S,"&units=").concat(e.units))}),(function(){return r(Object(v.a)(Object(v.a)({},o),{},{loading:!1,error:"Unable to get user location. Please search manually."}))}))};Object(s.useEffect)(d,[]);var u=function(n){fetch(n).then((function(n){if(!n.ok)throw new Error("Unable to fetch data");return n.json()})).then((function(n){setTimeout((function(){return r(Object(v.a)(Object(v.a)({},o),{},{data:n,loading:!1}))}),3e3),i(Object(v.a)(Object(v.a)({},e),{},{queriedUnits:e.units})),console.log(o.data)})).catch((function(n){r(Object(v.a)(Object(v.a)({},o),{},{error:n,loading:!1}))}))};return Object(x.jsxs)(J,{children:[Object(x.jsx)(H,{isOn:o.loading}),Object(x.jsx)(C,{onChange:function(n){i(Object(v.a)(Object(v.a)({},e),{},Object(m.a)({},"".concat(n.target.dataset.id),n.target.value)))},onSubmit:function(n){n.preventDefault(),r(Object(v.a)(Object(v.a)({},o),{},{loading:!0})),e.city?u("https://api.openweathermap.org/data/2.5/weather?q=".concat(e.city,"&appid=").concat(S,"&units=").concat(e.units)):d()},value:e}),o.data&&Object(x.jsx)(I,{weatherData:o.data,query:e})]})},W=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(t){var e=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),i(n),a(n),c(n),o(n)}))};h.a.render(Object(x.jsx)(b.a.StrictMode,{children:Object(x.jsx)(L,{})}),document.getElementById("root")),W()}},[[24,1,2]]]);
//# sourceMappingURL=main.636f9664.chunk.js.map