import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const SceneBackground = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 -z-10">
      <Canvas camera={{ position: [0, 2, 8] }}>
        <color attach="background" args={['#0b1d3a']} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Stars radius={100} depth={50} count={2000} factor={4} fade />
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default SceneBackground;
