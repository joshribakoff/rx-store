---
id: principles
title: "Principles"
---

- Only render/deliver updates for what changed, nothing more.
- Only deals with events, not state.
- Work with the RxJS API directly, this is not a "wrapper" on top of Rxjs.
- Derive state "up" instead of "down" (read on).

## Deriving state "up"

In a traditional Redux app, you may be used to paring down the state using selectors, or deriving state "down".

When thinking & working reactively, first think about the stream you want, and work backwards from that. The result is you write code that builds the state "up".

Example:

```tsx
const allClick$ = merge(myClick$, yourClick$);
```

In this example we're working backwards, we wanted a stream of all the clicks, so we defined it. Then we assigned the result of merging two other streams. This merge operator builds "up" the state.

Compare this to Redux change detection:

```tsx
const mapStateToProps = (state) => ({
  user: state.user,
  page: state.page,
});
```

With Redux, you start out with the top level state, and pared it "down" to the subset of state you wanted. This works fine until you have a larger app where running all `mapStateToProps` on every state change in the entire app becomes unwieldy. It is also prone to unwanted renders, imagine the `page` state looks like this:

```
{
    name: 'Test',
    url: '/test',
}
```

Now imagine someone comes along & adds the current time to this object, in a manner where it updates every 100ms (10x a second):

```
{
    name: 'Test',
    url: '/test',
    time: 1592539673319
}
```

With the naive `mapStateToProps` function above, your component would re-render with a new `page` object 10x a second, even if all the component actually renders is the page's `name`.

With `Rx Store`, we do not have 1 top level state object that is always changing, which we have to pare down & memoize. Instead, we have many low level things updating independantly, and we must subscribe to, merge, or combine them individually, allowing fine grained control of what updates.
