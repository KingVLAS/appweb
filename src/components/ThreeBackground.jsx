
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Vector3 } from 'three';

function Stars(props) {
  const ref = useRef();
  const [sphere1, sphere2] = useMemo(() => {
    const sphere1 = random.inSphere(new Float32Array(5000), { radius: 1.5 });
    const sphere2 = random.inSphere(new Float32Array(2000), { radius: 2.5 });
    return [sphere1, sphere2];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t / 10) * 0.2;
    ref.current.rotation.y = Math.cos(t / 15) * 0.2;
    ref.current.rotation.z = Math.sin(t / 20) * 0.2;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere1} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
      <Points positions={sphere2} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#88ccff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

function MovingLights() {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(150);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = random.float() * 4 - 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      const offset = i * 0.1;
      ref.current.geometry.attributes.position.array[i] = x + Math.sin(t + offset) * 0.2;
      ref.current.geometry.attributes.position.array[i + 1] = y + Math.cos(t + offset) * 0.2;
      ref.current.geometry.attributes.position.array[i + 2] = z + Math.sin(t + offset) * 0.2;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#4488ff"
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 bg-[#000924]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-blue-900/20" />
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <MovingLights />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Preload all />
      </Canvas>
    </div>
  );
}
