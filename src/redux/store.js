import { configureStore } from '@reduxjs/toolkit'
import contentSlicer from './contentSlice'
export const store = configureStore({
  reducer: {content:contentSlicer},
})