import { State as StockState } from './stock';
import { State as UserState } from './user';

export interface RootState {
  stock: StockState;
  user: UserState;
  // other sub states if app grows bigger
}