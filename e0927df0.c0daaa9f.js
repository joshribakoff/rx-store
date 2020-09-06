(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),c=(r(0),r(177)),a={id:"nesting-effects",title:"Nesting Effects"},i={unversionedId:"core/guides/nesting-effects",id:"core/guides/nesting-effects",isDocsHomePage:!1,title:"Nesting Effects",description:"Each store has only one root effect, you may nest effects with Rx operators, building a tree of effects your data flows through, triggering side effects as the data flows!",source:"@site/docs/core/guides/nesting-effects.md",permalink:"/rx-store/docs/core/guides/nesting-effects",editUrl:"https://github.com/rx-store/rx-store/tree/master/apps/rx-store-website/docs/core/guides/nesting-effects.md",sidebar:"core",previous:{title:"Components",permalink:"/rx-store/docs/core/basic-concepts/components"},next:{title:"Effect Creators",permalink:"/rx-store/docs/core/guides/effect-creators"}},s=[],f={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Each store has only one root effect, you may nest effects with Rx operators, building a tree of effects your data flows through, triggering side effects as the data flows!"),Object(c.b)("p",null,"You can use the ",Object(c.b)("inlineCode",{parentName:"p"},"spawnEffect")," function within an effect to create new effects. Combine this with any of the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://rxjs.dev/guide/operators"}),"RxJS operators")," like ",Object(c.b)("inlineCode",{parentName:"p"},"merge"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"export const appRootEffect = ({ spawnEffect }) =>\n  merge(\n    spawnEffect(time, { name: 'time' }),\n    spawnEffect(counter, { name: 'counter' })\n  );\n")))}p.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=o.a.createContext({}),p=function(e){var t=o.a.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(f.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(a,".").concat(d)]||u[d]||l[d]||c;return r?o.a.createElement(m,i(i({ref:t},f),{},{components:r})):o.a.createElement(m,i({ref:t},f))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var f=2;f<c;f++)a[f]=r[f];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);