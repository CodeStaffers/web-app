import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import "./about.styles.css";

function Model({ url }) {
  const { nodes } = useGLTF(url);
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.planet002.geometry}
          material={nodes.planet002.material}
        />
        <mesh
          geometry={nodes.planet003.geometry}
          material={nodes.planet003.material}
        />
      </group>
    </group>
  );
}
function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="aboutSection">
        <div className="wrapper">
          <div className="bg" />
          <h1 className="effects_title">Perfecto Our Motto</h1>
          <Canvas dpr={[1.5, 2]} linear shadows>
            <fog attach="fog" args={["#272730", 16, 30]} />
            <ambientLight intensity={0.75} />
            <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
              <pointLight intensity={1} position={[-10, -25, -10]} />
              <spotLight
                castShadow
                intensity={2.25}
                angle={0.2}
                penumbra={1}
                position={[-25, 20, -15]}
                shadow-mapSize={[1024, 1024]}
                shadow-bias={-0.0001}
              />
            </PerspectiveCamera>
            <Suspense fallback={null}>
              <Model url="/scene.glb" />
            </Suspense>
            <OrbitControls
              autoRotate
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Stars radius={500} depth={50} count={1000} factor={10} />
          </Canvas>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
/* 
canvas {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  
  .bg {
    position: absolute;
  }
  .wrapper > .effects_title {
    text-align: center;
  }
  .effects_title {
    font-weight: 900;
    font-size: 8em;
    margin: 0;
    padding: 0.2em 0px;
    background: linear-gradient(120deg, #5f45ff 20.69%, #0fe3ff 79.69%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 0.6em;
    letter-spacing: -2px;
    text-align: left;
  }
  
  .effects_title > .name-two {
    white-space: pre;
  }
  
  .name-two.header {
    font-weight: 700;
    position: absolute;
    display: inline-block;
    width: 500px;
    transform: translate3d(0, -50%, 0);
    font-size: 9em;
    line-height: 0.9em;
    pointer-events: none;
    top: 350px;
    left: 50px;
  }
  
  .name-two.header-left {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    position: absolute;
    display: inline-block;
    transform: translate3d(0, -50%, 0);
    line-height: 1em;
    top: 200px;
    left: 60px;
    font-size: 4em;
    width: 200px;
  }
  
*/
