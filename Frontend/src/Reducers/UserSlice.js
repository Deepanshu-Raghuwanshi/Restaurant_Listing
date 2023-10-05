import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Oname: "",
  Uname: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Uname: (state, action) => {
      state.Uname = action.payload;
    },
  },
});

export const { Uname } = UserSlice.actions;

export default UserSlice.reducer;
