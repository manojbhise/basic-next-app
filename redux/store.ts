import { combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import {RootReducers} from './ReduxInterfaces'

const rootReducers = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducers>; 
export type AppDispatch = typeof store.dispatch; 

const store = createStore(rootReducers);

export default store;
