import React from "react";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI KIT/Title/Title";
import ListCollectionFilm from "../../components/ListCollectionFilm/ListCollectionFilm";
import { dataOnHomePage } from "../../data";

const Home = () => {
  return (
    <main>
      <Layout>
        <Title title="Списки"  buttons={dataOnHomePage}/>
        <ListCollectionFilm />
      </Layout>
    </main>
  );
};

export default Home;
