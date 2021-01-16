import storage from 'redux-persist/lib/storage';

interface Persist {
  key: string;
  storage: any;
}

export const persistConfig: Persist = {
  key: 'root',
  storage: storage,
};
