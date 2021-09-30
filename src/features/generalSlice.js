import { createSlice } from '@reduxjs/toolkit';

export const generalSlice = createSlice({
    name: 'general',
    initialState: {
        current: 0,
        language: "en",
        error: ""
    },
    reducers: {
        setLangauge: (state, action) => {
            state.language = action.payload
        },
        nextPage: (state) => {
            if(state.current === 4){
                return
            } else {
                state.current = state.current + 1
            }
        },
        prevPage: (state) => {
            if(state.current === 0){
                return
            } else {
                state.current = state.current - 1
            }
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        reset: (state) => {
            state.current = 0
            state.error = ""
        }
    },
});

export const { setLangauge, nextPage, prevPage, setError, reset } = generalSlice.actions;
export const getLangauge = (state) => state.general.language;
export const getCurrent = (state) => state.general.current;
export const getError = (state) => state.general.error;
export default generalSlice.reducer;