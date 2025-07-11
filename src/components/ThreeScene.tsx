import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AboutCube from './AboutCube';
import ProjectsTetrahedron from './ProjectsTetrahedron';
import ContactCubes from './ContactCubes';

interface ThreeSceneProps {
  showShapes: boolean;
}

export default function ThreeScene({ showShapes }: ThreeSceneProps) {
  if (!showShapes) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ pointerEvents: 'auto' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        
        {/* About cube - left side */}
        <AboutCube position={[-4, 0, 0]} />
        
        {/* Projects tetrahedron - right side, upper */}
        <ProjectsTetrahedron position={[4, 2, 0]} />
        
        {/* Contact cubes - right side, lower */}
        <ContactCubes position={[4, -2, 0]} />
        
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}