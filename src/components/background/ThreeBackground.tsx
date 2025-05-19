// src/components/background/ThreeBackground.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/hooks/use-theme';

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  const theme = useTheme();

  const particleCount = 5000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (!points.current) return;
    
    const time = state.clock.getElapsedTime();
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      points.current.geometry.attributes.position.array[i3] += Math.sin(time + i * 0.1) * 0.001;
      points.current.geometry.attributes.position.array[i3 + 1] += Math.cos(time + i * 0.1) * 0.001;
      points.current.geometry.attributes.position.array[i3 + 2] += Math.sin(time + i * 0.1) * 0.001;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.x = mouse.y * 0.2;
    points.current.rotation.y = mouse.x * 0.2;
  });

  const color = theme === 'dark' ? '#334155' : '#94a3b8';

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;