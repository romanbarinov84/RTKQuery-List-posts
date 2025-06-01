import { configureStore } from "@reduxjs/toolkit";
import { PokemonApi } from "./services/pokemonApi";


export const store = configureStore({
    reducer:{
        [PokemonApi.reducerPath] : PokemonApi.reducer,
    },
    middleware: (getDefaultMiddleWare) =>getDefaultMiddleWare().concat(PokemonApi.middleware)
});