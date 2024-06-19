import Dropdown from "../../../components/UI KIT/DropDiown/DropDown";
import Text from "../../../components/UI KIT/Text/Text";
import { dataFiltersRaiting } from "../../../data";

import TableWithFilms from "../TableWithFilms/TableWithFilms";
import "./filmsList.scss";
import { useParams } from "react-router-dom";
import { useGetCollectionFilmsWithSlugQuery } from "../../../redux/filmsApi";

const FilmsList: React.FC = () => {
  const slug = useParams();
  const { data, isFetching } = useGetCollectionFilmsWithSlugQuery(slug);
  return (
    <div className="filmsList">
      <div className="filmsList-container">
        <div className="title-container">
          <div className="left-container">
            <div className="title">
              <Text h1>{data?.name}</Text>
            </div>
            <div className="desc">
              <Text body6 fontWeight="400" fontSize="16">
                Рейтинг составлен по результатам голосования посетителей сайта.
                Любой желающий может принять в нем участие, проголосовав за свой
                любимый фильм.
              </Text>
            </div>
          </div>
          <div className="right-container">
            <div className="banner-filmlist">
              <img src={data?.cover?.url} alt="" />
            </div>
          </div>
        </div>
        <div className="container-table-list-films">
          <div className="container-dropdown-header">
            <div className="container-dropdown-header-container">
              <Dropdown options={dataFiltersRaiting} labelName="По порядку" />
            </div>
          </div>
          <div className="container-tablelist">
            <TableWithFilms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmsList;
