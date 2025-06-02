import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "./services/postsApi";


export const store = configureStore({
    reducer:{
      [postsApi.reducerPath] : postsApi.reducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(postsApi.middleware)
})

 setupListeners(store.dispatch);