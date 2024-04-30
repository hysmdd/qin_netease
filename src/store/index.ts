import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type getStateFnType = typeof store.getState
export type IRootState = ReturnType<getStateFnType>

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export default store
