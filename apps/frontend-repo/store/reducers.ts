import { Action, combineReducers } from "@reduxjs/toolkit";
import storage from "./store";

// reducers
import authSlice from "./slices/auth";

const combineReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export const rootReducer = (state: ReturnType<typeof combineReducer> | undefined, action: Action) => {
  return combineReducer(state, action);
};

export const persistConfig = {
  key: "root",
  storage,
  whitelist: [authSlice.name],
};
