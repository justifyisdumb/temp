import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function AboutCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} rotation={[0.3, 0.4, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#e5e7eb" />
        
        {/* Front face */}
        <Text
          position={[0, 0, 1.01]}
          fontSize={0.15}
          color="#333333"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          about me
        </Text>
        
        {/* Right face */}
        <Text
          position={[1.01, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          fontSize={0.12}
          color="#333333"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          experienced frontend website developer from jordan
        </Text>
        
        {/* Back face */}
        <Text
          position={[0, 0, -1.01]}
          rotation={[0, Math.PI, 0]}
          fontSize={0.11}
          color="#333333"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          several years of experience in programming and web development
        </Text>
        
        {/* Left face */}
        <Text
          position={[-1.01, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          fontSize={0.11}
          color="#333333"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          proficient in ReactJS, TailwindCSS, JavaScript, HTML, and CSS.
        </Text>
        
        {/* Top face */}
        <Text
          position={[0, 1.01, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.11}
          color="#333333"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          stellar user interfaces, unique and responsive design, seo, all done by me
        </Text>
        
        {/* Bottom face */}
        <Text
          position={[0, -1.01, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          fontSize={0.13}
          color="#333333"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          100% satisfaction rate
        </Text>
      </mesh>
    </group>
  );
}