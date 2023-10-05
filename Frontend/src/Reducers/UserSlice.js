import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  Uname: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Uname: (state, action) => {
      state.Uname = action.payload;
    },
    addId: (state, action) => {
      console.log("from adddish");
      state.id = action.payload;
    },
  },
});

export const { Uname, addId } = UserSlice.actions;

export default UserSlice.reducer;
