import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "members",
  initialState: {
    members: []
  },
  reducers: {
    addMember: (state, action) => {
        console.log(action.payload,'payload');
      state.members.push(action.payload);
    },
    removeMembers: (
        state,
        action
      ) => {
        // find the index if remove item
        const index = state.members.findIndex(
          (item) => item.uid === action.payload.id
        );
  
        let newMembers = [...state.members];
        // remove item from basket
        if (index >= 0) {
            newMembers.splice(index, 1);
        } else {
          console.log(`can not find product ${action.payload.id}`);
        }
        state.members = newMembers;
      },
      updateMembers: (state, action) => {
        // find the index if remove item
        const index = state.members.findIndex((item) => {
          console.log(action.payload.uid, "item");
          return item.uid === action.payload.uid;
        });
        console.log(action.payload.uid);
        console.log(index, "find index");
  
        let newTasks = [...state.members];
        // remove item from basket
        if (index >= 0) {
          newTasks.splice(index, 1);
          newTasks.push(action.payload);
        } else {
          console.log(`can not find product ${action.payload.id}`);
        }
        state.members = newTasks;
      },
  },
});

export const { addMember, removeMembers,updateMembers } = memberSlice.actions;
export const membersFromStore = (state) => state.member
export default memberSlice.reducer;