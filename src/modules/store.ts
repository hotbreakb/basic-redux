import { configureStore } from '@reduxjs/toolkit';
import counter from './counter/counter';
import { todosSlice } from './todos/todos';

const reducers = {
    counter,
    todos: todosSlice.reducer
}

export const store = configureStore({
    reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;