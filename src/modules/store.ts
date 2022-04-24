import { configureStore } from '@reduxjs/toolkit';
import myLogger from '../middlewares/myLogger';
import counter from './counter/counter';
import { todosSlice } from './todos/todos';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { logger } from "redux-logger";

const reducers = {
    counter,
    todos: todosSlice.reducer
}

const rootReducer = combineReducers(reducers);

// export const store = configureStore({
//     reducer: reducers,
// });

export const store = createStore(rootReducer, applyMiddleware(myLogger, logger));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;