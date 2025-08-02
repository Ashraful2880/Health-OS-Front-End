import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_PATH }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // Get All Users
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "User", id: _id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),
    // Delete User
    deleteUser: builder.mutation({
      query: (userID) => ({
        url: `/users/${userID}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, userID) => [
        { type: "User", id: userID },
        { type: "User", id: "LIST" },
      ],
    }),
    // Make Admin
    makeAdmin: builder.mutation({
      query: (admin) => ({
        url: "/users/makeAdmin",
        method: "PUT",
        body: admin,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useMakeAdminMutation,
} = userApi;
