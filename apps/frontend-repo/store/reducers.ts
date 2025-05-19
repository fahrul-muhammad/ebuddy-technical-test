import { Action, combineReducers } from "@reduxjs/toolkit";
import storage from "./store";

// reducers
import editUserSlice from "./slices/editUsers";
import getAllUsersSlice from "./slices/getAllUser";
import loginSlice from "./slices/loginUser";
import signupSlice from "./slices/signupUser";

const combineReducer = combineReducers({
  [loginSlice.name]: loginSlice.reducer,
  [signupSlice.name]: signupSlice.reducer,
  [getAllUsersSlice.name]: getAllUsersSlice.reducer,
  [editUserSlice.name]: editUserSlice.reducer,
});

export const rootReducer = (state: ReturnType<typeof combineReducer> | undefined, action: Action) => {
  return combineReducer(state, action);
};

export const persistConfig = {
  key: "root",
  storage,
  whitelist: [loginSlice.name, getAllUsersSlice.name],
};
