import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE ="2048-FTB-ET-WEB-AM";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

const api = createApi({
  //NEW
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Puppy"],
  endpoints: (builder) => ({
    getAllPuppies: builder.query({
      query: () => "players",
      providesTags: ["Players"],
    }),
  }),
});
//NEW

export const {
  useGetAllPuppiesQuery,
} = api;
export default api;
