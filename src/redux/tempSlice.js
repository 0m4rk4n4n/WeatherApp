import { createSlice } from '@reduxjs/toolkit'

const initialState = {
selectedTemp:"c"
}

export const tempSlice = createSlice({
    name: 'temp',
    initialState,
    reducers: {
        switchTemp:(state,action)=>
        {
            state.selectedTemp=action.payload
        }}
    })
  export const { switchTemp } = tempSlice.actions

export default tempSlice.reducer