!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Frtabs=e()}}(function(){return function e(t,r,n){function o(a,u){if(!r[a]){if(!t[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var f=r[a]={exports:{}};t[a][0].call(f.exports,function(e){var r=t[a][1][e];return o(r?r:e)},f,f.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Element.prototype.matches=Element.prototype.matches||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector;var n=function(){function e(e,t){for(;e&&!e.matches(t);)e=e.parentElement;return e}function t(e){var t=g(v,e),r=g(v+" li",e),n=g(v+" a",e),o=g(p,e);t.forEach(function(e){e.setAttribute("role","tablist")}),r.forEach(function(e){e.setAttribute("role","presentation")}),n.forEach(function(e){e.setAttribute("role","tab"),e.setAttribute("aria-controls",e.hash.substring(1))}),o.forEach(function(e,t){e.setAttribute("role","tabpanel"),e.setAttribute("aria-labelledby",n[t].id),e.setAttribute("tabindex",0)})}function r(e){var t=g(v,e),r=g(v+" li",e),n=g(v+" a",e),o=g(p,e);t.forEach(function(e){e.removeAttribute("role")}),r.forEach(function(e){e.removeAttribute("role")}),n.forEach(function(e){e.removeAttribute("role"),e.removeAttribute("aria-controls"),e.removeAttribute("aria-selected"),e.removeAttribute("tabindex")}),o.forEach(function(e){e.removeAttribute("role"),e.removeAttribute("aria-hidden"),e.removeAttribute("aria-labelledby"),e.removeAttribute("tabindex")})}function n(t){var r=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],n=e(t,d),o=g(v+" a",n),i=g(p,n);o.forEach(function(e){e.setAttribute("tabindex",-1),e.removeAttribute("aria-selected")}),i.forEach(function(e){e.setAttribute("aria-hidden","true")}),t.setAttribute("tabindex",0),t.setAttribute("aria-selected","true"),r&&t.focus(),y.getElementById(t.getAttribute("aria-controls")).removeAttribute("aria-hidden")}function o(e){n(e.target),e.preventDefault()}function i(t){var r=t.currentTarget,o=e(r,v),i=r.parentNode.previousElementSibling||o.lastElementChild,a=r.parentNode.nextElementSibling||o.firstElementChild;if(!t.metaKey&&!t.altKey)switch(t.keyCode){case 37:case 38:n(g('[role="tab"]',i)[0]),t.preventDefault();break;case 39:case 40:n(g('[role="tab"]',a)[0]),t.preventDefault()}}function a(e){var t=g(v+" a",e);t.forEach(function(e){e.addEventListener("click",o),e.addEventListener("keydown",i)})}function u(e){var t=g(v+" a",e);t.forEach(function(e){e.removeEventListener("click",o),e.removeEventListener("keydown",i)})}function c(){x.forEach(function(e){r(e),u(e),e.classList.remove(E)})}function l(){x.length&&x.forEach(function(e){t(e),a(e),n(g(v+" a",e)[0],!1),e.classList.add(E)})}var f=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],s=f.selector,d=void 0===s?".js-fr-tabs":s,b=f.tablistSelector,v=void 0===b?".js-fr-tabs__tablist":b,m=f.tabpanelSelector,p=void 0===m?".js-fr-tabs__panel":m,h=f.tabsReadyClass,E=void 0===h?"fr-tabs--is-ready":h,y=document,A=y.documentElement,g=function(e){var t=arguments.length<=1||void 0===arguments[1]?y:arguments[1];return[].slice.call(t.querySelectorAll(e))};if("querySelector"in y&&"addEventListener"in window&&A.classList){var x=g(d);return l(),{init:l,destroy:c}}};r["default"]=n,t.exports=r["default"]},{}]},{},[1])(1)});
