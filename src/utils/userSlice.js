import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    //when User Signed In, this` action will be dispatched
    addUser: (state, action) => {
      return action.payload;
    },
    //when User Signed out, this` action will be dispatched
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice;
