import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from 'lib/index';

const initialState:Array<CartItem> = []
const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const index = state.findIndex(item => item.id===action.payload.id)
            if(index>=0)
            state[index] = {
                ...action.payload,
                amount:state[index].amount+1,
                totalPay:state[index].totalPay+state[index].price
            }
            else
            state.push(action.payload);
        },
        remove : (state, action: PayloadAction<string>) => {
            state = state.filter(item => item.id!==action.payload);
            return state;
        },
        increase : (state, action: PayloadAction<string>) => {
            const index = state.findIndex(item => item.id===action.payload)
            if(index>=0)
            state[index] = {
                ...state[index],
                amount:state[index].amount+1,
                totalPay:state[index].totalPay+state[index].price
            }
        },
        decrease : (state, action: PayloadAction<string>) => {
            const index = state.findIndex(item => item.id===action.payload)
            if(index>=0)
            state[index] = {
                ...state[index],
                amount:state[index].amount-1,
                totalPay:state[index].totalPay-state[index].price
            }
        }
    }
});
const {actions, reducer} = cart;
export const {addToCart, remove, increase, decrease} = actions;
export default reducer;