// src/components/ThreeBackground.jsx

import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

const POINTS = 5000;

function MovingLights() {
  const positions = useMemo(() => {
    const arr = new Float32Array(POINTS * 3);
    for (let i = 0; i < POINTS * 3; i++) {
      // genera números en el rango [-10, 10]
      arr[i] = THREE.MathUtils.randFloatSpread(20);
    }
    return arr;
  }, []);

  const ref = React.useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime() / 10;
    ref.current.rotation.y = clock.getElapsedTime() / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.015}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      className="fixed inset-0 -z-10"
    >
      <Suspense fallback={null}>
        <MovingLights />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
