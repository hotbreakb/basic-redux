import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// (5) State
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

export type TodosState = Todo[];
const initialState: TodosState = [];

// (7) createSlice로 변환
export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.push(action.payload)
            },
            prepare: ({ text }: { text: string }) => ({
                payload: {
                    id: Date.now(),
                    text,
                    done: false,
                }
            })
        },
        toggleTodo: (
            state: TodosState, action: PayloadAction<{ id: number }>
        ) => {
            const edited = state.find(todo => todo.id === action.payload.id);
            if (edited) edited.done = !edited.done;
        },
        removeTodo: (
            state: TodosState, action: PayloadAction<{ id: number }>
        ) => {
            const editedIndex = state.findIndex(todo => todo.id === action.payload.id);
            if (editedIndex !== -1) state.splice(editedIndex, 1);
        }
    }
})

export const {
    addTodo, toggleTodo, removeTodo
} = todosSlice.actions;