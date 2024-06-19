import React from "react";
import "./сardForTable.scss";
import { dataFilm } from "../../../../types/interface";
import Text from "../../../../components/UI KIT/Text/Text";
import Button from "../../../../components/UI KIT/Button/Button";
import Skeleton from "react-loading-skeleton";
interface CardForTableProps {
  data?: dataFilm;
  index?: number;
  isFetching: boolean;
}
import "./сardForTable.scss";
import { useNavigate } from "react-router-dom";
const CardForTable: React.FC<CardForTableProps> = ({
  data,
  index,
  isFetching,
}) => {
  const navigate = useNavigate();
  return (
    <div className="container-card-list">
      <div className="number-film">
        {!isFetching ? (
          <Text body3>{index}</Text>
        ) : (
          <Skeleton height={30} width={25} />
        )}
      </div>
      <div className="banner">
        {!isFetching ? (
          <img src={data?.poster?.url} alt="" />
        ) : (
          <Skeleton width={72} height={108} />
        )}
      </div>
      <div className="card-info">
        <div className="header-top">
          <div
            className="title-container-1"
            onClick={() => navigate(`/film/${data?.id}`)}
          >
            <div className="title">
              {!isFetching ? (
                <Text body4_bold color="">
                  {data?.name}
                </Text>
              ) : (
                <Skeleton height={15} width={100} />
              )}
            </div>
            <div className="info-secondary">
              {!isFetching ? (
                <>
                  <Text body6 fontSize="13px">
                    {data?.alternativeName},
                  </Text>
                  <Text body6 fontSize="13px">
                    {data?.year},
                  </Text>
                  <Text body6 fontSize="13px">
                    {data?.movieLength} мин
                  </Text>
                </>
              ) : (
                <Skeleton height={15} width={80} />
              )}
            </div>
            <div className="desc">
              {!isFetching ? (
                <Text body6 fontSize="13px" color="rgba(0, 0, 0, .6)">
                  {data?.countries[0].name} • {data?.genres[0].name}
                </Text>
              ) : (
                <Skeleton height={15} width={50} />
              )}
            </div>
            <div className="button">
         {  !isFetching ?    <Button type="primary" style={{ padding: "5px 10px" }}>
                <Text color="#fff">Смотреть</Text>
              </Button> : <Skeleton height={20} width={40} />}
            </div>
          </div>
          <div className="rating-card">
            <div className="rating-list">
             { !isFetching ?<>
              <div className="rating-kp">
                <Text body3>{data?.rating.imdb}</Text>
              </div>
              <div className="votes-kp">
                <Text body5 color="rgba(0, 0, 0, 0.4">
                  {data?.votes.kp}
                </Text>
              </div>
              <div className="button">
                <Button type="secondary_1" className="button-active">
                  <Text body5>Добавить в избранное </Text>
                </Button>
              </div>
              </> : <Skeleton height={30} width={300} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForTable;
