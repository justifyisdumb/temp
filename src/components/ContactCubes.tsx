import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useDrag } from '@use-gesture/react';
import * as THREE from 'three';

export default function ContactCubes({ position }: { position: [number, number, number] }) {
  const cube1Ref = useRef<THREE.Mesh>(null);
  const cube2Ref = useRef<THREE.Mesh>(null);
  const cube3Ref = useRef<THREE.Mesh>(null);

  const bind1 = useDrag(({ offset: [x, y] }) => {
    if (cube1Ref.current) {
      cube1Ref.current.position.x = position[0] - 1.5 + x / 100;
      cube1Ref.current.position.y = position[1] + y / 100;
    }
  });

  const bind2 = useDrag(({ offset: [x, y] }) => {
    if (cube2Ref.current) {
      cube2Ref.current.position.x = position[0] + x / 100;
      cube2Ref.current.position.y = position[1] + y / 100;
    }
  });

  const bind3 = useDrag(({ offset: [x, y] }) => {
    if (cube3Ref.current) {
      cube3Ref.current.position.x = position[0] + 1.5 + x / 100;
      cube3Ref.current.position.y = position[1] + y / 100;
    }
  });

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (cube1Ref.current) {
      cube1Ref.current.rotation.y = Math.sin(time * 0.4) * 0.1;
      cube1Ref.current.position.y = Math.sin(time * 0.6) * 0.05;
    }
    
    if (cube2Ref.current) {
      cube2Ref.current.rotation.y = Math.sin(time * 0.3 + 1) * 0.1;
      cube2Ref.current.position.y = Math.sin(time * 0.5 + 1) * 0.05;
    }
    
    if (cube3Ref.current) {
      cube3Ref.current.rotation.y = Math.sin(time * 0.35 + 2) * 0.1;
      cube3Ref.current.position.y = Math.sin(time * 0.7 + 2) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Discord cube */}
      <mesh ref={cube1Ref} position={[-1.5, 0, 0]} rotation={[0.2, 0.3, 0]} {...bind1}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#5865F2" />
        <Text
          position={[0, 0, 0.51]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          🎮
        </Text>
        <Text
          position={[0, -0.3, 0.51]}
          fontSize={0.08}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Discord
        </Text>
      </mesh>
      
      {/* Instagram cube */}
      <mesh ref={cube2Ref} position={[0, 0, 0]} rotation={[0.2, 0.3, 0]} {...bind2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#E4405F" />
        <Text
          position={[0, 0, 0.51]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          📷
        </Text>
        <Text
          position={[0, -0.3, 0.51]}
          fontSize={0.08}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Instagram
        </Text>
      </mesh>
      
      {/* Gmail cube */}
      <mesh ref={cube3Ref} position={[1.5, 0, 0]} rotation={[0.2, 0.3, 0]} {...bind3}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#EA4335" />
        <Text
          position={[0, 0, 0.51]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          ✉️
        </Text>
        <Text
          position={[0, -0.3, 0.51]}
          fontSize={0.08}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Gmail
        </Text>
      </mesh>
    </group>
  );
}