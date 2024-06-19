import React from "react";
import Layout from "../../components/Layout/Layout";
import "./features.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CardForTable from "../FilmInfoPage/TableWithFilms/CardForTable/CardForTable";
const Features = () => {
  const data = useSelector((state: RootState) => state.favorites.data);
  return (
    <main className="features-container-1">
      <Layout>
        <div className="container-card-list-1">
          {data?.map((film: any, index: number) => (
            <div className="item" key={film.id}>
              <CardForTable data={film} index={index + 1} />
            </div>
          ))}
        </div>
      </Layout>
    </main>
  );
};

export default Features;
