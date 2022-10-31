import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    password:''
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
    remove: (state,action) => {
      state.name = '';
      state.password = '';
    },
  },
});

export const { update, remove } = userSlice.actions;
export const logedUser = (state) => state.user

export default userSlice.reducer;