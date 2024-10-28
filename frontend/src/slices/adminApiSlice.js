import { apiSlice } from "./apiSlice";

const ADMIN_URL = "/api/admin";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminUpdateUser: builder.mutation({
      query: () => ({
        url: `${ADMIN_URL}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAdminUpdateUserMutation,
} = userApiSlice;
