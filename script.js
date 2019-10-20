
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("three"),require("gsap/TweenMax")):"function"==typeof define&&define.amd?define(["three","gsap/TweenMax"],t):e.hoverEffect=t(e.THREE,e.TweenMax)}(this,function(e,t){return t=t&&t.hasOwnProperty("default")?t.default:t,function(n){function i(){for(var e=arguments,t=0;t<arguments.length;t++)if(void 0!==e[t])return e[t]}var r=n.parent,o=n.displacementImage,a=n.image1,s=n.image2,f=i(n.imagesRatio,1),d=i(n.intensity1,n.intensity,1),l=i(n.intensity2,n.intensity,1),u=i(n.angle,Math.PI/4),v=i(n.angle1,u),m=i(n.angle2,3*-u),c=i(n.speedIn,n.speed,1.6),p=i(n.speedOut,n.speed,1.2),g=i(n.hover,!0),h=i(n.easing,Expo.easeOut),y=i(n.video,!1);if(r)if(a&&s&&o){var x=new e.Scene,F=new e.OrthographicCamera(r.offsetWidth/-2,r.offsetWidth/2,r.offsetHeight/2,r.offsetHeight/-2,1,1e3);F.position.z=1;var w=new e.WebGLRenderer({antialias:!1,alpha:!0});w.setPixelRatio(2),w.setClearColor(16777215,0),w.setSize(r.offsetWidth,r.offsetHeight),r.appendChild(w.domElement);var L=function(){w.render(x,F)},H=new e.TextureLoader;H.crossOrigin="";var E,W,V=H.load(o,L);if(V.magFilter=V.minFilter=e.LinearFilter,y){var M=function(){requestAnimationFrame(M),w.render(x,F)};M(),(y=document.createElement("video")).autoplay=!0,y.loop=!0,y.src=a,y.load();var P=document.createElement("video");P.autoplay=!0,P.loop=!0,P.src=s,P.load();var R=new e.VideoTexture(y),T=new e.VideoTexture(P);R.magFilter=T.magFilter=e.LinearFilter,R.minFilter=T.minFilter=e.LinearFilter,P.addEventListener("loadeddata",function(){P.play(),(T=new e.VideoTexture(P)).magFilter=e.LinearFilter,T.minFilter=e.LinearFilter,C.uniforms.texture2.value=T},!1),y.addEventListener("loadeddata",function(){y.play(),(R=new e.VideoTexture(y)).magFilter=e.LinearFilter,R.minFilter=e.LinearFilter,C.uniforms.texture1.value=R},!1)}else R=H.load(a,L),T=H.load(s,L),R.magFilter=T.magFilter=e.LinearFilter,R.minFilter=T.minFilter=e.LinearFilter;var U=f;r.offsetHeight/r.offsetWidth<U?(E=1,W=r.offsetHeight/r.offsetWidth/U):(E=r.offsetWidth/r.offsetHeight*U,W=1);var C=new e.ShaderMaterial({uniforms:{intensity1:{type:"f",value:d},intensity2:{type:"f",value:l},dispFactor:{type:"f",value:0},angle1:{type:"f",value:v},angle2:{type:"f",value:m},texture1:{type:"t",value:R},texture2:{type:"t",value:T},disp:{type:"t",value:V},res:{type:"vec4",value:new e.Vector4(r.offsetWidth,r.offsetHeight,E,W)},dpr:{type:"f",value:window.devicePixelRatio}},vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",fragmentShader:"\nvarying vec2 vUv;\n\nuniform float dispFactor;\nuniform float dpr;\nuniform sampler2D disp;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\nuniform vec4 res;\nuniform vec2 parent;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n\n  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;\n  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);\n\n\n  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  vec4 _texture1 = texture2D(texture1, distortedPosition1);\n  vec4 _texture2 = texture2D(texture2, distortedPosition2);\n  gl_FragColor = mix(_texture1, _texture2, dispFactor);\n}\n",transparent:!0,opacity:1}),b=new e.PlaneBufferGeometry(r.offsetWidth,r.offsetHeight,1),D=new e.Mesh(b,C);x.add(D),g&&(r.addEventListener("mouseenter",_),r.addEventListener("touchstart",_),r.addEventListener("mouseleave",z),r.addEventListener("touchend",z)),window.addEventListener("resize",function(t){r.offsetHeight/r.offsetWidth<U?(E=1,W=r.offsetHeight/r.offsetWidth/U):(E=r.offsetWidth/r.offsetHeight*U,W=1),D.material.uniforms.res.value=new e.Vector4(r.offsetWidth,r.offsetHeight,E,W),w.setSize(r.offsetWidth,r.offsetHeight),L()}),this.next=_,this.previous=z}else console.warn("One or more images are missing");else console.warn("Parent missing");function _(){t.to(C.uniforms.dispFactor,c,{value:1,ease:h,onUpdate:L,onComplete:L})}function z(){t.to(C.uniforms.dispFactor,p,{value:0,ease:h,onUpdate:L,onComplete:L})}}});
//# sourceMappingURL=hover-effect.umd.js.map


new hoverEffect({
   parent:document.querySelectorAll('.content-picture')[0],
   intensity1:0.6,
   intensity2:.2,
   image1:"https://i.imgur.com/ERYAYBe.png",
   image2:"https://i.imgur.com/IxjmwoP.png",
   speedOut:1.6,
   angle:Math.PI/4 * 2,
   displacementImage:"https://i.imgur.com/pJ43oAP.jpg"
});


new hoverEffect({
   parent:document.querySelectorAll('.content-picture')[1],
   intensity1:0.6,
   intensity2:.2,
   image1:"https://i.imgur.com/DjahEX0.png",
   image2:"https://i.imgur.com/nwhCEBS.png",
   speedOut:1.6,
   angle:Math.PI/4 * 2,
   displacementImage:"https://i.imgur.com/tIiolLW.jpg"
});

new hoverEffect({
   parent:document.querySelectorAll('.content-picture')[2],
   intensity1:0.6,
   intensity2:.2,
   image1:"https://i.imgur.com/deguxGL.png",
   image2:"https://i.imgur.com/zWvw3HL.png",
   speedOut:1.6,
   angle:Math.PI/4 * 2,
   displacementImage:"https://i.imgur.com/ZvP3TcI.png"
});


new hoverEffect({
   parent:document.querySelectorAll('.content-picture')[3],
   intensity1:0.6,
   intensity2:.2,
   image1:"https://i.imgur.com/J6xaRCT.png",
   image2:"https://i.imgur.com/vFDpOSN.png",
   speedOut:1.6,
   angle:Math.PI/4,
   displacementImage:"https://i.imgur.com/pJ43oAP.jpg"
});



new hoverEffect({
   parent:document.querySelectorAll('.half-picture-right')[0],
   intensity:0.6,
   image1:"https://i.imgur.com/8AsMRUE.png",
   image2:"https://i.imgur.com/1WvzWFo.png",
   speedOut:1.3,
   angle:Math.PI/4 * 6,
   displacementImage:"https://i.imgur.com/pJ43oAP.jpg"
});

new hoverEffect({
   parent:document.querySelectorAll('.half-picture-left')[0],
   intensity:0.6,
   image1:"https://i.imgur.com/T8NZurm.png",
   image2:"https://i.imgur.com/XZgLqJT.png",
   speedOut:1.3,
   angle:Math.PI/4 * 6,
   displacementImage:"https://i.imgur.com/Tkrz09K.png"
});


let OPT = {
   selector: "#sparks",
   amount: 2000,
   speed: 0.05, // pixels per frame
   lifetime: 200,
   direction: { x: 0, y: 1 },
   size: [2, 2],
   maxopacity: .8,
   color: "150, 150, 150",
   randColor: true,
   acceleration: [5, 40] };
 
 
 if (window.innerWidth < 520) {
   OPT.speed = 0.04;
   OPT.color = "150, 150, 150";
 }
 
 (function spark() {
   const canvas = document.querySelector(OPT.selector);
   const ctx = canvas.getContext("2d");
 
   let sparks = [];
 
   window.addEventListener('resize', () => {
     setCanvasWidth();
   });
 
   function setCanvasWidth() {
     ctx.canvas.width = window.innerWidth;
     ctx.canvas.height = window.innerHeight;
   }
 
   function rand(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }
 
   // Init animation
   function init() {
     setCanvasWidth();
 
     window.setInterval(() => {
       if (sparks.length < OPT.amount) {
         addSpark();
       }
     }, 1000 / OPT.amount);
 
     window.requestAnimationFrame(draw);
   }
 
   function draw() {
     ctx.fillStyle = 'rgba(0,0,0, 0.1)';
     ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 
     sparks.forEach((spark, i, array) => {
 
       if (spark.opacity <= 0) {
         array.splice(i, 1);
       } else {
         drawSpark(spark);
       }
 
     });
 
     window.requestAnimationFrame(draw);
   }
 
   function Spark(x, y) {
     this.x = x;
     this.y = y;
     this.age = 0;
     this.acceleration = rand(OPT.acceleration[0], OPT.acceleration[1]);
 
     this.color = OPT.randColor ?
     rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) :
     OPT.color;
 
     this.opacity = OPT.maxopacity - this.age / (OPT.lifetime * rand(1, 10));
 
     this.go = function () {
       this.x += OPT.speed * OPT.direction.x * this.acceleration / 2;
       this.y += OPT.speed * OPT.direction.y * this.acceleration / 2;
 
       this.opacity = OPT.maxopacity - ++this.age / OPT.lifetime;
     };
   }
 
   function addSpark() {
     let x = rand(-200, window.innerWidth + 200);
     let y = rand(-200, window.innerHeight + 200);
     sparks.push(new Spark(x, y));
   }
 
   function drawSpark(spark) {
     let x = spark.x,y = spark.y;
 
     spark.go();
 
     ctx.beginPath();
     ctx.fillStyle = `rgba(${spark.color}, ${spark.opacity})`;
     ctx.rect(x, y, OPT.size[0], OPT.size[1], 0, 0, Math.PI * 2);
     ctx.fill();
   }
 
   init();
 })();









 //  ===================================================


 

var radius = 160;
var autoRotate = true;
var rotateSpeed = -60;
var imgWidth = 120; 
var imgHeight = 170;

setTimeout(init, 100);

var obox = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid];


ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";


var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}



function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}



if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}



//==================================



/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this=this;
(function(u,r){"function"===typeof define&&define.amd?define([],r):"object"===typeof module&&module.exports?module.exports=r():u.anime=r()})(this,function(){function u(a){if(!g.col(a))try{return document.querySelectorAll(a)}catch(b){}}function r(a){return a.reduce(function(a,c){return a.concat(g.arr(c)?r(c):c)},[])}function v(a){if(g.arr(a))return a;g.str(a)&&(a=u(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function E(a,b){return a.some(function(a){return a===b})}
function z(a){var b={},c;for(c in a)b[c]=a[c];return b}function F(a,b){var c=z(a),d;for(d in a)c[d]=b.hasOwnProperty(d)?b[d]:a[d];return c}function A(a,b){var c=z(a),d;for(d in b)c[d]=g.und(a[d])?b[d]:a[d];return c}function R(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,h){return b+b+c+c+h+h});var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a=parseInt(b[1],16);var c=parseInt(b[2],16),b=parseInt(b[3],16);return"rgb("+a+","+c+","+b+")"}function S(a){function b(a,b,c){0>
c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a}var c=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);a=parseInt(c[1])/360;var d=parseInt(c[2])/100,c=parseInt(c[3])/100;if(0==d)d=c=a=c;else{var e=.5>c?c*(1+d):c+d-c*d,k=2*c-e,d=b(k,e,a+1/3),c=b(k,e,a);a=b(k,e,a-1/3)}return"rgb("+255*d+","+255*c+","+255*a+")"}function w(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a))return a[2]}function T(a){if(-1<a.indexOf("translate"))return"px";
if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function G(a,b){return g.fnc(a)?a(b.target,b.id,b.total):a}function B(a,b){if(b in a.style)return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function H(a,b){if(g.dom(a)&&E(U,b))return"transform";if(g.dom(a)&&(a.getAttribute(b)||g.svg(a)&&a[b]))return"attribute";if(g.dom(a)&&"transform"!==b&&B(a,b))return"css";if(null!=a[b])return"object"}function V(a,b){var c=T(b),c=-1<b.indexOf("scale")?
1:0+c;a=a.style.transform;if(!a)return c;for(var d=[],e=[],k=[],h=/(\w+)\((.+?)\)/g;d=h.exec(a);)e.push(d[1]),k.push(d[2]);a=k.filter(function(a,c){return e[c]===b});return a.length?a[0]:c}function I(a,b){switch(H(a,b)){case "transform":return V(a,b);case "css":return B(a,b);case "attribute":return a.getAttribute(b)}return a[b]||0}function J(a,b){var c=/^(\*=|\+=|-=)/.exec(a);if(!c)return a;b=parseFloat(b);a=parseFloat(a.replace(c[0],""));switch(c[0][0]){case "+":return b+a;case "-":return b-a;case "*":return b*
a}}function C(a){return g.obj(a)&&a.hasOwnProperty("totalLength")}function W(a,b){function c(c){c=void 0===c?0:c;return a.el.getPointAtLength(1<=b+c?b+c:0)}var d=c(),e=c(-1),k=c(1);switch(a.property){case "x":return d.x;case "y":return d.y;case "angle":return 180*Math.atan2(k.y-e.y,k.x-e.x)/Math.PI}}function K(a,b){var c=/-?\d*\.?\d+/g;a=C(a)?a.totalLength:a;if(g.col(a))b=g.rgb(a)?a:g.hex(a)?R(a):g.hsl(a)?S(a):void 0;else{var d=w(a);a=d?a.substr(0,a.length-d.length):a;b=b?a+b:a}b+="";return{original:b,
numbers:b.match(c)?b.match(c).map(Number):[0],strings:b.split(c)}}function X(a,b){return b.reduce(function(b,d,e){return b+a[e-1]+d})}function L(a){return(a?r(g.arr(a)?a.map(v):v(a)):[]).filter(function(a,c,d){return d.indexOf(a)===c})}function Y(a){var b=L(a);return b.map(function(a,d){return{target:a,id:d,total:b.length}})}function Z(a,b){var c=z(b);if(g.arr(a)){var d=a.length;2!==d||g.obj(a[0])?g.fnc(b.duration)||(c.duration=b.duration/d):a={value:a}}return v(a).map(function(a,c){c=c?0:b.delay;
a=g.obj(a)&&!C(a)?a:{value:a};g.und(a.delay)&&(a.delay=c);return a}).map(function(a){return A(a,c)})}function aa(a,b){var c={},d;for(d in a){var e=G(a[d],b);g.arr(e)&&(e=e.map(function(a){return G(a,b)}),1===e.length&&(e=e[0]));c[d]=e}c.duration=parseFloat(c.duration);c.delay=parseFloat(c.delay);return c}function ba(a){return g.arr(a)?x.apply(this,a):M[a]}function ca(a,b){var c;return a.tweens.map(function(d){d=aa(d,b);var e=d.value,k=I(b.target,a.name),h=c?c.to.original:k,h=g.arr(e)?e[0]:h,n=J(g.arr(e)?
e[1]:e,h),k=w(n)||w(h)||w(k);d.isPath=C(e);d.from=K(h,k);d.to=K(n,k);d.start=c?c.end:a.offset;d.end=d.start+d.delay+d.duration;d.easing=ba(d.easing);d.elasticity=(1E3-Math.min(Math.max(d.elasticity,1),999))/1E3;g.col(d.from.original)&&(d.round=1);return c=d})}function da(a,b){return r(a.map(function(a){return b.map(function(b){var c=H(a.target,b.name);if(c){var d=ca(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})).filter(function(a){return!g.und(a)})}
function N(a,b,c){var d="delay"===a?Math.min:Math.max;return b.length?d.apply(Math,b.map(function(b){return b[a]})):c[a]}function ea(a){var b=F(fa,a),c=F(ga,a),d=Y(a.targets),e=[],g=A(b,c),h;for(h in a)g.hasOwnProperty(h)||"targets"===h||e.push({name:h,offset:g.offset,tweens:Z(a[h],c)});a=da(d,e);return A(b,{animatables:d,animations:a,duration:N("duration",a,c),delay:N("delay",a,c)})}function m(a){function b(){return window.Promise&&new Promise(function(a){return P=a})}function c(a){return f.reversed?
f.duration-a:a}function d(a){for(var b=0,c={},d=f.animations,e={};b<d.length;){var g=d[b],h=g.animatable,n=g.tweens;e.tween=n.filter(function(b){return a<b.end})[0]||n[n.length-1];e.isPath$0=e.tween.isPath;e.round=e.tween.round;e.eased=e.tween.easing(Math.min(Math.max(a-e.tween.start-e.tween.delay,0),e.tween.duration)/e.tween.duration,e.tween.elasticity);n=X(e.tween.to.numbers.map(function(a){return function(b,c){c=a.isPath$0?0:a.tween.from.numbers[c];b=c+a.eased*(b-c);a.isPath$0&&(b=W(a.tween.value,
b));a.round&&(b=Math.round(b*a.round)/a.round);return b}}(e)),e.tween.to.strings);ha[g.type](h.target,g.property,n,c,h.id);g.currentValue=n;b++;e={isPath$0:e.isPath$0,tween:e.tween,eased:e.eased,round:e.round}}if(c)for(var k in c)D||(D=B(document.body,"transform")?"transform":"-webkit-transform"),f.animatables[k].target.style[D]=c[k].join(" ");f.currentTime=a;f.progress=a/f.duration*100}function e(a){if(f[a])f[a](f)}function g(){f.remaining&&!0!==f.remaining&&f.remaining--}function h(a){var h=f.duration,
k=f.offset,m=f.delay,O=f.currentTime,p=f.reversed,q=c(a),q=Math.min(Math.max(q,0),h);q>k&&q<h?(d(q),!f.began&&q>=m&&(f.began=!0,e("begin")),e("run")):(q<=k&&0!==O&&(d(0),p&&g()),q>=h&&O!==h&&(d(h),p||g()));a>=h&&(f.remaining?(t=n,"alternate"===f.direction&&(f.reversed=!f.reversed)):(f.pause(),P(),Q=b(),f.completed||(f.completed=!0,e("complete"))),l=0);if(f.children)for(a=f.children,h=0;h<a.length;h++)a[h].seek(q);e("update")}a=void 0===a?{}:a;var n,t,l=0,P=null,Q=b(),f=ea(a);f.reset=function(){var a=
f.direction,b=f.loop;f.currentTime=0;f.progress=0;f.paused=!0;f.began=!1;f.completed=!1;f.reversed="reverse"===a;f.remaining="alternate"===a&&1===b?2:b};f.tick=function(a){n=a;t||(t=n);h((l+n-t)*m.speed)};f.seek=function(a){h(c(a))};f.pause=function(){var a=p.indexOf(f);-1<a&&p.splice(a,1);f.paused=!0};f.play=function(){f.paused&&(f.paused=!1,t=0,l=f.completed?0:c(f.currentTime),p.push(f),y||ia())};f.reverse=function(){f.reversed=!f.reversed;t=0;l=c(f.currentTime)};f.restart=function(){f.pause();
f.reset();f.play()};f.finished=Q;f.reset();f.autoplay&&f.play();return f}var fa={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},ga={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},U="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),D,g={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},svg:function(a){return a instanceof
SVGElement},dom:function(a){return a.nodeType||g.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return g.hex(a)||g.rgb(a)||g.hsl(a)}},x=function(){function a(a,c,d){return(((1-3*d+3*c)*a+(3*d-6*c))*a+3*c)*a}return function(b,c,d,e){if(0<=b&&1>=b&&
0<=d&&1>=d){var g=new Float32Array(11);if(b!==c||d!==e)for(var h=0;11>h;++h)g[h]=a(.1*h,b,d);return function(h){if(b===c&&d===e)return h;if(0===h)return 0;if(1===h)return 1;for(var k=0,l=1;10!==l&&g[l]<=h;++l)k+=.1;--l;var l=k+(h-g[l])/(g[l+1]-g[l])*.1,n=3*(1-3*d+3*b)*l*l+2*(3*d-6*b)*l+3*b;if(.001<=n){for(k=0;4>k;++k){n=3*(1-3*d+3*b)*l*l+2*(3*d-6*b)*l+3*b;if(0===n)break;var m=a(l,b,d)-h,l=l-m/n}h=l}else if(0===n)h=l;else{var l=k,k=k+.1,f=0;do m=l+(k-l)/2,n=a(m,b,d)-h,0<n?k=m:l=m;while(1e-7<Math.abs(n)&&
10>++f);h=m}return a(h,c,e)}}}}(),M=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var b="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),c={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],
[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},d={linear:x(.25,.25,.75,.75)},e={},k;for(k in c)e.type=k,c[e.type].forEach(function(a){return function(c,e){d["ease"+a.type+b[e]]=g.fnc(c)?c:x.apply($jscomp$this,c)}}(e)),e={type:e.type};return d}(),ha={css:function(a,b,c){return a.style[b]=
c},attribute:function(a,b,c){return a.setAttribute(b,c)},object:function(a,b,c){return a[b]=c},transform:function(a,b,c,d,e){d[e]||(d[e]=[]);d[e].push(b+"("+c+")")}},p=[],y=0,ia=function(){function a(){y=requestAnimationFrame(b)}function b(b){var c=p.length;if(c){for(var e=0;e<c;)p[e]&&p[e].tick(b),e++;a()}else cancelAnimationFrame(y),y=0}return a}();m.version="2.0.1";m.speed=1;m.running=p;m.remove=function(a){a=L(a);for(var b=p.length-1;0<=b;b--)for(var c=p[b],d=c.animations,e=d.length-1;0<=e;e--)E(a,
d[e].animatable.target)&&(d.splice(e,1),d.length||c.pause())};m.getValue=I;m.path=function(a,b){var c=g.str(a)?u(a)[0]:a,d=b||100;return function(a){return{el:c,property:a,totalLength:c.getTotalLength()*(d/100)}}};m.setDashoffset=function(a){var b=a.getTotalLength();a.setAttribute("stroke-dasharray",b);return b};m.bezier=x;m.easings=M;m.timeline=function(a){var b=m(a);b.duration=0;b.children=[];b.add=function(a){v(a).forEach(function(a){var c=a.offset,d=b.duration;a.autoplay=!1;a.offset=g.und(c)?
d:J(c,d);a=m(a);a.duration>d&&(b.duration=a.duration);b.children.push(a)});return b};return b};m.random=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};return m});

!function(e){"undefined"==typeof module?this.charming=e:module.exports=e}(function(e,n){"use strict";n=n||{};var t=n.tagName||"span",o=null!=n.classPrefix?n.classPrefix:"char",r=1,a=function(e){for(var n=e.parentNode,a=e.nodeValue,c=a.length,l=-1;++l<c;){var d=document.createElement(t);o&&(d.className=o+r,r++),d.appendChild(document.createTextNode(a[l])),n.insertBefore(d,e)}n.removeChild(e)};return function c(e){for(var n=[].slice.call(e.childNodes),t=n.length,o=-1;++o<t;)c(n[o]);e.nodeType===Node.TEXT_NODE&&a(e)}(e),e});





{
	const config = {
        
        sadoc: {
			in: {
				base: {
					duration: 1,
					delay: 100,
					easing: 'linear',
					opacity: 1,
					translateY: {
						value: [-40,0],
						duration: 800,
						easing: 'easeOutElastic'
					}
				},
				path: {
					duration: 600,
					easing: 'easeInOutSine',
					strokeDashoffset: [anime.setDashoffset, 0],
					fill: {
						value: '#55c57a',
						duration: 400,
						delay: 500,
						easing: 'linear'
					}
				},
				content: {
					duration: 800,
					delay: 420,
					easing: 'easeOutElastic',
					translateY: [20,0],
					opacity: {
						value: 1,
						easing: 'linear',
						duration: 100
					}
				},
				trigger: {
					translateY: [
						{value: '50%', duration: 100, easing: 'easeInQuad'},
						{value: ['-50%','0%'], duration: 100, easing: 'easeOutQuad'}
					],
					opacity: [
						{value: 0, duration: 100, easing: 'easeInQuad'},
						{value: 1, duration: 100, easing: 'easeOutQuad'}
					],
					color: {
						value: '#eee', 
						duration: 1,
						delay: 100, 
						easing: 'easeOutQuad'
					}
				}
			},
			out: {
				base: {
					duration: 1,
					delay: 400,
					easing: 'linear',
					opacity: 0
				},
				path: {
					duration: 300,
					easing: 'easeInOutSine',
					strokeDashoffset: anime.setDashoffset,
					fill: {
						value: '#1d1f1e',
						duration: 400,
						easing: 'linear'
					}
				},
				content: {
					duration: 200,
					easing: 'easeOutExpo',
					translateY: 20,
					opacity: {
						value: 0,
						easing: 'linear',
						duration: 50
					}
				},
				trigger: {
					translateY: [
						{value: '50%', duration: 100, easing: 'easeInQuad'},
						{value: ['-50%','0%'], duration: 100, easing: 'easeOutQuad'}
					],
					opacity: [
						{value: 0, duration: 100, easing: 'easeInQuad'},
						{value: 1, duration: 100, easing: 'easeOutQuad'}
					],
					color: {
						value: '#eee', 
						duration: 1, 
						delay: 100, 
						easing: 'easeOutQuad'
					}
				}
			}
		},      
        indis: {
			in: {
				base: {
					duration: 500,
					easing: 'easeOutQuint',
					translateY: [100,0],
					opacity: {
						value: 1,
						duration: 50,
						easing: 'linear'
					}
				},
				shape: {
					duration: 350,
					easing: 'easeOutBack',
					scaleY:  {
						value: [1.3,1],
						duration: 1300,
						easing: 'easeOutElastic',
						elasticity: 500
					},
					scaleX: {
						value: [0.3,1],
						duration: 1300,
						easing: 'easeOutElastic',
						elasticity: 500
					},
				},
				path: {
					duration: 450,
					easing: 'easeInOutQuad',
					d: 'M 44.5,24 C 148,24 252,24 356,24 367,24 376,32.9 376,44 L 376,256 C 376,267 367,276 356,276 252,276 148,276 44.5,276 33.4,276 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.4,24 44.5,24 Z'
				},	
				content: {
					duration: 300,
					delay: 50,
					easing: 'easeOutQuad',
					translateY: [10,0],
					opacity: {
						value: 1,
						easing: 'linear',
						duration: 100
					}
				},
				trigger: {
					translateY: [
						{value: '-50%', duration: 100, easing: 'easeInQuad'},
						{value: ['50%','0%'], duration: 100, easing: 'easeOutQuad'}
					],
					opacity: [
						{value: 0, duration: 100, easing: 'easeInQuad'},
						{value: 1, duration: 100, easing: 'easeOutQuad'}
					],
					color: {
						value: '#eee', 
						duration: 1, 
						delay: 100, 
						easing: 'easeOutQuad'
					}
				}
			},
			out: {
				base: {
					duration: 320,
					delay: 50,
					easing: 'easeInOutQuint',
					scaleY: 1.5,
					scaleX: 0,
					translateY: -100,
					opacity: {
						value: 0,
						duration: 100,
						delay: 130,
						easing: 'linear'
					}
				},
				path: {
					duration: 300,
					delay: 50,
					easing: 'easeInOutQuint',
					d: 'M 44.5,24 C 138,4.47 246,-6.47 356,24 367,26.9 376,32.9 376,44 L 376,256 C 376,267 367,279 356,276 231,240 168,241 44.5,276 33.8,279 24.5,267 24.5,256 L 24.5,44 C 24.5,32.9 33.6,26.3 44.5,24 Z'
				},
				content: {
					duration: 300,
					easing: 'easeInOutQuad',
					translateY: -40,
					opacity: {
						value: 0,
						duration: 100,
						delay: 135,
						easing: 'linear'
					}
				},
				trigger: {
					translateY: [
						{value: '-50%', duration: 100, easing: 'easeInQuad'},
						{value: ['50%','0%'], duration: 100, easing: 'easeOutQuad'}
					],
					opacity: [
						{value: 0, duration: 100, easing: 'easeInQuad'},
						{value: 1, duration: 100, easing: 'easeOutQuad'}
					],
					color: {
						value: '#eee', 
						duration: 1, 
						delay: 100, 
						easing: 'easeOutQuad'
					}
				}
			}
		}, hador: {
			in: {
				base: {
					duration: 1,
					delay: 100,
					easing: 'linear',
					opacity: 1
				},
				path: {
					duration: 500,
					easing: 'easeOutExpo',
					delay: function(t,i) {
						return i*150;
					},
					scale: [0,1],
					translateY: function(t,i,c) {
						return i === c-1 ? ['50%','0%'] : 0;
					},
					rotate: function(t,i,c) {
						return i === c-1 ? [90,0] : 0;
					}
				},	
				content: {
					duration: 600,
					delay: 750,
					easing: 'easeOutExpo',
					scale: [0.5,1],
					opacity: {
						value: 1,
						easing: 'linear',
						duration: 400
					}
				},
				trigger: {
					translateX: [
						{value: '30%', duration: 200, easing: 'easeInExpo'},
						{value: ['-30%','0%'], duration: 200, easing: 'easeOutExpo'}
					],
					opacity: [
						{value: 0, duration: 200, easing: 'easeInExpo'},
						{value: 1, duration: 200, easing: 'easeOutExpo'}
					],
					color: [
						{value: '#eee', duration: 1, delay: 200, easing: 'easeOutExpo'}
					]
				}
			},
			out: {
				base: {
					duration: 1,
					delay: 450,
					easing: 'linear',
					opacity: 0
				},
				path: {
					duration: 300,
					easing: 'easeOutExpo',
					delay: function(t,i,c) {
						return (c-i-1)*50;
					},
					scale: 0
				},	
				content: {
					duration: 200,
					easing: 'easeOutExpo',
					scale: 0.7,
					opacity: {
						value: 0,
						duration: 50,
						easing: 'linear'
					}
				},
				trigger: {
					translateX: [
						{value: '30%', duration: 100, easing: 'easeInQuad'},
						{value: ['-30%','0%'], duration: 100, easing: 'easeOutQuad'}
					],
					opacity: [
						{value: 0, duration: 100, easing: 'easeInQuad'},
						{value: 1, duration: 100, easing: 'easeOutQuad'}
					],
					color: [
						{value: '#eee', duration: 1, delay: 100, easing: 'easeOutQuad'}
					]
				}
			}
		},	cora: {
			in: {
				base: {
					duration: 600,
					easing: 'easeOutQuint',
					scale: [0,1],
					rotate: [-180,0],
					opacity: {
						value: 1,
						easing: 'linear',
						duration: 100
					}
				},
				content: {
					duration: 300,
					delay: 250,
					easing: 'easeOutQuint',
					translateY: [20,0],
					opacity: {
						value: 1,
						easing: 'linear',
						duration: 100
					}
				},
				trigger: {
					duration: 300,
					easing: 'easeOutExpo',
					scale: [1,0.9],
					color: '#eee'
				}
			},
			out: {
				base: {
					duration: 150,
					delay: 50,
					easing: 'easeInQuad',
					scale: 0,
					opacity: {
						delay: 100,
						value: 0,
						easing: 'linear'
					}
				},
				content: {
					duration: 100,
					easing: 'easeInQuad',
					translateY: 20,
					opacity: {
						value: 0,
						easing: 'linear'
					}
				},
				trigger: {
					duration: 300,
					delay: 50,
					easing: 'easeOutExpo',
					scale: 1,
					color: '#eee'
				}
			}
		}
	};

	const tooltips = Array.from(document.querySelectorAll('.tooltip'));
	
	class Tooltip {
		constructor(el) {
			this.DOM = {};
			this.DOM.el = el;
			this.type = this.DOM.el.getAttribute('data-type');
			this.DOM.trigger = this.DOM.el.querySelector('.tooltip__trigger');
			this.DOM.triggerSpan = this.DOM.el.querySelector('.tooltip__trigger-text');
			this.DOM.base = this.DOM.el.querySelector('.tooltip__base');
			this.DOM.shape = this.DOM.base.querySelector('.tooltip__shape');
			if( this.DOM.shape ) {
				this.DOM.path = this.DOM.shape.childElementCount > 1 ? Array.from(this.DOM.shape.querySelectorAll('path')) : this.DOM.shape.querySelector('path');
			}
			this.DOM.deco = this.DOM.base.querySelector('.tooltip__deco');
			this.DOM.content = this.DOM.base.querySelector('.tooltip__content');

			this.DOM.letters = this.DOM.content.querySelector('.tooltip__letters');
			if( this.DOM.letters ) {
				// Create spans for each letter.
				charming(this.DOM.letters);
				// Redefine content.
				this.DOM.content = this.DOM.letters.querySelectorAll('span');
			}
			this.initEvents();
		}
		initEvents() {
			this.mouseenterFn = () => {
				this.mouseTimeout = setTimeout(() => {
					this.isShown = true;
					this.show();
				}, 75);
			}
			this.mouseleaveFn = () => {
				clearTimeout(this.mouseTimeout);
				if( this.isShown ) {
					this.isShown = false;
					this.hide();
				}
			}
			this.DOM.trigger.addEventListener('mouseenter', this.mouseenterFn);
			this.DOM.trigger.addEventListener('mouseleave', this.mouseleaveFn);
			this.DOM.trigger.addEventListener('touchstart', this.mouseenterFn);
			this.DOM.trigger.addEventListener('touchend', this.mouseleaveFn);
		}
		show() {
			this.animate('in');
		}
		hide() {
			this.animate('out');
		}
		animate(dir) {
			if ( config[this.type][dir].base ) {
				anime.remove(this.DOM.base);
				let baseAnimOpts = {targets: this.DOM.base};
				anime(Object.assign(baseAnimOpts, config[this.type][dir].base));
			}
			if ( config[this.type][dir].shape ) {
				anime.remove(this.DOM.shape);
				let shapeAnimOpts = {targets: this.DOM.shape};
				anime(Object.assign(shapeAnimOpts, config[this.type][dir].shape));
			}
			if ( config[this.type][dir].path ) {
				anime.remove(this.DOM.path);
				let shapeAnimOpts = {targets: this.DOM.path};
				anime(Object.assign(shapeAnimOpts, config[this.type][dir].path));
			}
			if ( config[this.type][dir].content ) {
				anime.remove(this.DOM.content);
				let contentAnimOpts = {targets: this.DOM.content};
				anime(Object.assign(contentAnimOpts, config[this.type][dir].content));
			}
			if ( config[this.type][dir].trigger ) {
				anime.remove(this.DOM.triggerSpan);
				let triggerAnimOpts = {targets: this.DOM.triggerSpan};
				anime(Object.assign(triggerAnimOpts, config[this.type][dir].trigger));
			}
			if ( config[this.type][dir].deco ) {
				anime.remove(this.DOM.deco);
				let decoAnimOpts = {targets: this.DOM.deco};
				anime(Object.assign(decoAnimOpts, config[this.type][dir].deco));
			}
		}
		destroy() {
			this.DOM.trigger.removeEventListener('mouseenter', this.mouseenterFn);
			this.DOM.trigger.removeEventListener('mouseleave', this.mouseleaveFn);
			this.DOM.trigger.removeEventListener('touchstart', this.mouseenterFn);
			this.DOM.trigger.removeEventListener('touchend', this.mouseleaveFn);
		}
	}

	const init = (() => tooltips.forEach(t => new Tooltip(t)))();
};



// Menu



const ease = {
  exponentialIn: (t) => {
    return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
  },
  exponentialOut: (t) => {
    return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
  },
  exponentialInOut: (t) => {
    return t == 0.0 || t == 1.0
      ? t
      : t < 0.5
        ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
        : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
  },
  sineOut: (t) => {
    const HALF_PI = 1.5707963267948966;
    return Math.sin(t * HALF_PI);
  },
  circularInOut: (t) => {
    return t < 0.5
        ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
        : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
  },
  cubicIn: (t) => {
    return t * t * t;
  },
  cubicOut: (t) => {
    const f = t - 1.0;
    return f * f * f + 1.0;
  },
  cubicInOut: (t) => {
    return t < 0.5
      ? 4.0 * t * t * t
      : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
  },
  quadraticOut: (t) => {
    return -t * (t - 2.0);
  },
  quarticOut: (t) => {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
  },
}



class ShapeOverlays {
  constructor(elm) {
    this.elm = elm;
    this.path = elm.querySelectorAll('path');
    this.numPoints = 4;
    this.duration = 800;
    this.delayPointsArray = [];
    this.delayPointsMax = 180;
    this.delayPerPath = 70;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isAnimating = false;
  }
  toggle() {
    this.isAnimating = true;
    const range = Math.random() * Math.PI * 2;
    for (var i = 0; i < this.numPoints; i++) {
      const radian = (i / (this.numPoints - 1)) * Math.PI * 2;
      this.delayPointsArray[i] = (Math.sin(radian + range) + 1) / 2 * this.delayPointsMax;
    }
    if (this.isOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    this.isOpened = true;
    this.elm.classList.add('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  close() {
    this.isOpened = false;
    this.elm.classList.remove('is-opened');
    this.timeStart = Date.now();
    this.renderLoop();
  }
  updatePath(time) {
    const points = [];
    for (var i = 0; i < this.numPoints; i++) {
      points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
    }

    let str = '';
    str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = (i + 1) / (this.numPoints - 1) * 100;
      const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
    }
    str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
    return str;
  }
  render() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
      }
    }
  }
  renderLoop() {
    this.render();
    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    }
    else {
      this.isAnimating = false;
    }
  }
}

(function() {
  const elmHamburger = document.querySelector('.hamburger');
  const gNavItems = document.querySelectorAll('.global-menu__item');
  const elmOverlay = document.querySelector('.shape-overlays');
  const overlay = new ShapeOverlays(elmOverlay);

  elmHamburger.addEventListener('click', () => {
      const slider = document.querySelector('.my-slider');
      const boxStyle = document.querySelector('.section-1 .box-style');
      const contentBox = document.querySelector('.section-1 .content-box');
    if (overlay.isAnimating) {
      return false;
    }
    overlay.toggle();
    if (overlay.isOpened === true) {
        slider.style.zIndex =2;
        boxStyle.style.zIndex=3;
        contentBox.style.zIndex=3;
      elmHamburger.classList.add('is-opened-navi');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.add('is-opened');
      }
    } else {
     
      elmHamburger.classList.remove('is-opened-navi');
      for (var i = 0; i < gNavItems.length; i++) {
        gNavItems[i].classList.remove('is-opened');
      }
        setTimeout(function(){
                 slider.style.zIndex =4;
                 boxStyle.style.zIndex=5;
               contentBox.style.zIndex =6;
        },1000)
    }
  });
}());






window.onscroll = () =>{
	
	
	 let ws = window.pageYOffset;
    let elems = document.getElementsByClassName('content-box');
    let section_6 = document.querySelector('.section-6');
    let animeItem = document.querySelector('.anime-list');
    let flexItem = document.getElementsByClassName('flex-item');
      let flexItemImg = document.getElementsByClassName('flex-item-img');
      if (ws > 2600){  
             flexItemImg[0].classList.add('magictime','tinLeftIn');
             flexItem[1].classList.add('magictime','spaceInDown');
             flexItem[1].style.display = 'block';
             flexItemImg[0].style.display = 'block';
            
        }else{
            flexItem[1].classList.remove('magictime','spaceInDown');
            flexItemImg[0].classList.remove('magictime','tinLeftIn');
            flexItem[1].style.display = 'none';
            flexItemImg[0].style.display = 'none';

        }
    
     if (ws > 2606){  
            flexItem[2].classList.add('magictime','spaceInDown');
          flexItemImg[1].classList.add('magictime','tinLeftIn');
             flexItem[2].style.display = 'block';
         flexItemImg[1].style.display = 'block';
            
        }else{
            flexItem[2].classList.remove('magictime','spaceInDown');
             flexItemImg[1].classList.remove('magictime','tinLeftIn');
            flexItem[2].style.display = 'none';
            flexItemImg[1].style.display = 'none';

        }
    
     if (ws > 2806){  
            flexItem[5].classList.add('magictime','spaceInDown');
          flexItemImg[2].classList.add('magictime','tinLeftIn');
             flexItem[5].style.display = 'block';
               flexItemImg[2].style.display = 'block';
            
        }else{
            flexItem[5].classList.remove('magictime','spaceInDown');
             flexItemImg[2].classList.remove('magictime','tinLeftIn');
            flexItem[5].style.display = 'none';
                  flexItemImg[2].style.display = 'none';

        }
    
     
       if (ws > 1966){  
             section_6.classList.add('magictime','spaceInLeft');
            animeItem.classList.add('magictime','spaceInRight');
            animeItem.style.display = 'block';
           section_6.style.display = 'block';
        }else{
             section_6.classList.remove('magictime','spaceInLeft');
             animeItem.classList.remove('magictime','spaceInRight');
             animeItem.style.display = 'none';
             section_6.style.display = 'none';
        }
    
        
    
    
        if (ws > 150){  
            elems[0].classList.add('magictime','foolishIn');
                 elems[0].style.display = 'block';
        }else{
            elems[0].classList.remove('magictime','foolishIn');
                         elems[0].style.display = 'none';

        }
        if (ws > 550){  
            elems[1].classList.add('magictime','tinDownIn');
             elems[1].style.display = 'block';
        }else{
            elems[1].classList.remove('magictime','tinDownIn');
            elems[1].style.display = 'none';

        }
    
       if (ws > 600){  
            elems[2].classList.add('magictime','vanishIn');
            elems[2].style.display = 'block';
        }else{
            elems[2].classList.remove('magictime','vanishIn');
             elems[2].style.display = 'none';

        }
    
       if (ws > 1100){  
            elems[3].classList.add('magictime','swashIn');
            elems[3].style.display = 'block';
        }else{
            elems[3].classList.remove('magictime','swashIn');
             section_6.style.display = 'none';

        }
    
       
    
}





function clikedAnimeCharacter(index,name){

	var imgSrc = document.getElementsByClassName('anime-charcter-list')[index];
    var animeName = document.querySelector('.shape-text');
	var setImage = document.querySelector('.anime-list-img');
	setImage.src = imgSrc.src;
    animeName.innerHTML = name;	
	setImage.classList.remove('magictime','foolishIn');  

	setTimeout(function(){
		    setImage.classList.add('magictime','foolishIn');    
	},10);

}


var areWeReady = false;
document.querySelector("body").style.overflow = 'hidden';
setTimeout(function(){
    areWeReady = true;
    var my_header = document.getElementsByClassName("my_header")[0];
    my_header.innerHTML = "Touch to Enter...";
},16000);

setTimeout(function(){
    var my_header = document.getElementsByClassName("my_header")[0];
    my_header.innerHTML = "Initializing Data...";
},2000);

setTimeout(function(){
    var my_header = document.getElementsByClassName("my_header")[0];
    my_header.innerHTML = "Downloading Images...";
},5000);

setTimeout(function(){
    var my_header = document.getElementsByClassName("my_header")[0];
    my_header.innerHTML = "Building Animation...";
},10000);


function loadingFinish(){
    if(!areWeReady)
    return;
    var my_loader = document.getElementsByClassName("my_loader")[0]; 
    
            $(my_loader).fadeOut(1000);
          setTimeout(function(){
          my_loader.style.display = "none";
document.getElementById("myAudio").play();   
              document.querySelector("body").style.overflow = 'visible';
        },1000)
      
}




