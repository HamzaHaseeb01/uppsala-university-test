import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import formReducer from "../form";
import authReducer from "../auth";

export default configureStore({
  reducer: {
    form: formReducer,
    auth:authReducer
  },
});
