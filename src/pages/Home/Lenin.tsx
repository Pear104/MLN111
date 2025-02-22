/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/lenin/scene.gltf 
Author: Frice (https://sketchfab.com/Frice)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/lenin-monument-5f5690104dec4488953d745ae196d609
Title: Lenin Monument (Ленин)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Lenin(props) {
  const { nodes, materials } = useGLTF("/models/lenin/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={(nodes.Plane__0 as THREE.Mesh).geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          geometry={(nodes.Cylinder__0 as THREE.Mesh).geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/lenin/scene.gltf");
