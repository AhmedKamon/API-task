import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => {
        console.log(action.payload,'payload');
      state.tasks.push(action.payload);
    },
    selectSingleItemWithId: (state, action) => {
        console.log(action.payload,'payload id');
      state.tasks.tasks.filter((item) => item.uid === action.payload);
      console.log(state,'filter')
    },
    removeTasks: (
        state,
        action
      ) => {
        // find the index if remove item
        const index = state.tasks.findIndex(
          (item) => item.uid === action.payload.id
          );
          
          console.log(index,'remove')
        let newTasks = [...state.tasks];
        // remove item from basket
        if (index >= 0) {
            newTasks.splice(index, 1);
        } else {
          console.log(`can not find product ${action.payload.id}`);
        }
        state.tasks = newTasks;
      },
    updateTasks: (
        state,
        action
      ) => {
        // find the index if remove item
        const index = state.tasks.findIndex(
          (item) => {
console.log(action.payload.uid,'item')
            return item.uid === action.payload.uid
          }
          );
          console.log(action.payload.uid)
        console.log(index,'find index');
  
        let newTasks = [...state.tasks];
        // remove item from basket
        if (index >= 0) {
            newTasks.splice(index, 1);
            newTasks.push(action.payload);
        } else {
          console.log(`can not find product ${action.payload.id}`);
        }
        state.tasks = newTasks;
      },
  },
});

export const { addTask, removeTasks,selectSingleItemWithId,updateTasks } = taskSlice.actions;
export const tasksFromStore = (state) => state.task

export default taskSlice.reducer;