import { configureStore } from '@reduxjs/toolkit'

import api from '../Services/api'
import reducerCart from './reducers/cart'
import reducerFavorite from './reducers/favorite'

export const store = configureStore({
  reducer: {
    cart: reducerCart,
    favorite: reducerFavorite,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
