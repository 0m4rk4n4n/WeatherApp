import { configureStore,combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import tempReducer from './tempSlice'
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import areaSlice from './areaSlice'
const persistConfig = {
  key: 'root',
  version: 1,
  storage

}
const rootReducer=combineReducers({temp:tempReducer,area:areaSlice}) // combining the area and temp reducers to persist the state
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer:persistedReducer, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
})
export const persistor=persistStore(store)