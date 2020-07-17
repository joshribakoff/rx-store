import { RootAppStore } from '../types';
import { Subject, BehaviorSubject } from 'rxjs';
import { scanSum } from './operators/scan-sum';

export const createStoreValue = () => {
  const counterChange$ = new Subject<number>();

  /** Our context value, which contains subjects & observables */
  const storeValue: RootAppStore = {
    counterChange$,
    count$: new BehaviorSubject(0),
    localCount$: counterChange$.pipe(scanSum()),
  };
  return storeValue;
};
