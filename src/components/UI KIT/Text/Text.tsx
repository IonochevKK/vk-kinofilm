import classNames from "classnames";
import React from "react";
import "./text.scss";
interface TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  body1?: boolean;
  body2?: boolean;
  body2_bold?: boolean;
  body3?: boolean;
  body3_bold?: boolean;
  body4?: boolean;
  body4_bold?: boolean;
  body5?: boolean;
  body6?: boolean;
  caption1?: boolean;
  caption2?: boolean;
  children: React.ReactNode | string;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
}

const Text: React.FC<TextProps> = ({
  h1,
  h2,
  h3,
  body1,
  body2,
  body2_bold,
  body3,
  body3_bold,
  body4,
  body4_bold,
  body5,
  body6,
  caption1,
  caption2,
  className,
  children,
  style,
  color,
  fontSize,
  lineHeight,
  fontWeight,
}) => {
  const textClasses = classNames(className, {
    "text-h1": h1,
    "text-h2": h2,
    "text-h3": h3,
    "text-body1": body1,
    "text-body2": body2,
    "text-body2_bold": body2_bold,
    "text-body3": body3,
    "text-body3_bold": body3_bold,
    "text-body4": body4,
    "text-body4_bold": body4_bold,
    "text-body5": body5,
    "text-body6": body6,
    "text-caption1": caption1,
    "text-caption2": caption2,
    style,
  });
  const textColorStyle: React.CSSProperties = color ? { color: color } : {};
  const lineHeightStyle: React.CSSProperties = lineHeight
    ? { lineHeight: lineHeight }
    : {};
  const fontWeightText: React.CSSProperties = fontWeight
    ? { fontWeight: fontWeight }
    : {};
  const fontSizeStyle: React.CSSProperties = fontSize
    ? { fontSize: fontSize }
    : {};
  if (h1)
    return (
      <h1
        className={textClasses}
        style={{ ...textColorStyle, ...fontSizeStyle, ...lineHeightStyle }}
        data-testid="text_h1"
      >
        {children}
      </h1>
    );
  if (h2)
    return (
      <h2
        className={textClasses}
        style={{ ...textColorStyle, ...fontSizeStyle, ...lineHeightStyle }}
        data-testid="text_h2"
      >
        {children}
      </h2>
    );
  if (h3)
    return (
      <h3
        className={textClasses}
        style={{ ...textColorStyle, ...fontSizeStyle, ...lineHeightStyle }}
        data-testid="text_h3"
      >
        {children}
      </h3>
    );
  return (
    <div
      className={textClasses}
      style={{
        ...textColorStyle,
        ...fontSizeStyle,
        ...lineHeightStyle,
        ...fontWeightText,
      }}
      data-testid="text"
    >
      {children}
    </div>
  );
};

export default Text;
