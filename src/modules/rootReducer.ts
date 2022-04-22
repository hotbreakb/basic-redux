import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter/counter";
import todos from "./todos/todos";

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;