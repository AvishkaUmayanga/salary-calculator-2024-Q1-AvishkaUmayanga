import { createSlice } from "@reduxjs/toolkit";

type EarningInput = {
    data: string;
    isChecked: boolean;
    earnBalance: number;
    earnTitle: string;
}

const initialState = {
    earnInputs : [] as EarningInput[],
}

const earningSlice = createSlice({
    name: 'earningSlice',
    initialState,
    reducers: {
        addEarnInputField: (state, action) => {
            state.earnInputs.push(action.payload);
        },
        removeEarnInputField: (state, action: {payload: number}) => {
            state.earnInputs.splice(action.payload, 1);
        },
        changeIsChecked: (state, action: {payload: number}) => {
            state.earnInputs[action.payload].isChecked = !state.earnInputs[action.payload].isChecked;
        },
        addEarnBalance: (state, action: {payload: {balance: number, index: number}}) => {
            state.earnInputs[action.payload.index].earnBalance = action.payload.balance;
        },
        addEarnTitle: (state, action: {payload: {title: string, index: number}}) => {
            state.earnInputs[action.payload.index].earnTitle = action.payload.title;
        },
        clearEarnings: (state) => {
            state.earnInputs = [];
        }
    }
})

export default earningSlice.reducer;
export const { addEarnInputField, removeEarnInputField, changeIsChecked, addEarnBalance, addEarnTitle, clearEarnings } = earningSlice.actions;