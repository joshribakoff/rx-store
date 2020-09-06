(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),c=(r(0),r(177)),s={id:"use-subscription",title:"useSubscription()"},i={unversionedId:"react/api-reference/use-subscription",id:"react/api-reference/use-subscription",isDocsHomePage:!1,title:"useSubscription()",description:"A React hook used to subscribe to any observable or subject in an Rx store.",source:"@site/docs/react/api-reference/use-subscription.md",permalink:"/rx-store/docs/react/api-reference/use-subscription",editUrl:"https://github.com/rx-store/rx-store/tree/master/apps/rx-store-website/docs/react/api-reference/use-subscription.md",sidebar:"react",previous:{title:"useStore()",permalink:"/rx-store/docs/react/api-reference/use-store"},next:{title:"withSubscription()",permalink:"/rx-store/docs/react/api-reference/with-subscription"}},a=[{value:"Example 1 - consume just the value(s)",id:"example-1---consume-just-the-values",children:[]},{value:"Example 2 - consume &quot;next&quot;, &quot;error&quot; and &quot;complete&quot;",id:"example-2---consume-next-error-and-complete",children:[]},{value:"Example 3 - Modify observables inline with <code>.pipe()</code>:",id:"example-3---modify-observables-inline-with-pipe",children:[]}],u={rightToc:a};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A React hook used to subscribe to any observable or subject in an Rx store.\nYour component will re-render whenever each stream emits, errors, or completes."),Object(c.b)("h2",{id:"example-1---consume-just-the-values"},"Example 1 - consume just the value(s)"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { useSubscription, useStore } from '@rx-store/react';\n\nfunction Component() {\n  const store = useStore(rootContext);\n\n  // consume just the value(s)\n  const [count] = useSubscription(store.count$);\n  return <>Counter: {count}</>;\n}\n")),Object(c.b)("h2",{id:"example-2---consume-next-error-and-complete"},'Example 2 - consume "next", "error" and "complete"'),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { useSubscription, useStore } from '@rx-store/react';\n\nfunction Component() {\n  const store = useStore(rootContext);\n\n  // or also render error / completion information\n  const [next, error, complete] = useSubscription(store.websocketMessage$);\n\n  return (\n    <>\n      Websockets value: {next}\n      Websockets error: {error}\n      Websockets complete: {complete}\n    </>\n  );\n}\n")),Object(c.b)("h2",{id:"example-3---modify-observables-inline-with-pipe"},"Example 3 - Modify observables inline with ",Object(c.b)("inlineCode",{parentName:"h2"},".pipe()"),":"),Object(c.b)("p",null,"You can create an observable inline, on the fly, just remember to memoize it otherwise\nthe ",Object(c.b)("inlineCode",{parentName:"p"},"useSubscription()")," hook will unsubscibe to the old observable & subscribe to the new observable that gets created on every render!"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { useRxStore, useSubscription } from '@rx-store/react';\n\nfunction Component() {\n  const store = useRootStore();\n\n  const allClick$ = useMemo(() => merge(store.myClick$, store.yourClick$), [\n    store.myClick$,\n    store.yourClick$,\n  ]);\n\n  const [click] = useSubscription(allClick$);\n  console.log(click);\n\n  return null;\n}\n")))}l.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,d=p["".concat(s,".").concat(m)]||p[m]||b[m]||c;return r?o.a.createElement(d,i(i({ref:t},u),{},{components:r})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,s=new Array(c);s[0]=m;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<c;u++)s[u]=r[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);