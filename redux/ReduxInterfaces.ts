import { LOGIN, LOGOUT } from "./actionTypes/authActionTypes";

export type ActionTypes = string;

export interface UserInfo {
  dob: string,
  email: string,
  country: string,
  fullName: string,
  password: string,
}

export interface AuthReducer {
  user: UserInfo,
  isUserLoggedIn: boolean,
}

export interface LoginAction {
  type: typeof LOGIN;
  payload: UserInfo
}

export interface LogoutAction {
  type: typeof LOGOUT;
  payload: UserInfo
}

export type AuthActions = LoginAction | LogoutAction;

export type RootReducers = AuthReducer;