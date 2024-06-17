import { configureStore } from "@reduxjs/toolkit";
import { filmApi } from "./filmsApi";

export const store = configureStore({
  reducer: {
    [filmApi.reducerPath]: filmApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(filmApi.middleware),
});
