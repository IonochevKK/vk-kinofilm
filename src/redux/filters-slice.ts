import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Filter {
  label: string;
  value: string;
  valueName: string;
}

interface FiltersState {
  filters: Filter[];
}

const initialState: FiltersState = {
  filters: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter(state, action: PayloadAction<Filter>) {
      state.filters = [action.payload];
    },
    removeFilter(state, action: PayloadAction<{ label: string }>) {
      state.filters = state.filters.filter(
        (filter) => filter.label !== action.payload.label
      );
    },
    clearFilters(state) {
      state.filters = [];
    },
  },
});

export const { addFilter, removeFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
