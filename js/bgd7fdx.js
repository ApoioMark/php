window.Typekit||(window.Typekit={}),window.Typekit.config={a:"1643097",c:[".tk-proxima-nova-soft",'"proxima-nova-soft",sans-serif',".tk-industry",'"industry",sans-serif',".tk-proxima-soft",'"proxima-soft",sans-serif'],fi:[10441,25312,32897],fc:[{id:10441,family:"proxima-nova-soft",src:"https://use.typekit.net/af/357d3c/00000000000000000001743c/27/{format}{?primer,subset_id,fvd,v}",descriptors:{weight:"400",style:"normal",stretch:"normal",display:"auto",variable:!1,primer:"ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be"}},{id:25312,family:"industry",src:"https://use.typekit.net/af/6dc482/00000000000000003b9adf53/27/{format}{?primer,subset_id,fvd,v}",descriptors:{weight:"400",style:"normal",stretch:"normal",display:"auto",variable:!1,primer:"ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be"}},{id:32897,family:"proxima-soft",src:"https://use.typekit.net/af/5beeef/00000000000000003b9af203/27/{format}{?primer,subset_id,fvd,v}",descriptors:{weight:"400",style:"normal",stretch:"normal",display:"auto",variable:!1,primer:"ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be"}}],fn:["industry",["n4"],"proxima-nova-soft",["n4"],"proxima-soft",["n4"]],hn:"use.typekit.net",ht:"tk",js:"1.21.0",kt:"bgd7fdx",l:"typekit",ps:1,ping:"https://p.typekit.net/p.gif{?s,k,ht,h,f,a,js,app,e,_}",pm:!0,type:"configurable"},function(t,i,e){if(i.querySelector){var n=Date.now||function(){return+new Date};j.prototype.b=function(t){for(var i=[],e=0;e<arguments.length;e++)i.push(arguments[e].replace(/[\W_]+/g,"").toLowerCase());return i.join(this.g)},C.prototype.set=function(t){if(Math.floor(t/32+1)>this.b.length)throw Error("Index is out of bounds.");var i=Math.floor(t/32);this.b[i]|=1<<t-32*i},C.prototype.has=function(t){if(Math.floor(t/32+1)>this.b.length)throw Error("Index is out of bounds.");var i=Math.floor(t/32);return!!(this.b[i]&1<<t-32*i)};var o=[2449897292,4218179547,2675077685,1031960064,1478620578,1386343184,3194259988,2656050674,3012733295,2193273665];E.prototype.has=function(t){if("string"!=typeof t&&"number"!=typeof t)throw Error("Value should be a string or number.");for(var i="number"==typeof t,e=0;e<this.i;e++){var n;if(i)n=x(4294967295&t,3432918353),n=x(n=n<<15|n>>>17,461845907),n=x(n=(n^=o[e]||0)<<13|n>>>19,5)+3864292196,n^=4,n=x(n^=n>>>16,2246822507),n=x(n^=n>>>13,3266489909),n=((n^=n>>>16)>>>0)%this.b;else{n=o[e]||0;var r,s,a=t.length%4,h=t.length-a;for(s=0;s<h;s+=4)r=x(r=(4294967295&t.charCodeAt(s+0))<<0|(4294967295&t.charCodeAt(s+1))<<8|(4294967295&t.charCodeAt(s+2))<<16|(4294967295&t.charCodeAt(s+3))<<24,3432918353),r=x(r=r<<15|r>>>17,461845907),n=x(n=(n^=r)<<13|n>>>19,5)+3864292196;switch(r=0,a){case 3:r^=(4294967295&t.charCodeAt(s+2))<<16;case 2:r^=(4294967295&t.charCodeAt(s+1))<<8;case 1:r=x(r^=(4294967295&t.charCodeAt(s+0))<<0,3432918353),n^=r=x(r=r<<15|r>>>17,461845907)}n=x((n^=t.length)^n>>>16,2246822507),n=(((n=x(n^n>>>13,3266489909))^n>>>16)>>>0)%this.b}if(!this.g.has(n))return!1}return!0},S.prototype.has=function(t){if(""===t)return!0;for(t=t.split(".");t.length;){var i=t.join("."),e="*."+i;if(this.b.has(i)||this.b.has(e)||this.b.has(encodeURIComponent(i))||this.b.has(encodeURIComponent(e)))return!0;t.shift()}return!1};var r={K:"serif",J:"sans-serif"},s=null;tt.prototype.start=function(){this.g.serif=this.m.b.offsetWidth,this.g["sans-serif"]=this.o.b.offsetWidth,this.F=n(),nt(this)},rt.prototype.start=function(){var t=this.m.g.document,i=this,e=n(),o=new Promise((function(o,r){!function s(){n()-e>=i.g?r():t.fonts.load(i.b.style+" "+i.b.weight+" 300px "+(i.j?K(i.b):i.b.b),i.o).then((function(t){1<=t.length?o():setTimeout(s,25)}),(function(){r()}))}()})),r=new Promise((function(t,e){setTimeout(e,i.g)}));Promise.race([r,o]).then((function(){i.i(i.b)}),(function(){i.u(i.b)}))};var a=null;st.prototype.i=function(t){var i=this.b;i.i&&N(i.g,[i.b.b("wf",t.b,R(t),"active")],[i.b.b("wf",t.b,R(t),"loading"),i.b.b("wf",t.b,R(t),"inactive")]),W(i,"fontactive",t),this.o=!0,at(this)},st.prototype.j=function(t){var i=this.b;if(i.i){var e=P(i.g,i.b.b("wf",t.b,R(t),"active")),n=[],o=[i.b.b("wf",t.b,R(t),"loading")];e||n.push(i.b.b("wf",t.b,R(t),"inactive")),N(i.g,n,o)}W(i,"fontinactive",t),at(this)},ht.prototype.supportsConfiguredBrowser=function(){return!0},ht.prototype.init=function(){if(0<this.g.length){for(var t=[],i=0;i<this.g.length;i++)t.push(T(this.g[i]));F(this.b,t.join(""))}},ht.prototype.load=function(e,n,o){var r=this;if(o=o||{},this.j&&(e=location.hostname,!this.j.has(e)))return console.error('Typekit: the domain "'+e+'" isn\'t in the list of published domains for kit "'+this.u+'".'),void O(new M(this.b,o,{}));e=o.timeout;var s=!!o.async,h=function(){var t=i,e=navigator.userAgent;return/MSIE|Trident/.test(e)&&(!t.documentMode||9>t.documentMode)?e="i":((t=!!(/AppleWebKit/.test(e)&&/Android/.test(e)&&!/OPR|Chrome|CrMo|CriOS/.test(e)&&(t=/Android ([^;)]+)/.exec(e))&&t[1])&&3.1<=(t=parseFloat(t[1]))&&4.1>t)||(t=!!(/Silk/.test(e)&&/Linux|Ubuntu|Android/.test(e)&&(e=/Silk\/([\d\._]+)/.exec(e))&&e[1])&&2<=parseFloat(e[1])),e=t?"j":"k"),e}(),f=function(t,i){if("i"===i){var e={},n=new H;for(var o in q(t,(function(t){e[t.b]||(e[t.b]={}),e[t.b][t.weight]||(e[t.b][t.weight]=[]),e[t.b][t.weight].push(t)})),e)if(e.hasOwnProperty(o)){for(var r=[400,300,200,100,500,600,700,800,900],s=400,a=0;a<r.length;a++)if(s=r[a],e[o][s]){$(n,e[o][s]);break}for(r=[700,800,900,600,500,400,300,200,100],a=0;a<r.length;a++){var h=r[a];if(e[o][h]&&s!==h){$(n,e[o][h]);break}}}return q(t,(function(t){t=L(t,t.b.replace(/(-1|-2)$/,"").slice(0,28)+"-"+R(t)),n.b.push(t)})),n}return"x"===i?new H:t}(this.o,h);if(o=new M(this.b,o,{active:function(){if(s){var i=Q(f,h,r.i,!1);F(r.b,i)}if(r.m){i=r.m;var e=r.b,n=i.m,o=(t.__adobewebfontsappname__||i.app||"").toString().substr(0,20),a=(e=e.g.location.hostname||e.i.location.hostname,[]),u=[];t.Typekit?(t.Typekit.fonts||(t.Typekit.fonts=[]),u=t.Typekit.fonts):t.TypekitPreview&&(t.TypekitPreview.fonts||(t.TypekitPreview.fonts=[]),u=t.TypekitPreview.fonts);for(var c=0;c<i.b.length;c++){for(var l=!1,p=0;p<u.length;p++)if(i.b[c]===u[p]){l=!0;break}l||(a.push(i.b[c]),u.push(i.b[c]))}a.length&&function(t){var i=new Image(1,1),e=!1;i.src=t,i.onload=function(){e=!0,i.onload=null},setTimeout((function(){e||(i.src="about:blank",i.onload=null)}),3e3)}(G(n,{s:i.j,k:i.o,app:o,ht:i.i,h:e,f:a.join("."),a:i.g,js:i.version,e:"js",_:(+new Date).toString()}))}},inactive:function(){if(s){var t=Q(f,h,r.i,!1);F(r.b,t)}}}),f.b.length){var u=Q(f,h,this.i,s);F(this.b,u);var c=new st(this.b,o,e,s);!function(t,i){t.b.body?i():t.b.addEventListener?t.b.addEventListener("DOMContentLoaded",i):t.b.attachEvent("onreadystatechange",(function(){"interactive"!=t.b.readyState&&"complete"!=t.b.readyState||i()}))}(r.b,(function(){!function(i,e,n){var o={},r=e.b.length;if(!r&&n)O(i.b);else{i.g+=r,n&&(i.m=n);var s=[];for(q(e,(function(e){var n=i.b;if(n.i&&N(n.g,[n.b.b("wf",e.b,R(e),"loading")]),W(n,"fontloading",e),n=null,null===a)if(t.FontFace){var r=/Gecko.*Firefox\/(\d+)/.exec(t.navigator.userAgent),h=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(t.navigator.userAgent);a=r?42<parseInt(r[1],10):!h||!/Apple/.exec(t.navigator.vendor)||603<=parseInt(h[1],10)}else a=!1;n=a?new rt(k(i.i,i),k(i.j,i),i.w,e,i.A,"BESbswy",i.u):new tt(k(i.i,i),k(i.j,i),i.w,e,i.A,o,"BESbswy",i.u),s.push(n)})),e=0;e<s.length;e++)s[e].start()}}(c,f,n)}))}else O(o)},ft.prototype.i=function(t){this.b.push(t)},ft.prototype.load=function(t,i){var e=t,n=i||{};if("string"==typeof e?e=[e]:e&&e.length||(n=e||{},e=[]),e.length)for(var o=this,r=e.length,s=0;s<e.length;s++)ut(this,e[s],(function(){--r||ct(o,n)}));else ct(this,n)};var h=new function(){var i=t;this.g=this.i=i,this.b=this.g.document};if(t.Typekit||(t.Typekit={}),!t.Typekit.load){var f=new ft(new U("//"+(t.Typekit.config||{}).hn+"/{id}.js"),h);t.Typekit.load=function(){f.load.apply(f,arguments)},t.Typekit.addKit=function(){f.i.apply(f,arguments)}}for(var u,c=t.Typekit.config||{},l=[],p=c.fc,b=0;b<p.length;b++)l.push(p[b].id);if(u=new ht(h),c.ping&&(u.m=new function(){var t=c.ps,i=c.ht,e=l,n=c.a,o=c.kt,r=c.js,s=c.l;this.m=new U(c.ping),this.j=t,this.i=i,this.b=e||[],this.g=n||null,this.o=o||null,this.version=r||null,this.app=s||null}),c.fc)for(var d=c.fc,g=0;g<d.length;g++)u.o.b.push(new D(d[g].family,d[g].src,d[g].descriptors));if(c.dl){var y=c.dl;try{u.j=new S(y)}catch(t){}}if(c.kt&&(u.u=c.kt),c.token&&(u.i=c.token),c.c)for(var v=0;v<c.c.length;v+=2)u.g.push(new A);if(t.Typekit.addKit(u),t.WebFont)try{t.Typekit.load()}catch(t){}}else i.documentElement.className+=" wf-inactive";function m(t,i,e){return t.call.apply(t.bind,arguments)}function w(t,i,e){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,n),t.apply(i,e)}}return function(){return t.apply(i,arguments)}}function k(t,i,e){return(k=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?m:w).apply(null,arguments)}function j(t){this.g=t||"-"}function A(){var t=[{name:"font-family",value:c.c[v+1]}];this.g=[c.c[v]],this.b=t}function T(t){for(var i=t.g.join(","),e=[],n=0;n<t.b.length;n++){var o=t.b[n];e.push(o.name+":"+o.value+";")}return i+"{"+e.join("")+"}"}function x(t,i){return(65535&t)*i+(((t>>>16)*i&65535)<<16)}function C(t,i){if(this.b=i||Array(Math.ceil(t/32)),!i)for(var e=0;e<this.b.length;e++)this.b[e]=0}function E(t,i,e){this.b=t,this.i=i,this.g=new C(t,e)}function S(i){if(i.length%4&&(i+=Array(5-i.length%4).join("=")),i=i.replace(/\-/g,"+").replace(/\_/g,"/"),t.atob)i=t.atob(i);else{if(1==(i=i.replace(/=+$/,"")).length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var e,n,o=0,r=0,s="";n=i.charAt(r++);~n&&(e=o%4?64*e+n:n,o++%4)?s+=String.fromCharCode(255&e>>(-2*o&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);i=s}for(e=[],o=0;o<i.length;o+=4)e.push(i.charCodeAt(o)<<24|i.charCodeAt(o+1)<<16|i.charCodeAt(o+2)<<8|i.charCodeAt(o+3)<<0);i=e.shift(),o=e.shift(),this.b=new E(i,o,e)}function I(t,i,e,n){if(i=t.b.createElement(i),e)for(var o in e)e.hasOwnProperty(o)&&("style"==o?i.style.cssText=e[o]:i.setAttribute(o,e[o]));return n&&i.appendChild(t.b.createTextNode(n)),i}function _(t,e,n){(t=t.b.getElementsByTagName(e)[0])||(t=i.documentElement),t.insertBefore(n,t.lastChild)}function B(t){t.parentNode&&t.parentNode.removeChild(t)}function N(t,i,e){var n=i||[];e=e||[],i=t.className.split(/\s+/);for(var o,r=0;r<n.length;r+=1){o=!1;for(var s=0;s<i.length;s+=1)if(n[r]===i[s]){o=!0;break}o||i.push(n[r])}for(n=[],r=0;r<i.length;r+=1){for(o=!1,s=0;s<e.length;s+=1)if(i[r]===e[s]){o=!0;break}o||n.push(i[r])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function P(t,i){for(var e=t.className.split(/\s+/),n=0,o=e.length;n<o;n++)if(e[n]==i)return!0;return!1}function F(t,e){var n=I(t,"style");n.setAttribute("type","text/css"),n.styleSheet?(_(t,"head",n),n.styleSheet.cssText=e):(n.appendChild(i.createTextNode(e)),_(t,"head",n))}function M(t,i,e){this.g=t.g.document.documentElement,this.j=i,this.m=e,this.b=new j("-"),this.o=!1!==i.events,this.i=!1!==i.classes}function O(t){if(t.i){var i=P(t.g,t.b.b("wf","active")),e=[],n=[t.b.b("wf","loading")];i||e.push(t.b.b("wf","inactive")),N(t.g,e,n)}W(t,"inactive")}function W(t,i,e){if(t.o&&t.j[i])try{e?t.j[i](e.b,R(e)):t.j[i]()}catch(t){console.error('Typekit: Error in "'+i+'" callback',t)}t.m[i]&&(e?t.m[i](e.b,R(e)):t.m[i]())}function D(t,i,e){e=e||{},this.b=t,this.g=i,this.weight=e.weight||"400",this.style=e.style||"normal",this.stretch=e.stretch||"normal",this.B=e.primer||void 0,this.C=e.subset_id||void 0,this.display=e.display||"auto",(this.i=!!e.variable||!1)&&(this.B=void 0,this.C="4")}function K(t){return("tk-"+t.b).slice(0,26)+"-"+R(t)}function L(t,i){return new D(i,t.g,{weight:t.weight,style:t.style,stretch:t.stretch,B:t.B,C:t.C,display:t.display})}function R(t){return t.style.charAt(0)+t.weight.charAt(0)}function U(t){this.b=t}function G(t,i){return t.b.replace(/\{([^\{\}]+)\}/g,(function(t,e){if("?"==e.charAt(0)){for(var n=e.slice(1).split(","),o=[],r=0;r<n.length;r++)i[n[r]]&&o.push(n[r]+"="+encodeURIComponent(i[n[r]]));return o.length?"?"+o.join("&"):""}return encodeURIComponent(i[e]||"")}))}function H(){this.b=[]}function $(t,i){for(var e=0;e<i.length;e++)t.b.push(i[e])}function q(t,i){for(var e=0;e<t.b.length;e++)i(t.b[e],e,t)}function z(t,i,e){for(var n=[],o=0;o<i.length;o++){var r=i[o],s=G(new U(t.g),{format:r,primer:t.B,subset_id:t.C,fvd:R(t),extension:V(r),token:e,v:"3"});"i"===r?n.push("url("+s+")"):n.push("url("+s+') format("'+J(r)+'")')}return n.join(",")}function J(t){switch(t){case"d":return"woff";case"i":return"eot";case"l":return"woff2";default:return"opentype"}}function V(t){switch(t){case"d":return"woff";case"i":return"eot";case"l":return"woff2";default:return"otf"}}function Q(t,i,e,n){var o=[];return q(t,(function(t){o.push(function(t,i,e,n){if("x"===i)return"";var o=[];return o.push("font-family:"+(n?K(t):t.b)),i=z(t,"k"===i?["l","d","a"]:[i],e),o.push("src:"+i),o.push("font-weight:"+t.weight),o.push("font-style:"+t.style),o.push("font-stretch:"+t.stretch),o.push("font-display:"+t.display),"@font-face{"+o.join(";")+";}"}(t,i,e,n))})),o.join("")}function X(t,i){this.g=t,this.i=i,this.b=I(this.g,"span",{"aria-hidden":"true"},this.i)}function Y(t){_(t.g,"body",t.b)}function Z(t){return"display:block !important;position:absolute !important;top:-9999px !important;left:-9999px !important;font-size:300px !important;width:auto !important;height:auto !important;line-height:normal !important;margin:0 !important;padding:0 !important;font-variant:normal !important;white-space:nowrap !important;font-family:"+t.b+" !important;font-weight:"+t.weight+" !important;font-style:"+t.style+" !important;"}function tt(t,i,e,n,o,r,s,a){this.D=t,this.H=i,this.u=e,this.b=n,this.w=s||"BESbswy",this.g={},this.I=o||3e3,this.G=a,this.A=r||null,this.i=new X(this.u,this.w),this.j=new X(this.u,this.w),this.m=new X(this.u,this.w),this.o=new X(this.u,this.w),t=this.G?K(this.b):this.b.b,this.i.b.style.cssText=Z(L(this.b,t+",serif")),this.j.b.style.cssText=Z(L(this.b,t+",sans-serif")),this.m.b.style.cssText=Z(L(this.b,"serif")),this.o.b.style.cssText=Z(L(this.b,"sans-serif")),Y(this.i),Y(this.j),Y(this.m),Y(this.o)}function it(){if(null===s){var i=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(t.navigator.userAgent);s=!!i&&(536>parseInt(i[1],10)||536===parseInt(i[1],10)&&11>=parseInt(i[2],10))}return s}function et(t,i,e){for(var n in r)if(r.hasOwnProperty(n)&&i===t.g[r[n]]&&e===t.g[r[n]])return!0;return!1}function nt(t){var i,e=t.i.b.offsetWidth,o=t.j.b.offsetWidth;(i=e===t.g.serif&&o===t.g["sans-serif"])||(i=it()&&et(t,e,o)),i?n()-t.F>=t.I?it()&&et(t,e,o)&&(!t.A||t.A.hasOwnProperty(t.b.b))?ot(t,t.D):ot(t,t.H):function(t){setTimeout(k((function(){nt(this)}),t),50)}(t):ot(t,t.D)}function ot(t,i){setTimeout(k((function(){B(this.i.b),B(this.j.b),B(this.m.b),B(this.o.b),i(this.b)}),t),0)}function rt(t,i,e,n,o,r,s){this.i=t,this.u=i,this.b=n,this.m=e,this.g=o||3e3,this.o=r||void 0,this.j=s}function st(t,i,e,n){this.w=t,this.b=i,this.g=0,this.o=this.m=!1,this.A=e,this.u=n}function at(t){!--t.g&&t.m&&(t.o?((t=t.b).i&&N(t.g,[t.b.b("wf","active")],[t.b.b("wf","loading"),t.b.b("wf","inactive")]),W(t,"active")):O(t.b))}function ht(t){this.b=t,this.m=null,this.g=[],this.j=this.u=null,this.o=new H,this.i=null}function ft(t,i){this.j=t,this.g=i,this.b=[]}function ut(t,i,e){i=G(t.j,{id:i}),function(t,i,e){var n=t.b.getElementsByTagName("head")[0];if(n){var o=I(t,"script",{src:i}),r=!1;o.onload=o.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,e&&e(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&n.removeChild(o))},n.appendChild(o),setTimeout((function(){r||(r=!0,e&&e(Error("Script load timeout")))}),5e3)}}(t.g,i,e)}function ct(t,i){if(t.b.length){for(var e=new M(t.g,i,{}),n=0;n<t.b.length;n++)t.b[n].init();for(e.i&&N(e.g,[e.b.b("wf","loading")]),W(e,"loading"),e=0;e<t.b.length;e++)t.b[e].load(null,e==t.b.length-1,i);t.b=[]}}}(this,document);