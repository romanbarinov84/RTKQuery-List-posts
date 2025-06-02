import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const postsApi = createApi({
    reducerPath:"postsApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
    endpoints: (builder) => ({

        getPosts: builder.query({
            query: () => "posts"
        }),

        getPostsById:builder.query({
            query: (id) => `posts/${id}`
        }),

        createdPosts: builder.mutation({
            query:(newPost) => ({
                url:"posts",
                method:"POST",
                body:newPost,
            })
        }),

        updatedPosts: builder.mutation({
            query:(id) => ({
                url:`posts/${id}`,
                method:"DELETE",
                
            })
        }),

        deletedPosts: builder.mutation({
            query:(id, ...rest) => ({
                url:`posts/${id}`,
                method:"PUT",
                body:rest,
            })
        })
    })
})



export const {useGetPostsQuery,useGetPostsByIdQuery,useUpdatedPostsMutation,useCreatedPostsMutation,useDeletedPostsMutation,usePrefetch} = postsApi;