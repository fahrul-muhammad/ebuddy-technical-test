import { Action, combineReducers } from "@reduxjs/toolkit";
import storage from "./store";

// reducers
import counterSlice from "./action";

const combineReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});

export const rootReducer = (state: ReturnType<typeof combineReducer> | undefined, action: Action) => {
  return combineReducer(state, action);
};

export const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};
