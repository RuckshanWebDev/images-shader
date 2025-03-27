import { useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import VertextShader from '../shaders/slider/vertex.glsl'
import FragmentShader from '../shaders/slider/fragment.glsl'

function ImageSlider({ width = 4, height = 3, aspect = 0.75 }) {

    const texture1 = useTexture('/img/1.jpg')
    const viewport = useThree(s=>s.viewport)
    let ratio =  viewport.height * aspect / height
    if(viewport.width < viewport.height) ratio =  viewport.width * aspect / width

  return (
    <mesh>
      <planeGeometry args={[width * ratio, height * ratio]} />
      <shaderMaterial 
        vertexShader={VertextShader} 
        fragmentShader={FragmentShader} 
        uniforms={{
            uTexture1 : new THREE.Uniform(texture1),
        }}
      />
    </mesh>
  )
}

export default ImageSlider
