import {createSlice,configureStore} from "@reduxjs/toolkit"

const data=[];

const userSlice=createSlice({
    name:"user",
    initialState:data,
    reducers:{
        addpeople:(state,action)=>{
         return [...state,action.payload]
        },
        removepeople:(state,action)=>{
           return state.filter(item=>item.name!=action.payload)
        }
    }
})

const store=configureStore({
    reducer:{
        user:userSlice.reducer
    }
})

export const {addpeople,removepeople} = userSlice.actions
export default store;