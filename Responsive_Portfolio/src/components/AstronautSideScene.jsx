// components/AstronautSideScene.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import AstronautModel from './AstronautModel';  // Replace with your new model

const AstronautSideScene = () => {
  return (
    <div className="w-1/3 h-screen fixed left-0 top-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#0b1d3a']} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 5]} />
        <Stars radius={100} depth={50} count={1000} factor={4} fade />
        <Suspense fallback={null}>
          <AstronautModel /> {/* Use the new model/component */}
        </Suspense>
        <OrbitControls autoRotate enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default AstronautSideScene;
