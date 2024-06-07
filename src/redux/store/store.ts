import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore }  from "redux-persist"
import earningSliceReducer from "../slices/earningSlice";
import storage from "redux-persist/lib/storage";
import deductionSliceReducer from "../slices/deductionSlice";
import calculateSliceReducer from "../slices/calculateSlice";

const rootReducer = combineReducers({
    earningSlice: earningSliceReducer,
    deductionSlice: deductionSliceReducer,
    calculateSlice: calculateSliceReducer,
})

const persistConfig ={
    key: 'root',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store)