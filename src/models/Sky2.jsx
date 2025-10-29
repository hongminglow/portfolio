import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import skyScene from "#assets/3d/sky2.glb";

export function Sky2(props) {
  const ref = useRef();
  const { camera } = useThree();
  const { nodes, materials } = useGLTF(skyScene);

  // Render the inside of the sphere and keep it centered on the camera so
  // the sky behaves like a background surrounding the viewer.
  useFrame(() => {
    if (ref.current) {
      // Keep sky centered on camera
      ref.current.position.copy(camera.position);
      // Optional slow rotation
      if (props.isRotating) ref.current.rotation.y += 0.0008;
    }
  });

  // Ensure material renders the inside faces (camera is inside the sphere)
  if (materials && materials.Материал) {
    materials.Материал.side = THREE.BackSide;
    materials.Материал.needsUpdate = true;
  }

  return (
    // scale the sky large so it fully surrounds the scene/camera
    <group ref={ref} {...props} dispose={null} scale={[50, 50, 50]}>
      <mesh
        castShadow={false}
        receiveShadow={false}
        geometry={nodes.Сфера.geometry}
        material={materials.Материал}
      />
    </group>
  );
}

useGLTF.preload(skyScene);
