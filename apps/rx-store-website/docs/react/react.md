---
id: react
title: Usage with React
---

Components can subscribe to, react to, and emit events onto the subjects in your store value. Manager components are generated for each store, which manages the lifecycle of the effects.

## store() factory

```tsx
import { store } from '@rx-store/react';

const value = {};
const { Manager, context } = store({ value });
```

You may have one, or multiple stores. You can nest stores. Child stores can share references to parent store's streams, [as shown in the Manager docs](/api-react/modules/_libs_react_src_lib_manager_.html).

## Nesting Stores

Creating a child store essentially seals off the entire sub-tree mounted within the store's `<Manager />` component. Other components within the app that are mounted outside of or above where the `<Manager />` component are mounted in the tree cannot access the internal RxJS subjects for the child store, nor can they emit values onto them.

Communication upward works much like a callback prop in React. You must explicitly pass subject(s) and observable(s) down from parent store(s) to child store(s), if you want to allow the child store to communicate up to, or consume streams provided by the parent store(s), respectfully.

We recommend starting out with one root store, and nesting stores only tactfully after considering the tradeoffs, so as to avoid the pitfalls of unintentionally building a "spider web" of streams with unnecessary complexity. [Read more about nesting stores, to "seal off" a sub-tree](/api-react/modules/_libs_react_src_lib_manager_.html).

## &lt;Manager /&gt; Component

You create a store using the `store()` factory function, passing in an object with the store value at the `value` property, which is plain javascript object containing RxJS Subjects. The `store()` factory also accepts an optional [root effect](../core/basic-concepts/root-effect) by passing an `effect` property in the object.

You get back a `Manager` component, and a React context. Wrap your app at the top level, or wrap the part of your app where you want the store to run & be available. If the `Manager` unmounts, the store's effect's will all be unsubscribed (torn down). To start out, it's recommended to use the `Manager` as shown here, at the top level of your app and re-export the context:

```tsx
export const rootContext = context;

export default = (
  <Manager>
    <App />
  </Manager>;
)
```

Read more about the [&lt;Manager /&gt; component](/api-react/modules/_libs_react_src_lib_manager_.html) in the API reference.

## Subscribing

### useSubscription hook

In your components, you can access the store, and subscribe to any observable or subject in your store, using the provided hooks:

```tsx
import { useSubscription, useStore } from '@rx-store/react';

function Component() {
  const store = useStore(rootContext);

  // render error / completion information
  const [next, error, complete] = useSubscription(store.websocketMessage$);

  return (
    <>
      Websockets value: {next}
      Websockets error: {error}
      Websockets complete: {complete}
    </>
  );
}
```

Read more about the [useSubscription hook](/api-react/modules/_libs_react_src_lib_use_subscription_.html) in the API reference.

### withSubscription HOC

There is also a [HOC provided](/api-react/modules/_libs_react_src_lib_with_subscription_.html) if you want to use class based components or do not want to use hooks.

## React Example app

Check out the full [example counter app](https://github.com/rx-store/rx-store/tree/master/apps/react-example-counter)
