import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/axios";

export  const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/categories`)
            return res.data
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        status: '',
        error: ''
    },
    extraReducers: (builder) =>  {
        builder.addCase(getCategories.pending,(state, action) => {
            state.status = 'loading'
            state.error = ''
        })
        builder.addCase(getCategories.rejected,(state, action) => {
            state.status = 'error'
            state.error = action.payload
        })
        builder.addCase(getCategories.fulfilled,(state, action) => {
            state.status = 'done'
            state.list = action.payload
        })
    }
})

export default categoriesSlice.reducer

