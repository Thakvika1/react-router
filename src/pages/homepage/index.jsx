import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const nameApi = createApi({
  reducerPath: "anything",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: "/url",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery } = nameApi;
export { nameApi };
