import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Box } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingShape = ({ position, geometry }: { position: [number, number, number]; geometry: "sphere" | "box" }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry === "sphere" ? (
        <sphereGeometry args={[0.5, 32, 32]} />
      ) : (
        <boxGeometry args={[1, 1, 1]} />
      )}
      <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
    </mesh>
  );
};

const Hero3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingShape position={[-3, 0, 0]} geometry="sphere" />
      <FloatingShape position={[3, 0, 0]} geometry="box" />
      <FloatingShape position={[0, 2, -2]} geometry="sphere" />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default Hero3D;