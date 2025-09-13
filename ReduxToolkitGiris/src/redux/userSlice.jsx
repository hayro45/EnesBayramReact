import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: ['Enes', 'Ahmet'],
    loading: false,
}

export const getAllUsers = createAsyncThunk ('users', async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    return response.data;
}); 

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
       //senkron işlemler için  
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(getAllUsers.rejected, (state) => {
            state.loading = false;
        });
    }
})

export const {  } = userSlice.actions

export default userSlice.reducer
