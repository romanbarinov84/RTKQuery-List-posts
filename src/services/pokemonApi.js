import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const PokemonApi = createApi({
    reducerPath:"PokemonAPI",
    baseQuery:fetchBaseQuery({baseUrl:"https://pokeapi.co/api/v2/"}),
    endpoints: (builder) => ({
        getPokemonByName:builder.query({
            query: name => `pokemon/${name}`
        })
    })
})

export const {useGetPokemonByName} = PokemonApi;