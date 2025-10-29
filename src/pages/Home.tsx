import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "#components/Loader.jsx";
import { Island } from "#models/Island.jsx";
import { Sky } from "#models/Sky.jsx";
import { Bird } from "#models/Bird.jsx";
import { Plane } from "#models/Plane.jsx";
import HomeInfo from "#components/HomeInfo.jsx";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        // Setting near, far clipping planes for the camera
        camera={{ near: 0.1, far: 1000 }}
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {/* 3D content goes here */}
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <spotLight />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating />
          <Island
            position={islandPosition}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            rotation={islandRotation}
          />
          <Plane
            isRotating={isRotating}
            rotation={[0, 20, 0]}
            planeScale={planeScale}
            planePosition={planePosition}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
