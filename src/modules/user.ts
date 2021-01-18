import produce from "immer";
import { User } from "../models";

export enum UserTypeKeys {
	SET_USER = "user/SET_USER",
}

export interface State {
	user: User;
}

export const UserInitialState = {
	user: {
		firstName: "anonymous",
		secondName: "anonymous",
	},
};

export interface SetUserAction {
	type: UserTypeKeys.SET_USER;
	payload: User;
}

export type UserActionTypes = SetUserAction;

const user =  (
	state: State = UserInitialState,
	action: UserActionTypes
): State => {
	return produce(state, (draft) => {
		switch (action.type) {
			case UserTypeKeys.SET_USER:
				draft.user = action.payload;
				return draft;
		}
	});
}

export const setUser = (user: User) => (dispatch: any) => {
	dispatch({ type: UserTypeKeys.SET_USER, payload: user });
};

export default user;