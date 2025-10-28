import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "#components/Loader.jsx";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        // Setting near, far clipping planes for the camera
        camera={{ near: 0.1, far: 1000 }}
        className="w-full h-screen bg-transparent"
      >
        {/* 3D content goes here */}
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <hemisphereLight />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
