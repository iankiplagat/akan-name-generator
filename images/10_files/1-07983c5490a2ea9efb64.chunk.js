(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{272:function(e,t,n){"use strict";var o=n(1),r=n(40);function a(){document.querySelectorAll(".js-logout-btn:not([data-activated])").forEach((function(e){e.addEventListener("click",i),e.dataset.activated=!0}))}function i(){localStorage.removeItem("followings"),localStorage.removeItem("followings_expire_at"),localStorage.removeItem("likes"),localStorage.removeItem("likes_expire_at"),localStorage.removeItem("collected"),localStorage.removeItem("collected_expire_at"),localStorage.removeItem("user"),c("pexels_auth"),c("avatar_url")}function c(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"}r.d((function(e){e===r.a&&a()})),o.a.ready(a),t.a={logout:i}},275:function(e,t,n){"use strict";var o=n(3),r=n.n(o),a=n(250),i=n(279),c=n(1),l=n(37),u=n(9),s=n.n(u);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(l){r=!0,a=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function h(e,t,n,o,r,a,i){try{var c=e[a](i),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(o,r)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){h(a,o,r,i,c,"next",e)}function c(e){h(a,o,r,i,c,"throw",e)}i(void 0)}))}}var g=".js-auth-modal-signin",y=".js-auth-modal-signup",b={};document.querySelectorAll("".concat(g,", ").concat(y)).forEach(E);var w=function(e){return function(){var t=m(r.a.mark((function t(n){var o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signup"!==e){t.next=6;break}return t.next=3,O(n);case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,S(n);case 8:t.t0=t.sent;case 9:o=t.t0,j(o,n);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){var t=e.cacheKey,n=e.path;return function(){var e=m(r.a.mark((function e(o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b[t]){e.next=2;break}return e.abrupt("return",b[t]);case 2:return o&&(n+="?".concat(o)),e.next=5,c.a.get(n);case 5:return b[t]=e.sent,e.abrupt("return",b[t]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=_({cacheKey:"signup",path:"/sign-up-modal/"}),S=_({cacheKey:"login",path:"/login-modal/"}),j=function(e,t){var n=k(e),o=n.modalInstance,r=n.container;o.open(),o.onRequestClose((function(){r.innerHTML="",o.close()})),r.querySelectorAll(g).forEach((function(e){E(e),e.addEventListener("click",(function(e){e.preventDefault(),w("signin")(t)}))})),r.querySelectorAll(y).forEach((function(e){E(e),e.addEventListener("click",(function(e){e.preventDefault(),w("signup")(t)}))})),a.a()},k=function(e){var t=document.querySelector(".js-sign-up-modal");t.innerHTML=e;var n=t.querySelector("#".concat("auth-modal"));return{container:t,modalInstance:new l.a(n)}};function E(e){var t=s.a.parse(window.location.search.replace("?","")).redirect_to;if(t){var n=p(e.href.split("?"),2),o=n[0],r=n[1],a=void 0===r?"":r,i=s.a.parse(a);e.href="".concat(o,"?").concat(s.a.stringify(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({redirect_to:t},i)))}}t.a={close:function(){i.a.show("sign-up-close")},open:w("signup")}},279:function(e,t,n){"use strict";var o,r,a=n(1),i=n(13),c=n(24),l=!1;function u(e){var t=function(){var e=navigator.userAgent||navigator.vendor||window.opera;if(/windows phone/i.test(e))return;if(/android/i.test(e))return"android";if(/iPad|iPhone|iPod/.test(e)&&!window.MSStream)return"ios";return}();if(!t||l||window.outerWidth>580)return!1;o=e;var n=d();if(n[o]&&n[o].hideUntil&&new Date(n[o].hideUntil)>new Date)return!1;l=!0;var u=i.d.mobile_banner_path,f=a.a.getLocale();u=u.replace("LANG",f).replace("OS",t).replace("TYPE",o);var p=a.a.scriptRequest(u);return p.onload=function(){200==p.status&&(document.body.insertAdjacentHTML("beforeend",p.responseText),(r=document.querySelector(".js-mobile-app-banner")).querySelector(".js-mobile-app-banner-close").addEventListener("click",(function(e){e.stopPropagation(),s()})),c.a.bindEvents(r.querySelectorAll("a")))},p.send(),!0}function s(){if(l){a.a.addClass(r,"hidden");var e=d();e[o]||(e[o]={});var t=new Date;t.setDate(t.getDate()+7),e[o].hideUntil=t,localStorage.setItem("mobile_banner_settings",JSON.stringify(e))}}function d(){return JSON.parse(localStorage.getItem("mobile_banner_settings"))||{}}a.a.ready((function(){var e=document.querySelector('.navbar input[type="search"]');e&&e.value.includes("wallpaper")&&setTimeout((function(){u("wallpaper")}),6e3)})),t.a={show:u,hide:s}},287:function(e,t,n){"use strict";var o,r=n(269),a=n.n(r),i=n(301),c=n(272),l=n(275),u=n(5),s=n(1),d=n(13),f=n(29),p="rd__button--follow--active",v="btn-follow--tiny",h=Object(f.a)("following"),m=Object(f.a)("follow"),g="js-dont-alter-follower-text";function y(){var e=document.querySelectorAll(".js-follow");Array.prototype.forEach.call(e,(function(e){e.getAttribute("data-initialized")||(e.setAttribute("data-initialized","true"),e.addEventListener("click",b))}))}function b(e){e.stopPropagation(),e.preventDefault();for(var t=e.target;"button"!=t.tagName.toLowerCase();)t=t.parentNode;var n,o,r=t.getAttribute("data-follow-track-label"),i=t.getAttribute("data-user-id");if(!s.a.isSignedIn())return j("not-signedin",r),void l.a.open("user_id="+i);var c=document.querySelectorAll(".js-follow-"+i);s.a.hasClass(t,p)?(n=d.d.unfollow_path,o="DELETE",c.forEach(S),document.querySelectorAll(".js-follower-count-display").forEach((function(e){k(e.innerText)||(e.innerText=parseInt(e.innerText,10)-1)})),j("unfollow",r)):(n=d.d.follow_path,o="POST",c.forEach(O),document.querySelectorAll(".js-follower-count-display").forEach((function(e){k(e.innerText)||(e.innerText=parseInt(e.innerText,10)+1)})),j("follow",r),window.hj&&window.hj("trigger","follow")),a.a.request({url:n+"?user_id="+i,method:o,background:!0,headers:{"X-CSRF-Token":s.a.getCsrfToken()}}).then(w).catch(_)}function w(e){e.not_signedin?(l.a.open(),c.a.logout()):i.a.handleFollow(e.action,e.user_id)}function _(){alert("Error: Please reload the page and try to follow the user again. If it still doesn't work please contact: info@pexels.com")}function O(e){s.a.addClass(e,p),s.a.hasClass(e,v)?(o||(o=e.innerHTML),e.innerHTML="\u2713"):s.a.hasClass(e,g)||(e.innerHTML=e.dataset.followingText||h)}function S(e){s.a.removeClass(e,p),s.a.hasClass(e,v)?e.innerHTML=o:s.a.hasClass(e,g)||(e.innerHTML=e.dataset.followText||m)}function j(e,t){u.a.event("follow",e,t)}function k(e){return/[a-zA-Z]/.test(e)}s.a.ready((function(){document.addEventListener("new-photos",y),document.addEventListener("new-users",y),y()})),t.a={activateFollowBtn:O,CLASS_FOLLOWING:p,forget:function(e){e.removeAttribute("data-initialized"),e.removeEventListener("click",b),S(e)}}},299:function(e,t,n){"use strict";var o=n(1);t.a=function(e){return e=e||{},{open:function(){if(a(e.onOpen)&&!1===e.onOpen.apply(arguments,arguments))return;var r=document.querySelector(e.selector);o.a.addClass(document.body,e.openBodyClass),o.a.addClass(r,e.openModalClass),r.setAttribute("tabindex","0"),r.focus(),r.addEventListener("keydown",t),document.addEventListener("keydown",t),document.addEventListener("click",n)},close:r};function t(e){27==e.keyCode&&(e.stopPropagation(),r())}function n(t){for(var n=t.target;n&&"body"!=n.tagName.toLowerCase();){if(o.a.hasClass(n,e.contentClass))return;n=n.parentNode}n&&r()}function r(){if(!a(e.onClose)||!1!==e.onClose.apply(arguments)){var r=document.querySelector(e.selector);r.removeEventListener("keydown",t),document.removeEventListener("keydown",t),document.removeEventListener("click",n),o.a.removeClass(document.body,e.openBodyClass),o.a.removeClass(r,e.openModalClass)}}function a(e){return void 0!==e&&"function"===typeof e}}},301:function(e,t,n){"use strict";var o=n(287),r=n(272),a=n(1),i=n(13);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(l){r=!0,a=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function v(){window.requestIdleCallback((function(){if(a.a.isSignedIn())for(var e=d(document.querySelectorAll('[class*="js-follow-"]')).reduce((function(e,t){var n=t.className,o=s(/js-follow-([0-9]+)/.exec(n),2)[1];return l(l({},e),{},u({},o,e[o]?[].concat(d(e[o]),[t]):[t]))}),{}),t=h(),n=0;n<t.length;n++){var r=e[t[n]];r&&r.forEach((function(e){o.a.activateFollowBtn(e)}))}}))}function h(){var e=localStorage.followings,t=new Date(localStorage.followings_expire_at);return!e||t<new Date?(function(){a.a.getRequest(i.d.followings_path,m,g);var e=new Date;e.setHours(e.getHours()+2),localStorage.followings_expire_at=e}(),[]):JSON.parse(e)}function m(e){JSON.parse(e).not_signedin?r.a.logout():(localStorage.followings=e,v())}function g(){}a.a.ready((function(){document.addEventListener("new-photos",v),document.addEventListener("new-users",v),v()})),t.a={handleFollow:function(e,t){var n=h();if("follow"==e)-1==n.indexOf(t)&&n.push(t);else if("unfollow"==e){var o=n.indexOf(t);n.splice(o,1)}localStorage.followings=JSON.stringify(n)}}},303:function(e,t,n){"use strict";var o=n(272),r=n(1),a=n(13);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(l){r=!0,a=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function p(){window.requestIdleCallback((function(){if(r.a.isSignedIn())for(var e=v(),t=s(document.querySelectorAll('[class*="js-like-"]')).reduce((function(e,t){var n=t.className,o=u(/js-like-([0-9]+)/.exec(n),2)[1];return c(c({},e),{},l({},o,e[o]?[].concat(s(e[o]),[t]):[t]))}),{}),n=0;n<e.length;n++){var o=t[e[n]];o&&o.forEach((function(e){r.a.addClass(e,"rd__button--like--active"),r.a.addClass(e,"rd__button--like--no-animations")}))}}))}function v(){var e=localStorage.likes,t=new Date(localStorage.likes_expire_at);return!e||t<new Date?(function(){r.a.getRequest(a.d.photo_likes_of_user_path,h,m);var e=new Date;e.setMinutes(e.getMinutes()+15),localStorage.likes_expire_at=e}(),[]):JSON.parse(e)}function h(e){JSON.parse(e).not_signedin?o.a.logout():(localStorage.likes=e,p())}function m(){}r.a.ready((function(){document.addEventListener("new-photos",p),p()})),t.a={handleLike:function(e,t){var n=v();if("like"==e)-1==n.indexOf(t)&&n.push(t);else if("unlike"==e){var o=n.indexOf(t);n.splice(o,1)}localStorage.likes=JSON.stringify(n)}}},304:function(e,t,n){"use strict";var o=n(269),r=n.n(o),a=n(303),i=n(272),c=n(275),l=n(5),u=n(1),s=n(13),d="rd__button--like--active";function f(){var e=document.querySelectorAll(".js-like");Array.prototype.forEach.call(e,(function(e){e.getAttribute("data-initialized")||(e.setAttribute("data-initialized","true"),e.addEventListener("click",p))}))}function p(e){e.stopPropagation();for(var t=e.target;"button"!=t.tagName.toLowerCase();)t=t.parentNode;var n,o,a=t.getAttribute("data-photo-id");if(!u.a.isSignedIn())return m("not-signedin",a),void c.a.open("photo_id="+a);var i=document.querySelectorAll(".js-like-"+a);u.a.hasClass(t,d)?(n=s.d.unlike_photo_path("PHOTO_ID"),o="DELETE",i.forEach((function(e){u.a.removeClass(e,"rd__button--like--no-animations"),u.a.removeClass(e,d),function(e){var t=e.querySelector(".js-count");if(!t)return;if(g(t.innerText))return;var n=parseInt(t.innerText,10)-1;t.innerText=n<0?0:n}(e)})),m("unlike",a)):(n=s.d.like_photo_path("PHOTO_ID"),o="POST",i.forEach((function(e){u.a.addClass(e,d),function(e){var t=e.querySelector(".js-count");if(!t)return;if(g(t.innerText))return;t.innerText=parseInt(t.innerText,10)+1}(e)})),m("like",a)),r.a.request({url:n.replace("PHOTO_ID",a),method:o,background:!0,headers:{"X-CSRF-Token":u.a.getCsrfToken()}}).then(v).catch(h)}function v(e){e.not_signedin?(c.a.open(),i.a.logout()):a.a.handleLike(e.action,e.photo_id)}function h(){alert("Error: Please reload the page and try to like the photo again. If it still doesn't work please contact: info@pexels.com")}function m(e,t){l.a.event("like",e,t)}u.a.ready((function(){document.addEventListener("new-photos",f),f()}));var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!!/[^\d]/.exec(e)};t.a={CLASS_LIKED:d,forget:function(e){e.removeEventListener("click",p),e.removeAttribute("data-initialized")}}},305:function(e,t,n){"use strict";var o=n(269),r=n.n(o),a=n(272),i=n(1),c=n(13),l="rd__button--collect--active";i.a.ready((function(){document.addEventListener("new-photos",s),s()}));var u={change:function(e,t){t=parseInt(t,10);var n=p(),o=n.indexOf(t);document.querySelectorAll(".js-collect-"+t).forEach((function(r){"added"===e?(-1===o&&n.push(t),d(r)):"removed"===e&&(n.splice(o,1),f(r))})),localStorage.collected=JSON.stringify(n)}};function s(){if(i.a.isSignedIn()){var e=new Set(p().map((function(e){return"js-collect-"+e})));document.querySelectorAll(".js-collect").forEach((function(t){var n=t.className.split(" ").find((function(e){return/js-collect-\d+/.exec(e)}));e.has(n)?d(t):f(t)}))}}function d(e){e&&i.a.addClass(e,l)}function f(e){e&&i.a.removeClass(e,l)}function p(){var e=localStorage.collected,t=new Date(localStorage.collected_expire_at);return!e||t<new Date?(function(){var e=new Date;e.setHours(e.getHours()+2),localStorage.collected_expire_at=e,r.a.request({method:"GET",url:c.d.collected_photos_of_user_path,headers:{"X-CSRF-Token":i.a.getCsrfToken()},withCredentials:!0}).then((function(e){e.not_signedin?a.a.logout():(localStorage.collected=JSON.stringify(e),s())}))}(),[]):JSON.parse(e)}var v=n(5),h={list:null,byId:{}},m=null,g={};function y(){return{"X-CSRF-Token":i.a.getCsrfToken()}}function b(){alert("Error: Please reload the page and try to collect the photo again. If it still doesn't work please contact: info@pexels.com")}function w(e){e&&(h={list:e.map((function(e){return e.id})),byId:e.reduce((function(e,t){return e[t.id]=t,e}),{})})}function _(e){if(e&&e.id){var t=e.id;Array.isArray(h.list)?-1===h.list.indexOf(t)&&h.list.unshift(t):h.list=[t],h.byId[t]=e,function(){var e=!1;for(var t in g)O(t)&&(e=!0);u.change(e?"added":"removed",m)}()}}function O(e){return Boolean(g[e])}function S(e){g[e]=!0,r.a.request({method:"POST",url:c.d.add_photo_to_collection_path(":id"),data:{id:e,photo_id:m},headers:y(),withCredentials:!0}).then(_).catch(b),j("addToCollection")}function j(e){v.a.event("collect",e,m)}var k,E={data:function(){return h},load:function(){null===h.list&&r.a.request({method:"GET",url:c.d.current_user_collections_path,headers:y(),withCredentials:!0}).then(w).catch(b)},isActive:O,setPhoto:function(e){m!==e&&"string"===typeof e&&(m=e,g={},function(e){r.a.request({url:c.d.collection_ids_for_photo_path(":id"),data:{id:e},headers:y(),withCredentials:!0}).then((function(e){Array.isArray(e)&&e.reduce((function(e,t){return e[t]=!0,e}),g)})).catch(b)}(e))},addToCollection:S,removeFromCollection:function(e){g[e]=!1,r.a.request({method:"DELETE",url:c.d.remove_photo_from_collection_path(":id"),data:{id:e,photo_id:m},headers:y(),withCredentials:!0}).then(_).catch(b),j("removeFromCollection")},createCollection:function(e){var t=r.a.request({method:"POST",url:c.d.new_collection_path,data:{title:e},headers:y(),withCredentials:!0});return t.then((function(e){_(e),S(e.id)})).catch(b),j("createCollection"),t}},A=n(29),C={isWorking:!1,hasError:!1,isOpen:!1,title:"",parent:null,handler:null,oncreate:function(e){try{var t=e.dom.parentNode.parentNode,n=function(n){if(e.state.isOpen){for(var o=n.target;o!==t;){if(o===e.dom)return;o=o.parentNode}e.state.isOpen=!1,r.a.redraw()}};e.state.parent=t,e.state.handler=n,t.addEventListener("click",n)}catch(o){}},onbeforeremove:function(e){e.state.parent&&e.state.parent.removeEventListener("click",e.state.handler)},onupdate:function(e){if(e.state.isOpen){var t=e.dom.querySelector("input");t!==document.activeElement&&t.focus()}},view:function(e){var t=e.attrs,n=e.state,o=t.className||"";return r()("div.click-dropdown",{className:n.isOpen?o+" click-dropdown--open":o},[r()('button.btn-quiet.btn--sm[type="button"]',{onclick:function(e){e.preventDefault(),n.isOpen=!n.isOpen}},Object(A.a)("collection_create")),n.isOpen&&r()(".click-dropdown__content.btn__dropdown",[r()("form.form.form--padded.clearfix",{className:n.hasError?"field_with_errors":"",onsubmit:function(e){e.preventDefault(),n.isWorking||(n.title?(n.isWorking=!0,E.createCollection(n.title).then((function(){n.isWorking=!1,n.hasError=!1,n.isOpen=!1,n.title=""}))):n.hasError=!0)}},[r()(".margin-bottom",[r()("label.form__label",{for:"collection_title"},Object(A.a)("collection_title")),r()('input.form__input[type="text"]',{oninput:r.a.withAttr("value",(function(e){n.title=e})),value:n.title,name:"collection_title",id:"collection_title"})]),r()('button.btn-secondary.pull-right[type="submit"]',{className:n.isWorking?"disabled":"",disabled:n.isWorking},Object(A.a)("collection_create"))])])])}},x={view:function(){return[r()(".spinner",[r()("div"),r()("div"),r()("div"),r()("div")]),r()(".ie-fallback","Loading\u2026")]}},L=n(279),T=n(299),I="js-collection-modal-content",P="."+I,q={view:function(e){var t=e.attrs,n=t.item,o=E.isActive(n.id),a=(n.preview_images||[])[0];return r()("li.l-lg-6",{key:n.id},[r()(".collection.collection--small",{role:"button","data-collection-id":n.id,className:[o?"collection--active":"",t.hovered?"collection--hover":""].join(" "),onmouseenter:o&&r.a.withAttr("data-collection-id",t.onEnter),onmouseleave:t.onLeave,onclick:r.a.withAttr("data-collection-id",o?E.removeFromCollection:E.addToCollection)},[o&&[r()("svg.icon-check.collection__icon",{viewBox:"0 0 24 24"},r()("use",{"xlink:href":"#iconCheck"})),r()("svg.icon-check.collection__icon.collection__icon--remove",{viewBox:"0 0 15 15"},r()("use",{"xlink:href":"#iconPlus"}))],void 0===a?r()("svg.icon-camera.collection__img.collection__img--placeholder",{viewBox:"0 0 16 16"},r()("use",{"xlink:href":"#iconCamera"})):r()(".collection__img.o-clip.o-clip--cover",{style:{backgroundImage:"url("+a+")"}}),r()(".collection__body.collection__gradient",r()("span",n.title))])])}},D={hoveredItem:null,toggleHovered:function(e){this.hoveredItem=e},oninit:function(){E.load();var e=i.a.getLocale();k=e===c.a?"":"/"+e.toLowerCase()},view:function(e){var t=E.data(),n=e.state.hoveredItem,o=e.state.toggleHovered.bind(e.state),a=e.state.toggleHovered.bind(e.state,null);return r()(".collections",[r()(C,{className:"collections__create js-create-toggle"}),r()("h4.collections__title",[Object(A.a)("collection_save")]),null===t.list?r()(x):r()("ul.collections__list.l-row",0===t.list.length?r()("li.l-lg-6",r()(".collection.collection--small.collection--empty",{onclick:function(t){t.stopPropagation(),e.dom.querySelector(".js-create-toggle button").click()}},[r()(".collection__body",Object(A.a)("collection_create"))])):t.list.map((function(e){var i=t.byId[e];return i?r()(q,{item:i,hovered:n===e,onEnter:o,onLeave:a}):null}))),r()("p.collections__footer",[r()("a",{href:k+c.d.current_user_collections_path},[Object(A.a)("collection_view")])])])}};var N=Object(T.a)({selector:".js-collection-modal",contentClass:I,openBodyClass:"has-open-modal",openModalClass:"is-open",onClose:function(){r.a.mount(document.querySelector(P),null),L.a.show("collect")},onOpen:function(){r.a.mount(document.querySelector(P),D)}}),H=n(275);i.a.ready((function(){document.addEventListener("new-photos",M),M()}));t.a={forget:function(e){e.removeAttribute("data-initialized"),e.removeEventListener(e,J)}};function M(){var e=document.querySelectorAll(".js-collect");Array.prototype.forEach.call(e,(function(e){e.getAttribute("data-initialized")||(e.setAttribute("data-initialized","true"),e.addEventListener("click",J))}))}function J(e){e.stopPropagation();for(var t=e.target;"button"!=t.tagName.toLowerCase();)t=t.parentNode;var n=t.getAttribute("data-photo-id");if(!i.a.isSignedIn())return F("not-signedin",n),void H.a.open("photo_id="+n);F("opened",n),E.setPhoto(n),N.open()}function F(e,t){v.a.event("collect",e,t)}}}]);