import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  btnHeader,
  url,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // click methods
  return (
    <a
      className={`btn btn-sm ${btnHeader} ${checkButtonStyle} ${checkButtonSize}`}
      href={url}
      type={type}
      onClick={onClick}
    >
      {children}
    </a>
  );
};
