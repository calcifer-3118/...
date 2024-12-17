import { Canvas } from "@react-three/fiber";

function Experience() {
  return (
    <Canvas>
      {/* Adding a basic scene */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}

export default Experience;
