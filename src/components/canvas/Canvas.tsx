import * as THREE from "three";
import { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text, TrackballControls } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { SPHERE_TEXT } from "../../data/sphere";

// Define proper type for the Word component props
interface WordProps {
  children: React.ReactNode;
  position: THREE.Vector3;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

function Word({ children, ...props }: WordProps) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter_18pt-Bold.ttf",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };

  // Fix useRef by providing the initial value type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  // Use the correct ThreeEvent type from @react-three/fiber
  const over = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
  };
  const out = () => setHovered(false);

  // Fix the useEffect return type
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  // Fix the typing for useFrame
  useFrame(() => {
    // Type assertion for ref.current
    if (ref.current) {
      ref.current.material.color.lerp(
        color.set(hovered ? "#96d6c3" : "white"),
        0.1
      );
    }
  });

  return (
    <Billboard {...props}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log("clicked")}
        {...fontProps}
      >
        {children}
      </Text>
    </Billboard>
  );
}

interface CloudProps {
  count?: number;
  radius?: number;
}

function Cloud({ count = 4, radius = 20 }: CloudProps) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp: [THREE.Vector3, string][] = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    // Counter to cycle through the SPHERE_TEXT array
    let textIndex = 0;

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        // Get text from SPHERE_TEXT and cycle through it
        const text = SPHERE_TEXT[textIndex % SPHERE_TEXT.length];
        textIndex++;
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          text,
        ]);
      }
    }
    return temp;
  }, [count, radius]);

  return words.map(([pos, word], index) => (
    <Word key={index} position={pos}>
      {word}
    </Word>
  ));
}

export default function Sphere() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={8} radius={20} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  );
}
