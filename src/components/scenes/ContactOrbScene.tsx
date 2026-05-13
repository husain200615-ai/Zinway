"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = { pointer: { x: number; y: number } };

export function ContactOrbScene({ pointer }: Props) {
  const orb = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!orb.current) return;
    orb.current.rotation.y += 0.005;
    orb.current.position.x = THREE.MathUtils.lerp(orb.current.position.x, pointer.x * 0.8, 0.08);
    orb.current.position.y = THREE.MathUtils.lerp(orb.current.position.y, pointer.y * 0.8, 0.08);
    const pulse = 0.75 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    orb.current.scale.setScalar(pulse);
  });

  return (
    <group>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 2]} intensity={4} color="#00ff6a" />
      <mesh ref={orb}>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshStandardMaterial color="#00ff6a" emissive="#00ffd1" emissiveIntensity={0.7} roughness={0.2} metalness={0.6} />
      </mesh>
    </group>
  );
}
