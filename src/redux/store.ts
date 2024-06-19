import { configureStore } from "@reduxjs/toolkit";
import { filmApi } from "./filmsApi";
import { genresAndOtherDataApi } from "./genresAndOtherDataApi";
import filterReducer from "./filters-slice";
import favoritesReducer from "./favoritesSlice";
export const store = configureStore({
  reducer: {
    [filmApi.reducerPath]: filmApi.reducer,
    [genresAndOtherDataApi.reducerPath]: genresAndOtherDataApi.reducer,
    filters: filterReducer,
    favorites: favoritesReducer,
  },

  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware()
      .concat(filmApi.middleware)
      .concat(genresAndOtherDataApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
