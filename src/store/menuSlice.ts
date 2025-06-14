import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface MenuState {
  items: MenuItem[];
  loading: boolean;
  error: string | null;
  selectedCategory: string | null;
}

const initialState: MenuState = {
  items: [],
  loading: false,
  error: null,
  selectedCategory: 'Dessert',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<MenuItem[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setItems, setLoading, setError, setSelectedCategory } = menuSlice.actions;
export default menuSlice.reducer;