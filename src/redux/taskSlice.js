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
    removeTasks: (
        state,
        action
      ) => {
        // find the index if remove item
        const index = state.tasks.findIndex(
          (item) => item.uid === action.payload.id
        );
  
        let newTasks = [...state.tasks];
        // remove item from basket
        if (index >= 0) {
            newTasks.splice(index, 1);
        } else {
          console.log(`can not find product ${action.payload.id}`);
        }
        state.tasks = newTasks;
      },
  },
});

export const { addTask, removeTasks } = taskSlice.actions;
export const tasksFromStore = (state) => state.task
export default taskSlice.reducer;