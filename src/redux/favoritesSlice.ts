import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataFilm } from "../types/interface";


const saveState = (state: dataFilm[]) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("favorites", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};


const loadState = (): dataFilm[] | undefined => {
  try {
    const serializedState = localStorage.getItem("favorites");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};

interface FavoritesState {
  data: dataFilm[];
}


const initialState: FavoritesState = {
  data: loadState() || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<dataFilm>) {
      state.data.push(action.payload);
      saveState(state.data); 
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.data = state.data.filter((film) => film.id !== action.payload);
      saveState(state.data); 
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
