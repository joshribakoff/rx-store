import React, { createContext, useEffect, useState, useContext } from "react";
import { Observable } from "rxjs";
import { RxStoreEffect } from "@rx-store/rx-store";

export const context = createContext<any>(null);

/**
 * Mount this at the top of your app.
 *
 * It subscribes your Rx Store's root effect, and provides a context
 * allowing children components to subscribe to the streams in the
 * context value.
 */
export const Provider: React.FC<{
  value: any;
  rootEffect: RxStoreEffect<any>;
}> = ({ children, rootEffect, value }) => {
  useEffect(rootEffect(value), [value]);
  return <context.Provider value={value}>{children}</context.Provider>;
};

export function useRxStore<T>(): T {
  const value = useContext(context);
  if (!value) throw new Error();
  return value;
}

/**
 * A react hook for subscribing to an observable
 * it will subscribe to an observable given to it &
 * it will re-render your component anytime the observable
 * emits a value, produces an error, or completes.
 *
 * It will return a tuple of the latest value, the error
 * value, and the completion status (boolean):
 *
 * eg:
 *
 * subject.next(1)
 * subject.next(2)
 * subject.next(3)
 * subject.error('foo')
 *
 * In your component:
 *
 * const [count, error, complete] = useSubscription(obs$)
 * console.log({count, error, complete})
 *
 * Your component will render & log: 1, 2, 3, foo...
 */
export function useSubscription<T>(
  source: Observable<T>
): [T | undefined, any, boolean] {
  const [next, setNext] = useState<T | undefined>();
  const [error, setError] = useState<any>();
  const [complete, setComplete] = useState<boolean>(false);
  useEffect(() => {
    const subscription = source.subscribe(
      (value) => setNext(value),
      (error) => setError(error),
      () => setComplete(true)
    );
    return subscription.unsubscribe;
  }, [source]);
  return [next, error, complete];
}

export function withSubscription<T>(
  WrappedComponent: React.ComponentType<{
    next: T;
    error: any;
    complete: boolean;
  }>,
  source: Observable<T>
) {
  const [next, error, complete] = useSubscription<T>(source);
  return (
    <WrappedComponent
      next={next}
      error={error}
      complete={complete}
    ></WrappedComponent>
  );
}