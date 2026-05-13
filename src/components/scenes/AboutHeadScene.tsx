"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function AboutHeadScene() {
  const head = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!head.current) return;
    head.current.rotation.y = state.clock.elapsedTime * 0.45;
    head.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 1.8, 2]} intensity={2.5} color="#00ffd1" />
      <mesh ref={head}>
        <icosahedronGeometry args={[1.25, 4]} />
        <meshBasicMaterial color="#00ff6a" wireframe transparent opacity={0.55} />
      </mesh>
    </group>
  );
}
