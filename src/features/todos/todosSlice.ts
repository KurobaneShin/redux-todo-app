import { createSlice } from "@reduxjs/toolkit";

export interface ToDoState {
  id: number;
  name: string;
  done: boolean;
}

const initialState: ToDoState[] = [
  { id: 1, name: "Comprar comida", done: true },
  { id: 2, name: "Almoçar", done: false },
];
export const todosSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.push(action.payload);
    },
    toggleDone: (state, action) => {
      let todo = state.find((todo) => todo.id === action.payload);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      todo ? (todo.done = !todo.done) : null;
    },
    removeItem: (state, action) => {
      let todo = [...state];
      todo = todo.filter((item) => item.id !== action.payload);
      return todo;
    },
  },
});

export const { increment, toggleDone, removeItem } = todosSlice.actions;

export default todosSlice.reducer;
