import React from "react";
import Layout from "../../components/Layout/Layout";
import "./dataForFilmPage.scss";
import { useParams } from "react-router-dom";
import {
  useGetFilmsDataOnIdFilmQuery,
  useGetFilmsDataOnNameFilmQuery,
} from "../../redux/filmsApi";
import Text from "../../components/UI KIT/Text/Text";
import Button from "../../components/UI KIT/Button/Button";

const DataForFilmPage = () => {
  const { filmId } = useParams();
  const { data, isFetching } = useGetFilmsDataOnIdFilmQuery(filmId);
  const nameFilm = data?.name;
  const { data: dataName } = useGetFilmsDataOnNameFilmQuery(nameFilm);
  return (
    <main className="DataForFilmPage">
      <div className="container-DataForFilmPage">
        <Layout>
          <div className="grid-container">
            <div className="left">
              <div className="banner-DataForFilmPage-item1">
                <img src={data?.poster.url} alt="" />
              </div>
              <div className="banner-DataForFilmPage-trailer">
                <iframe src={data?.videos?.trailers[0]?.url}></iframe>
              </div>
            </div>
            <div className="middle">
              <div className="title-container-middle">
                <div className="title-middle">
                  <Text h1 color="#fff">
                    {data?.name}
                  </Text>
                </div>
                <div className="secon-info-middle">
                  <Text body4 color="hsla(0, 0%, 100%, .6)">
                    {data?.alternativeName} {data?.ageRating}+
                  </Text>
                </div>
                <div className="info-enter-film">
                  <Text body4 color="hsla(0, 0%, 100%, .6)">
                    Дата выхода:
                    {dataName?.docs[0]?.year}
                  </Text>
                </div>
                <div className="genres-film">
                  <Text body4 color="#Fff">
                    Жанры:
                  </Text>
                  {dataName?.docs[0]?.genres.map((genre) => (
                    <Text body4 color="#Fff">
                      {genre.name}
                    </Text>
                  ))}
                </div>
                <div className="desc-middle">
                  <Text body4 color="#fff">
                    {data?.shortDescription !== null
                      ? data?.shortDescription
                      : data?.description}
                  </Text>
                </div>
                <div className="button">
                  <Button type="primary">
                    <Text body3 color="#fff">
                      Смотреть
                    </Text>
                  </Button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="rating-title-container">
                <div className="rating-title">
                  <Text h2>Рейтинг "{data?.rating.imdb}"</Text>
                </div>
                <div className="votes-rating">
                  <Text body4 color="#fff">
                    {data?.votes.kp} оценок
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </main>
  );
};

export default DataForFilmPage;
