import { scan, startWith, mergeMap, delayWhen } from 'rxjs/operators';
import { Effect } from '@rx-store/core';
import { AppContextValue } from '../../app-context-value.interface';
import { timer, merge, range, Observable } from 'rxjs';

const animateNumbers: (count: number) => Effect<AppContextValue> = (
  count
) => (): Observable<number> =>
  range(0, count).pipe(
    delayWhen((value) => timer(value * 1000))
    // withLatestFrom(sources.time$()), // this is just here so you can see the "devtools" shows we used a source
    // map(([a]) => a)
  );

/**
 * Rx Store will subscribe to the effect for us.
 *
 * While the effect is subscribed, values emitted on the `counterChange$`
 * source will be scanned over, the emitted `1` and `-1` values will be summed
 * (starting with 0), and the current sum will be emitted onto the count$ sink.
 *
 * The effect will remain subscribed while the <Manager /> component is mounted.
 */
export const counter: Effect<AppContextValue> = ({
  sources,
  sinks,
  spawnEffect,
}) =>
  sources.counterChange$().pipe(
    scan((acc, val) => acc + val, 0),
    startWith(0),
    mergeMap((count) =>
      spawnEffect(animateNumbers(count), { name: 'count-up' })
    ),
    sinks.count$()
  );

export const time: Effect<AppContextValue> = ({ sinks }) =>
  timer(0, 1000).pipe(sinks.time$());

export const appRootEffect: Effect<AppContextValue> = ({ spawnEffect }) =>
  merge(
    spawnEffect(time, { name: 'time' }),
    spawnEffect(counter, { name: 'counter' })
  );
