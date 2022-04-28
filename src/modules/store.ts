import { configureStore } from '@reduxjs/toolkit';
import counter from './counter/counter';
import { todosSlice } from './todos/todos';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from "redux-thunk";
import posts from './posts/posts';
import { githubSlice } from './github/github';

const reducers = {
    counter,
    todos: todosSlice.reducer,
    posts,
    github: githubSlice.reducer,
}

const rootReducer = combineReducers(reducers);

// export const store = configureStore({
//     reducer: reducers,
// });

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;