import { createSlice } from "@reduxjs/toolkit";
type deductInput = {
    data: string;
    deductBalance: number
}

const initialState = {
    deductionInputs : [] as deductInput[]
}

const deductionSlice = createSlice({
    name: 'deductionSlice',
    initialState,
    reducers: {
        addDeductionInputFields: (state, action) => {
            state.deductionInputs.push(action.payload)
        },
        removeDeductionInputFields: (state, action: {payload: number}) => {
            state.deductionInputs.splice(action.payload, 1)
        },
        getDeductBalance: (state, action: {payload: {balance: number, index: number}}) => {
            state.deductionInputs[action.payload.index].deductBalance = action.payload.balance
        }
    }
})

export default deductionSlice.reducer
export const { addDeductionInputFields, removeDeductionInputFields, getDeductBalance } = deductionSlice.actions