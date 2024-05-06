import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import {
  TypedUseSelectorHook,
  shallowEqual,
  useDispatch,
  useSelector
} from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type getStateFnType = typeof store.getState
type IRootState = ReturnType<getStateFnType>
type getDispatchFnType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => getDispatchFnType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
