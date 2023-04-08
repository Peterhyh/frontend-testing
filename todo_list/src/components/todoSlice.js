import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';



const initialState = {
    items: [
        { id: uuid(), name: 'milk' },
        { id: uuid(), name: 'coffee' },
        { id: uuid(), name: 'mochi' },
    ]
};

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            return {
                ...state,
                items: state.items.concat([{ id: uuid(), name: action.payload }])
            };
        },
        removeItem: (state, action) => {
            return {
                ...state,
                items: state.items.filter((item) =>
                    item.id !== action.payload.id

                )
            };
        },
    }
});


console.log(todoSlice);

export const todoReducer = todoSlice.reducer;

export const { addItemm, removeItem } = todoSlice.actions;

//select all the todo items:
export const selectAllItems = (state) => state.todo.items;