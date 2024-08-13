import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux'],
  reducers: {
    // actions
    addTodo: (state, action) => {
      state.push(action.payload.newTodo);
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

const testSlice = createSlice({
  name: 'test',
  initialState: ['Fazer café', 'Estudar Redux'],
  reducers: {
    // actions
    addTodo: (state, action) => {
      state.push(action.payload.newTodo);
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    test: testSlice.reducer,
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
