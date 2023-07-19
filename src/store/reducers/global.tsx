import { initialMapViewState, initialSearchParam, MapViewState, SearchParamType } from '@constants/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
    searchParam: SearchParamType,
    mapState: MapViewState,
}

const initialState: GlobalState = {
    searchParam: initialSearchParam,
    mapState: initialMapViewState,
}

const GlobalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setSearchParam: (state, action:PayloadAction<SearchParamType>) => {
            state.searchParam = {...action.payload};
        },
        setMapViewState: (state, action:PayloadAction<MapViewState>) => {
            state.mapState = {...action.payload};
        },
    }
});

export const { setSearchParam, setMapViewState } = GlobalSlice.actions;
export default GlobalSlice.reducer;

