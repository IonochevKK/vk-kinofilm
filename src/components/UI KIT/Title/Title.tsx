import React from "react";
import Text from "../Text/Text";
import Button from "../Button/Button";
import "./title.scss";
import Divider from "../Divider/Divider";
import { useResizeWidth } from "../../../hooks/useResizeWidth";
import { Link } from "react-router-dom";

interface TitleProps {
  title: string;
  link?: string;
  buttons: { label: string; onClick?: () => void }[];
}

const Title: React.FC<TitleProps> = ({ title, buttons, link }) => {
  const screenTablet = useResizeWidth(850);

  return (
    <div className="container-title">
      <div className="container-width">
        <div className="title">
          {link && (
            <Link to={link}>
              <Text h2>{title}</Text>
            </Link>
          )}
          {!link && <Text h2>{title}</Text>}
        </div>
        {!screenTablet && (
          <div className="title-list">
            {buttons.map((button, index) => (
              <div className="item" key={index}>
                <Button type="link" onClick={button.onClick}>
                  <Text body4>{button.label}</Text>
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Divider />
    </div>
  );
};

export default Title;
