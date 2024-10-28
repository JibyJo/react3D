import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Text } from '@react-three/drei';
import { Model } from './model';

const ThreeScene = () => {
  return (
    <>
      <Canvas>
        <Text position={[0, 1.5, 0]} fontSize={0.5} color='black'>
          3D Website
        </Text>
        {/* Add basic lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Add a 3D sphere */}
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color='orange' />
        </Sphere>
        <Sphere
          args={[1, 32, 32]}
          position={[1, 1, 1]}
          onClick={(e) => e.object.material.color.set('blue')}
        >
          <meshStandardMaterial color='orange' />
        </Sphere>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model />
        <OrbitControls />

        {/* Add orbit controls for interaction */}
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default ThreeScene;
