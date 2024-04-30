import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 25,
    message: 'Hello World'
  },
  reducers: {}
})

export default counterSlice.reducer
