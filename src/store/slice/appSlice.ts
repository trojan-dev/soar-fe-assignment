import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  pageName: string;
}

const initialState: AppState = {
  pageName: "Overview",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPageName: (state, action: PayloadAction<string>) => {
      state.pageName = action.payload;
    },
  },
});

export const { setPageName } = appSlice.actions;

export default appSlice.reducer;
