import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UserUpdate } from "shared";

export const editUser = createAsyncThunk("api/edituser", async (payload: { newData: UserUpdate; token: string }, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await axios.put("api/edituser", {
      body: payload.newData,
      headers: {
        Authorization: `Bearer ${payload.token}`,
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

export interface EditUserState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const editUserState: EditUserState = {
  isLoading: false,
  isSuccess: false,
  error: null,
};

const editUserSlice = createSlice({
  name: "edituser",
  initialState: editUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(editUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        state.isSuccess = true;
      })
      .addCase(editUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isSuccess = false;
      });
  },
});

export default editUserSlice;
