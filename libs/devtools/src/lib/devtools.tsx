import React, { useState, useMemo, useLayoutEffect, useRef } from 'react';
import { Visualizer } from '@rx-store/visualizer';
import { useSubscription } from '@rx-store/react';
import { filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StoreEvent } from '@rx-store/core';

export interface DevtoolsProps {
  observable: Observable<StoreEvent>;
}

export const Devtools = (props: DevtoolsProps) => {
  const messagesEnd = useRef();
  const [state, setState] = useState(['effect', 'root']);
  const [text, setText] = useState();
  const obs = useMemo(
    () =>
      props.observable.pipe(
        filter((event) => event.type === 'value'),
        filter(
          (event) =>
            (event.to.type === state[0] && event.to.name == state[1]) ||
            (event.from.type === state[0] && event.from.name == state[1])
        ),
        tap((event) => {
          console.log(event);
          setText(
            (text) =>
              text +
              '\n' +
              `${event.from.type}: ${event.from.name} ${event.value}`
          );
        })
      ),
    [state]
  );
  useLayoutEffect(() => {
    messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  }, [text]);
  useSubscription(obs);
  return (
    <div style={{ display: 'flex', height: 1000 }}>
      <Visualizer
        onClick={(...args) => {
          setText('');
          setState(args);
        }}
        storeObservable={props.observable}
      />
      <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
        <h1>{JSON.stringify(state)}</h1>
        <pre style={{ overflow: 'auto' }}>
          {text}{' '}
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={(el) => {
              messagesEnd.current = el;
            }}
          ></div>
        </pre>
      </div>
    </div>
  );
};

export default Devtools;