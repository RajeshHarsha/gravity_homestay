'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Environment, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

function FloatingParticles() {
  const particlesCount = 150;
  const positions = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 25;
    positions[i + 1] = (Math.random() - 0.5) * 25;
    positions[i + 2] = (Math.random() - 0.5) * 25;
  }
  
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.03}
        color="#D4A24C"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function BuildingModel() {
  return (
    <Float
      speed={0.5}
      rotationIntensity={0.1}
      floatIntensity={0.3}
    >
      {/* Main building structure */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5, 4, 4]} />
        <meshStandardMaterial
          color="#FFF8ED"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 2.2, 0]}>
        <coneGeometry args={[4, 1.5, 4]} />
        <meshStandardMaterial
          color="#E8DCC8"
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>
      
      {/* Windows with warm light */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[-1.8 + (i % 4) * 1.2, 0.3 - Math.floor(i / 4) * 1.2, 2.01]}>
          <planeGeometry args={[0.4, 0.5]} />
          <meshStandardMaterial
            color="#EBC57B"
            emissive="#EBC57B"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}
      
      {/* Door */}
      <mesh position={[0, -0.7, 2.01]}>
        <planeGeometry args={[1.2, 2]} />
        <meshStandardMaterial
          color="#D4A24C"
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
      
      {/* Ambient glow around building */}
      <pointLight position={[0, 0, 3]} intensity={0.8} color="#EBC57B" distance={10} />
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#EBC57B" />
          <pointLight position={[-10, -5, -10]} intensity={0.8} color="#D4A24C" />
          
          <BuildingModel />
          <FloatingParticles />
          
          <Environment preset="sunset" />
          <ContactShadows
            position={[0, -3, 0]}
            opacity={0.15}
            scale={15}
            blur={2}
            far={5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
