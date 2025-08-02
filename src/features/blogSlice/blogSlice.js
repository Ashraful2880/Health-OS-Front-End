import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_PATH }),
  endpoints: (builder) => ({
    // Get All Blog List
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
  }),
});

export const { useGetBlogsQuery } = blogApi;
