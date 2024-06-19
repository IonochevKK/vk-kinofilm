export interface BackDropFilm {
  previewUrl: string;
  url: string;
}

export interface RatingFilm {
  kp?: string | number;
  imdb?: string | number;
  filmCritics?: string | number;
  russianFilmCritics: string | number;
}

export interface CollectionMoviesCover {
  url: string;
  previewUrl: string;
}

interface CountriesFilm {
  name: string;
}
interface GenresForFilm {
  name: string;
}

interface NameForFilm {
  name: string;
  language: string;
  type: string;
}

interface RatingForFilm {
  await: null | string;
  filmCritics: string;
  imdb: string;
  kp: string;
  russianFilmCritics: string;
}
interface VotesForFilm {
  await: null | string;
  filmCritics: string;
  imdb: string;
  kp: string;
  russianFilmCritics: string;
}
export interface dataFilm {
  ageRating: string;
  alternativeName: string;
  poster: BackDropFilm;
  countries: CountriesFilm[];
  description: string;
  enName: string | null;
  genres: GenresForFilm[];
  id: string;
  isSeries: boolean;
  movieLength: string;
  name: string;
  names: NameForFilm;
  rating: RatingForFilm;
  shortDescription: string;
  type: string;
  votes: VotesForFilm;
  year: string;
}