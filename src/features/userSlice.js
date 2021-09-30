import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: '',
            surname: '',
            email: '',
            password: ''
        },
        physical: {
            weight: "",
            height: ""
        },
        days: [],
        goal: 0,
        /*
            0: lose weight,
            1: build muscle,
            2: stay healthy 
        */
    },
    reducers: {
        setPhysical: (state, action) => {
            state.physical = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setDays: (state, action) => {
            state.days = action.payload;
        },
        setGoal: (state, action) => {
            state.goal = action.payload;
        },
        clear: (state) => {
            state.user = {
                name: '',
                surname: '',
                email: '',
                password: ''
            }
            state.physical = {
                weight: "",
                height: ""
            }
            state.days = []
            state.goal = 0
        }
    },
});

export const { setPhysical, setUser, setDays, setGoal, clear } = userSlice.actions;
export const getUser = (state) => state.user.user;
export const getPhysical = (state) => state.user.physical;
export const getDays = (state) => state.user.days;
export const getGoal = (state) => state.user.goal;
export default userSlice.reducer;