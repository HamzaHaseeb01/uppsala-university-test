import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginFunction = createAsyncThunk(
  "/user/signIn",
  async (user, thunkAPI) => {
    try {
      
      const response = await axios.post(
        "https://beta.u-careplatform.se/api/accounts/login/",
        user,
        {
          withCredentials: true,
        }
      );
      
    } catch (err) {
      
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data.Invalid,
          status: err.response.status,
        });
      } else {
        return thunkAPI.rejectWithValue({
          err: "Network Error",
        });
      }
    }
  }
);

const form = createSlice({
  name: "auth",
  initialState: {
    username: "",
    password: "",
    isLogged: false,
    loading: false,
  },
  reducers: {
    setState: (state, { payload: { field, value } }) => {
      state[field] = value;
    },
  },
  extraReducers: {
    [LoginFunction.pending]: (state, action) => {
      state.loading = true;
      state.isLogged = false;
    },
    [LoginFunction.fulfilled]: (state, action) => {
      
      state.loading = false;
      state.isLogged = true;
    },
    [LoginFunction.rejected]: (state, action) => {
      

      state.loading = false;
      state.isLogged = false;
    },
  },
});

const { reducer, actions } = form;

export const { setState } = actions;
export default reducer;
