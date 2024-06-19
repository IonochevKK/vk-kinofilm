import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Films from "./components/ListCollectionFilm/Films/Films";
import { useGetCollectionFilmsQuery } from "./redux/filmsApi";
import OnlineCinema from "./components/ListCollectionFilm/OnlineCinema/OnlineCinema";
import Serials from "./components/ListCollectionFilm/Serials/Serials";
import Dues from "./components/ListCollectionFilm/Dues/Dues";
import Bonus from "./components/ListCollectionFilm/Bonus/Bonus";
import FilmInfoPage from "./pages/FilmInfoPage/FilmInfoPage";
import DataForFilmPage from "./pages/DataForFilmPage/DataForFilmPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/lists/categories/movies/1" />}
          />
          <Route path="/lists/movies/:slug" element={<FilmInfoPage />} />
            <Route path="/film/:filmId" element={<DataForFilmPage />} />
          <Route path="/lists/categories/movies/*" element={<Home />}>
            <Route path="1" element={<Films />} />
            <Route path="2" element={<OnlineCinema />} />
            <Route path="3" element={<Serials />} />
            <Route path="4" element={<Dues />} />
            <Route path="5" element={<Bonus />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
