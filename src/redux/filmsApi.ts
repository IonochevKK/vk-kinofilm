import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filmApi = createApi({
  reducerPath: "filmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1.4/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("X-API-KEY", "H0FEP1B-H6V4ZGG-GK9AAE2-NX5N2EJ");
      return headers;
    },
  }),
  endpoints: (build) => ({
    getFilms: build.query({
      query: ({ page, limit }) => `movie?page=${page}&limit=${limit}`,
    }),
    getFilmsTop10: build.query({
      query: () => `https://api.kinopoisk.dev/v1.4/movie?notNullFields=top10`,
    }),
    getCollectionFilms: build.query({
      query: () =>
        `https://api.kinopoisk.dev/v1.4/list?page=1&limit=100&category=%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B`,
    }),
    getCollectionOnlineCinema: build.query({
      query: () =>
        `https://api.kinopoisk.dev/v1.4/list?category=%D0%9E%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80`,
    }),
    getCollectionSerial: build.query({
      query: () =>
        `https://api.kinopoisk.dev/v1.4/list?category=%D0%A1%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B`,
    }),
    getCollectionBonus: build.query({
      query: () =>
        `https://api.kinopoisk.dev/v1.4/list?category=%D0%9F%D1%80%D0%B5%D0%BC%D0%B8%D0%B8`,
    }),
    getCollectionDues: build.query({
      query: () =>
        `https://api.kinopoisk.dev/v1.4/list?category=%D0%A1%D0%B1%D0%BE%D1%80%D1%8B`,
    }),
    getCollectionFilmsWithSlug: build.query({
      query: ({ slug }) => `https://api.kinopoisk.dev/v1.4/list/${slug}`,
    }),
    getCollectionFilmswithSlugList: build.query({
      query: ({ page, slug }) =>
        `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=50&sortField=rating.imdb&sortType=-1&lists=${slug}`,
    }),
    getFilmsWithFilters: build.query({
      query: ({ page, filterFirst, slug }) =>
        `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=50&sortField=${filterFirst}&sortType=1&lists=${slug}`,
    }),
    getFilmsFilterCountry: build.query({
      query: ({ page, country, slug }) =>
        `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=50&countries.name=${country}&lists=${slug}`,
    }),
    getFilmsDataOnIdFilm: build.query({
      query: (id) => `https://api.kinopoisk.dev/v1.4/movie/${id}`,
    }),
    getFilmsDataOnNameFilm: build.query({
      query: (nameFilm) => `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${nameFilm}`,
    }),
  }),
});
export const {
  useGetFilmsQuery,
  useGetFilmsTop10Query,
  useGetCollectionFilmsQuery,
  useGetCollectionOnlineCinemaQuery,
  useGetCollectionDuesQuery,
  useGetCollectionSerialQuery,
  useGetCollectionBonusQuery,
  useGetCollectionFilmsWithSlugQuery,
  useGetCollectionFilmswithSlugListQuery,
  useGetFilmsFilterCountryQuery,
  useGetFilmsWithFiltersQuery,
  useGetFilmsDataOnIdFilmQuery,
  useGetFilmsDataOnNameFilmQuery,
} = filmApi;
