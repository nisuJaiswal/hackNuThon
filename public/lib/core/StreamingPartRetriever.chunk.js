/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[11],{482:function(ja,ba,e){e.r(ba);var ha=e(0),ia=e(1);e.n(ia);var fa=e(3),z=e(167);ja=e(48);var ea=e(103),aa=e(274),y=e(78),x=e(273);e=e(411);var w=window,r=function(){function e(e,f,n){var h=-1===e.indexOf("?")?"?":"&";switch(f){case y.a.NEVER_CACHE:this.url=e+h+"_="+Object(ia.uniqueId)();break;default:this.url=e}this.Sf=n;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=x.a.NOT_STARTED}e.prototype.start=function(f,n){var h=this,r=this,w=this.request,y;r.zz=0;f&&Object.keys(f).forEach(function(e){h.request.setRequestHeader(e,f[e])});n&&(this.request.withCredentials=n);this.LG=setInterval(function(){var f=0===window.document.URL.indexOf("file:///");f=200===w.status||f&&0===w.status;
if(w.readyState!==x.b.DONE||f){try{w.responseText}catch(pa){return}r.zz<w.responseText.length&&(y=r.Lpa())&&r.trigger(e.Events.DATA,[y]);0===w.readyState&&(clearInterval(r.LG),r.trigger(e.Events.DONE))}else clearInterval(r.LG),r.trigger(e.Events.DONE,["Error received return status "+w.status])},1E3);this.request.send(null);this.status=x.a.STARTED};e.prototype.Lpa=function(){var f=this.request,n=f.responseText;if(0!==n.length)if(this.zz===n.length)clearInterval(this.LG),this.trigger(e.Events.DONE);
else return n=Math.min(this.zz+3E6,n.length),f=w.$Y(f,this.zz,!0,n),this.zz=n,f};e.prototype.abort=function(){clearInterval(this.LG);var f=this;this.request.onreadystatechange=function(){Object(fa.j)("StreamingRequest aborted");f.status=x.a.ABORTED;return f.trigger(e.Events.ABORTED)};this.request.abort()};e.prototype.finish=function(){var f=this;this.request.onreadystatechange=function(){f.status=x.a.SUCCESS;return f.trigger(e.Events.DONE)};this.request.abort()};e.Events={DONE:"done",DATA:"data",
ABORTED:"aborted"};return e}();Object(ja.a)(r);var f;(function(e){e[e.LOCAL_HEADER=0]="LOCAL_HEADER";e[e.FILE=1]="FILE";e[e.CENTRAL_DIR=2]="CENTRAL_DIR"})(f||(f={}));var n=function(e){function h(){var h=e.call(this)||this;h.buffer="";h.state=f.LOCAL_HEADER;h.MQ=4;h.sn=null;h.sv=z.c;h.$o={};return h}Object(ha.c)(h,e);h.prototype.Epa=function(e){var n;for(e=this.buffer+e;e.length>=this.sv;)switch(this.state){case f.LOCAL_HEADER:this.sn=n=this.Ppa(e.slice(0,this.sv));if(n.cw!==z.g)throw Error("Wrong signature in local header: "+
n.cw);e=e.slice(this.sv);this.state=f.FILE;this.sv=n.xK+n.cs+n.ky+this.MQ;this.trigger(h.Events.HEADER,[n]);break;case f.FILE:this.sn.name=e.slice(0,this.sn.cs);this.$o[this.sn.name]=this.sn;n=this.sv-this.MQ;var r=e.slice(this.sn.cs+this.sn.ky,n);this.trigger(h.Events.FILE,[this.sn.name,r,this.sn.RK]);e=e.slice(n);if(e.slice(0,this.MQ)===z.h)this.state=f.LOCAL_HEADER,this.sv=z.c;else return this.state=f.CENTRAL_DIR,!0}this.buffer=e;return!1};h.Events={HEADER:"header",FILE:"file"};return h}(aa.a);
Object(ja.a)(n);ja=function(e){function f(f,h,w,x,y){w=e.call(this,f,w,x)||this;w.url=f;w.stream=new r(f,h);w.ce=new n;w.L1=window.createPromiseCapability();w.q2={};w.Sf=y;return w}Object(ha.c)(f,e);f.prototype.zA=function(e){var f=this;this.request([this.pk,this.Xl,this.nk]);this.stream.addEventListener(r.Events.DATA,function(h){try{if(f.ce.Epa(h))return f.stream.finish()}catch(ra){throw f.stream.abort(),f.rr(ra),e(ra),ra;}});this.stream.addEventListener(r.Events.DONE,function(h){f.hpa=!0;f.L1.resolve();
h&&(f.rr(h),e(h))});this.ce.addEventListener(n.Events.HEADER,Object(ia.bind)(this.p2,this));this.ce.addEventListener(n.Events.FILE,Object(ia.bind)(this.eqa,this));return this.stream.start(this.Sf,this.withCredentials)};f.prototype.WY=function(e){var f=this;this.L1.promise.then(function(){e(Object.keys(f.ce.$o))})};f.prototype.Mp=function(){return!0};f.prototype.request=function(e){var f=this;this.hpa&&e.forEach(function(e){f.q2[e]||f.vva(e)})};f.prototype.p2=function(){};f.prototype.abort=function(){this.stream&&
this.stream.abort()};f.prototype.vva=function(e){this.trigger(ea.a.Events.PART_READY,[{tb:e,error:"Requested part not found",sj:!1,Qg:!1}])};f.prototype.eqa=function(e,f,h){this.q2[e]=!0;this.trigger(ea.a.Events.PART_READY,[{tb:e,data:f,sj:!1,Qg:!1,error:null,Cd:h}])};return f}(ea.a);Object(e.a)(ja);Object(e.b)(ja);ba["default"]=ja}}]);}).call(this || window)
