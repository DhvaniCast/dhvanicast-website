import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

// Simple Earth Component
const Earth = ({ position }) => {
  const earthRef = useRef();
  const ringRef = useRef();
  
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group position={position}>
      {/* Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#2ecc71" 
          emissive="#27ae60"
          emissiveIntensity={0.2}
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
      
      {/* Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2, 2.2, 32]} />
        <meshBasicMaterial 
          color="#2ecc71" 
          transparent 
          opacity={0.7} 
        />
      </mesh>
    </group>
  );
};

// Simple Scene Component
const Scene = () => {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <color attach="background" args={['#121212']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Suspense fallback={null}>
          <Earth position={[3, 0, 0]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default Scene;
