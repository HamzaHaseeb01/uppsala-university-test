import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CreateQuestion = createAsyncThunk(
  "/user/CreateQuestion",
  async (user, thunkAPI) => {
    try {
      ;
      const response = await axios.post(
        "https://beta.u-careplatform.se/api/contents/",
        user,
        {
          withCredentials: true,
        }
      );
      ;
    } catch (err) {
      ;
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data.detail,
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
  name: "form",
  initialState: {
    category: 0,
    loading: false,
    question: "",
    required: false,
    introduction: "",
    error: "",
    isError: false,
    success: false,
    options: [
      { text: "", weight: 0, placeholder: "Never" },
      { text: "", weight: 0, placeholder: "Every Day" },
      { text: "", weight: 0, placeholder: "I donot remember" },
    ],
  },
  reducers: {
    setState: (state, { payload: { field, value } }) => {
      state[field] = value;
    },
    setStateForOptions: (state, { payload: { field, value, index } }) => {
      state.options[index][field] = value;
    },
    addNewOption: (state, payload) => {
      state.options.push({ text: "", weight: 0, placeholder: "text" });
    },
    deleteOption: (state, { payload: { index } }) => {
      state.options.splice(index, 1);
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
  extraReducers: {
    [CreateQuestion.fulfilled]: (state, action) => {
      ;
      state.loading = false;
      state.success = true;
    },
    [CreateQuestion.rejected]: (state, action) => {
      ;
      state.loading = false;
      state.success = false;
      state.isError = true;
      state.error = action.payload.err;
      ;
    },
    [CreateQuestion.pending]: (state, action) => {
      state.loading = true;
      state.success = false;
    },
  },
});

const { reducer, actions } = form;

export const {
  setState,
  setStateForOptions,
  addNewOption,
  deleteOption,
  setCategory,
} = actions;
export default reducer;
