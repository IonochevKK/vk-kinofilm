import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Button from "../UI KIT/Button/Button";
import Text from "../UI KIT/Text/Text";
import "./listCollectionFilm.scss";
import { useResizeWidth } from "../../hooks/useResizeWidth";

const ListCollectionFilm = () => {
  const screenMobile = useResizeWidth(550);
  const navigate = useNavigate();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(event.target.value);
  };

  const location = useLocation().pathname.split("/");
  const lastPathLocation = location[location.length - 1];

  return (
    <div className="listCollectionFilm">
      <div className="ListCollectionFilm-container">
        <div className="button-list">
          {!screenMobile && (
            <>
              <div className="list-item">
                <Link to="1">
                  <Button type="secondary_2" active={lastPathLocation === "1"}>
                    <Text body3_bold>Фильмы</Text>
                  </Button>
                </Link>
              </div>
              <div className="list-item">
                <Link to="2">
                  <Button type="secondary_2" active={lastPathLocation === "2"}>
                    <Text body3_bold>Онлайн кинотеатр</Text>
                  </Button>
                </Link>
              </div>
              <div className="list-item">
                <Link to="3">
                  <Button type="secondary_2" active={lastPathLocation === "3"}>
                    <Text body3_bold>Сериалы</Text>
                  </Button>
                </Link>
              </div>
              <div className="list-item">
                <Link to="4">
                  <Button type="secondary_2" active={lastPathLocation === "4"}>
                    <Text body3_bold>Сборы</Text>
                  </Button>
                </Link>
              </div>
              <div className="list-item">
                <Link to="5">
                  <Button type="secondary_2" active={lastPathLocation === "5"}>
                    <Text body3_bold>Премии</Text>
                  </Button>
                </Link>
              </div>
            </>
          )}
          {screenMobile && (
            <select
              title="options"
              name="options"
              id="options"
              onChange={handleSelectChange}
            >
              <option value="1">
                <Text body4_bold>Фильмы</Text>
              </option>
              <option value="2">Онлайн кинотеатр</option>
              <option value="3">Сериалы</option>
              <option value="4">Сборы</option>
              <option value="5">Премии</option>
            </select>
          )}
        </div>
        <div className="list-collection-film">
          <div className="container-list-collection">
            <div className="title-collection">
              <Text body6>
                <strong>СПИСОК</strong>
              </Text>
            </div>
            <div className="list-collection">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCollectionFilm;
