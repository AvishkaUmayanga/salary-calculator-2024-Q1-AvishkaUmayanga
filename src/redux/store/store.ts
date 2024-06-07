import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, PERSIST }  from "redux-persist"
import earningSliceReducer from "../slices/earningSlice";
import storage from "redux-persist/lib/storage";
import deductionSliceReducer from "../slices/deductionSlice";
import basicSalarySliceReducer from "../slices/basicSalarySlice";

const rootReducer = combineReducers({
    basicSalarySlice: basicSalarySliceReducer,
    earningSlice: earningSliceReducer,
    deductionSlice: deductionSliceReducer,
})

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['basicSalarySlice', 'earningSlice', 'deductionSlice'],
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [PERSIST], 
          },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);