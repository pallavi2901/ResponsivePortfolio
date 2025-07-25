// src/components/FloatingLogoPlane.jsx
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const FloatingLogoPlane = ({ imagePath, position = [0, 0, 0], size = [1.5, 1.5] }) => {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, imagePath);

  useFrame(() => {
    if (meshRef.current) {
      // Rotate slowly and float up/down
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={size} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

export default FloatingLogoPlane;
