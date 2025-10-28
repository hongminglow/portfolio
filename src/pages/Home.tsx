import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "#components/Loader.jsx";
import { Island } from "#models/Island.jsx";

const Home = () => {
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
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        // Setting near, far clipping planes for the camera
        camera={{ near: 0.1, far: 1000 }}
        className="w-full h-screen bg-transparent"
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
          <Island position={islandPosition} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
