import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/axios";

export  const getUser = createAsyncThunk(
    'categories/getUser',
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

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: [],
        cart: [],
        status: '',
        error: ''
    },
    reducers: {
        addItemToCart: (state,{payload}) => {
            let newCart = [...state.cart]
            const found = state.cart.find(({id}) => id === payload.id)
            if (found) {
                newCart = newCart.map((item) => {
                    return item.id === payload.id ? {...item, count: payload.count || item.count + 1} : item
                })
            } else  {
                newCart.push({...payload, count: 1})
            }
            state.cart = newCart
        }
    },
    extraReducers: (builder) =>  {
        // builder.addCase(getCategories.pending,(state, action) => {
        //     state.status = 'loading'
        //     state.error = ''
        // })
        // builder.addCase(getCategories.rejected,(state, action) => {
        //     state.status = 'error'
        //     state.error = action.payload
        // })
        // builder.addCase(getCategories.fulfilled,(state, action) => {
        //     state.status = 'done'
        //     state.list = action.payload
        // })
    }
})
export const {addItemToCart} = userSlice.actions
export default userSlice.reducer

