import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function ProjectsTetrahedron({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} rotation={[0.2, 0.3, 0]}>
        <tetrahedronGeometry args={[1.5]} />
        <meshStandardMaterial color="#e5e7eb" />
        
        {/* Front face */}
        <Text
          position={[0, 0.3, 0.8]}
          fontSize={0.12}
          color="#333333"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.5}
        >
          my most recent projects:
        </Text>
        
        {/* Left face */}
        <Text
          position={[-0.7, 0.3, -0.4]}
          rotation={[0, Math.PI / 3, 0]}
          fontSize={0.1}
          color="#333333"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.2}
        >
          Project 1
          {'\n'}
          [Image placeholder]
          {'\n'}
          Modern web app
        </Text>
        
        {/* Right face */}
        <Text
          position={[0.7, 0.3, -0.4]}
          rotation={[0, -Math.PI / 3, 0]}
          fontSize={0.1}
          color="#333333"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.2}
        >
          Project 2
          {'\n'}
          [Image placeholder]
          {'\n'}
          Interactive experience
        </Text>
      </mesh>
    </group>
  );
}