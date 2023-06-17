import { configureStore } from "@reduxjs/toolkit";
import todo from "./feauters/todoSlice";

export const store = configureStore({
  reducer: {
    todo,
  },
});
