import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_PATH }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: ({ name, username, email, phone, password }) => ({
        url: "/users/signup",
        method: "POST",
        body: { name, username, email, phone, password },
      }),
    }),

    login: builder.mutation({
      query: ({ phone, password }) => ({
        url: "/users/login",
        method: "POST",
        body: { phone, password },
      }),
    }),

    
    // ...other endpoints
  }),
});

export const { useSignupMutation, useLoginMutation } = authApi;
