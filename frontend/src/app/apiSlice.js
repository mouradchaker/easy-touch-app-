import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://easytouch.onrender.com/order",
  }),
  endpoints: (builder) => ({
    getDishes: builder.query({
      query: () => "",
    }),
    getOrders: builder.query({
      query: () => "/final",
    }),
    addOrder: builder.mutation({
      query: (data) => ({
        url: "/final",
        method: "POST",
        body: data,
      }),
    }),
    addDish: builder.mutation({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
    }),
    deleteDish: builder.mutation({
      query: (data) => ({
        url: `/${data}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetDishesQuery,
  useAddDishMutation,
  useDeleteDishMutation,
  useAddOrderMutation,
  useGetOrdersQuery,
} = apiSlice;
