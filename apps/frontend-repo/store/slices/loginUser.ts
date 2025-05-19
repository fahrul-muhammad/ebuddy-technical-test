import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UserLogin, UserSignUp } from "shared";

export const LoginUser = createAsyncThunk("api/signin", async (payload: UserLogin, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await axios.post("api/signin", {
      email: payload.email,
      password: payload.password,
    });
    return fulfillWithValue(response.data);
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const RegisterUser = createAsyncThunk("api/signup", async (payload: UserSignUp, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await axios.post("api/signup", {
      email: payload.email,
      password: payload.password,
      fullName: payload.fullName,
    });
    return fulfillWithValue(response.data);
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export interface LoginState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  token: string;
}

const loginState: LoginState = {
  token: "",
  isLoading: false,
  isSuccess: false,
  error: null,
};

const loginSlice = createSlice({
  name: "users",
  initialState: loginState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(LoginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.error = null;
        state.isSuccess = true;
      })
      .addCase(LoginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.token = "";
        state.isSuccess = false;
      });
  },
});

export default loginSlice;
