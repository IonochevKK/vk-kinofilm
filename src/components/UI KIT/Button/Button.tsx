import React from "react";
import "./button.scss";
import classNames from "classnames";
type ButtonType = "primary" | "secondary_1" | "secondary_2" | "link";
interface ButtonProps {
  type: ButtonType;
  children?: React.ReactNode;
  block?: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  active?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  children,
  block,
  type,
  className,
  disabled,
  id,
  active,
  style,
  onClick,
}) => {
  const buttonClasses = classNames(
    "button",
    `button-${type}`,
    {
      "button-block": block,
      "button-active": active,
    },
    className
  );
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      id={id}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
