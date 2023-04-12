import { configureStore } from '@reduxjs/toolkit'
import UsersReducer from './store/users/usersSlice';

const store = configureStore({
    reducer: {
        user: UsersReducer,
    }
})

export default store;