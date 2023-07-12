import { initialSearchParam, SearchParamType } from '@constants/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
    searchParam: SearchParamType,
}

const initialState: GlobalState = {
    searchParam: initialSearchParam,
}

const GlobalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setSearchParam: (state, action:PayloadAction<SearchParamType>) => {
            state.searchParam = {...action.payload};
        },
    }
});

export const { setSearchParam } = GlobalSlice.actions;
export default GlobalSlice.reducer;

