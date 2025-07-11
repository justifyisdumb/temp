import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useDrag } from '@use-gesture/react';
import AboutCube from './AboutCube';
import ProjectsTetrahedron from './ProjectsTetrahedron';
import ContactCubes from './ContactCubes';
import { useRef } from 'react';
import * as THREE from 'three';

function DraggableAboutCube({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const bind = useDrag(({ offset: [x, y] }) => {
    if (groupRef.current) {
      groupRef.current.position.x = position[0] + x / 100;
      groupRef.current.position.y = position[1] + y / 100;
    }
  });

  return (
    <group ref={groupRef} {...bind}>
      <AboutCube position={position} />
    </group>
  );
}

function DraggableProjectsTetrahedron({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const bind = useDrag(({ offset: [x, y] }) => {
    if (groupRef.current) {
      groupRef.current.position.x = position[0] + x / 100;
      groupRef.current.position.y = position[1] + y / 100;
    }
  });

  return (
    <group ref={groupRef} {...bind}>
      <ProjectsTetrahedron position={position} />
    </group>
  );
}

interface ThreeSceneProps {
  showShapes: boolean;
}

export default function ThreeScene({ showShapes }: ThreeSceneProps) {
  if (!showShapes) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ pointerEvents: 'auto' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        
        {/* About cube - left side */}
        <DraggableAboutCube position={[-4, 0, 0]} />
        
        {/* Projects tetrahedron - right side, upper */}
        <DraggableProjectsTetrahedron position={[4, 2, 0]} />
        
        {/* Contact cubes - right side, lower */}
        <ContactCubes position={[4, -2, 0]} />
        
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          enableRotate={false}
          rotateSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}