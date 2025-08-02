import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_PATH }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    // Get All Product Category List
    getProductCategories: builder.query({
      query: () => "/productsCategory",
    }),

    // Get All Products
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Product", id: _id })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),

    // Get Single Product By category Search
    getProductsByCategory: builder.query({
      query: (category) => `/products/?category=${category}`,
    }),

    // Get Single Product By ID
    getProductById: builder.query({
      query: (productId) => `/products/${productId}`,
    }),

    // Delete Product
    deleteProduct: builder.mutation({
      query: (productID) => ({
        url: `/products/${productID}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, productID) => [
        { type: "Product", id: productID },
        { type: "Product", id: "LIST" },
      ],
    }),

    // Add Product
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),

    // Update Product
    updateProduct: builder.mutation({
      query: ({ productID, updateProduct }) => ({
        url: `/products/${productID}`,
        method: "PUT",
        body: updateProduct,
      }),
      invalidatesTags: (result, error, { productID }) => [
        { type: "Product", id: productID },
        { type: "Product", id: "LIST" },
      ],
    }),

    // Get Best Selling Products
    getBestSellingProducts: builder.query({
      query: () => "/products/bestSelling",
    }),

    // Get Featured Product
    getFeaturedProducts: builder.query({
      query: () => "/products/featured",
    }),

    // Get Trending Products
    getTopTrendingProducts: builder.query({
      query: () => "/products/topTrending",
    }),
    // Get New Arrival Products
    getNewArrivalProducts: builder.query({
      query: () => "/products/newArrival",
    }),
  }),
});

export const {
  useGetProductByIdQuery,
  useGetAllProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useAddProductMutation,
  useGetFeaturedProductsQuery,
  useGetProductCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetNewArrivalProductsQuery,
  useGetBestSellingProductsQuery,
  useGetTopTrendingProductsQuery,
} = productApi;
