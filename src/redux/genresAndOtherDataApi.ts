import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const genresAndOtherDataApi = createApi({
  reducerPath: "genresAndOtherDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1.4/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("X-API-KEY", "H0FEP1B-H6V4ZGG-GK9AAE2-NX5N2EJ");
      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllGenresFilms: build.query({
      query: () =>
        "https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name",
    }),
    getAllCountriesFilms : build.query({
      query: () =>
        "https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=countries.name",
    }),
  }),
});
export const { useGetAllGenresFilmsQuery, useGetAllCountriesFilmsQuery} = genresAndOtherDataApi
