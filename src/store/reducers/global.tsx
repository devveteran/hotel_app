import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
    numCamera: number,
}

const initialState: GlobalState = {
    numCamera: 4,
}

const GlobalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setNumCamera: (state, action:PayloadAction<number>) => {
            state.numCamera = action.payload;
        },
    }
});

export const { setNumCamera } = GlobalSlice.actions;
export default GlobalSlice.reducer;

