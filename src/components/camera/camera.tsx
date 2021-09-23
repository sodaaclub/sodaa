import { OrthographicCamera } from "drei";
import React from "react";

export const Camera: React.FC = () => {
  return (
    <OrthographicCamera
      makeDefault
      position={[0, 0, 1000]}
      near={0.1}
      far={10000}
    />
  );
};
