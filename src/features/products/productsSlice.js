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
        filtered: [],
        // relate: []
    },
    reducers: {
        filterByPrice: (state, {payload}) => {
            state.filtered = state.list.filter(({price}) => price < payload)
        }
    },
    extraReducers: (builder) =>  {
        builder.addCase(getProducts.pending,(state, {payload}) => {
            state.status = 'loading'
            state.error = ''
        })
        builder.addCase(getProducts.rejected,(state, {payload}) => {
            state.status = 'error'
            state.error = payload
        })
        builder.addCase(getProducts.fulfilled,(state, {payload}) => {
            state.status = 'done'
            state.list = payload
        })
    }
})

export const {filterByPrice} = productsSlice.actions

export default productsSlice.reducer

