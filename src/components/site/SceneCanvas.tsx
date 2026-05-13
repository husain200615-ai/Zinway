"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

type Props = {
  enabled: boolean;
  active: boolean;
  className?: string;
  children: React.ReactNode;
};

export function SceneCanvas({ enabled, active, className, children }: Props) {
  if (!enabled) {
    return <div className={`scene-fallback ${className ?? ""}`} />;
  }

  return (
    <div className={`scene-wrap ${className ?? ""}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 52 }} dpr={[1, 1.5]} frameloop={active ? "always" : "never"}>
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
