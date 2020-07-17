---
id: use-subscription
title: useSubscription()
---

A React hook used to subscribe to any observable or subject in an Rx store.
Your component will re-render whenever each stream emits, errors, or completes.

## Example 1 - consume just the value(s)

```tsx
import { useSubscription, useStore } from "@rx-store/react-rx-store";

function Component() {
  const store = useStore(rootContext);

  // consume just the value(s)
  const [count] = useSubscription(store.count$);
  return <>Counter: {count}</>;
}
```

## Example 2 - consume "next", "error" and "complete"

```tsx
import { useSubscription, useStore } from "@rx-store/react-rx-store";

function Component() {
  const store = useStore(rootContext);

  // or also render error / completion information
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

## Example 3 - Modify observables inline with `.pipe()`:

You can create an observable inline, on the fly, just remember to memoize it otherwise
the `useSubscription()` hook will unsubscibe to the old observable & subscribe to the new observable that gets created on every render!

```tsx
import { useRxStore, useSubscription } from "@rx-store/react-rx-store";

function Component() {
  const store = useRootStore();

  const allClick$ = useMemo(() => merge(store.myClick$, store.yourClick$), [
    store.myClick$,
    store.yourClick$,
  ]);

  const [click] = useSubscription(allClick$);
  console.log(click);

  return null;
}
```
