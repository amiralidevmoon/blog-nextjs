import {configureStore} from '@reduxjs/toolkit'
import articleReducer from './slices/articleSlice'

export const store = configureStore({
    reducer: {
        articles: articleReducer,
    },
})