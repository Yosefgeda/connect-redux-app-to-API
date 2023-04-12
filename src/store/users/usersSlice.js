/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk('users/getUsers', () => {
    return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err))
})

const initialState = {
    users: [
        {
            first: 'Yosef',
            last: 'Geda'
        }
    ],
    isLoading: false,
    error: ''
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload
        }),
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
    }

})

export default usersSlice.reducer;