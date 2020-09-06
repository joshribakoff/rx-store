(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(177)),c={id:"store-value",title:"Store Value"},i={unversionedId:"core/basic-concepts/store-value",id:"core/basic-concepts/store-value",isDocsHomePage:!1,title:"Store Value",description:"In Rx Store, each store has a store value, which is an object. It is where you define your RxJS subjects which are your applications event emitters:",source:"@site/docs/core/basic-concepts/store-value.md",permalink:"/rx-store/docs/core/basic-concepts/store-value",editUrl:"https://github.com/rx-store/rx-store/tree/master/apps/rx-store-website/docs/core/basic-concepts/store-value.md",sidebar:"core",previous:{title:"Getting Started",permalink:"/rx-store/docs/core/introduction/getting-started"},next:{title:"Root Effect",permalink:"/rx-store/docs/core/basic-concepts/root-effect"}},s=[],u={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In Rx Store, each store has a store value, which is an object. It is where you define your RxJS ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://rxjs.dev/guide/subject"}),"subjects")," which are your applications event emitters:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"{\n  // This stream will emit the latest chat messages!\n  chatMessage$: new Subject(),\n\n  // This stream will emit the latest viewer count!\n  viewerCount$: new BehaviorSubject(0),\n}\n")),Object(a.b)("p",null,"They type of subject you want most likely ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/rx-store/docs/core/guides/store-state-in-a-stream"}),"depends on what you're modeling, state or events")))}p.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,d=l["".concat(c,".").concat(f)]||l[f]||b[f]||a;return r?o.a.createElement(d,i(i({ref:t},u),{},{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);