import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/noteSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
