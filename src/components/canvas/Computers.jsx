import React, { Suspense, useLayoutEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
//import Computers from "./Computers";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      {!isMobile && (
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
      )}
      <pointLight intensity={isMobile ? 3 : 10} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -2.4, -1.4] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile safely (no cascading renders)
  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");

    const updateIsMobile = () => setIsMobile(mediaQuery.matches);
    updateIsMobile(); // Set on mount

    mediaQuery.addEventListener("change", updateIsMobile);
    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return (
    <Canvas
      shadows={!isMobile}
      frameloop="demand"
      dpr={isMobile ? 1 : [1, 1.5]}
      camera={{ position: isMobile ? [12, 4, 5] : [20, 3, 5], fov: isMobile ? 30 : 25 }}
      gl={{ antialias: !isMobile }}  // reduce GPU load on phones
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls disabled on mobile for smoother performance */}
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}

        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
