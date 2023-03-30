import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/axios";

export  const getProducts = createAsyncThunk(
    'categories/getProducts',
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/products`)
            return res.data
        } catch (err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        status: '',
        error: '',
        // filter: [],
        // relate: []
    },
    extraReducers: (builder) =>  {
        builder.addCase(getProducts.pending,(state, action) => {
            state.status = 'loading'
            state.error = ''
        })
        builder.addCase(getProducts.rejected,(state, action) => {
            state.status = 'error'
            state.error = action.payload
        })
        builder.addCase(getProducts.fulfilled,(state, action) => {
            state.status = 'done'
            state.list = action.payload
        })
    }
})

export default productsSlice.reducer

