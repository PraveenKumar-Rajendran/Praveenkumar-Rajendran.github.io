var B=Object.create;var C=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty;var Y=o=>C(o,"__esModule",{value:!0});var j=(o,n)=>()=>(n||o((n={exports:{}}).exports,n),n.exports);var x=(o,n,u,d)=>{if(n&&typeof n=="object"||typeof n=="function")for(let s of L(n))!M.call(o,s)&&(u||s!=="default")&&C(o,s,{get:()=>n[s],enumerable:!(d=E(n,s))||d.enumerable});return o},N=(o,n)=>x(Y(C(o!=null?B(z(o)):{},"default",!n&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);var O=j((v,b)=>{(function(o,n){typeof v=="object"&&typeof b<"u"?b.exports=n():typeof define=="function"&&define.amd?define(n):(o=o||self).Headroom=n()})(v,function(){"use strict";function o(){return typeof window<"u"}function n(t){return function(e){return e&&e.document&&function(h){return h.nodeType===9}(e.document)}(t)?function(e){var h=e.document,a=h.body,l=h.documentElement;return{scrollHeight:function(){return Math.max(a.scrollHeight,l.scrollHeight,a.offsetHeight,l.offsetHeight,a.clientHeight,l.clientHeight)},height:function(){return e.innerHeight||l.clientHeight||a.clientHeight},scrollY:function(){return e.pageYOffset!==void 0?e.pageYOffset:(l||a.parentNode||a).scrollTop}}}(t):function(e){return{scrollHeight:function(){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},height:function(){return Math.max(e.offsetHeight,e.clientHeight)},scrollY:function(){return e.scrollTop}}}(t)}function u(t,e,h){var a,l=function(){var r=!1;try{var c={get passive(){r=!0}};window.addEventListener("test",c,c),window.removeEventListener("test",c,c)}catch{r=!1}return r}(),p=!1,f=n(t),m=f.scrollY(),i={};function H(){var r=Math.round(f.scrollY()),c=f.height(),g=f.scrollHeight();i.scrollY=r,i.lastScrollY=m,i.direction=m<r?"down":"up",i.distance=Math.abs(r-m),i.isOutOfBounds=r<0||g<r+c,i.top=r<=e.offset[i.direction],i.bottom=g<=r+c,i.toleranceExceeded=i.distance>e.tolerance[i.direction],h(i),m=r,p=!1}function y(){p||(p=!0,a=requestAnimationFrame(H))}var T=!!l&&{passive:!0,capture:!1};return t.addEventListener("scroll",y,T),H(),{destroy:function(){cancelAnimationFrame(a),t.removeEventListener("scroll",y,T)}}}function d(t){return t===Object(t)?t:{down:t,up:t}}function s(t,e){e=e||{},Object.assign(this,s.options,e),this.classes=Object.assign({},s.options.classes,e.classes),this.elem=t,this.tolerance=d(this.tolerance),this.offset=d(this.offset),this.initialised=!1,this.frozen=!1}return s.prototype={constructor:s,init:function(){return s.cutsTheMustard&&!this.initialised&&(this.addClass("initial"),this.initialised=!0,setTimeout(function(t){t.scrollTracker=u(t.scroller,{offset:t.offset,tolerance:t.tolerance},t.update.bind(t))},100,this)),this},destroy:function(){this.initialised=!1,Object.keys(this.classes).forEach(this.removeClass,this),this.scrollTracker.destroy()},unpin:function(){!this.hasClass("pinned")&&this.hasClass("unpinned")||(this.addClass("unpinned"),this.removeClass("pinned"),this.onUnpin&&this.onUnpin.call(this))},pin:function(){this.hasClass("unpinned")&&(this.addClass("pinned"),this.removeClass("unpinned"),this.onPin&&this.onPin.call(this))},freeze:function(){this.frozen=!0,this.addClass("frozen")},unfreeze:function(){this.frozen=!1,this.removeClass("frozen")},top:function(){this.hasClass("top")||(this.addClass("top"),this.removeClass("notTop"),this.onTop&&this.onTop.call(this))},notTop:function(){this.hasClass("notTop")||(this.addClass("notTop"),this.removeClass("top"),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){this.hasClass("bottom")||(this.addClass("bottom"),this.removeClass("notBottom"),this.onBottom&&this.onBottom.call(this))},notBottom:function(){this.hasClass("notBottom")||(this.addClass("notBottom"),this.removeClass("bottom"),this.onNotBottom&&this.onNotBottom.call(this))},shouldUnpin:function(t){return t.direction==="down"&&!t.top&&t.toleranceExceeded},shouldPin:function(t){return t.direction==="up"&&t.toleranceExceeded||t.top},addClass:function(t){this.elem.classList.add.apply(this.elem.classList,this.classes[t].split(" "))},removeClass:function(t){this.elem.classList.remove.apply(this.elem.classList,this.classes[t].split(" "))},hasClass:function(t){return this.classes[t].split(" ").every(function(e){return this.classList.contains(e)},this.elem)},update:function(t){t.isOutOfBounds||this.frozen!==!0&&(t.top?this.top():this.notTop(),t.bottom?this.bottom():this.notBottom(),this.shouldUnpin(t)?this.unpin():this.shouldPin(t)&&this.pin())}},s.options={tolerance:{up:0,down:0},offset:0,scroller:o()?window:null,classes:{frozen:"headroom--frozen",pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},s.cutsTheMustard=!!(o()&&function(){}.bind&&"classList"in document.documentElement&&Object.assign&&Object.keys&&requestAnimationFrame),s})});var w=N(O());document.addEventListener("DOMContentLoaded",function(){let o=JSON.parse(document.getElementById("page-data").textContent);console.debug(`Use headroom on this page? ${o.use_headroom}`);let n=document.querySelector("header");n&&o.use_headroom===!0&&new w.default(n).init()});
/*!
 * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
