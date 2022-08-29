import { Suspense, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { Physics, useBox } from "@react-three/cannon";
import "./App.css";
import Orbit from "./component/Orbit";
import Ground from "./component/Ground";
import Sun from "./component/Sun";
import Bhk from "./component/Bhk";
import Vr from "./component/Vr";
function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", background: "black" }}>
      <Canvas camera={{ position: [7, 7, 7] }} shadowMap>
        <Orbit />
        {/* <Sun position={[0, 6, 6]} /> */}

        <ambientLight intensity={0.5} />

        <Physics>
          <Suspense fallback={null}>
            {/* <Bhk></Bhk> */}
            <Vr></Vr>
          </Suspense>

          {/* <Ground /> */}
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
