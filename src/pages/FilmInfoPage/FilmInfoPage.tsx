import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI KIT/Title/Title";
import { buttons, dataFilmInfoPage } from "../../data";
import "./filmInfoPage.scss";
import Sidebar from "../../components/SideBar/Sidebar";
import FilmsList from "./FilmsList/FilmsList";
import { useGetFilmsQuery } from "../../redux/filmsApi";
import { RootState } from "../../redux/store";
import { useResizeWidth } from "../../hooks/useResizeWidth";

const FilmInfoPage = () => {
  const filters = useSelector((state: RootState) => state.filters.filters);
  const [query, setQuery] = useState({
    page: 1,
    limit: 50,
    sortField: "",
  });

  const { data: filmsData, isFetching } = useGetFilmsQuery(query);

  useEffect(() => {
    if (filters.length > 0) {
      const sortFilter = filters[0];
      setQuery((prevQuery) => ({
        ...prevQuery,
        sortField: sortFilter.value,
      }));
    } else {
      setQuery((prevQuery) => ({
        ...prevQuery,
        sortField: "",
      }));
    }
  }, [filters]);
  const screenTablet = useResizeWidth(800);
  return (
    <main className="filmInfoPage">
      <Layout>
        <div className="container-filmInfoPage">
          <Title
            title="Все списки"
            buttons={dataFilmInfoPage}
            link={"/lists/categories/movies/1"}
          />
          <div className="container-main">
        {  !screenTablet &&  <div className="container-sidebar">
              <Sidebar buttons={buttons} />
            </div>}
            <div className="container-films">
              <FilmsList />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default FilmInfoPage;
