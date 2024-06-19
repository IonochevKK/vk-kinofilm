import React from "react";
import "./collectionItem.scss";
import {
  BackDropFilm,
  CollectionMoviesCover,
  RatingFilm,
} from "../../../types/interface";
import Text from "../../UI KIT/Text/Text";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
export interface CollectionItemProps {
  id?: string;
  category?: string;
  name?: string;
  slug?: string;
  moviesCount?: number;
  cover?: CollectionMoviesCover;
  isFetching?: boolean;
}
const CollectionItem: React.FC<CollectionItemProps> = ({
  id,
  category,
  name,
  slug,
  moviesCount,
  cover,
  isFetching,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/lists/movies/${slug}`);
  };
  return (
    <div className="collectionItem" onClick={handleClick}>
      <div className="banner-item">
        {isFetching ? (
          <Skeleton height={88} width={88} />
        ) : (
          <img src={cover?.url} alt="" />
        )}
      </div>
      <div className="desc-collection">
        <div className="title">
          {isFetching ? (
            <Skeleton height={20} width={300} />
          ) : (
            <Text body3>{name}</Text>
          )}
        </div>
        <div className="desc">
          {isFetching ? (
            <Skeleton height={20} width={150} />
          ) : (
            <Text body5 color="rgba(0, 0, 0, 0.6)">
              {moviesCount} фильмов
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
