import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice";
import taskReducer from "./taskSlice";
import memberReducer from "./memberSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        task: taskReducer,
        member: memberReducer,
      },
})