import { useGLTF } from "drei";
import React, { useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { MeshNormalMaterial, Object3D } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFLogoResult = GLTF & {
  nodes: {
    BezierCurve004: THREE.Mesh;
  };
};

export const Logo: React.FC = () => {
  const logoRef = useRef<null | Object3D>(null);

  const { nodes: logoNodes } = useGLTF(
    "/sodaa.glb"
  ) as unknown as GLTFLogoResult;

  const [isMouseOver, setIsMouseOver] = useState(false);

  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotateX(0.01);
      if (isMouseOver) {
        logoRef.current.rotateZ(0.01);
      }
    }
  });

  const { aspect } = useThree();

  const regMaterial = useMemo(() => {
    return new MeshNormalMaterial({ wireframe: false });
  }, []);

  const wireframeMaterial = useMemo(() => {
    return new MeshNormalMaterial({ wireframe: true });
  }, []);

  return (
    <>
      <mesh
        onPointerOver={() => setIsMouseOver(true)}
        onPointerOut={() => setIsMouseOver(false)}
        ref={logoRef}
        material={isMouseOver ? wireframeMaterial : regMaterial}
        geometry={logoNodes.BezierCurve004.geometry}
        scale={aspect > 1 ? [100, 100, 100] : [40, 40, 40]}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0.3]}
      ></mesh>
    </>
  );
};
