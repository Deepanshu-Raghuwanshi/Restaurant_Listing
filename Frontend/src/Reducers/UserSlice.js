import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dishes: "",
  Uname: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Uname: (state, action) => {
      state.Uname = action.payload;
    },
    addDish: (state, action) => {
      console.log("from adddish");
      state.Uname = action.payload;
    },
  },
});

export const { Uname, addDish } = UserSlice.actions;

export default UserSlice.reducer;
