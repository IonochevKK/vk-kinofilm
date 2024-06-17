import React from "react";
import "./button.scss";
import classNames from "classnames";
type ButtonType = "primary" | "secondary_1" | "secondary_2" | "link";
interface ButtonProps {
  type: ButtonType;
  children?: React.ReactNode;
  block?: boolean;
  className?: React.CSSProperties;
  disabled?: boolean;
  id?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  children,
  block,
  type,
  className,
  disabled,
  id,
  onClick,
}) => {
  const buttonClasses = classNames(
    "button",
    `button-${type}`,
    {
      "button-block": block,
    },
    className
  );
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      id={id}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
