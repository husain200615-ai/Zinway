"use client";

import { useMemo, useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = { reduced: boolean };

export function HeroSerpentScene({ reduced }: Props) {
  const ref = useRef<THREE.Points>(null);
  const count = reduced ? 900 : 2200;
  const points = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = i / count;
      arr[i * 3] = Math.sin(t * Math.PI * 14) * (1.5 + t * 0.8);
      arr[i * 3 + 1] = (t - 0.5) * 10;
      arr[i * 3 + 2] = Math.cos(t * Math.PI * 14) * (1.5 + t * 0.8);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.12;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
  });

  return (
    <group>
      <ambientLight intensity={0.45} />
      <pointLight position={[2, 1, 3]} intensity={3} color="#00ff6a" />
      <Points ref={ref} positions={points} stride={3} frustumCulled>
        <PointMaterial transparent color="#00ff6a" size={0.06} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}
