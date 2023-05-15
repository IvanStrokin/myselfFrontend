import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'

import { yasamApi } from '../api/api'

export const store = configureStore({
    reducer: {
      [yasamApi.reducerPath]: yasamApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(yasamApi.middleware),
  })
  

    setupListeners(store.dispatch)