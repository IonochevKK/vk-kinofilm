import React from "react";
import Button from "../UI KIT/Button/Button";
import Text from "../UI KIT/Text/Text";
import "./sidebar.scss";
import {
  useGetAllCountriesFilmsQuery,
  useGetAllGenresFilmsQuery,
} from "../../redux/genresAndOtherDataApi.ts";
import Dropdown from "../UI KIT/DropDiown/DropDown.tsx";
import { dataYearsDropDown } from "../../data.ts";
interface SidebarProps {
  buttons: { label: string; onClick?: () => void }[];
}

const Sidebar: React.FC<SidebarProps> = ({ buttons }) => {
  const genres = useGetAllGenresFilmsQuery({});
  const countries = useGetAllCountriesFilmsQuery({});

  return (
    <article className="sidebar">
      <div className="container-sidebar-1">
        <div className="container-buttons-filter">
          {buttons.map((button, index) => (
            <div className="item-sidebar" key={index}>
              <Button
                type="secondary_2"
                onClick={button.onClick}
                className="button-background "
              >
                <Text body5 fontWeight="600" fontSize="14px" color="black">
                  {button.label}
                </Text>
              </Button>
            </div>
          ))}
        </div>
        <div className="container-dropdown-filter">
          <div className="item">
            <div className="label-sidebar">
              <Text body4>Страны</Text>
            </div>
            <Dropdown labelName="Все страны" options={countries.data} />
            <Text caption2 color="red">не успел доделать</Text>
          </div>
          <div className="item">
            <div className="label-sidebar">
              <Text body4>Жанры</Text>
            </div>
            <Dropdown labelName="Все жанры" options={genres.data} />
            <Text caption2 color="red">не успел доделать</Text>
          </div>
          <div className="item">
            <div className="label-sidebar">
              <Text body4>Годы</Text>
            </div>
            <Dropdown labelName="Все годы" options={dataYearsDropDown} />
            <Text caption2 color="red">не успел доделать</Text>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Sidebar;
