import { LOGIN, LOGOUT } from "../actionTypes/authActionTypes";
import { authInitialState } from "../reducers/authReducer";
import { UserInfo } from "../ReduxInterfaces";

export const login = (user: UserInfo) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: authInitialState,
  };
};
