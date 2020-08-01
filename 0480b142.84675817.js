(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(11),r=(n(0),n(178)),i={id:"faq",title:"FAQ"},s={id:"faq",isDocsHomePage:!1,title:"FAQ",description:"How does this compare to Redux?",source:"@site/docs/faq.md",permalink:"/rx-store/docs/faq",editUrl:"https://github.com/rx-store/rx-store/edit/master/website/docs/faq.md",sidebar:"someSidebar",previous:{title:"Angular",permalink:"/rx-store/docs/angular/angular"},next:{title:"Principles",permalink:"/rx-store/docs/principles"}},c=[{value:"How does this compare to Redux?",id:"how-does-this-compare-to-redux",children:[]},{value:"How does this compare to regular React state/hooks?",id:"how-does-this-compare-to-regular-react-statehooks",children:[]},{value:"How does this compare to GQL clients like Apollo / Relay?",id:"how-does-this-compare-to-gql-clients-like-apollo--relay",children:[]},{value:"How does this compare to mobx?",id:"how-does-this-compare-to-mobx",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"how-does-this-compare-to-redux"},"How does this compare to Redux?"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/acdlite/status/1024852895814930432"}),'Redux is a "stupid" event emitter'),". With Redux, you affect state by dispatching actions which are objects with a ",Object(r.b)("inlineCode",{parentName:"p"},"type")," property, for example ",Object(r.b)("inlineCode",{parentName:"p"},'{type: "COUNTER-INCREMENT"}'),". Later, a reducer, which is a pure function will reduce the current state to the new state when it receives the action. There is also the concept of middleware where you can intercept actions & run your async logic, perhaps dispatching new actions. The idea of middleware is open ended and there are libraries to use regular functions or thunks, generators or sagas, and observables (rxJS) for your Redux middlewares."),Object(r.b)("p",null,"Criticisms of Redux are boilerplate required, the fact all data must be orgnaized into one global store, and it does not have affordances for subscribing to subsets of the global state, you must use selectors & then compare the values, which in RxJS is like doing ",Object(r.b)("inlineCode",{parentName:"p"},"state$.pipe(map(state => state.user.name), distinctUntilChanged())"),". You can actually ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://ngrx.io/"}),"build Redux in a few lines of RxJS"),". Drawbacks though, would be you're running functions all over your app to essentially do the ",Object(r.b)("inlineCode",{parentName:"p"},"distinctUntilChanged")," operation, even if your implementation of this is ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect"}),Object(r.b)("inlineCode",{parentName:"a"},"react-redux")," & memoized ",Object(r.b)("inlineCode",{parentName:"a"},"reselect")," selectors"),", running memoization has a cost & developers can get it wrong, in practice this can have a large cost for larger Redux apps with frequent or large amounts of Redux actions."),Object(r.b)("p",null,"With RxJS store, we turned Redux upside down on it's head. Instead of viewing the world as one global state object that needs to be diff'd, we model the world as individual subjects that can be subscribed to. Instead of slicing off of a global state, selecting state \"down\", in RxJS it is inverted, you would need to combine all of your subjects with the ",Object(r.b)("inlineCode",{parentName:"p"},"merge()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"combineLatest()")," operators to create a derived stream that acts like Redux & emits on every change application wide. "),Object(r.b)("p",null,'A good metaphor for Redux vs RxJS store is Redux is like receiving a new printed dictionary in the mail with no change log anytime a new word is added to the English language. You must search through the entire new and old dictionary, or at least the table-of-contents or index, and find out what changed. RxJS is like receiving a push notification from the dictionary author\'s mobile app telling you a new word was added abd which word it was. The code running in the app lays dormant and does not do any work or waste any battery power, it is woken up or "pushed" to your phone, and you can turn on/off push notifications for each "app" on your phone if something is firing too often and wasting your battery.'),Object(r.b)("p",null,'Another key difference is that in Redux, there is an idea of a "global state" object. In RxStore, state lives inside the context of the streams you create.'),Object(r.b)("p",null,"RxJS and Redux can be used side by side in the same app, using each where it is best suited, drawing the boundaries wherever you find appropriate. You may use Redux middleware to emit onto your RxJS subjects in response to actions and state changes."),Object(r.b)("h2",{id:"how-does-this-compare-to-regular-react-statehooks"},"How does this compare to regular React state/hooks?"),Object(r.b)("p",null,"With React state/hooks, you are able to set state in your component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"this.setState({foo: 123})\n")),Object(r.b)("p",null,"and render it declaratively in your component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"render() {\n    return <div>{this.state.foo}</div>\n}\n")),Object(r.b)("p",null,"You can react to state changes in your lifecycles:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"componentDidUpdate(prevProps, prevState) {\n    if(prevState.foo !== this.state.foo) {\n        // react to change\n    }\n}\n")),Object(r.b)("p",null,"You can also react to state changes with hooks:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"function component() {\n    const [foo, setFoo] = useState(123)\n    useEffect(() => {\n        // react to change\n    }, [foo])\n}\n")),Object(r.b)("p",null,"However this can become unwieldy when you have more complex logic:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"function component({ channelID }) {\n    const [foo, setFoo] = useState(123)\n    useEffect(() => {\n        // reacts to changes in either foo or channelID\n    }, [foo, channelID])\n}\n")),Object(r.b)("p",null,"Now you may have a bug where you needed ",Object(r.b)("inlineCode",{parentName:"p"},"channelID")," in your side effect, but it changes too often even though ",Object(r.b)("inlineCode",{parentName:"p"},"foo")," did not change, and you only want to run the effect when ",Object(r.b)("inlineCode",{parentName:"p"},"foo")," changes, not when ",Object(r.b)("inlineCode",{parentName:"p"},"channelID")," changes, you must break the rules of hooks or use a ref:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"function component({ channelID }) {\n    const prevFoo = useRef()\n    const [foo, setFoo] = useState(123)\n    useEffect(() => {\n        if(foo !== prevFoo) {\n            // reacts to changes in either foo or channelID\n        }\n        prevFoo.current = foo\n    }, [foo])\n}\n")),Object(r.b)("p",null,"With React, many devs find they are still programming imperatively when they try to model things like async business logic pertaining to state changing & events firing over time. Internally, React evaluates the dependency arrays & checks them one by one to detect if they changed, there is still this idea of check everything to figure out what changed. It is also a leaky abstraction, as the dependency array is not sufficient to inform the hook of what changed, requiring you to use a ref to implement your own change detection. Compare this to subscribing to a stream of changes in RxJS. In RxJS you can subscribe directly to changes, instead of needing to rely on detecting them:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"stream$.subscribe(value => console.log(value))\n")),Object(r.b)("p",null,"Also, with React's reactivity model you're traditionally mapping state changes 1:1 to with component updates. This will change with time slicing and suspense (async react), but you're still opting into their reactivity model, which is great for some apps. However, you may find that for some logic in some apps you want the ability to do something more complex than map a state change to a UI update, for example fetching some data whenever a button is clicked & also every 1s:"),Object(r.b)("p",null,'With a traditional React app, the producers are aware of the consumers, the producers imperatively "notify the consumer", that is the two ',Object(r.b)("inlineCode",{parentName:"p"},"useEffect")," hooks, the 2 producers, are aware of & need to call ",Object(r.b)("inlineCode",{parentName:"p"},"fetchData()"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"useEffect(() => {\n    const i = setInterval(fetchData, 1_000)\n    return () => clearInterval(i)\n}, [])\n\nuseEffect(() => {\n    fetchData();\n}, [buttonLastClickedTime]) // diffs buttonLastClickedTime every render\n")),Object(r.b)("p",null,"In React, you could use functions as props, and use them to invert control, allowing the producer (here a parent component) to notify the consumer (via the event listener functions passed down to the component via props):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"function component(props) {\n    const {addOnClickListender, removeOnClickListender} = props\n    const fn = useCallback(() => {\n        // react to clicks\n    })\n    useEffect(() => {\n        // add\n        addOnClickListener(fn)\n        return () => removeOnClickListender(fn)\n    }, [fn])\n})\n")),Object(r.b)("p",null,"However may find that now you have a similar issue to the example above where you may need to add refs. For example, if you need to add dependencies to the ",Object(r.b)("inlineCode",{parentName:"p"},"useCallback")," logic, you'll need to add a depdency array for the ",Object(r.b)("inlineCode",{parentName:"p"},"useCallback")," hook, which in turn causes the ",Object(r.b)("inlineCode",{parentName:"p"},"fn")," reference to be changed anytime it's dependencies changes. Now you must decide if you're ok removing & re-adding the event listeners anytime data changes, paying a perfromance cost so you can store your state in the hook's closures, or your other option is to add refs to your code, making it harder to read."),Object(r.b)("p",null,"With RxJS, we can pass around immutable streams. The parent could pass down a stream of clicks:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function parent() {\n    const buttonRef = useRef()\n    const click$ = useMemo(() => {\n        // creates a stream of click events in RxJS:\n        return fromEvent(buttonRef.current, 'click')\n    }, [])\n    return <>\n        <button ref={ref => buttonRef.current = ref} />\n        <Child clicks={click$} />\n    </>\n}\n")),Object(r.b)("p",null,"In the child we can consume the ",Object(r.b)("inlineCode",{parentName:"p"},"clicks")," stream that is passed down from the parent:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function child({clicks: click$}) {\n    // Because click$ is immutable / doesn't change, this runs 1x\n    useEffect(() => {\n        const subscription = merge(\n            interval(1000),\n            click$\n        ).pipe(\n            mergeMap(fetchData),\n        ).subscribe() \n\n        return () => subscription.unsubscribe(); \n    }, [click$])\n}\n")),Object(r.b)("p",null,"In this way the parents component does not need to be aware of or call ",Object(r.b)("inlineCode",{parentName:"p"},"fetchData"),", nor do we run into kludges with React's limitations. The consumers sit at the bottom of a metaphorical funnel, and at the top of our funnel the parent component is entirely unaware of whatever is happening downstream, it just provides down streams of clicks."),Object(r.b)("h2",{id:"how-does-this-compare-to-gql-clients-like-apollo--relay"},"How does this compare to GQL clients like Apollo / Relay?"),Object(r.b)("p",null,'These libraries allow your components to declare their data dependencies and manage fetching, subscribing, and caching those data from a GQL backend. They are best suited for CRUD type app(s) where you are creating, reading, updating & deleting records, or are otherwise best suited for "traditional apps". If one tries to, for example, build a distributed counter app using these libraries, you\'ll find there can be various race conditions and there can be a need to reach for escape hatches and build new abstractions.'),Object(r.b)("p",null,"On the other hand, RxJS store does not provide easy to use APIs for fetching/storing data from GQL specifically, but you could just as easily call ",Object(r.b)("inlineCode",{parentName:"p"},"fetch()")," or call into ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo"),"'s ",Object(r.b)("inlineCode",{parentName:"p"},"client")," subscriptions to expose streams of data to your RxJS store within your effect(s). You could let Apollo handle sending queries/mutations for your distributed counter app. You could also use RxJS to have fine grained control over the complex async parts of your code as far as it affects the timing of the queries/mutations in the distributed counter app, to prevent race conditions by leveraging RxJS' ability to create powerful data flows and it's abstractions for working with events occuring over time as collections."),Object(r.b)("h2",{id:"how-does-this-compare-to-mobx"},"How does this compare to mobx?"),Object(r.b)("p",null,"While mobx uses the observable pattern like RxJS, it is more focused on imperatively mutating state, and then observing those mutations. It does not provide as rich of an ecosystem as RxJS does when it comes to abstracting the dimension of time into declarative operators, and doesn't directly support techniques like using higher order observables to create powerful abstractions, like controlling the concurrency & ordering of side effects over time. "),Object(r.b)("p",null,"You can use RxJS store & mobx together, you can subscribe to your RxJS store subjects & update mobx when they emit values, or vice versa."),Object(r.b)("p",null,"Mobx is a great alternative to something like Redux if you merely have issues with high frequency events that you want to map 1:1 with your UI, that is you still want to render affected UI elements on every event. It is more effective than Redux in figuring out which UI elements were affected, because mobx uses observables instead of immutability for its reactivity model. However if you are not mappings events to UI 1:1, or you have more complex async logic, the expressive power of RxJS will be a key advantage of using RxStore."))}u.isMDXComponent=!0},178:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,b=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);