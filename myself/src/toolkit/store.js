import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { yasamApi } from '../api/api'
import radioReducer from '../reducer/RadioSlice'

export const store = configureStore({
    reducer: {
      [yasamApi.reducerPath]: yasamApi.reducer,
      radioReducer
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(yasamApi.middleware),
  })
  

    setupListeners(store.dispatch)