(window.webpackJsonp=window.webpackJsonp||[]).push([["1d8b"],{"2KG9":function(e,t,r){"use strict";var n=r("OmE2");e.exports=function(e,t,r,a,o){var i=new Error(e);return n(i,t,r,a,o)}},"4OlW":function(e,t,r){"use strict";var n=r("ovh1");e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},"5QbJ":function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},"6s8r":function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"71kK":function(e,t,r){"use strict";var n=r("ovh1");e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},"8Jek":function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},DtuZ:function(e,t){e.exports="/_next/static/images/product/print_five_img_5_73de6b2.png"},FqFl:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,a=Array.isArray,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],s=Object.keys(i),c=0;c<s.length;++c){var u=s[c],l=i[u];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:i,prop:u}),r.push(l))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(a(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(a){return n}},encode:function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var a="",i=0;i<n.length;++i){var s=n.charCodeAt(i);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?a+=n.charAt(i):s<128?a+=o[s]:s<2048?a+=o[192|s>>6]+o[128|63&s]:s<55296||s>=57344?a+=o[224|s>>12]+o[128|s>>6&63]+o[128|63&s]:(i+=1,s=65536+((1023&s)<<10|1023&n.charCodeAt(i)),a+=o[240|s>>18]+o[128|s>>12&63]+o[128|s>>6&63]+o[128|63&s])}return a},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(a(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(a(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var s=t;return a(t)&&!a(r)&&(s=i(t,o)),a(t)&&a(r)?(r.forEach(function(r,a){if(n.call(t,a)){var i=t[a];i&&"object"==typeof i&&r&&"object"==typeof r?t[a]=e(i,r,o):t.push(r)}else t[a]=r}),t):Object.keys(r).reduce(function(t,a){var i=r[a];return n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t},s)}}},HVdt:function(e,t){e.exports="/_next/static/images/cases/device/cases/1/images/ia_2300000001_bc815f5.jpg"},OHXD:function(e,t,r){"use strict";var n=r("tImM");function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a(function(t){e=t}),cancel:e}},e.exports=a},OmE2:function(e,t,r){"use strict";e.exports=function(e,t,r,n,a){return e.config=t,r&&(e.code=r),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OmpS:function(e,t,r){"use strict";var n=String.prototype.replace,a=/%20/g,o=r("FqFl"),i={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=o.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return n.call(e,a,"+")},RFC3986:function(e){return String(e)}}},i)},"QX+D":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){var e=r("Sc2W");return{page:e.default||e}}])},Qids:function(e,t){e.exports="/_next/static/images/product/print_six_img_4_db1a7f5.png"},Rzld:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},Sc2W:function(e,t,r){"use strict";r.r(t);var n=r("7mTa"),a=r.n(n),o=r("azxR"),i=r("LkAs"),s=r("Moms"),c=r("tEuJ"),u=r("bMj6"),l=r("hZod"),f=r("mXGw"),p=r.n(f),d=r("8Jek"),m=r.n(d),h=r("0EY2"),y=r.n(h),v=r("HlrV"),g=r("vpMB"),b=r("gnGC"),E=r("bypS");var x={title:"产品与服务",service:{title:"产品服务",desc:"为客户提供完整的解决方案",dataSource:[{title:"PCB",descs:["高精密多层板","刚挠结合板","HDI板","高频板"]},{title:"PCBA",descs:["研发样板","通讯模块","工控产品","安防产品"]},{title:"CAD",descs:["高速PCB设计","信号完整性（SI）设计","EMC设计与整改","封装库设计管理与咨询"]},{title:"EMS",descs:["硬件开发设计","产品项目服务","应用咨询服务","项目成套报价"]}],types:[{title:"硬件创新设计",desc:"为客户产品研发和科技创新提供垂直整合的解决方案"},{title:"制造集成服务",desc:"技术链+供应链+柔性工厂"}]},type:{title:"印制电路板",desc:"根据您的业务属性，我们为您提供了更多可能性",dataSource:[{title:"高多层板",icon:r("odHr"),desc:"层数：24L,板厚：5.0mm，最小线宽/线距：4.0mil/4.0mil"},{title:"HDI板",icon:r("kyA1"),desc:"层数：16L， 板厚：2.5mm， 最小线宽/线距：3.0mil/3.0mil"},{title:"刚挠结合板",icon:r("Xf7R"),desc:"层数：14L， 板厚：3.5mm， 最小线宽/线距：8.0mil/8.0mil"},{title:"高频板",icon:r("lf9a"),desc:"材料：Ro4730G3， 层数：3L， 板厚：2.0mm"},{title:"金属基板",icon:r("DtuZ"),desc:"层数/板厚：8L/5.0mm， 铜基厚度：3.0mm， 最小线宽/线距：10.0mil/8.0mil"},{title:"厚铜电源板",icon:r("Qids"),desc:"层数：4L， 板厚：1.2mm， 最小线宽/线距：7.0mil/4.6mil"}]},quality:{title:"技术与工程",desc:"优莱克以专业专注、守时守信 为公司理念，竭力为合作客户 商提供专业的整体解决方案",dataSource:[{title:"技术能力",icon:r("HVdt"),desc:"\n      高硬件配置和高品质为发展路线，稳定支持300~450个产品项目的贴装生产，\n      最大可焊接PCB尺寸：600x320mm； 最小可焊接PCB尺寸：50x50mm； 可焊接PCB厚度：0.4-5mm；\n      贴装元件尺寸范围：0201-150mm； 机器贴装元件最大高度：25mm；\n      贴装元件最小脚间距：0.3mm； 贴装元件最小球间距：0.4mm； 贴装最小精度：+/- 0.03mm；\n      激光加工各种手工、半自动和全自动印刷机所需各种网框的钢网，精度可达 5 微米；\n      "},{title:"研发实力",icon:r("kyCy"),desc:"\n      快速交货能力： 双面快件24小时内完成，多层快件可在2-4天内完成；\n      样板小批量的规模优势：月交货能力达500余个品种；\n      可生产高层背板、HDI板、高频板、高TG板、刚挠板、金属基板、IC载板等高新技术产品\n      "}]}},j=r("Ex9m"),O=r.n(j);function w(e){var t=function(){if("undefined"==typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a()(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=Object(l.default)(e);if(t){var o=Object(l.default)(this).constructor;r=a()(n,arguments,o)}else r=n.apply(this,arguments);return Object(u.default)(this,r)}}r.d(t,"default",function(){return R});var N=x.service,S=x.type,C=x.quality,R=function(e){Object(c.default)(r,e);var t=w(r);function r(){return Object(i.default)(this,r),t.apply(this,arguments)}return Object(s.default)(r,[{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(y.a,null,p.a.createElement("title",null,x.title,"-",E.a.companyName),p.a.createElement("meta",{name:"description",content:E.a.companyDescription}),p.a.createElement("meta",{name:"keyword",content:E.a.companyKeywords})),p.a.createElement(v.default,null,p.a.createElement("div",{className:O.a.resovePage},p.a.createElement("div",{className:O.a.banner},p.a.createElement("div",{className:O.a.bannerContent},p.a.createElement("h4",null,x.title),p.a.createElement("p",null,"Products and services"))),p.a.createElement("div",{className:O.a.board},p.a.createElement(g.a,{title:N.title,desc:N.desc}),p.a.createElement("div",{className:O.a.content},N.dataSource.map(function(e,t){var r=e.title,n=e.descs,a=e.hideIcon;return p.a.createElement("div",{key:t,className:m()(O.a.boardItem,Object(o.a)({},O.a.boardLeftBorder,t%2))},p.a.createElement("h4",null,r),p.a.createElement("div",{className:O.a.childrenList},n.map(function(e,t){return p.a.createElement("div",{className:O.a.childrenItem,key:t},!a&&p.a.createElement("img",{className:O.a.childrenIcon,src:"/static/images/product/board-icon-1.png",alt:""}),p.a.createElement("div",{className:O.a.childrenDesc},e))})))}))),p.a.createElement("div",{className:O.a.advantage},p.a.createElement(g.a,{title:S.title,desc:S.desc}),p.a.createElement("div",{className:O.a.content},S.dataSource.map(function(e,t){var r=e.title,n=(e.subTitle,e.desc),a=e.icon,o=e.style;return p.a.createElement("div",{className:O.a.advantageItem,key:t},p.a.createElement("div",{className:O.a.advantageImage},p.a.createElement("img",{src:a,alt:""})),p.a.createElement("div",{className:O.a.advantageTitle},r),p.a.createElement("div",{className:O.a.advantageDesc,style:o},n))}))),p.a.createElement("div",{className:O.a.quality},p.a.createElement(g.a,{title:C.title,desc:C.desc}),p.a.createElement("div",{className:O.a.content},C.dataSource.map(function(e,t){var r=e.title,n=e.desc;e.icon;return p.a.createElement("div",{className:O.a.qualityItem,key:t},p.a.createElement("div",{className:O.a.qualityHeader},p.a.createElement("div",{className:O.a.qualityTitle},p.a.createElement("span",{className:O.a.qualityIcon}),p.a.createElement("span",{className:O.a.qualityName},r)),p.a.createElement("div",{className:O.a.qualityDesc},n)))})))),p.a.createElement(b.a,null)))}}]),r}(p.a.Component)},TDIH:function(e,t,r){"use strict";var n=r("ovh1"),a=r("5QbJ"),o=r("uahg"),i=r("Zrjs");function s(e){var t=new o(e),r=a(o.prototype.request,t);return n.extend(r,o.prototype,t),n.extend(r,t),r}var c=s(r("bRtl"));c.Axios=o,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=r("tImM"),c.CancelToken=r("OHXD"),c.isCancel=r("e5jZ"),c.all=function(e){return Promise.all(e)},c.spread=r("6s8r"),e.exports=c,e.exports.default=c},Xf7R:function(e,t){e.exports="/_next/static/images/product/print_three_img_3_3e026a9.png"},Zrjs:function(e,t,r){"use strict";var n=r("ovh1");e.exports=function(e,t){t=t||{};var r={},a=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(a){n.isUndefined(t[a])?n.isUndefined(e[a])||(r[a]=c(void 0,e[a])):r[a]=c(e[a],t[a])}n.forEach(a,function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))}),n.forEach(o,u),n.forEach(i,function(a){n.isUndefined(t[a])?n.isUndefined(e[a])||(r[a]=c(void 0,e[a])):r[a]=c(void 0,t[a])}),n.forEach(s,function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))});var l=a.concat(o).concat(i).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter(function(e){return-1===l.indexOf(e)});return n.forEach(f,u),r}},aECo:function(e,t,r){"use strict";var n=r("2KG9");e.exports=function(e,t,r){var a=r.config.validateStatus;r.status&&a&&!a(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},bRtl:function(e,t,r){"use strict";(function(t){var n=r("ovh1"),a=r("71kK"),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:("undefined"!=typeof XMLHttpRequest?s=r("zf4f"):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(s=r("zf4f")),s),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],function(e){c.headers[e]={}}),n.forEach(["post","put","patch"],function(e){c.headers[e]=n.merge(o)}),e.exports=c}).call(this,r("5IsQ"))},cON5:function(e,t,r){"use strict";var n=r("ovh1");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function a(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=a(window.location.href),function(t){var r=n.isString(t)?a(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},czhI:function(e,t,r){e.exports=r("TDIH")},"d5/c":function(e,t,r){"use strict";var n=r("FqFl"),a=r("OmpS"),o=Object.prototype.hasOwnProperty,i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,c=Array.prototype.push,u=function(e,t){c.apply(e,s(t)?t:[t])},l=Date.prototype.toISOString,f=a.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:a.formatters[f],indices:!1,serializeDate:function(e){return l.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,a,o,i,c,l,f,d,m,h,y,v){var g,b=t;if("function"==typeof l?b=l(r,b):b instanceof Date?b=m(b):"comma"===a&&s(b)&&(b=n.maybeMap(b,function(e){return e instanceof Date?m(e):e}).join(",")),null===b){if(o)return c&&!y?c(r,p.encoder,v,"key"):r;b=""}if("string"==typeof(g=b)||"number"==typeof g||"boolean"==typeof g||"symbol"==typeof g||"bigint"==typeof g||n.isBuffer(b))return c?[h(y?r:c(r,p.encoder,v,"key"))+"="+h(c(b,p.encoder,v,"value"))]:[h(r)+"="+h(String(b))];var E,x=[];if(void 0===b)return x;if(s(l))E=l;else{var j=Object.keys(b);E=f?j.sort(f):j}for(var O=0;O<E.length;++O){var w=E[O],N=b[w];if(!i||null!==N){var S=s(b)?"function"==typeof a?a(r,w):r:r+(d?"."+w:"["+w+"]");u(x,e(N,S,a,o,i,c,l,f,d,m,h,y,v))}}return x};e.exports=function(e,t){var r,n=e,c=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a.default;if(void 0!==e.format){if(!o.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=a.formatters[r],i=p.filter;return("function"==typeof e.filter||s(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:i,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof c.filter?n=(0,c.filter)("",n):s(c.filter)&&(r=c.filter);var l,f=[];if("object"!=typeof n||null===n)return"";l=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var m=i[l];r||(r=Object.keys(n)),c.sort&&r.sort(c.sort);for(var h=0;h<r.length;++h){var y=r[h];c.skipNulls&&null===n[y]||u(f,d(n[y],y,m,c.strictNullHandling,c.skipNulls,c.encode?c.encoder:null,c.filter,c.sort,c.allowDots,c.serializeDate,c.formatter,c.encodeValuesOnly,c.charset))}var v=f.join(c.delimiter),g=!0===c.addQueryPrefix?"?":"";return c.charsetSentinel&&("iso-8859-1"===c.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),v.length>0?g+v:""}},e5jZ:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"fwl+":function(e,t,r){"use strict";var n=r("ovh1");function a(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var i=[];n.forEach(t,function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(a(t)+"="+a(e))}))}),o=i.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},gnGC:function(e,t,r){"use strict";r.d(t,"a",function(){return j});var n=r("7mTa"),a=r.n(n),o=r("LkAs"),i=r("Moms"),s=r("YKN3"),c=r("tEuJ"),u=r("bMj6"),l=r("hZod"),f=r("azxR"),p=r("mXGw"),d=r.n(p),m=r("w+aY"),h=(r("vvX8"),r("czhI")),y=r.n(h),v=r("bypS"),g=r("89Yo"),b=r.n(g);function E(e){var t=function(){if("undefined"==typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a()(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=Object(l.default)(e);if(t){var o=Object(l.default)(this).constructor;r=a()(n,arguments,o)}else r=n.apply(this,arguments);return Object(u.default)(this,r)}}var x=v.a.contact,j=function(e){Object(c.default)(r,e);var t=E(r);function r(e){var n;return Object(o.default)(this,r),n=t.call(this,e),Object(f.a)(Object(s.default)(n),"submit",function(){var e=n.refName.current.value.trim(),t=n.refPhone.current.value.trim();if(!t)return m.notify.show("请输入联系电话","error");y.a.post("/api/common/leave/message",{name:e,phone:t}).then(function(e){n.setState({submitModal:!0}),n.refName.current.value="",n.refPhone.current.value=""},function(e){m.notify.show("服务器内部错误，请稍后重试","error"),console.log(e)})}),Object(f.a)(Object(s.default)(n),"closeSubmitModal",function(){n.setState({submitModal:!1})}),n.refName=d.a.createRef(),n.refPhone=d.a.createRef(),n.state={submitModal:!1},n}return Object(i.default)(r,[{key:"render",value:function(){var e=this.state.submitModal;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:b.a.contact},d.a.createElement("div",{className:"heading"},x.title,d.a.createElement("label",{className:"subheading"},x.desc,x.emailTip,d.a.createElement("a",{href:"mailto:".concat(x.email),className:b.a.noStatus},x.email),x.phoneTip,d.a.createElement("a",{href:"tel:".concat(x.phone),className:b.a.noStatus},x.phone))),d.a.createElement("div",{className:b.a.form},d.a.createElement("input",{type:"text",placeholder:"您的姓名",ref:this.refName,required:!0}),d.a.createElement("input",{type:"text",placeholder:"您的联系电话",ref:this.refPhone,required:!0}),d.a.createElement("button",{type:"button",className:b.a.submitBtn,onClick:this.submit},"提交留言"))),e&&d.a.createElement("div",{className:b.a.submitModal},d.a.createElement("div",{className:b.a.wrapper},d.a.createElement("div",{className:b.a.main},d.a.createElement("i",{className:"iconfont iconicon-1 ".concat(b.a.iconSuccess)}),d.a.createElement("p",{className:b.a.result},"我们已收到您的服务申请！"),d.a.createElement("div",{className:b.a.desc},"我们会在30分钟内与您联系",d.a.createElement("br",null),"请保持通讯畅通",d.a.createElement("br",null),"感谢您对淘动力的支持与信任")),d.a.createElement("button",{type:"button",className:b.a.btnClose,onClick:this.closeSubmitModal},"我知道了"))))}}]),r}(d.a.Component)},guUT:function(e,t,r){"use strict";var n=r("ovh1"),a=r("4OlW"),o=r("e5jZ"),i=r("bRtl");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return s(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(s(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},h1Um:function(e,t,r){"use strict";var n=r("Rzld"),a=r("hUM7");e.exports=function(e,t){return e&&!n(t)?a(e,t):t}},hUM7:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},i0F7:function(e,t,r){"use strict";var n=r("ovh1");function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=a},kyA1:function(e,t){e.exports="/_next/static/images/product/print_two_img_2_e16bbc8.png"},kyCy:function(e,t){e.exports="/_next/static/images/cases/device/cases/1/images/ia_2300000004_4631d0e.jpg"},lf9a:function(e,t){e.exports="/_next/static/images/product/print_four_img_5_4663eb9.png"},odHr:function(e,t){e.exports="/_next/static/images/cases/pcba/cases/1/images/ia_200000004_3d6b4f4.jpg"},ovh1:function(e,t,r){"use strict";var n=r("5QbJ"),a=Object.prototype.toString;function o(e){return"[object Array]"===a.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==a.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===a.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):o(r)?t[n]=r.slice():t[n]=r}for(var n=0,a=arguments.length;n<a;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,function(t,a){e[a]=r&&"function"==typeof t?n(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},tImM:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},uahg:function(e,t,r){"use strict";var n=r("ovh1"),a=r("fwl+"),o=r("i0F7"),i=r("guUT"),s=r("Zrjs");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=s(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}}),n.forEach(["post","put","patch"],function(e){c.prototype[e]=function(t,r,n){return this.request(s(n||{},{method:e,url:t,data:r}))}}),e.exports=c},vMO2:function(e,t,r){"use strict";var n=r("ovh1");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,a,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(a)&&s.push("path="+a),n.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},vpMB:function(e,t,r){"use strict";var n=r("7mTa"),a=r.n(n),o=r("LkAs"),i=r("Moms"),s=r("tEuJ"),c=r("bMj6"),u=r("hZod"),l=r("mXGw"),f=r.n(l),p=r("5mai"),d=r.n(p);function m(e){var t=function(){if("undefined"==typeof Reflect||!a.a)return!1;if(a.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a()(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=Object(u.default)(e);if(t){var o=Object(u.default)(this).constructor;r=a()(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.default)(this,r)}}var h=function(e){Object(s.default)(r,e);var t=m(r);function r(){return Object(o.default)(this,r),t.apply(this,arguments)}return Object(i.default)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.desc;return f.a.createElement("div",{className:d.a.header},f.a.createElement("h4",{className:"subheaderTitle ".concat(d.a.title)},f.a.createElement("span",{className:d.a.icon}),f.a.createElement("span",{className:d.a.name},t)),f.a.createElement("p",{className:"desc ".concat(d.a.desc)},r))}}]),r}(f.a.Component);t.a=h},vvX8:function(e,t,r){"use strict";var n=r("d5/c"),a=r("z49c"),o=r("OmpS");e.exports={formats:o,parse:a,stringify:n}},xSFS:function(e,t,r){"use strict";var n=r("ovh1"),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t){if(i[t]&&a.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}}),i):i}},z49c:function(e,t,r){"use strict";var n=r("FqFl"),a=Object.prototype.hasOwnProperty,o=Array.isArray,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},c=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},u=function(e,t,r,n){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,s=r.depth>0&&/(\[[^[\]]*])/.exec(o),u=s?o.slice(0,s.index):o,l=[];if(u){if(!r.plainObjects&&a.call(Object.prototype,u)&&!r.allowPrototypes)return;l.push(u)}for(var f=0;r.depth>0&&null!==(s=i.exec(o))&&f<r.depth;){if(f+=1,!r.plainObjects&&a.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(s[1])}return s&&l.push("["+o.slice(s.index)+"]"),function(e,t,r,n){for(var a=n?t:c(t,r),o=e.length-1;o>=0;--o){var i,s=e[o];if("[]"===s&&r.parseArrays)i=[].concat(a);else{i=r.plainObjects?Object.create(null):{};var u="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,l=parseInt(u,10);r.parseArrays||""!==u?!isNaN(l)&&s!==u&&String(l)===u&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(i=[])[l]=a:i[u]=a:i={0:a}}a=i}return a}(l,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,t){var r,u={},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,p=l.split(t.delimiter,f),d=-1,m=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?m="utf-8":"utf8=%26%2310003%3B"===p[r]&&(m="iso-8859-1"),d=r,r=p.length);for(r=0;r<p.length;++r)if(r!==d){var h,y,v=p[r],g=v.indexOf("]="),b=-1===g?v.indexOf("="):g+1;-1===b?(h=t.decoder(v,i.decoder,m,"key"),y=t.strictNullHandling?null:""):(h=t.decoder(v.slice(0,b),i.decoder,m,"key"),y=n.maybeMap(c(v.slice(b+1),t),function(e){return t.decoder(e,i.decoder,m,"value")})),y&&t.interpretNumericEntities&&"iso-8859-1"===m&&(y=s(y)),v.indexOf("[]=")>-1&&(y=o(y)?[y]:y),a.call(u,h)?u[h]=n.combine(u[h],y):u[h]=y}return u}(e,r):e,f=r.plainObjects?Object.create(null):{},p=Object.keys(l),d=0;d<p.length;++d){var m=p[d],h=u(m,l[m],r,"string"==typeof e);f=n.merge(f,h,r)}return n.compact(f)}},zf4f:function(e,t,r){"use strict";var n=r("ovh1"),a=r("aECo"),o=r("vMO2"),i=r("fwl+"),s=r("h1Um"),c=r("xSFS"),u=r("cON5"),l=r("2KG9");e.exports=function(e){return new Promise(function(t,r){var f=e.data,p=e.headers;n.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(m+":"+h)}var y=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(y,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};a(t,r,o),d=null}},d.onabort=function(){d&&(r(l("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){r(l("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var v=(e.withCredentials||u(y))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in d&&n.forEach(p,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),n.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(g){if("json"!==e.responseType)throw g}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),r(e),d=null)}),f||(f=null),d.send(f)})}}},[["QX+D","5d41","9da1","ad9d"]]]);