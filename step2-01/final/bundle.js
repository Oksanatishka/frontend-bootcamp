!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=144)}({144:function(e,t,n){"use strict";n.r(t);var r=function(){function e(){this._store=[]}return e.prototype.push=function(e){this._store.push(e)},e.prototype.pop=function(){return this._store.pop()},e}(),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function i(e){try{l(r.next(e))}catch(e){u(e)}}function c(e){try{l(r.throw(e))}catch(e){u(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,c)}l((r=r.apply(e,t||[])).next())})},i=function(e,t){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}};console.log("hello world"),console.log("fib(FibConst) is:",function e(t){return t<=1?t:e(t-1)+e(t-2)}(3));console.log("My car:",JSON.stringify({wheels:4,color:"blue",make:"Toyota",model:"Camry"}));var c=new r;c.push(1),c.push(2),c.push(3),console.log("Number on top of the stack:",c.pop());var l=o({},{first:"who",second:"what",third:"dunno",left:"why"},{center:"because",pitcher:"tomorrow",catcher:"today"}),a=l.first,s=l.second,f=l.catcher;function p(e){return u(this,void 0,Promise,function(){return i(this,function(t){return[2,"hello "+e]})})}console.log("First:",a),console.log("Second:",s),console.log("Catcher:",f),function(){u(this,void 0,void 0,function(){var e,t;return i(this,function(n){switch(n.label){case 0:return[4,Promise.resolve(5)];case 1:return e=n.sent(),console.log("makePromise returned:",e),[4,p("Ken")];case 2:return t=n.sent(),console.log("greeting:",t),[2]}})})}()}});
//# sourceMappingURL=bundle.js.map