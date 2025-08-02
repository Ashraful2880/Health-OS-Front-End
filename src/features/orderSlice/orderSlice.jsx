import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_PATH }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    // Get All Orders
    getAllOrders: builder.query({
      query: () => "/orders",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Order", id: _id })),
              { type: "Order", id: "LIST" },
            ]
          : [{ type: "Order", id: "LIST" }],
    }),
    // Delete Order
    deleteOrder: builder.mutation({
      query: (orderID) => ({
        url: `/orders/${orderID}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, orderID) => [
        { type: "Order", id: orderID },
        { type: "Order", id: "LIST" },
      ],
    }),

    // Update Order Status (Approve/Reject)
    updateOrderStatus: builder.mutation({
      query: ({ orderID, status }) => ({
        url: `/order/${orderID}`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: (result, error, { orderID }) => [
        { type: "Order", id: orderID },
        { type: "Order", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useDeleteOrderMutation,
  useUpdateOrderStatusMutation,
} = orderApi;
