import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedArea:""
}

export const areaSlice = createSlice({
    name: 'area',
    initialState,
    reducers: {
        switchArea:(state,action)=>
        {
            state.selectedArea=action.payload
        }}
    })
  export const { switchArea } = areaSlice.actions

export default areaSlice.reducer