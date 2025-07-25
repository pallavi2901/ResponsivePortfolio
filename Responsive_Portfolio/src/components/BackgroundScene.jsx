// src/components/BackgroundScene.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stars } from '@react-three/drei';

const CrystalModel = () => {
  const { scene } = useGLTF('/Crystal.glb'); // Place your .glb in public/
  return <primitive object={scene} scale={1.5} position={[0, -1.5, 0]} />;
};

const BackgroundScene = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        
        <Stars radius={100} depth={50} count={1000} factor={4} fade />
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
