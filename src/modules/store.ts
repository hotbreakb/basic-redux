import { configureStore } from '@reduxjs/toolkit';
import counter, { counterSaga } from './counter/counter';
import { todosSlice } from './todos/todos';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from "redux-thunk";
import posts from './posts/posts';
import { githubSlice } from './github/github';
import { all } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { githubSaga } from './github/saga';

export const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const reducers = {
    counter,
    todos: todosSlice.reducer,
    posts,
    github: githubSlice.reducer,
}

const rootReducer = combineReducers(reducers);
export function* rootSaga() {
    yield all([githubSaga()]);
}

// export const store = configureStore({
//     reducer: reducers,
// });

export const store = createStore(
    rootReducer,
    // composeWithDevTools(applyMiddleware(ReduxThunk, logger))
    composeWithDevTools(applyMiddleware(
        ReduxThunk.withExtraArgument({ history: customHistory }),
        sagaMiddleware,
        logger,
    ))
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;