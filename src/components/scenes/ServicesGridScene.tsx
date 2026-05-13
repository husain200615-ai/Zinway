"use client";

import { Float, Grid, RoundedBox } from "@react-three/drei";

export function ServicesGridScene() {
  return (
    <group>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 2, 3]} intensity={2} color="#00ff6a" />
      <Grid
        args={[30, 30]}
        cellColor="#0d2b1a"
        sectionColor="#00ff6a"
        position={[0, -1.8, 0]}
        infiniteGrid
        fadeDistance={22}
      />
      {[-1.8, 0, 1.8].map((x, i) => (
        <Float key={x} speed={2 + i * 0.5} rotationIntensity={0.8} floatIntensity={1.2}>
          <RoundedBox args={[1.1, 1.4, 0.25]} position={[x, 0, -0.8 + i * 0.2]} radius={0.1} smoothness={3}>
            <meshStandardMaterial color="#0d2b1a" emissive="#00ff6a" emissiveIntensity={0.18} wireframe={i === 1} />
          </RoundedBox>
        </Float>
      ))}
    </group>
  );
}
