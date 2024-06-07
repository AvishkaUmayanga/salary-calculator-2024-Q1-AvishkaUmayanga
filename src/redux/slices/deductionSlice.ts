import { createSlice } from "@reduxjs/toolkit";
type deductInput = {
    data: string;
    deductBalance: number;
    deductTitle: string;
}

const initialState = {
    deductionInputs : [] as deductInput[]
}

const deductionSlice = createSlice({
    name: 'deductionSlice',
    initialState,
    reducers: {
        addDeductionInputFields: (state, action) => {
            state.deductionInputs.push(action.payload);
        },
        removeDeductionInputFields: (state, action: {payload: number}) => {
            state.deductionInputs.splice(action.payload, 1);
        },
        addDeductBalance: (state, action: {payload: {balance: number, index: number}}) => {
            state.deductionInputs[action.payload.index].deductBalance = action.payload.balance;
        },
        addDeductTitle: (state, action: {payload: {title: string, index: number}}) => {
            state.deductionInputs[action.payload.index].deductTitle = action.payload.title
        },
        clearDeduction: (state) => {
            state.deductionInputs = [];
        }
    }
})

export default deductionSlice.reducer;
export const { addDeductionInputFields, removeDeductionInputFields, addDeductBalance, addDeductTitle, clearDeduction } = deductionSlice.actions;