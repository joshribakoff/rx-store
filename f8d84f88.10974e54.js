(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(117)),i={id:"principles",title:"Principles"},c={unversionedId:"principles",id:"principles",isDocsHomePage:!1,title:"Principles",description:"- Only render/deliver updates for what changed, nothing more.",source:"@site/docs/principles.md",permalink:"/rx-store/docs/next/principles",editUrl:"https://github.com/rx-store/rx-store/tree/master/apps/rx-store-website/docs/principles.md",version:"next",sidebar:"someSidebar",previous:{title:"FAQ",permalink:"/rx-store/docs/next/faq"},next:{title:"Motivation",permalink:"/rx-store/docs/next/motivation"}},l=[{value:"Deriving state &quot;up&quot;",id:"deriving-state-up",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Only render/deliver updates for what changed, nothing more."),Object(o.b)("li",{parentName:"ul"},"Only deals with events, not state."),Object(o.b)("li",{parentName:"ul"},'Work with the RxJS API directly, this is not a "wrapper" on top of Rxjs.'),Object(o.b)("li",{parentName:"ul"},'Derive state "up" instead of "down" (read on).')),Object(o.b)("h2",{id:"deriving-state-up"},'Deriving state "up"'),Object(o.b)("p",null,'In a traditional Redux app, you may be used to paring down the state using selectors, or deriving state "down".'),Object(o.b)("p",null,'When thinking & working reactively, first think about the stream you want, and work backwards from that. The result is you write code that builds the state "up".'),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const allClick$ = merge(myClick$, yourClick$);\n")),Object(o.b)("p",null,'In this example we\'re working backwards, we wanted a stream of all the clicks, so we defined it. Then we assigned the result of merging two other streams. This merge operator builds "up" the state.'),Object(o.b)("p",null,"Compare this to Redux change detection:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const mapStateToProps = (state) => ({\n  user: state.user,\n  page: state.page,\n});\n")),Object(o.b)("p",null,'With Redux, you start out with the top level state, and pared it "down" to the subset of state you wanted. This works fine until you have a larger app where running all ',Object(o.b)("inlineCode",{parentName:"p"},"mapStateToProps")," on every state change in the entire app becomes unwieldy. It is also prone to unwanted renders, imagine the ",Object(o.b)("inlineCode",{parentName:"p"},"page")," state looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"{\n    name: 'Test',\n    url: '/test',\n}\n")),Object(o.b)("p",null,"Now imagine someone comes along & adds the current time to this object, in a manner where it updates every 100ms (10x a second):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"{\n    name: 'Test',\n    url: '/test',\n    time: 1592539673319\n}\n")),Object(o.b)("p",null,"With the naive ",Object(o.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function above, your component would re-render with a new ",Object(o.b)("inlineCode",{parentName:"p"},"page")," object 10x a second, even if all the component actually renders is the page's ",Object(o.b)("inlineCode",{parentName:"p"},"name"),"."),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"Rx Store"),", we do not have 1 top level state object that is always changing, which we have to pare down & memoize. Instead, we have many low level things updating independantly, and we must subscribe to, merge, or combine them individually, allowing fine grained control of what updates."))}p.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);