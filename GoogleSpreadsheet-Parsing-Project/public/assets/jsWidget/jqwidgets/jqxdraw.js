/*
jQWidgets v4.5.1 (2017-April)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/*
jQWidgets v4.5.1 (2017-April)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){a.jqx.jqxWidget("jqxDraw","",{}),a.extend(a.jqx._jqxDraw.prototype,{defineInstance:function(){var b={renderEngine:""};a.extend(!0,this,b);var c=["clear","on","off","removeElement","attr","getAttr","line","circle","rect","path","pieslice","text","measureText"];for(var d in c)this._addFn(a.jqx._jqxDraw.prototype,c[d])},_addFn:function(a,b){a[b]||(a[b]=function(){return this.renderer[b].apply(this.renderer,arguments)})},createInstance:function(a){},_initRenderer:function(b){return a.jqx.createRenderer(this,b)},_internalRefresh:function(){var b=this;if(!a.jqx.isHidden(b.host)){b.renderer||(b.host.empty(),b._initRenderer(b.host));var c=b.renderer;if(c){var d=c.getRect();b._render({x:1,y:1,width:d.width,height:d.height}),c instanceof a.jqx.HTML5Renderer&&c.refresh()}}},_saveAsImage:function(b,c,d,e){return a.jqx._widgetToImage(this,b,c,d,e)},_render:function(a){var b=this;b.renderer;b._plotRect=a},refresh:function(){this._internalRefresh()},getSize:function(){var a=this._plotRect;return{width:a.width,height:a.height}},saveAsPNG:function(a,b,c){return this._saveAsImage("png",a,b,c)},saveAsJPEG:function(a,b,c){return this._saveAsImage("jpeg",a,b,c)}})}(jqxBaseFramework),function(a){a.jqx.toGreyScale=function(b){if(b.indexOf("#")==-1)return b;var c=a.jqx.cssToRgb(b);c[0]=c[1]=c[2]=Math.round(.3*c[0]+.59*c[1]+.11*c[2]);var d=a.jqx.rgbToHex(c[0],c[1],c[2]);return"#"+d[0]+d[1]+d[2]},a.jqx.adjustColor=function(b,c){if("string"!=typeof b)return"#000000";if(b.indexOf("#")==-1)return b;var d=a.jqx.cssToRgb(b),e=a.jqx.rgbToHsl(d);e[2]=Math.min(1,e[2]*c),e[1]=Math.min(1,e[1]*c*1.1),d=a.jqx.hslToRgb(e);for(var b="#",f=0;f<3;f++){var g=Math.round(d[f]);g=a.jqx.decToHex(g),1==g.toString().length&&(b+="0"),b+=g}return b.toUpperCase()},a.jqx.decToHex=function(a){return a.toString(16)},a.jqx.hexToDec=function(a){return parseInt(a,16)},a.jqx.rgbToHex=function(b,c,d){return[a.jqx.decToHex(b),a.jqx.decToHex(c),a.jqx.decToHex(d)]},a.jqx.hexToRgb=function(b,c,d){return[a.jqx.hexToDec(b),a.jqx.hexToDec(c),a.jqx.hexToDec(d)]},a.jqx.cssToRgb=function(b){return b.indexOf("rgb")<=-1?a.jqx.hexToRgb(b.substring(1,3),b.substring(3,5),b.substring(5,7)):b.substring(4,b.length-1).split(",")},a.jqx.hslToRgb=function(c){var d=parseFloat(c[0]),e=parseFloat(c[1]),f=parseFloat(c[2]);if(0==e)r=g=b=f;else{var h=f<.5?f*(1+e):f+e-f*e,i=2*f-h;r=a.jqx.hueToRgb(i,h,d+1/3),g=a.jqx.hueToRgb(i,h,d),b=a.jqx.hueToRgb(i,h,d-1/3)}return[255*r,255*g,255*b]},a.jqx.hueToRgb=function(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+6*(b-a)*c:c<.5?b:c<2/3?a+(b-a)*(2/3-c)*6:a},a.jqx.rgbToHsl=function(a){var b,c,d=parseFloat(a[0])/255,e=parseFloat(a[1])/255,f=parseFloat(a[2])/255,g=Math.max(d,e,f),h=Math.min(d,e,f),i=(g+h)/2;if(g==h)b=c=0;else{var j=g-h;switch(c=i>.5?j/(2-g-h):j/(g+h),g){case d:b=(e-f)/j+(e<f?6:0);break;case e:b=(f-d)/j+2;break;case f:b=(d-e)/j+4}b/=6}return[b,c,i]},a.jqx.swap=function(a,b){var c=a;a=b,b=c},a.jqx.getNum=function(b){if(a.isArray(b)){for(var c=0;c<b.length;c++)if(!isNaN(b[c]))return b[c]}else if(isNaN(b))return 0;return 0},a.jqx._ptdist=function(a,b,c,d){return Math.sqrt((c-a)*(c-a)+(d-b)*(d-b))},a.jqx._ptrnd=function(b){if(!document.createElementNS)return Math.round(b)==b?b:a.jqx._rnd(b,1,!1,!0);var c=a.jqx._rnd(b,.5,!1,!0);return.5!=Math.abs(c-Math.round(c))?c>b?c-.5:c+.5:c},a.jqx._ptRotate=function(a,b,c,d,e){var f=Math.sqrt(Math.pow(Math.abs(a-c),2)+Math.pow(Math.abs(b-d),2)),g=Math.asin((a-c)/f),h=g+e;return a=c+Math.cos(h)*f,b=d+Math.sin(h)*f,{x:a,y:b}},a.jqx._rup=function(a){var b=Math.round(a);return a>b&&b++,b},a.jqx.log=function(a,b){return Math.log(a)/(b?Math.log(b):1)},a.jqx._mod=function(a,b){var c=Math.abs(a>b?b:a),d=1;if(0!=c)for(;c*d<100;)d*=10;return a*=d,b*=d,a%b/d},a.jqx._rnd=function(b,c,d,e){if(isNaN(b))return b;void 0===e&&(e=!0);var f=b-(1==e?b%c:a.jqx._mod(b,c));return b==f?f:(d?b>f&&(f+=c):f>b&&(f-=c),1==c?Math.round(f):f)},a.jqx.commonRenderer={pieSlicePath:function(a,b,c,d,e,f,g){d||(d=1);var h=Math.abs(e-f),i=h>180?1:0;h>=360&&(f=e+359.99);var j=e*Math.PI*2/360,k=f*Math.PI*2/360,l=a,m=a,n=b,o=b,p=!isNaN(c)&&c>0;if(p&&(g=0),g+c>0){if(g>0){var q=h/2+e,r=q*Math.PI*2/360;a+=g*Math.cos(r),b-=g*Math.sin(r)}if(p){var s=c;l=a+s*Math.cos(j),n=b-s*Math.sin(j),m=a+s*Math.cos(k),o=b-s*Math.sin(k)}}var t=a+d*Math.cos(j),u=a+d*Math.cos(k),v=b-d*Math.sin(j),w=b-d*Math.sin(k),x="",y=Math.abs(Math.abs(f-e)-360)>.02;return p?(x="M "+m+","+o,x+=" a"+c+","+c,x+=" 0 "+i+",1 "+(l-m)+","+(n-o),x+=y?" L"+t+","+v:" M"+t+","+v,x+=" a"+d+","+d,x+=" 0 "+i+",0 "+(u-t)+","+(w-v),y&&(x+=" Z")):(x="M "+u+","+w,x+=" a"+d+","+d,x+=" 0 "+i+",1 "+(t-u)+","+(v-w),y&&(x+=" L"+a+","+b,x+=" Z")),x},measureText:function(b,c,d,e,f){var g=f._getTextParts(b,c,d),h=g.width,i=g.height;0==e&&(i/=.6);var j={};if(isNaN(c)&&(c=0),0==c)j={width:a.jqx._rup(h),height:a.jqx._rup(i)};else{var k=c*Math.PI*2/360,l=Math.abs(Math.sin(k)),m=Math.abs(Math.cos(k)),n=Math.abs(h*l+i*m),o=Math.abs(h*m+i*l);j={width:a.jqx._rup(o),height:a.jqx._rup(n)}}return e&&(j.textPartsInfo=g),j},alignTextInRect:function(b,c,d,e,f,g,h,i,j,k){var l=j*Math.PI*2/360,m=Math.sin(l),n=Math.cos(l),o=f*m,p=f*n;"center"==h||""==h||"undefined"==h?b+=d/2:"right"==h&&(b+=d),"center"==i||"middle"==i||""==i||"undefined"==i?c+=e/2:"bottom"==i?c+=e-g/2:"top"==i&&(c+=g/2),k=k||"";var q="middle";k.indexOf("top")!=-1?q="top":k.indexOf("bottom")!=-1&&(q="bottom");var r="center";return k.indexOf("left")!=-1?r="left":k.indexOf("right")!=-1&&(r="right"),"center"==r?(b-=p/2,c-=o/2):"right"==r&&(b-=p,c-=o),"top"==q?(b-=g*m,c+=g*n):"middle"==q&&(b-=g*m/2,c+=g*n/2),b=a.jqx._rup(b),c=a.jqx._rup(c),{x:b,y:c}}},a.jqx.svgRenderer=function(){},a.jqx.svgRenderer.prototype={_svgns:"http://www.w3.org/2000/svg",init:function(a){var b="<table class=tblChart cellspacing='0' cellpadding='0' border='0' align='left' valign='top'><tr><td colspan=2 class=tdTop></td></tr><tr><td class=tdLeft></td><td><div class='chartContainer' style='position:relative' onselectstart='return false;'></div></td></tr></table>";a.append(b),this.host=a;var c=a.find(".chartContainer");c[0].style.width=a.width()+"px",c[0].style.height=a.height()+"px";try{var d=document.createElementNS(this._svgns,"svg");d.setAttribute("id","svgChart"),d.setAttribute("version","1.1"),d.setAttribute("width","100%"),d.setAttribute("height","100%"),d.setAttribute("overflow","hidden"),c[0].appendChild(d),this.canvas=d}catch(a){return!1}return this._id=(new Date).getTime(),this.clear(),this._layout(),this._runLayoutFix(),!0},getType:function(){return"SVG"},refresh:function(){},_runLayoutFix:function(){this._fixLayout()},_fixLayout:function(){var b=this.canvas.getBoundingClientRect(),c=parseFloat(b.left)==parseInt(b.left),d=parseFloat(b.top)==parseInt(b.top);if(a.jqx.browser.msie){for(var c=!0,d=!0,e=this.host,f=0,g=0;e&&e.position&&e[0].parentNode;){var h=e.position();f+=parseFloat(h.left)-parseInt(h.left),g+=parseFloat(h.top)-parseInt(h.top),e=e.parent()}c=parseFloat(f)==parseInt(f),d=parseFloat(g)==parseInt(g)}c||(this.host.find(".tdLeft")[0].style.width="0.5px"),d||(this.host.find(".tdTop")[0].style.height="0.5px")},_layout:function(){var b=this.host.find(".chartContainer");this._width=Math.max(a.jqx._rup(this.host.width())-1,0),this._height=Math.max(a.jqx._rup(this.host.height())-1,0),b[0].style.width=this._width,b[0].style.height=this._height,this._fixLayout()},getRect:function(){return{x:0,y:0,width:this._width,height:this._height}},getContainer:function(){var a=this.host.find(".chartContainer");return a},clear:function(){for(;this.canvas.childElementCount>0;)this.removeElement(this.canvas.firstElementChild);this._defaultParent=void 0,this._defs=document.createElementNS(this._svgns,"defs"),this._gradients={},this.canvas.appendChild(this._defs)},removeElement:function(a){if(void 0!=a){this.removeHandler(a);try{for(;a.firstChild;)this.removeElement(a.firstChild);a.parentNode?a.parentNode.removeChild(a):this.canvas.removeChild(a)}catch(a){}}},_openGroups:[],beginGroup:function(){var a=this._activeParent(),b=document.createElementNS(this._svgns,"g");return a.appendChild(b),this._openGroups.push(b),b},endGroup:function(){0!=this._openGroups.length&&this._openGroups.pop()},_activeParent:function(){return 0==this._openGroups.length?this.canvas:this._openGroups[this._openGroups.length-1]},createClipRect:function(a){var b=document.createElementNS(this._svgns,"clipPath"),c=document.createElementNS(this._svgns,"rect");return this.attr(c,{x:a.x,y:a.y,width:a.width,height:a.height,fill:"none"}),this._clipId=this._clipId||0,b.id="cl"+this._id+"_"+(++this._clipId).toString(),b.appendChild(c),this._defs.appendChild(b),b},getWindowHref:function(){var b=a.jqx.browser;if(b&&"msie"==b.browser&&b.version<10)return"";var c=window.location.href;return c?(c=c.replace(/([\('\)])/g,"\\$1"),c=c.replace(/#.*$/,"")):c},setClip:function(a,b){var c="url("+this.getWindowHref()+"#"+b.id+")";return this.attr(a,{"clip-path":c})},_clipId:0,addHandler:function(b,c,d){a(b).on?a(b).on(c,d):a(b).bind(c,d)},removeHandler:function(b,c,d){a(b).off?a(b).off(c,d):a(b).unbind(c,d)},on:function(a,b,c){this.addHandler(a,b,c)},off:function(a,b,c){this.removeHandler(a,b,c)},shape:function(a,b){var c=document.createElementNS(this._svgns,a);if(c){for(var d in b)c.setAttribute(d,b[d]);return this._activeParent().appendChild(c),c}},_getTextParts:function(b,c,d){var e={width:0,height:0,parts:[]};if(void 0===b)return e;var f=.6,g=b.toString().split("<br>"),h=this._activeParent(),i=document.createElementNS(this._svgns,"text");this.attr(i,d);for(var j=0;j<g.length;j++){var k=g[j],l=i.ownerDocument.createTextNode(k);i.appendChild(l),h.appendChild(i);var m;try{m=i.getBBox()}catch(a){}var n=a.jqx._rup(m.width),o=a.jqx._rup(m.height*f);i.removeChild(l),e.width=Math.max(e.width,n),e.height+=o+(j>0?4:0),e.parts.push({width:n,height:o,text:k})}return h.removeChild(i),e},_measureText:function(b,c,d,e){return a.jqx.commonRenderer.measureText(b,c,d,e,this)},measureText:function(a,b,c){return this._measureText(a,b,c,!1)},text:function(b,c,d,e,f,g,h,i,j,k,l){var m,n=this._measureText(b,g,h,!0),o=n.textPartsInfo,p=o.parts;if(j||(j="center"),k||(k="center"),(p.length>1||i)&&(m=this.beginGroup()),i){var q=this.createClipRect({x:a.jqx._rup(c)-1,y:a.jqx._rup(d)-1,width:a.jqx._rup(e)+2,height:a.jqx._rup(f)+2});this.setClip(m,q)}var r=this._activeParent(),s=0,t=0;s=o.width,t=o.height,(isNaN(e)||e<=0)&&(e=s),(isNaN(f)||f<=0)&&(f=t);var u=e||0,v=f||0;if(!g||0==g){d+=t,"center"==k||"middle"==k?d+=(v-t)/2:"bottom"==k&&(d+=v-t),e||(e=s),f||(f=t);for(var r=this._activeParent(),w=0,x=p.length-1;x>=0;x--){var y=document.createElementNS(this._svgns,"text");this.attr(y,h),this.attr(y,{cursor:"default"});var z=y.ownerDocument.createTextNode(p[x].text);y.appendChild(z);var A=c,B=p[x].width,C=p[x].height;"center"==j?A+=(u-B)/2:"right"==j&&(A+=u-B),this.attr(y,{x:a.jqx._rup(A),y:a.jqx._rup(d+w),width:a.jqx._rup(B),height:a.jqx._rup(C)}),r.appendChild(y),w-=p[x].height+4}return m?(this.endGroup(),m):y}var D=a.jqx.commonRenderer.alignTextInRect(c,d,e,f,s,t,j,k,g,l);c=D.x,d=D.y;var E=this.shape("g",{transform:"translate("+c+","+d+")"}),F=this.shape("g",{transform:"rotate("+g+")"});E.appendChild(F);for(var w=0,x=p.length-1;x>=0;x--){var G=document.createElementNS(this._svgns,"text");this.attr(G,h),this.attr(G,{cursor:"default"});var z=G.ownerDocument.createTextNode(p[x].text);G.appendChild(z);var A=0,B=p[x].width,C=p[x].height;"center"==j?A+=(o.width-B)/2:"right"==j&&(A+=o.width-B),this.attr(G,{x:a.jqx._rup(A),y:a.jqx._rup(w),width:a.jqx._rup(B),height:a.jqx._rup(C)}),F.appendChild(G),w-=C+4}return r.appendChild(E),m&&this.endGroup(),E},line:function(a,b,c,d,e){var f=this.shape("line",{x1:a,y1:b,x2:c,y2:d});return this.attr(f,e),f},path:function(a,b){var c=this.shape("path");return c.setAttribute("d",a),b&&this.attr(c,b),c},rect:function(b,c,d,e,f){b=a.jqx._ptrnd(b),c=a.jqx._ptrnd(c),d=Math.max(1,a.jqx._rnd(d,1,!1)),e=Math.max(1,a.jqx._rnd(e,1,!1));var g=this.shape("rect",{x:b,y:c,width:d,height:e});return f&&this.attr(g,f),g},circle:function(a,b,c,d){var e=this.shape("circle",{cx:a,cy:b,r:c});return d&&this.attr(e,d),e},pieSlicePath:function(b,c,d,e,f,g,h){return a.jqx.commonRenderer.pieSlicePath(b,c,d,e,f,g,h)},pieslice:function(a,b,c,d,e,f,g,h){var i=this.pieSlicePath(a,b,c,d,e,f,g),j=this.shape("path");return j.setAttribute("d",i),h&&this.attr(j,h),j},attr:function(a,b){if(a&&b)for(var c in b)"textContent"==c?a.textContent=b[c]:a.setAttribute(c,b[c])},removeAttr:function(a,b){if(a&&b)for(var c in b)"textContent"==c?a.textContent="":a.removeAttribute(b[c])},getAttr:function(a,b){return a.getAttribute(b)},_gradients:{},_toLinearGradient:function(b,c,d){var e="grd"+this._id+b.replace("#","")+(c?"v":"h"),f="url("+this.getWindowHref()+"#"+e+")";if(this._gradients[f])return f;var g=document.createElementNS(this._svgns,"linearGradient");this.attr(g,{x1:"0%",y1:"0%",x2:c?"0%":"100%",y2:c?"100%":"0%",id:e});for(var h=0;h<d.length;h++){var i=d[h],j=document.createElementNS(this._svgns,"stop"),k="stop-color:"+a.jqx.adjustColor(b,i[1]);this.attr(j,{offset:i[0]+"%",style:k}),g.appendChild(j)}return this._defs.appendChild(g),this._gradients[f]=!0,f},_toRadialGradient:function(b,c,d){var e="grd"+this._id+b.replace("#","")+"r"+(void 0!=d?d.key:""),f="url("+this.getWindowHref()+"#"+e+")";if(this._gradients[f])return f;var g=document.createElementNS(this._svgns,"radialGradient");void 0==d?this.attr(g,{cx:"50%",cy:"50%",r:"100%",fx:"50%",fy:"50%",id:e}):this.attr(g,{cx:d.x,cy:d.y,r:d.outerRadius,id:e,gradientUnits:"userSpaceOnUse"});for(var h=0;h<c.length;h++){var i=c[h],j=document.createElementNS(this._svgns,"stop"),k="stop-color:"+a.jqx.adjustColor(b,i[1]);this.attr(j,{offset:i[0]+"%",style:k}),g.appendChild(j)}return this._defs.appendChild(g),this._gradients[f]=!0,f}},a.jqx.vmlRenderer=function(){},a.jqx.vmlRenderer.prototype={init:function(b){var c="<div class='chartContainer' style=\"position:relative;overflow:hidden;\"><div>";b.append(c),this.host=b;var d=b.find(".chartContainer");d[0].style.width=b.width()+"px",d[0].style.height=b.height()+"px";var e=!0;try{for(var f=0;f<document.namespaces.length;f++)if("v"==document.namespaces[f].name&&"urn:schemas-microsoft-com:vml"==document.namespaces[f].urn){e=!1;break}}catch(a){return!1}return a.jqx.browser.msie&&parseInt(a.jqx.browser.version)<9&&document.childNodes&&document.childNodes.length>0&&document.childNodes[0].data&&document.childNodes[0].data.indexOf("DOCTYPE")!=-1?(e&&document.namespaces.add("v","urn:schemas-microsoft-com:vml"),this._ie8mode=!0):e&&(document.namespaces.add("v","urn:schemas-microsoft-com:vml"),document.createStyleSheet().cssText="v\\:* { behavior: url(#default#VML); display: inline-block; }"),this.canvas=d[0],this._width=Math.max(a.jqx._rup(d.width()),0),this._height=Math.max(a.jqx._rup(d.height()),0),d[0].style.width=this._width+2,d[0].style.height=this._height+2,this._id=(new Date).getTime(),this.clear(),!0},getType:function(){return"VML"},refresh:function(){},getRect:function(){return{x:0,y:0,width:this._width,height:this._height}},getContainer:function(){var a=this.host.find(".chartContainer");return a},clear:function(){for(;this.canvas.childElementCount>0;)this.removeHandler(this.canvas.firstElementChild),this.canvas.removeChild(this.canvas.firstElementChild);this._gradients={},this._defaultParent=void 0},removeElement:function(a){null!=a&&(this.removeHandler(a),a.parentNode.removeChild(a))},_openGroups:[],beginGroup:function(){var a=this._activeParent(),b=document.createElement("v:group");return b.style.position="absolute",b.coordorigin="0,0",b.coordsize=this._width+","+this._height,b.style.left=0,b.style.top=0,b.style.width=this._width,b.style.height=this._height,a.appendChild(b),this._openGroups.push(b),b},endGroup:function(){0!=this._openGroups.length&&this._openGroups.pop()},_activeParent:function(){return 0==this._openGroups.length?this.canvas:this._openGroups[this._openGroups.length-1]},createClipRect:function(a){var b=document.createElement("div");return b.style.height=a.height+1+"px",b.style.width=a.width+1+"px",b.style.position="absolute",b.style.left=a.x+"px",b.style.top=a.y+"px",b.style.overflow="hidden",this._clipId=this._clipId||0,b.id="cl"+this._id+"_"+(++this._clipId).toString(),this._activeParent().appendChild(b),b},setClip:function(a,b){},_clipId:0,addHandler:function(b,c,d){a(b).on?a(b).on(c,d):a(b).bind(c,d)},removeHandler:function(b,c,d){a(b).off?a(b).off(c,d):a(b).unbind(c,d)},on:function(a,b,c){this.addHandler(a,b,c)},off:function(a,b,c){this.removeHandler(a,b,c)},_getTextParts:function(b,c,d){var e={width:0,height:0,parts:[]},f=.6,g=b.toString().split("<br>"),h=this._activeParent(),i=document.createElement("v:textbox");this.attr(i,d),h.appendChild(i);for(var j=0;j<g.length;j++){var k=g[j],l=document.createElement("span");l.appendChild(document.createTextNode(k)),i.appendChild(l),d&&d.class&&(l.className=d.class);var m=a(i),n=a.jqx._rup(m.width()),o=a.jqx._rup(m.height()*f);if(0==o&&a.jqx.browser.msie&&parseInt(a.jqx.browser.version)<9){var p=m.css("font-size");p&&(o=parseInt(p),isNaN(o)&&(o=0))}i.removeChild(l),e.width=Math.max(e.width,n),e.height+=o+(j>0?2:0),e.parts.push({width:n,height:o,text:k})}return h.removeChild(i),e},_measureText:function(b,c,d,e){return c=Math.abs(c)>45?90:0,a.jqx.commonRenderer.measureText(b,c,d,e,this)},measureText:function(a,b,c){return this._measureText(a,b,c,!1)},text:function(b,c,d,e,f,g,h,i,j,k){var l;h&&h.stroke&&(l=h.stroke),void 0==l&&(l="black");var m=this._measureText(b,g,h,!0),n=m.textPartsInfo,o=n.parts,p=m.width,q=m.height;(isNaN(e)||0==e)&&(e=p),(isNaN(f)||0==f)&&(f=q);var r;if(j||(j="center"),k||(k="center"),(o.length>0||i)&&(r=this.beginGroup()),i){var s=this.createClipRect({x:a.jqx._rup(c),y:a.jqx._rup(d),width:a.jqx._rup(e),height:a.jqx._rup(f)});this.setClip(r,s)}var t=this._activeParent(),u=e||0,v=f||0;g=Math.abs(g)>45?90:0;var w=0,x=0;"center"==j?w+=(u-p)/2:"right"==j&&(w+=u-p),"center"==k?x=(v-q)/2:"bottom"==k&&(x=v-q),0==g?(d+=q+x,c+=w):(c+=p+w,d+=x);for(var y,z=0,A=o.length-1;A>=0;A--){var B=o[A],C=(p-B.width)/2;0==g&&"left"==j?C=0:0==g&&"right"==j?C=p-B.width:90==g&&(C=(q-B.width)/2);var D=z-B.height;x=90==g?C:D,w=90==g?D:C,y=document.createElement("v:textbox"),y.style.position="absolute",y.style.left=a.jqx._rup(c+w),y.style.top=a.jqx._rup(d+x),y.style.width=a.jqx._rup(B.width),y.style.height=a.jqx._rup(B.height),90==g&&(y.style.filter="progid:DXImageTransform.Microsoft.BasicImage(rotation=3)",y.style.height=a.jqx._rup(B.height)+5);var E=document.createElement("span");E.appendChild(document.createTextNode(B.text)),h&&h.class&&(E.className=h.class),y.appendChild(E),t.appendChild(y),z-=B.height+(A>0?2:0)}return r?(this.endGroup(),t):y},shape:function(a,b){var c=document.createElement(this._createElementMarkup(a));if(c){for(var d in b)c.setAttribute(d,b[d]);return this._activeParent().appendChild(c),c}},line:function(a,b,c,d,e){var f="M "+a+","+b+" L "+c+","+d+" X E",g=this.path(f);return this.attr(g,e),g},_createElementMarkup:function(a){var b="<v:"+a+' style=""></v:'+a+">";return this._ie8mode&&(b=b.replace('style=""','style="behavior: url(#default#VML);"')),b},path:function(a,b){var c=document.createElement(this._createElementMarkup("shape"));return c.style.position="absolute",c.coordsize=this._width+" "+this._height,c.coordorigin="0 0",c.style.width=parseInt(this._width),c.style.height=parseInt(this._height),c.style.left="0px",c.style.top="0px",c.setAttribute("path",a),this._activeParent().appendChild(c),b&&this.attr(c,b),c},rect:function(b,c,d,e,f){b=a.jqx._ptrnd(b),c=a.jqx._ptrnd(c),d=a.jqx._rup(d),e=a.jqx._rup(e);var g=this.shape("rect",f);return g.style.position="absolute",g.style.left=b,g.style.top=c,g.style.width=d,g.style.height=e,g.strokeweight=0,f&&this.attr(g,f),g},circle:function(b,c,d,e){var f=this.shape("oval");return b=a.jqx._ptrnd(b-d),c=a.jqx._ptrnd(c-d),d=a.jqx._rup(d),f.style.position="absolute",f.style.left=b,f.style.top=c,f.style.width=2*d,f.style.height=2*d,e&&this.attr(f,e),f},updateCircle:function(b,c,d,e){void 0==c&&(c=parseFloat(b.style.left)+parseFloat(b.style.width)/2),void 0==d&&(d=parseFloat(b.style.top)+parseFloat(b.style.height)/2),void 0==e&&(e=parseFloat(b.width)/2),c=a.jqx._ptrnd(c-e),d=a.jqx._ptrnd(d-e),e=a.jqx._rup(e),b.style.left=c,b.style.top=d,b.style.width=2*e,b.style.height=2*e},pieSlicePath:function(b,c,d,e,f,g,h){e||(e=1);var i=Math.abs(f-g);i>360&&(f=0,g=360);var j=f*Math.PI*2/360,k=g*Math.PI*2/360,l=b,m=b,n=c,o=c,p=!isNaN(d)&&d>0;if(p&&(h=0),h>0){var q=i/2+f,r=q*Math.PI*2/360;b+=h*Math.cos(r),c-=h*Math.sin(r)}if(p){var s=d;l=a.jqx._ptrnd(b+s*Math.cos(j)),n=a.jqx._ptrnd(c-s*Math.sin(j)),m=a.jqx._ptrnd(b+s*Math.cos(k)),o=a.jqx._ptrnd(c-s*Math.sin(k))}var t=(a.jqx._ptrnd(b+e*Math.cos(j)),a.jqx._ptrnd(b+e*Math.cos(k))),u=(a.jqx._ptrnd(c-e*Math.sin(j)),a.jqx._ptrnd(c-e*Math.sin(k)));e=a.jqx._ptrnd(e),d=a.jqx._ptrnd(d),b=a.jqx._ptrnd(b),c=a.jqx._ptrnd(c);var v=Math.round(65535*f),w=Math.round(65536*(g-f));d<0&&(d=1);var x="";return p?(x="M"+l+" "+n,x+=" AE "+b+" "+c+" "+d+" "+d+" "+v+" "+w,x+=" L "+t+" "+u,v=Math.round(65535*(f-g)),w=Math.round(65536*g),x+=" AE "+b+" "+c+" "+e+" "+e+" "+w+" "+v,x+=" L "+l+" "+n):(x="M"+b+" "+c,x+=" AE "+b+" "+c+" "+e+" "+e+" "+v+" "+w),x+=" X E"},pieslice:function(a,b,c,d,e,f,g,h){var i=this.pieSlicePath(a,b,c,d,e,f,g),j=this.path(i,h);return h&&this.attr(j,h),j},_keymap:[{svg:"fill",vml:"fillcolor"},{svg:"stroke",vml:"strokecolor"},{svg:"stroke-width",vml:"strokeweight"},{svg:"stroke-dasharray",vml:"dashstyle"},{svg:"fill-opacity",vml:"fillopacity"},{svg:"stroke-opacity",vml:"strokeopacity"},{svg:"opacity",vml:"opacity"},{svg:"cx",vml:"style.left"},{svg:"cy",vml:"style.top"},{svg:"height",vml:"style.height"},{svg:"width",vml:"style.width"},{svg:"x",vml:"style.left"},{svg:"y",vml:"style.top"},{svg:"d",vml:"v"},{svg:"display",vml:"style.display"}],_translateParam:function(a){for(var b in this._keymap)if(this._keymap[b].svg==a)return this._keymap[b].vml;return a},attr:function(a,b){if(a&&b)for(var c in b){var d=this._translateParam(c);void 0!=b[c]&&("fillcolor"==d&&b[c].indexOf("grd")!=-1?a.type=b[c]:"fillcolor"==d&&"transparent"==b[c]?(a.style.filter="alpha(opacity=0)",a["-ms-filter"]="progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"):"opacity"==d||"fillopacity"==d?a.fill&&(a.fill.opacity=b[c]):"textContent"==d?a.children[0].innerText=b[c]:"dashstyle"==d?a.dashstyle=b[c].replace(","," "):d.indexOf("style.")==-1?a[d]=b[c]:a.style[d.replace("style.","")]=b[c])}},removeAttr:function(a,b){if(a&&b)for(var c in b)a.removeAttribute(b[c])},getAttr:function(a,b){var c=this._translateParam(b);return"opacity"==c||"fillopacity"==c?a.fill?a.fill.opacity:1:c.indexOf("style.")==-1?a[c]:a.style[c.replace("style.","")]},_gradients:{},_toRadialGradient:function(a,b,c){return a},_toLinearGradient:function(b,c,d){if(this._ie8mode)return b;var e="grd"+b.replace("#","")+(c?"v":"h"),f="#"+e;if(this._gradients[f])return f;var g=document.createElement(this._createElementMarkup("fill"));g.type="gradient",g.method="linear",g.angle=c?0:90;for(var h="",i=0;i<d.length;i++){var j=d[i];j>0&&(h+=", "),h+=j[0]+"% "+a.jqx.adjustColor(b,j[1])}g.colors=h;var k=document.createElement(this._createElementMarkup("shapetype"));return k.appendChild(g),k.id=e,this.canvas.appendChild(k),f}},a.jqx.HTML5Renderer=function(){},a.jqx.ptrnd=function(a){if(.5==Math.abs(Math.round(a)-a))return a;var b=Math.round(a);return b<a&&(b-=1),b+.5},a.jqx.HTML5Renderer.prototype={init:function(a){try{this.host=a,this.host.append("<div class='chartContainer' style='position:relative' onselectstart='return false;'><canvas id='__jqxCanvasWrap' style='width:100%; height: 100%;'/></div>"),this.canvas=a.find("#__jqxCanvasWrap"),this.canvas[0].width=a.width(),this.canvas[0].height=a.height(),this.ctx=this.canvas[0].getContext("2d"),this._elements={},this._maxId=0,this._gradientId=0,this._gradients={},this._currentPoint={x:0,y:0},this._lastCmd="",this._pos=0}catch(a){return!1}return!0},getType:function(){return"HTML5"},getContainer:function(){var a=this.host.find(".chartContainer");return a},getRect:function(){return{x:0,y:0,width:this.canvas[0].width-1,height:this.canvas[0].height-1}},beginGroup:function(){},endGroup:function(){},setClip:function(){},createClipRect:function(a){},addHandler:function(a,b,c){},removeHandler:function(a,b,c){},on:function(a,b,c){this.addHandler(a,b,c)},off:function(a,b,c){this.removeHandler(a,b,c)},clear:function(){this._elements={},this._maxId=0,this._renderers._gradients={},this._gradientId=0},removeElement:function(a){void 0!=a&&this._elements[a.id]&&delete this._elements[a.id]},shape:function(a,b){var c={type:a,id:this._maxId++};for(var d in b)c[d]=b[d];return this._elements[c.id]=c,c},attr:function(a,b){for(var c in b)a[c]=b[c]},removeAttr:function(a,b){for(var c in b)delete a[b[c]]},rect:function(a,b,c,d,e){if(isNaN(a))throw'Invalid value for "x"';if(isNaN(b))throw'Invalid value for "y"';if(isNaN(c))throw'Invalid value for "width"';if(isNaN(d))throw'Invalid value for "height"';var f=this.shape("rect",{x:a,y:b,width:c,height:d});return e&&this.attr(f,e),f},path:function(a,b){var c=this.shape("path",b);return this.attr(c,{d:a}),c},line:function(a,b,c,d,e){return this.path("M "+a+","+b+" L "+c+","+d,e)},circle:function(a,b,c,d){var e=this.shape("circle",{x:a,y:b,r:c});return d&&this.attr(e,d),e},pieSlicePath:function(b,c,d,e,f,g,h){return a.jqx.commonRenderer.pieSlicePath(b,c,d,e,f,g,h)},pieslice:function(a,b,c,d,e,f,g,h){var i=this.path(this.pieSlicePath(a,b,c,d,e,f,g),h);return this.attr(i,{x:a,y:b,innerRadius:c,outerRadius:d,angleFrom:e,angleTo:f}),i},_getCSSStyle:function(a){var b=document.styleSheets;try{for(var c=0;c<b.length;c++)for(var d=0;b[c].cssRules&&d<b[c].cssRules.length;d++)if(b[c].cssRules[d].selectorText.indexOf(a)!=-1)return b[c].cssRules[d].style}catch(a){}return{}},_getTextParts:function(b,c,d){var e="Arial",f="10pt",g="";if(d&&d.class){var h=this._getCSSStyle(d.class);h.fontSize&&(f=h.fontSize),h.fontFamily&&(e=h.fontFamily),h.fontWeight&&(g=h.fontWeight)}this.ctx.font=g+" "+f+" "+e;for(var i={width:0,height:0,parts:[]},j=.6,k=b.toString().split("<br>"),l=0;l<k.length;l++){var m=k[l],n=this.ctx.measureText(m).width,o=document.createElement("span.jqxchart");o.font=this.ctx.font,o.textContent=m,document.body.appendChild(o);var p=o.offsetHeight*j;document.body.removeChild(o),i.width=Math.max(i.width,a.jqx._rup(n)),i.height+=p+(l>0?4:0),i.parts.push({width:n,height:p,text:m})}return i},_measureText:function(b,c,d,e){return a.jqx.commonRenderer.measureText(b,c,d,e,this)},measureText:function(a,b,c){return this._measureText(a,b,c,!1)},text:function(a,b,c,d,e,f,g,h,i,j,k){var l=this.shape("text",{text:a,x:b,y:c,width:d,height:e,angle:f,clip:h,halign:i,valign:j,rotateAround:k});if(g&&this.attr(l,g),l.fontFamily="Arial",l.fontSize="10pt",l.fontWeight="",l.color="#000000",g&&g.class){var m=this._getCSSStyle(g.class);l.fontFamily=m.fontFamily||l.fontFamily,l.fontSize=m.fontSize||l.fontSize,l.fontWeight=m.fontWeight||l.fontWeight,l.color=m.color||l.color}var n=this._measureText(a,0,g,!0);return this.attr(l,{textPartsInfo:n.textPartsInfo,textWidth:n.width,textHeight:n.height}),(d<=0||isNaN(d))&&this.attr(l,{width:n.width}),(e<=0||isNaN(e))&&this.attr(l,{height:n.height}),l},_toLinearGradient:function(b,c,d){if(this._renderers._gradients[b])return b;for(var e=[],f=0;f<d.length;f++)e.push({percent:d[f][0]/100,color:a.jqx.adjustColor(b,d[f][1])});var g="gr"+this._gradientId++;return this.createGradient(g,c?"vertical":"horizontal",e),g},_toRadialGradient:function(b,c){if(this._renderers._gradients[b])return b;for(var d=[],e=0;e<c.length;e++)d.push({percent:c[e][0]/100,color:a.jqx.adjustColor(b,c[e][1])});var f="gr"+this._gradientId++;return this.createGradient(f,"radial",d),f},createGradient:function(a,b,c){this._renderers.createGradient(this,a,b,c)},_renderers:{createGradient:function(a,b,c,d){a._gradients[b]={orientation:c,colorStops:d}},setStroke:function(a,b){var c=a.ctx;c.strokeStyle=b.stroke||"transparent",c.lineWidth=b["stroke-width"]||1,void 0!=b["fill-opacity"]?c.globalAlpha=b["fill-opacity"]:void 0!=b.opacity?c.globalAlpha=b.opacity:c.globalAlpha=1,c.setLineDash&&(b["stroke-dasharray"]?c.setLineDash(b["stroke-dasharray"].split(",")):c.setLineDash([]))},setFillStyle:function(b,c){var d=b.ctx;if(d.fillStyle="transparent",void 0!=c["fill-opacity"]?d.globalAlpha=c["fill-opacity"]:void 0!=c.opacity?d.globalAlpha=c.opacity:d.globalAlpha=1,c.fill&&c.fill.indexOf("#")==-1&&b._gradients[c.fill]){var e,f="horizontal"!=b._gradients[c.fill].orientation,g="radial"==b._gradients[c.fill].orientation,h=a.jqx.ptrnd(c.x),i=a.jqx.ptrnd(c.y),j=a.jqx.ptrnd(c.x+(f?0:c.width)),k=a.jqx.ptrnd(c.y+(f?c.height:0));"circle"!=c.type&&"path"!=c.type&&"rect"!=c.type||!g||(x=a.jqx.ptrnd(c.x),y=a.jqx.ptrnd(c.y),r1=c.innerRadius||0,r2=c.outerRadius||c.r||0,"rect"==c.type&&(x+=c.width/2,y+=c.height/2),e=d.createRadialGradient(x,y,r1,x,y,r2)),g||((isNaN(h)||isNaN(j)||isNaN(i)||isNaN(k))&&(h=0,i=0,j=f?0:d.canvas.width,k=f?d.canvas.height:0),e=d.createLinearGradient(h,i,j,k));for(var l=b._gradients[c.fill].colorStops,m=0;m<l.length;m++)e.addColorStop(l[m].percent,l[m].color);d.fillStyle=e}else c.fill&&(d.fillStyle=c.fill)},rect:function(b,c){0!=c.width&&0!=c.height&&(b.fillRect(a.jqx.ptrnd(c.x),a.jqx.ptrnd(c.y),c.width,c.height),b.strokeRect(a.jqx.ptrnd(c.x),a.jqx.ptrnd(c.y),c.width,c.height))},circle:function(b,c){0!=c.r&&(b.beginPath(),b.arc(a.jqx.ptrnd(c.x),a.jqx.ptrnd(c.y),c.r,0,2*Math.PI,!1),b.closePath(),b.fill(),b.stroke())},_parsePoint:function(a){var b=this._parseNumber(a),c=this._parseNumber(a);return{x:b,y:c}},_parseNumber:function(a){for(var b=!1,c=this._pos;c<a.length;c++)if(a[c]>="0"&&a[c]<="9"||"."==a[c]||"e"==a[c]||"-"==a[c]&&!b||"-"==a[c]&&c>=1&&"e"==a[c-1])b=!0;else{if(b||" "!=a[c]&&","!=a[c])break;this._pos++}var d=parseFloat(a.substring(this._pos,c));if(!isNaN(d))return this._pos=c,d},_cmds:"mlcazq",_isRelativeCmd:function(b){return a.jqx.string.contains(this._cmds,b)},_parseCmd:function(b){for(var c=this._pos;c<b.length;c++){if(a.jqx.string.containsIgnoreCase(this._cmds,b[c]))return this._pos=c+1,this._lastCmd=b[c],this._lastCmd;if(" "!=b[c]){if(b[c]>="0"&&b[c]<="9"){if(this._pos=c,""==this._lastCmd)break;return this._lastCmd}}else this._pos++}},_toAbsolutePoint:function(a){return{x:this._currentPoint.x+a.x,y:this._currentPoint.y+a.y}},path:function(a,b){var c=b.d;this._pos=0,this._lastCmd="";var d=void 0;this._currentPoint={x:0,y:0},a.beginPath();for(;this._pos<c.length;){var e=this._parseCmd(c);if(void 0==e)break;if("M"!=e&&"m"!=e)if("L"!=e&&"l"!=e)if("A"!=e&&"a"!=e)if("Z"!=e&&"z"!=e||void 0==d)if("C"!=e&&"c"!=e)if("Q"!=e&&"q"!=e);else{var f=this._parsePoint(c),g=this._parsePoint(c);a.quadraticCurveTo(f.x,f.y,g.x,g.y),this._currentPoint=g}else{var f=this._parsePoint(c),g=this._parsePoint(c),h=this._parsePoint(c);a.bezierCurveTo(f.x,f.y,g.x,g.y,h.x,h.y),this._currentPoint=h}else a.lineTo(d.x,d.y),this._currentPoint=d;else{var i=this._parseNumber(c),j=this._parseNumber(c),k=this._parseNumber(c)*(Math.PI/180),l=this._parseNumber(c),m=this._parseNumber(c),n=this._parsePoint(c);if(this._isRelativeCmd(e)&&(n=this._toAbsolutePoint(n)),0==i||0==j)continue;var o=this._currentPoint,p={x:Math.cos(k)*(o.x-n.x)/2+Math.sin(k)*(o.y-n.y)/2,y:-Math.sin(k)*(o.x-n.x)/2+Math.cos(k)*(o.y-n.y)/2},q=Math.pow(p.x,2)/Math.pow(i,2)+Math.pow(p.y,2)/Math.pow(j,2);q>1&&(i*=Math.sqrt(q),j*=Math.sqrt(q));var r=(l==m?-1:1)*Math.sqrt((Math.pow(i,2)*Math.pow(j,2)-Math.pow(i,2)*Math.pow(p.y,2)-Math.pow(j,2)*Math.pow(p.x,2))/(Math.pow(i,2)*Math.pow(p.y,2)+Math.pow(j,2)*Math.pow(p.x,2)));isNaN(r)&&(r=0);var s={x:r*i*p.y/j,y:r*-j*p.x/i},t={x:(o.x+n.x)/2+Math.cos(k)*s.x-Math.sin(k)*s.y,y:(o.y+n.y)/2+Math.sin(k)*s.x+Math.cos(k)*s.y},u=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2))},v=function(a,b){return(a[0]*b[0]+a[1]*b[1])/(u(a)*u(b))},w=function(a,b){return(a[0]*b[1]<a[1]*b[0]?-1:1)*Math.acos(v(a,b))},x=w([1,0],[(p.x-s.x)/i,(p.y-s.y)/j]),y=[(p.x-s.x)/i,(p.y-s.y)/j],z=[(-p.x-s.x)/i,(-p.y-s.y)/j],A=w(y,z);
v(y,z)<=-1&&(A=Math.PI),v(y,z)>=1&&(A=0),0==m&&A>0&&(A-=2*Math.PI),1==m&&A<0&&(A+=2*Math.PI);var v=i>j?i:j,B=i>j?1:i/j,C=i>j?j/i:1;a.translate(t.x,t.y),a.rotate(k),a.scale(B,C),a.arc(0,0,v,x,x+A,1-m),a.scale(1/B,1/C),a.rotate(-k),a.translate(-t.x,-t.y)}else{var D=this._parsePoint(c);if(void 0==D)break;a.lineTo(D.x,D.y),this._currentPoint=D}else{var D=this._parsePoint(c);if(void 0==D)break;a.moveTo(D.x,D.y),this._currentPoint=D,void 0==d&&(d=D)}}a.fill(),a.stroke(),a.closePath()},text:function(b,c){var d=a.jqx.ptrnd(c.x),e=a.jqx.ptrnd(c.y),f=a.jqx.ptrnd(c.width),g=a.jqx.ptrnd(c.height),h=c.halign,i=c.valign,j=c.angle,k=c.rotateAround,l=c.textPartsInfo,m=l.parts,n=c.clip;void 0==n&&(n=!0),b.save(),h||(h="center"),i||(i="center"),n&&(b.rect(d,e,f,g),b.clip());var o=c.textWidth,p=c.textHeight,q=f||0,r=g||0;if(b.fillStyle=c.color,b.font=c.fontWeight+" "+c.fontSize+" "+c.fontFamily,!j||0==j){e+=p,"center"==i||"middle"==i?e+=(r-p)/2:"bottom"==i&&(e+=r-p),f||(f=o),g||(g=p);for(var s=0,t=m.length-1;t>=0;t--){var u=m[t],v=d,w=m[t].width;m[t].height;"center"==h?v+=(q-w)/2:"right"==h&&(v+=q-w),b.fillText(u.text,v,e+s),s-=u.height+(t>0?4:0)}return void b.restore()}var x=a.jqx.commonRenderer.alignTextInRect(d,e,f,g,o,p,h,i,j,k);d=x.x,e=x.y;var y=j*Math.PI*2/360;b.translate(d,e),b.rotate(y);for(var s=0,z=l.width,t=m.length-1;t>=0;t--){var v=0;"center"==h?v+=(z-m[t].width)/2:"right"==h&&(v+=z-m[t].width),b.fillText(m[t].text,v,s),s-=m[t].height+4}b.restore()}},refresh:function(){this.ctx.clearRect(0,0,this.canvas[0].width,this.canvas[0].height);for(var a in this._elements){var b=this._elements[a];this._renderers.setFillStyle(this,b),this._renderers.setStroke(this,b),this._renderers[this._elements[a].type](this.ctx,b)}}},a.jqx.createRenderer=function(b,c){var d=b,e=d.renderer=null;if(document.createElementNS&&"HTML5"!=d.renderEngine&&"VML"!=d.renderEngine&&(e=new a.jqx.svgRenderer,!e.init(c))){if("SVG"==d.renderEngine)throw"Your browser does not support SVG";return null}if(null==e&&"HTML5"!=d.renderEngine){if(e=new a.jqx.vmlRenderer,!e.init(c)){if("VML"==d.renderEngine)throw"Your browser does not support VML";return null}d._isVML=!0}if(null==e&&("HTML5"==d.renderEngine||void 0==d.renderEngine)&&(e=new a.jqx.HTML5Renderer,!e.init(c)))throw"Your browser does not support HTML5 Canvas";return d.renderer=e,e},a.jqx._widgetToImage=function(b,c,d,e,f,g){var h=b;if(!h)return!1;void 0!=d&&""!=d||(d="image."+c);var i=h.renderEngine,j=h.enableAnimations;if(h.enableAnimations=!1,h.renderEngine="HTML5",h.renderEngine!=i)try{h.refresh()}catch(a){return h.renderEngine=i,h.refresh(),h.enableAnimations=j,!1}var k=h.renderer.getContainer().find("canvas")[0],l=!0;a.isFunction(g)&&(l=g(b,k));var m=!0;return l&&(m=a.jqx.exportImage(k,c,d,e,f)),h.renderEngine!=i&&(h.renderEngine=i,h.refresh(),h.enableAnimations=j),m},a.jqx.getByPriority=function(a){for(var b=void 0,c=0;c<a.length&&void 0==b;c++)void 0==b&&void 0!=a[c]&&(b=a[c]);return b},a.jqx.exportImage=function(b,c,d,e,f){if(!b)return!1;var g="pdf"===c.toLowerCase();if(g&&(c="jpeg"),void 0!=d&&""!=d||(d="image."+c),void 0==e||""==e)throw"Please specifiy export server";var h=!0;try{if(b){var i=b.toDataURL("image/"+c);if(g){a.jqx.pdfExport||(a.jqx.pdfExport={orientation:"portrait",paperSize:"a4"});var j=595;switch(a.jqx.pdfExport.paperSize){case"legal":var j=612;"portrait"!==a.jqx.pdfExport.orientation&&(j=1008);break;case"letter":var j=612;"portrait"!==a.jqx.pdfExport.orientation&&(j=792);break;case"a3":var j=841;"portrait"!==a.jqx.pdfExport.orientation&&(j=1190);break;case"a4":var j=595;"portrait"!==a.jqx.pdfExport.orientation&&(j=842);break;case"a5":var j=420;"portrait"!==a.jqx.pdfExport.orientation&&(j=595)}var k=a(b).width(),l=72*k/96;l>=j-20&&(l=j-20);var m=new pdfDataExport(a.jqx.pdfExport.orientation,"pt",a.jqx.pdfExport.paperSize);return m.addImage(i,"JPEG",10,10,l,0),void m.save(d)}if(i=i.replace("data:image/"+c+";base64,",""),f)a.ajax({dataType:"string",url:e,type:"POST",data:{content:i,fname:d},async:!1,success:function(a,b,c){h=!0},error:function(a,b,c){h=!1}});else{var n=document.createElement("form");n.method="POST",n.action=e,n.style.display="none",document.body.appendChild(n);var o=document.createElement("input");o.name="fname",o.value=d,o.style.display="none";var p=document.createElement("input");p.name="content",p.value=i,p.style.display="none",n.appendChild(o),n.appendChild(p),n.submit(),document.body.removeChild(n),h=!0}}}catch(a){h=!1}return h}}(jqxBaseFramework),function(a){jqxPlot=function(){},jqxPlot.prototype={get:function(a,b,c){return void 0!==c?a[b][c]:a[b]},min:function(a,b){for(var c=NaN,d=0;d<a.length;d++){var e=this.get(a,d,b);(isNaN(c)||e<c)&&(c=e)}return c},max:function(a,b){for(var c=NaN,d=0;d<a.length;d++){var e=this.get(a,d,b);(isNaN(c)||e>c)&&(c=e)}return c},sum:function(a,b){for(var c=0,d=0;d<a.length;d++){var e=this.get(a,d,b);isNaN(e)||(c+=e)}return c},count:function(a,b){for(var c=0,d=0;d<a.length;d++){var e=this.get(a,d,b);isNaN(e)||c++}return c},avg:function(a,b){return this.sum(a,b)/Math.max(1,count(a,b))},filter:function(a,b){if(!b)return a;for(var c=[],d=0;d<a.length;d++)b(a[d])&&c.push(a[d]);return c},scale:function(b,c,d,e){if(isNaN(b))return NaN;if((b<Math.min(c.min,c.max)||b>Math.max(c.min,c.max))&&(!e||e.ignore_range!==!0))return NaN;var f=NaN,g=1;if(void 0===c.type||"logarithmic"!=c.type){var h=Math.abs(c.max-c.min);h||(h=1),g=Math.abs(b-Math.min(c.min,c.max))/h}else if("logarithmic"===c.type){var i=c.base;isNaN(i)&&(i=10);var j=Math.min(c.min,c.max);j<=0&&(j=1);var k=Math.max(c.min,c.max);k<=0&&(k=1);var l=a.jqx.log(k,i);k=Math.pow(i,l);var m=a.jqx.log(j,i);j=Math.pow(i,m);var n=a.jqx.log(b,i);g=Math.abs(n-m)/(l-m)}if("logarithmic"===d.type){var i=d.base;isNaN(i)&&(i=10);var l=a.jqx.log(d.max,i),m=a.jqx.log(d.min,i);d.flip&&(g=1-g);var n=Math.min(m,l)+g*Math.abs(l-m);f=Math.pow(i,n)}else f=Math.min(d.min,d.max)+g*Math.abs(d.max-d.min),d.flip&&(f=Math.max(d.min,d.max)-f+d.min);return f},axis:function(b,c,d){if(d<=1)return[c,b];(isNaN(d)||d<2)&&(d=2);for(var e=0;Math.round(b)!=b&&Math.round(c)!=c&&e<10;)b*=10,c*=10,e++;for(var f=(c-b)/d;e<10&&Math.round(f)!=f;)b*=10,c*=10,f*=10,e++;for(var g=[1,2,5],h=0;;){var i=h%g.length,j=Math.floor(h/g.length),k=Math.pow(10,j)*g[i];i=(h+1)%g.length,j=Math.floor((h+1)/g.length);var l=Math.pow(10,j)*g[i];if(f>=k&&f<l)break;h++}for(var m=l,n=[],o=a.jqx._rnd(b,m,!1),p=e<=0?1:Math.pow(10,e);o<c+m;)n.push(o/p),o+=m;return n}}}(jqxBaseFramework);



