/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Bhk.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.33, 1.11, -18.08]} scale={[21.89, 0.35, 19.18]}>
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube002_2.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Cube002_3.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.Cube002_4.geometry} material={materials['Material.017']} />
      </group>
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.041']} position={[-21.36, 8.79, -11.35]} scale={[0.23, 7.91, 26.04]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.040']} position={[0.42, 8.76, -37]} rotation={[0, 1.57, 0]} scale={[0.23, 7.91, 21.67]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.034']} position={[-12.04, 8.35, -15.92]} rotation={[0, 1.57, 0]} scale={[0.23, 7.48, 9.45]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.035']} position={[8.33, 8.81, -31.5]} rotation={[Math.PI, 0, Math.PI]} scale={[0.23, 5.59, 5.62]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Material.035']} position={[22.02, 8.4, -18.22]} rotation={[Math.PI, 0, Math.PI]} scale={[0.23, 7.48, 19.01]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.044']} position={[8.72, 8.34, -25.66]} rotation={[Math.PI, 0, Math.PI]} scale={[0.27, 7.48, 11.31]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Material.042']} position={[15.32, 8.01, -14.65]} rotation={[0, -1.57, 0]} scale={[0.23, 6.61, 6.51]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['Material.035']} position={[-5.36, 8.35, 1.05]} rotation={[0, 1.57, 0]} scale={[0.23, 7.48, 10.34]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['Material.035']} position={[13.77, 8.34, -9.82]} rotation={[0, -1.57, 0]} scale={[0.23, 7.48, 8.27]} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['Material.035']} position={[5.8, 8.2, -2.3]} rotation={[Math.PI, 0, Math.PI]} scale={[0.27, 6.41, 2.94]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.043']} position={[-2.86, 8.4, -26.57]} rotation={[Math.PI, 0, Math.PI]} scale={[0.23, 7.48, 10.65]} />
      <mesh geometry={nodes.Cube016.geometry} material={materials['Material.035']} position={[2.95, 8.34, -25.79]} rotation={[0, -1.57, 0]} scale={[0.23, 7.48, 5.73]} />
      <group position={[0.08, 8.4, 7.9]} rotation={[-Math.PI, 0, 0]} scale={[-0.23, -7.48, -6.92]}>
        <mesh geometry={nodes.Cube026_1.geometry} material={materials['Material.035']} />
        <mesh geometry={nodes.Cube026_2.geometry} material={materials['Material.028']} />
        <mesh geometry={nodes.Cube026_3.geometry} material={materials['Material.032']} />
      </group>
      <mesh geometry={nodes.Cube018.geometry} material={materials['Material.035']} position={[-10.65, 8.35, 14.66]} rotation={[0, 1.57, 0]} scale={[0.23, 7.48, 10.72]} />
      <mesh geometry={nodes.bed2.geometry} material={materials['Material.009']} position={[-14.87, 2.14, -32.26]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.33, -0.61, -4.56]} />
      <mesh geometry={nodes.mat2.geometry} material={materials['Material.013']} position={[-14.55, 3.43, -32.07]} scale={[6.08, 0.42, 4.52]} />
      <mesh geometry={nodes.pillow3.geometry} material={materials['Material.014']} position={[-20.07, 4.63, -30.27]} rotation={[0, 0, Math.PI / 6]} scale={[0.12, 0.78, 1.5]} />
      <mesh geometry={nodes.pillow4.geometry} material={materials['Material.014']} position={[-20.07, 5, -33.97]} rotation={[0, 0, 0.63]} scale={[0.12, 0.78, 1.5]} />
      <mesh geometry={nodes.bedsheet2.geometry} material={materials['Material.014']} position={[-12.53, 6.15, -30.57]} rotation={[Math.PI / 6, 0, 0]} scale={[5.86, 1.56, 6.51]} />
      <mesh geometry={nodes.bed.geometry} material={materials['Material.009']} position={[15.36, 2.14, -32.26]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-6.33, -0.61, -4.56]} />
      <mesh geometry={nodes.mat1.geometry} material={materials['Material.010']} position={[15.68, 3.43, -32.07]} scale={[6.08, 0.42, 4.52]} />
      <mesh geometry={nodes.pillow1.geometry} material={materials['Material.012']} position={[10.16, 4.63, -30.27]} rotation={[0, 0, Math.PI / 6]} scale={[0.12, 0.78, 1.5]} />
      <mesh geometry={nodes.pillow2.geometry} material={materials['Material.012']} position={[10.16, 4.63, -33.97]} rotation={[0, 0, 0.63]} scale={[0.12, 0.78, 1.5]} />
      <mesh geometry={nodes.bedsheet.geometry} material={materials['Material.012']} position={[17.7, 5.89, -30.57]} rotation={[Math.PI / 6, 0, 0]} scale={[5.86, 1.51, 5.96]} />
      <group position={[-19.18, 5.72, -17.75]} rotation={[0, 1.57, 0]} scale={[1.5, 4.69, 1.94]}>
        <mesh geometry={nodes.Cube025_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube025_2.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube025_3.geometry} material={materials['Material.005']} />
      </group>
      <mesh geometry={nodes.table.geometry} material={materials['Material.015']} position={[19.66, 3.28, -23.03]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.26, -0.15, -2.29]} />
      <mesh geometry={nodes.chair.geometry} material={materials['Material.015']} position={[16.58, 3.11, -22.87]} scale={[1.11, 0.16, 1.17]} />
      <mesh geometry={nodes.Cube028.geometry} material={nodes.Cube028.material} position={[11.87, 5, -9.29]} scale={[1, 1.21, 0.47]} />
      <group position={[9.08, 8.67, -24.31]} rotation={[-Math.PI, 0, 0]} scale={[0, -1.5, -2.18]}>
        <mesh geometry={nodes.Cube035_1.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cube035_2.geometry} material={materials['Material.008']} />
      </group>
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.001']} position={[-11.37, 2.39, -17.98]} scale={[4.65, 1.16, 1.76]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.013']} position={[-10.96, 2.03, -17.31]} scale={[4.65, 1.16, 1.76]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Material.013']} position={[-13.54, 2.03, -17.31]} scale={[4.65, 1.16, 1.76]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['Material.013']} position={[-16.49, 2.03, -17.31]} scale={[5.13, 1.16, 1.76]} />
      <mesh geometry={nodes.pillow3001.geometry} material={materials['Material.014']} position={[-13.94, 3.73, -17.45]} rotation={[1.99, -0.06, -1.59]} scale={[0.09, 0.64, 0.54]} />
      <mesh geometry={nodes.pillow3002.geometry} material={materials['Material.014']} position={[-11.28, 3.73, -17.45]} rotation={[1.99, -0.06, -1.59]} scale={[0.09, 0.64, 0.54]} />
      <mesh geometry={nodes.pillow3003.geometry} material={materials['Material.014']} position={[-8.67, 3.73, -17.45]} rotation={[1.99, -0.06, -1.59]} scale={[0.09, 0.64, 0.54]} />
      <group position={[19.91, 2.7, -4.47]} scale={[2.17, 1.5, 5.31]}>
        <mesh geometry={nodes.Cube038.geometry} material={materials['Material.020']} />
        <mesh geometry={nodes.Cube038_1.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Cube038_2.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cube038_3.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube038_4.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cube038_5.geometry} material={materials['Material.006']} />
      </group>
      <group position={[17.31, 8.76, -6.63]} scale={0.15}>
        <mesh geometry={nodes.Sphere001_1.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Sphere001_2.geometry} material={materials['Material.019']} />
      </group>
      <group position={[17.31, 8.76, -3.45]} scale={0.15}>
        <mesh geometry={nodes.Sphere004_1.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Sphere004_2.geometry} material={materials['Material.019']} />
      </group>
      <group position={[17.31, 8.76, 0.22]} scale={[0.15, 0.15, 0.17]}>
        <mesh geometry={nodes.Sphere005.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Sphere005_1.geometry} material={materials['Material.019']} />
      </group>
      <group position={[7.94, 3.34, -0.9]} scale={[1.5, 1.54, 1.5]}>
        <mesh geometry={nodes.Cube041.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Cube041_1.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.Cube041_2.geometry} material={materials['Material.024']} />
      </group>
      <mesh geometry={nodes.Cube021.geometry} material={nodes.Cube021.material} position={[9.06, 5.94, -2.52]} scale={[0.04, 0.3, 0.02]} />
      <mesh geometry={nodes.Cube022.geometry} material={nodes.Cube022.material} position={[9.06, 3.4, -2.52]} scale={[0.04, 0.3, 0.02]} />
      <mesh geometry={nodes.Cube023.geometry} material={nodes.Cube023.material} position={[9.03, 7.44, -2.52]} scale={[0.04, 0.1, 0.02]} />
      <group position={[20.62, 4.34, -2.73]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.84, -0.13, -1.39]}>
        <mesh geometry={nodes.Cube045.geometry} material={materials['Material.027']} />
        <mesh geometry={nodes.Cube045_1.geometry} material={materials['Material.029']} />
        <mesh geometry={nodes.Cube045_2.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.Cube045_3.geometry} material={materials['Material.026']} />
      </group>
      <mesh geometry={nodes.Cube025.geometry} material={materials['Material.030']} position={[19.6, 4.6, -9.13]} scale={[0.19, 0.32, 0.11]} />
      <mesh geometry={nodes.Cube026.geometry} material={materials['Material.031']} position={[-2.18, 9.93, -28.5]} scale={[0.49, 0.12, 0.1]} />
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.031']} position={[-1.73, 9.86, -28.6]} rotation={[0, 0, 1.24]} scale={[0.55, 0.08, 0.57]} />
      <mesh geometry={nodes.Cube027.geometry} material={materials['Material.001']} position={[-6.44, 2.39, -1.27]} scale={[4.65, 1.16, 1.76]} />
      <mesh geometry={nodes.Cube029.geometry} material={materials['Material.013']} position={[-6.03, 2.03, -0.45]} scale={[4.65, 1.16, 1.76]} />
      <mesh geometry={nodes.Cube030.geometry} material={materials['Material.013']} position={[-8.61, 2.03, -0.45]} scale={[4.65, 1.16, 1.76]} />
      <mesh geometry={nodes.Cube031.geometry} material={materials['Material.013']} position={[-11.56, 2.03, -0.45]} scale={[5.13, 1.16, 1.76]} />
      <mesh geometry={nodes.pillow3004.geometry} material={materials['Material.014']} position={[-9.01, 3.73, -0.74]} rotation={[1.99, -0.06, -1.59]} scale={[0.09, 0.64, 0.54]} />
      <mesh geometry={nodes.pillow3005.geometry} material={materials['Material.014']} position={[-6.35, 3.73, -0.74]} rotation={[1.99, -0.06, -1.59]} scale={[0.09, 0.64, 0.54]} />
      <mesh geometry={nodes.pillow3006.geometry} material={materials['Material.014']} position={[-3.74, 3.73, -0.74]} rotation={[1.99, -0.06, -1.59]} scale={[0.09, 0.64, 0.54]} />
      <mesh geometry={nodes.table001.geometry} material={materials['Material.015']} position={[-6.95, 2.85, -13.84]} rotation={[Math.PI, -1.57, Math.PI]} scale={[-1.26, -0.15, -2.29]} />
      <group position={[-5.71, 2.51, -12.54]} rotation={[-Math.PI, 0, 0]} scale={[-0.05, -0.05, -0.04]}>
        <mesh geometry={nodes.Cube060.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Cube060_1.geometry} material={materials['Material.033']} />
      </group>
      <group position={[-5.71, 1.87, -12.54]} rotation={[-Math.PI, 0, 0]} scale={[-0.05, -0.06, -0.04]}>
        <mesh geometry={nodes.Cube061.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Cube061_1.geometry} material={materials['Material.033']} />
      </group>
      <group position={[-7.08, 6.79, -15.55]} scale={[1.51, 0.87, 0.09]}>
        <mesh geometry={nodes.Cube062.geometry} material={materials['Material.036']} />
        <mesh geometry={nodes.Cube062_1.geometry} material={materials['Material.037']} />
      </group>
      <mesh geometry={nodes.Cube035.geometry} material={materials['Material.038']} position={[-6.91, 3.05, -14.55]} scale={[0.51, 0.07, 0.36]} />
      <mesh geometry={nodes.table002.geometry} material={materials['Material.015']} position={[-16.24, 2.91, -10.1]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-1.73, -0.15, -2.81]} />
      <mesh geometry={nodes.chair001.geometry} material={materials['Material.015']} position={[-19.32, 2.62, -10.2]} scale={[1.11, 0.18, 1.17]} />
      <mesh geometry={nodes.chair002.geometry} material={materials['Material.015']} position={[-13.02, 2.62, -10.2]} rotation={[Math.PI, 0, Math.PI]} scale={[1.11, 0.18, 1.17]} />
      <mesh geometry={nodes.chair003.geometry} material={materials['Material.015']} position={[-15.94, 2.62, -14.13]} rotation={[0, -1.57, 0]} scale={[1.11, 0.18, 1.17]} />
      <mesh geometry={nodes.Sphere002.geometry} material={nodes.Sphere002.material} position={[2.67, 3.39, -1.57]} scale={[1.5, 0.14, 1.5]} />
      <mesh geometry={nodes.Cube036.geometry} material={nodes.Cube036.material} position={[0.63, 5.53, 9.51]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.15, -0.64, -0.06]} />
    </group>
  )
}

useGLTF.preload('/Bhk.glb')