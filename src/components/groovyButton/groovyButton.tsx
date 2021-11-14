import React from "react";
import { Color } from "types/colors";

type GroovyButtonProps = {
  onClick: () => void;
  style?: React.CSSProperties;
  color?: Color;
};

export const GroovyButton: React.FC<GroovyButtonProps> = ({
  children,
  onClick,
  style = {},
  color,
}) => {
  return (
    <div className={`groovy-button ${color}`} style={style}>
      <div className="background" />
      <button onClick={onClick} className="groovy-button">
        {children}
      </button>
    </div>
  );
};
