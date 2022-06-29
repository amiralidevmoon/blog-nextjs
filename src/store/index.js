import {configureStore} from '@reduxjs/toolkit'
import articleReducer from './slices/articleSlice'
import loadingReducer from './slices/loadingSlice'

export const store = configureStore({
    reducer: {
        articles: articleReducer,
        loading: loadingReducer
    },
})