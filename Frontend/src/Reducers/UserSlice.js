import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  Uname: "",
  dishId: 0,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Uname: (state, action) => {
      state.Uname = action.payload;
    },
    addId: (state, action) => {
      state.id = action.payload;
    },
    addDishId: (state, action) => {
      state.dishId = action.payload;
    },
  },
});

export const { Uname, addId, addDishId } = UserSlice.actions;

export default UserSlice.reducer;
