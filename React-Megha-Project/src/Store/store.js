import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

 const store = configureStore({
    reducer:{
        auth : authSlice
        // TODO: add more Slice for the post
    }
});

export default store