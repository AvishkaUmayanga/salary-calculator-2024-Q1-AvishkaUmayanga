import { createSlice } from "@reduxjs/toolkit";

interface salaryType{
    basicSalary: number;
}

const initialState: salaryType = {
    basicSalary: 0,
}
const basicSalarySlice = createSlice({
    name: 'basicSalarySlice',
    initialState,
    reducers: {
        addBasicSalary: (state, action) => {
            state.basicSalary = Number(action.payload);
        },
        clearBasicSalary: (state) => {
            state.basicSalary = 0;
        }
    }
})

export default basicSalarySlice.reducer;
export const{ addBasicSalary, clearBasicSalary} = basicSalarySlice.actions;