import { AuthActions, AuthReducer } from "../ReduxInterfaces"

export const authInitialState: AuthReducer = {
  isUserLoggedIn: false,
  user: {
    dob:'',
    email: '',
    country: '',
    fullName: 'Manoj B',
    password: '',
  }
}

export const authReducer = (state = authInitialState, action: AuthActions): AuthReducer => {
  switch (action.type) {
    case 'LOGIN': 
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        isUserLoggedIn: false,
        user: authInitialState.user
      }
    default:
      return state;
  }
}