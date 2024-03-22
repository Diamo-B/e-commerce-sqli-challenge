import { configureStore } from '@reduxjs/toolkit'
import genReducer from './gen.reducer'
// ...

export const store = configureStore({
  reducer: {
    gen:genReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch