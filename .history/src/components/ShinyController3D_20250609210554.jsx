import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import controllerImg from "../styles/3d2.jpg"; // đổi đường dẫn đúng file

function FloatingImage() {
  const meshRef = useRef();

  // Quay nhẹ liên tục
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.05;
    }
  });

  // Tạo texture từ ảnh
  const texture = new THREE.TextureLoader().load(controllerImg);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial map={texture} transparent />
    </mesh>
  );
}

export default function ShinyController3D() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={<Html center>Loading...</Html>}>
          <FloatingImage />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
