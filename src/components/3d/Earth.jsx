import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const landRef = useRef();

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.003;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.004;
    }
    if (landRef.current) {
      landRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group>
      {/* Ocean - Vibrant blue like real Earth */}
      <Sphere ref={earthRef} args={[1.4, 64, 64]}>
        <meshStandardMaterial
          color="#0077be"
          emissive="#004080"
          emissiveIntensity={0.2}
          roughness={0.4}
          metalness={0.2}
        />
      </Sphere>

      {/* Land masses - Green continents */}
      <Sphere ref={landRef} args={[1.405, 64, 64]}>
        <meshStandardMaterial
          color="#4a9a4a"
          emissive="#2d6b2d"
          emissiveIntensity={0.25}
          transparent
          opacity={0.95}
          roughness={0.9}
          metalness={0}
        >
          <primitive 
            attach="alphaMap" 
            object={(() => {
              const canvas = document.createElement('canvas');
              canvas.width = 1024;
              canvas.height = 512;
              const ctx = canvas.getContext('2d');
              
              // Black background (transparent for ocean)
              ctx.fillStyle = '#000000';
              ctx.fillRect(0, 0, 1024, 512);
              
              ctx.fillStyle = '#ffffff';
              
              // North America
              ctx.beginPath();
              ctx.ellipse(200, 180, 80, 100, 0.2, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.ellipse(250, 220, 60, 50, -0.3, 0, Math.PI * 2);
              ctx.fill();
              
              // South America
              ctx.beginPath();
              ctx.ellipse(280, 350, 50, 90, 0.1, 0, Math.PI * 2);
              ctx.fill();
              
              // Africa
              ctx.beginPath();
              ctx.ellipse(520, 300, 70, 100, 0.2, 0, Math.PI * 2);
              ctx.fill();
              
              // Europe
              ctx.beginPath();
              ctx.ellipse(540, 160, 55, 40, 0, 0, Math.PI * 2);
              ctx.fill();
              
              // Asia
              ctx.beginPath();
              ctx.ellipse(750, 180, 120, 90, -0.2, 0, Math.PI * 2);
              ctx.fill();
              
              // Australia
              ctx.beginPath();
              ctx.ellipse(820, 380, 55, 45, 0, 0, Math.PI * 2);
              ctx.fill();
              
              // Greenland
              ctx.beginPath();
              ctx.ellipse(380, 100, 45, 35, 0, 0, Math.PI * 2);
              ctx.fill();
              
              const texture = new THREE.CanvasTexture(canvas);
              return texture;
            })()}
          />
        </meshStandardMaterial>
      </Sphere>

      {/* Desert/Brown areas overlay */}
      <Sphere args={[1.41, 64, 64]}>
        <meshStandardMaterial
          color="#d4a574"
          emissive="#b8935f"
          emissiveIntensity={0.2}
          transparent
          opacity={0.4}
          roughness={1}
          metalness={0}
        >
          <primitive 
            attach="alphaMap" 
            object={(() => {
              const canvas = document.createElement('canvas');
              canvas.width = 512;
              canvas.height = 256;
              const ctx = canvas.getContext('2d');
              
              ctx.fillStyle = '#000000';
              ctx.fillRect(0, 0, 512, 256);
              
              ctx.fillStyle = '#ffffff';
              // Sahara Desert
              ctx.beginPath();
              ctx.ellipse(270, 140, 50, 30, 0, 0, Math.PI * 2);
              ctx.fill();
              
              // Arabian Desert
              ctx.beginPath();
              ctx.ellipse(320, 150, 30, 20, 0, 0, Math.PI * 2);
              ctx.fill();
              
              // Australian Outback
              ctx.beginPath();
              ctx.ellipse(410, 190, 25, 20, 0, 0, Math.PI * 2);
              ctx.fill();
              
              const texture = new THREE.CanvasTexture(canvas);
              return texture;
            })()}
          />
        </meshStandardMaterial>
      </Sphere>

      {/* Ice caps - Bright white poles */}
      <Sphere args={[1.415, 64, 64]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#e8f4ff"
          emissiveIntensity={0.4}
          transparent
          opacity={0.95}
          roughness={0.2}
          metalness={0.1}
        >
          <primitive 
            attach="alphaMap" 
            object={(() => {
              const canvas = document.createElement('canvas');
              canvas.width = 512;
              canvas.height = 256;
              const ctx = canvas.getContext('2d');
              
              ctx.fillStyle = '#000000';
              ctx.fillRect(0, 0, 512, 256);
              
              ctx.fillStyle = '#ffffff';
              // North pole (Arctic)
              ctx.beginPath();
              ctx.ellipse(256, 30, 150, 30, 0, 0, Math.PI * 2);
              ctx.fill();
              
              // South pole (Antarctica)
              ctx.beginPath();
              ctx.ellipse(256, 226, 180, 30, 0, 0, Math.PI * 2);
              ctx.fill();
              
              const texture = new THREE.CanvasTexture(canvas);
              return texture;
            })()}
          />
        </meshStandardMaterial>
      </Sphere>

      {/* Cloud layer - Bright white clouds */}
      <Sphere ref={cloudsRef} args={[1.425, 64, 64]}>
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.18}
          roughness={1}
          metalness={0}
        />
      </Sphere>

      {/* Atmosphere glow - Bright blue atmosphere */}
      <Sphere args={[1.55, 64, 64]}>
        <meshBasicMaterial
          color="#5eb3ff"
          transparent
          opacity={0.18}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
};

export default Earth;
