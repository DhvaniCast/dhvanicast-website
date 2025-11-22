import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.003;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.004;
    }
  });

  return (
    <group>
      {/* Main Earth sphere with continents pattern */}
      <Sphere ref={earthRef} args={[1.4, 64, 64]}>
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.3}
          roughness={0.7}
          metalness={0.2}
        />
      </Sphere>

      {/* Cloud layer */}
      <Sphere ref={cloudsRef} args={[1.45, 64, 64]}>
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.15}
          roughness={1}
          metalness={0}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[1.6, 64, 64]}>
        <meshBasicMaterial
          color="#10b981"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
};

export default Earth;
