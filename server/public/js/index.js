!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n(2)},function(e,t,n){"use strict";var o=new Proxy({time:"2017-03-11",name:"net",_r:123},{get:function(e,t){return e[t].replace("2017","2018")},set:function(e,t,n){return"name"===t?e[t]=n:e[t]},has:function(e,t){return"name"===t&&e[t]},deleteProperty:function(e,t){return t.indexOf("_")>-1?(delete e[t],!0):e[t]},ownKeys:function(e){return Object.keys(e).filter(function(e){return"time"!=e})}});console.log("get",o.time),o.time="2019",console.log("set-time",o.time),o.name="alex",console.log("set-name",o.name),console.log("has","name"in o),console.log("has","time"in o),delete o.time,console.log("delete",o),delete o._r,console.log("delete",o);var r={time:"2017-03-11",name:"net",_r:123};console.log("reflect get",Reflect.get(r,"time")),Reflect.set(r,"name","Alex"),console.log("reflect set",r),console.log("reflect has",Reflect.has(r,"name"));var l={name:function(e){return"string"==typeof e},age:function(e){return"number"==typeof e&&e>18}},i=new function e(t,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.age=n,function(e,t){return new Proxy(e,{_validator:t,set:function(e,t,n,o){if(e.hasOwnProperty(t)){if((0,this._validator[t])(n))return Reflect.set(e,t,n,o);throw Error("cannot set "+t+" to "+n)}throw Error(t+" not exist")}})}(this,l)}("lilei",10);console.log(i),i.name="Alex",console.log(i)}]);