
import { useBox } from "@react-three/cannon"

const Ground = props=>{
  const [ref, api] = useBox(()=>({args:[100,0,100],...props}))
  return(
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[100,0,100]}/>
      <meshPhysicalMaterial color={'green'} />
    </mesh>
  )
}

export default Ground
