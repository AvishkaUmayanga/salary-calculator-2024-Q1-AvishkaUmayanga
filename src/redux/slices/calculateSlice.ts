import { createSlice } from "@reduxjs/toolkit";

interface salaryType{
    basicSalary: number
}

const initialState: salaryType = {
    basicSalary: 0,
}
const calculateSlice = createSlice({
    name: 'calculateSlice',
    initialState,
    reducers: {
        addBasicSalary: (state, action) => {
            state.basicSalary = Number(action.payload)
        },
    }
})

export default calculateSlice.reducer
export const{ addBasicSalary} = calculateSlice.actions