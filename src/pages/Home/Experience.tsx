import { Canvas } from "@react-three/fiber";
import { Lenin } from "./Lenin";
import { Float, OrbitControls } from "@react-three/drei";

export default function StatueScene() {
  return (
    <div className="w-screen h-screen fixed z-0">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5 * Math.PI} />

      {/* <Float> */}
      <group
        scale={2.5}
        position={[-4, -7, 0]}
        rotation-y={(-Math.PI * 30) / 90}
        // rotation-x={(Math.PI * 1) / 90}
      >
        <Lenin />
      </group>
      {/* </Float> */}
    </>
  );
};
