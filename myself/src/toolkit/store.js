import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { yasamApi } from '../api/api'
import radioReducer from '../reducer/RadioSlice'
import testReducer from '../reducer/UserSlice'

export const store = configureStore({
    reducer: {
      [yasamApi.reducerPath]: yasamApi.reducer,
      radioReducer,
      testReducer
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(yasamApi.middleware),
  })
  

    setupListeners(store.dispatch)