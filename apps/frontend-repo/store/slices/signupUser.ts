import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UserSignUp } from "shared";

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

export interface SignUpState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const signupState: SignUpState = {
  isLoading: false,
  isSuccess: false,
  error: null,
};

const loginSlice = createSlice({
  name: "signup",
  initialState: signupState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(RegisterUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        state.isSuccess = true;
      })
      .addCase(RegisterUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isSuccess = false;
      });
  },
});

export default loginSlice;
