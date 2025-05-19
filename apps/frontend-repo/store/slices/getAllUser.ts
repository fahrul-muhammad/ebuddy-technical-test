import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAllUsers = createAsyncThunk("api/getallusers", async (token: string, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await axios.get("api/getallusers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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

export interface UsersData {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  data: [];
}

const usersDataState: UsersData = {
  isLoading: false,
  isSuccess: false,
  error: null,
  data: [],
};

const loginSlice = createSlice({
  name: "usersdata",
  initialState: usersDataState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isSuccess = false;
        state.data = [];
      })
      .addCase(GetAllUsers.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(GetAllUsers.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isSuccess = false;
        state.data = [];
      });
  },
});

export default loginSlice;
