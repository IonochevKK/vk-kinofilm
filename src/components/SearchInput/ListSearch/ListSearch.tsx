import React from "react";
import Text from "../../UI KIT/Text/Text";
import Label from "../../UI KIT/Label/Label";
import PlaySvg from "../../../../public/svg/play.svg?react";
import { BackDropFilm, RatingFilm } from "../../../types/interface";
import "./listSearch.scss";
import { useResizeWidth } from "../../../hooks/useResizeWidth";
interface ListSearchProps {
  id: string;
  name?: string;
  alternativeName?: string;
  backdrop: BackDropFilm;
  description?: string;
  rating?: RatingFilm;
  year?: string;
}

const ListSearch: React.FC<ListSearchProps> = ({
  id,
  name,
  alternativeName,
  backdrop,
  description,
  rating,
  year,
}) => {
  const screenMobile = useResizeWidth(500);
  return (
    <div className="container-card">
      <div className="film-desc">
        <div className="banner">
          <img src={backdrop.url} alt="" />
        </div>
        <div className="film-text">
          <div className="title">
            <Text body4_bold>
              {name === null ? `${alternativeName} + ${year}` : name}
            </Text>
          </div>
          <div className="container-desc">
            {/* <Text body5 color="green">
              {rating?.kp}
            </Text> */}
            <div className="desc">
              <Text body6 color="#666">
                {alternativeName === null
                  ? `${rating?.kp} ${year} ${description}`
                  : `${rating?.kp} ${alternativeName}`}
              </Text>
            </div>
          </div>
        </div>
      </div>
      {!screenMobile && (
        <div className="label-container">
          <div className="label">
            <Label>
              <div className="image">
                <PlaySvg />
              </div>
              <div className="text">
                <Text body5 color="#fff">
                  Смотреть
                </Text>
              </div>
            </Label>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListSearch;
