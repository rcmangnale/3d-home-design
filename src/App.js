import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { Physics, useBox } from "@react-three/cannon";
import "./App.css";
import Orbit from "./component/Orbit";
import Ground from "./component/Ground";
import Sun from "./component/Sun";
import Bhk from "./component/Bhk";
import Vr from "./component/Vr";
import ClipLoader from "react-spinners/ClipLoader";

// const override = {
//   display: "block",
//   alignItems: 'center',
//   justifyContent: 'center',
//   margin: "0 auto",  
// };


const numb = document.querySelector(".numb");
let counter = 0;
console.log(counter);
setInterval(()=>{
  if(counter === 100){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 80);
function App() {
  const [loading,setLoading]= useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(() =>{
    setLoading(false)
    },10000)
  },[])

  
  
  return (
    
        <div style={{ height: "100vh",  alignItems: 'center',
        justifyContent: 'center', display: 'flex', width: "100vw", background: "black" }}>
      {
        loading ?

        // <ClipLoader color={"#F37A24"} loading={loading} position={"center"} cssOverride={override}  size={150} />
        <div class="circular">
            <div class="inner"></div>
            <div class="outer"></div>
            <div class="numb">
               
            </div>
            <div class="circle">
               <div class="dot">
                  <span></span>
               </div>
               <div class="bar left">
                  <div class="progress"></div>
               </div>
               <div class="bar right">
                  <div class="progress"></div>
               </div>
            </div>
         </div>
        :
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
}
    </div>    
  );
}

export default App;
