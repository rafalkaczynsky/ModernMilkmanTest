import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createStore, applyMiddleware, AnyAction } from 'redux';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistReducer, persistStore, Persistor } from 'redux-persist';
import appReducer from './reducers';
import { persistConfig } from './persist';

type LoggerType = ThunkMiddleware<{}, AnyAction, undefined> | any;

const logger: LoggerType = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

let allMiddleware = [thunk];
allMiddleware.push(logger);

const middleware = applyMiddleware(...allMiddleware);
const persistedReducer = persistReducer(persistConfig, appReducer);


export const store: any = createStore(persistedReducer, composeWithDevTools(middleware));
export const persistor: Persistor  = persistStore(store);

