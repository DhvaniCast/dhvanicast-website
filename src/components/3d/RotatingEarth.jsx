import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const RotatingEarth = () => {
  const earthRef = useRef();
  const cloudsRef = useRef();

  // Rotate the earth continuously
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group>
      {/* Ocean - Deep blue like NASA */}
      <Sphere ref={earthRef} args={[1.2, 64, 64]}>
        <meshStandardMaterial
          color="#1a5490"
          emissive="#0d2a47"
          emissiveIntensity={0.1}
          roughness={0.5}
          metalness={0.1}
        />
      </Sphere>

      {/* Land masses - NASA realistic green-brown */}
      <Sphere args={[1.205, 64, 64]}>
        <meshStandardMaterial
          color="#4a7c3b"
          emissive="#2d5025"
          emissiveIntensity={0.15}
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
              
              // Black background (ocean - transparent)
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

      {/* Desert areas - lighter brown overlay */}
      <Sphere args={[1.21, 64, 64]}>
        <meshStandardMaterial
          color="#c9a87c"
          transparent
          opacity={0.3}
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
              // Sahara
              ctx.beginPath();
              ctx.ellipse(270, 140, 50, 30, 0, 0, Math.PI * 2);
              ctx.fill();
              
              // Middle East
              ctx.beginPath();
              ctx.ellipse(320, 150, 30, 20, 0, 0, Math.PI * 2);
              ctx.fill();
              
              const texture = new THREE.CanvasTexture(canvas);
              return texture;
            })()}
          />
        </meshStandardMaterial>
      </Sphere>

      {/* Ice caps - white poles */}
      <Sphere args={[1.215, 64, 64]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#e0f0ff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
          roughness={0.3}
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
              // North pole
              ctx.beginPath();
              ctx.ellipse(256, 30, 150, 30, 0, 0, Math.PI * 2);
              ctx.fill();
              
              // South pole
              ctx.beginPath();
              ctx.ellipse(256, 226, 180, 30, 0, 0, Math.PI * 2);
              ctx.fill();
              
              const texture = new THREE.CanvasTexture(canvas);
              return texture;
            })()}
          />
        </meshStandardMaterial>
      </Sphere>

      {/* Clouds - white wispy */}
      <Sphere ref={cloudsRef} args={[1.22, 64, 64]}>
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.12}
          roughness={1}
          metalness={0}
        />
      </Sphere>

      {/* Atmosphere glow - blue like NASA */}
      <Sphere args={[1.32, 32, 32]}>
        <meshBasicMaterial
          color="#6eb5ff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
};

export default RotatingEarth;
