import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_PATH }),
  tagTypes: ["Customer"],
  endpoints: (builder) => ({
    // Get All Customers
    getAllCustomers: builder.query({
      query: () => "/customers",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Customer", id: _id })),
              { type: "Customer", id: "LIST" },
            ]
          : [{ type: "Customer", id: "LIST" }],
    }),
    // Get Single Customer
    getSingleCustomer: builder.query({
      query: (customerID) => `/customers/${customerID}`,
      providesTags: (result, error, customerID) => [
        { type: "Customer", id: customerID },
      ],
    }),
    // Add Customer
    addCustomer: builder.mutation({
      query: (newData) => ({
        url: "/customers",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: [{ type: "Customer", id: "LIST" }],
    }),
    // Delete Customer
    deleteCustomer: builder.mutation({
      query: (customerID) => ({
        url: `/customers/${customerID}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, customerID) => [
        { type: "Customer", id: customerID },
        { type: "Customer", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetAllCustomersQuery,
  useGetSingleCustomerQuery,
  useAddCustomerMutation,
  useDeleteCustomerMutation,
} = customerApi;
