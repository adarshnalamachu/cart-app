import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        removefromCart:(state,action) =>{
            return state.filter((item)=> item.id !== action.payload.id);
        },
        addtoCart:(state,action) =>{
            console.log(   'adding to cart', action.payload);
            const itemInCart= state.find((item)=> item.id === action.payload.id);
            if(itemInCart){
                itemInCart.quantity++;
            }else{
                state.push({...action.payload, quantity:1});
            }

        },
        incrementQuantity:(state,action) =>{
           const item= state.find((item)=> item.id === action.payload.id);
           if(item){
            item.quantity++;
           }
        },
        decrementQuantity:(state,action) =>{        
            const item= state.find((item)=> item.id === action.payload.id);
            if(item && item.quantity>1){
             item.quantity--;
            }
        },
    }
    })

export const { removefromCart , addtoCart, incrementQuantity, decrementQuantity}= cartSlice.actions

export default cartSlice.reducer