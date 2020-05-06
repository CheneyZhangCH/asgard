import { init, ModelEffects, dispatch } from '@rematch/core';
import * as models from '../models';
import * as Redux from 'redux';
import createLoadingPlugin from '@rematch/loading';

const loading = createLoadingPlugin({
  asNumber: true,
  blacklist: ['count/addOne'],
});

console.log('init', init);
console.log('models', models);
export type M = typeof models;
const store = init<M>({
  models,
  plugins: [loading],
});

export type StoreType = typeof store;
export type DispatchType = RematchDispatch<M>;
export type RootState = RematchRootState<typeof models> & ILoadingPlugin;

export type ExtractRematchStateFromModels<M> = {
  [modelKey in keyof M]: M[modelKey] extends ModelConfig
    ? M[modelKey]['state']
    : never;
};

export type RematchRootState<M> = ExtractRematchStateFromModels<M>;

export interface DispatchProp {
  dispatch: DispatchType;
}

interface ILoadingPlugin {
  loading: {
    models: any;
    effects:
      | ModelEffects<any>
      | ((dispatch: RematchDispatch) => ModelEffects<any>);
    global: number;
  };
}

export type RootStateType = RematchRootState<typeof models> & ILoadingPlugin;

// rewrite rematch dispatch type

export type Models<K extends string = string> = {
  [key in K]: ModelConfig;
};

export interface ModelConfig<S = any, SS = S, K extends string = string> {
  name?: string;
  state: S;
  baseReducer?: (state: SS, action: Action) => SS;
  reducers?: ModelReducers<S>;
  effects?:
    | ModelEffects<any>
    | (<M extends Models<K> | void = void>(
        dispatch: RematchDispatch<M>,
      ) => ModelEffects<any>);
}

export interface ModelReducers<S = any> {
  [key: string]: (state: S, payload: any, meta?: any) => S;
}

export type ExtractRematchDispatchersFromModels<M> = {
  [modelKey in keyof M]: M[modelKey] extends ModelConfig
    ? ExtractRematchDispatchersFromModel<M[modelKey]>
    : never;
};

export interface Action<P = any, M = any> {
  type: string;
  payload?: P;
  meta?: M;
}

export type RematchDispatcher<P = any, M = any> = ([P] extends [void]
  ? (...args: any[]) => Action<any, any>
  : [M] extends [void]
  ? (payload: P) => Action<P, void>
  : (payload: P, meta: M) => Action<P, M>) &
  ((action: any) => Redux.Dispatch<Action<P, M>>) &
  ((action: any) => Redux.Dispatch<Action<P, void>>) &
  ((whatever: any) => Promise<any>) &
  (() => Promise<any>);

export type RematchDispatcherAsync<P = any, M = any, R = void> = ([P] extends [
  void,
]
  ? (...args: any[]) => Promise<any>
  : [M] extends [void]
  ? (payload: P) => Promise<R>
  : (payload: P, meta: M) => Promise<R>) &
  ((action: Action<P, M>) => Promise<any>) &
  ((action: Action<P, void>) => Promise<any>) &
  (() => Promise<any>);

export type ExtractRematchDispatchersFromReducersObject<
  reducers extends ModelReducers<any>
> = {
  [reducerKey in keyof reducers]: ExtractRematchDispatcherFromReducer<
    reducers[reducerKey]
  >;
};

export type ExtractRematchDispatcherFromReducer<R> = R extends () => any
  ? RematchDispatcher<void, void>
  : R extends (state: infer S) => infer S
  ? RematchDispatcher<void, void>
  : R extends (state: infer S, payload: infer P) => infer S
  ? RematchDispatcher<P, void>
  : R extends (state: infer S, payload: infer P, meta: infer M) => infer S
  ? RematchDispatcher<P, M>
  : RematchDispatcher<any, any>;

export type ExtractRematchDispatchersFromEffectsObject<
  effects extends ModelEffects<any>
> = {
  [effectKey in keyof effects]: ExtractRematchDispatcherAsyncFromEffect<
    effects[effectKey]
  >;
};

export type ExtractRematchDispatcherAsyncFromEffect<
  E
> = E extends () => Promise<any>
  ? RematchDispatcherAsync<any, any>
  : E extends (payload: any) => Promise<any>
  ? RematchDispatcherAsync<any, any>
  : E extends (payload: any, meta: infer M) => Promise<any>
  ? RematchDispatcherAsync<any, any>
  : RematchDispatcherAsync<any, any>;

export type ExtractRematchDispatchersFromEffects<
  effects extends ModelConfig['effects']
> = effects extends (...args: any[]) => infer R
  ? R extends ModelEffects<any>
    ? ExtractRematchDispatchersFromEffectsObject<R>
    : {}
  : effects extends ModelEffects<any>
  ? ExtractRematchDispatchersFromEffectsObject<effects>
  : {};

export type ExtractRematchDispatchersFromReducers<
  reducers extends ModelConfig['reducers']
> = ExtractRematchDispatchersFromReducersObject<reducers & {}>;

export type ExtractRematchDispatchersFromModel<
  M extends ModelConfig
> = ExtractRematchDispatchersFromReducers<M['reducers']> &
  ExtractRematchDispatchersFromEffects<M['effects']>;

export type RematchDispatch<M = any> = ExtractRematchDispatchersFromModels<M> &
  (RematchDispatcher | RematchDispatcherAsync) &
  Redux.Dispatch<any>; // for library compatability

window.Store = store;

// const dispatch = store.dispatch;

export { dispatch };
export default store;
