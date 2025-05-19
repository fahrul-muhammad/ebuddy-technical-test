import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginUser = createAsyncThunk("api/signin", async (payload: { email: string; password: string }, { fulfillWithValue, rejectWithValue }) => {
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

export interface UserState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  token: string;
}

const initialState: UserState = {
  token: "",
  isLoading: false,
  isSuccess: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
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

export default userSlice;
