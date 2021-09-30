import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice';
import generalSlice from '../features/generalSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        general: generalSlice
    },
});