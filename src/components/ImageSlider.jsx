import { useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import VertextShader from '../shaders/slider/vertex.glsl'
import FragmentShader from '../shaders/slider/fragment.glsl'

const texutures = ['1.jpg', '2.jpg','3.jpg','4.jpg','5.jpg']

function ImageSlider({ width = 4, height = 3, aspect = 0.75 }) {

    const mesh = React.useRef()
    const prevTexture = useTexture('/img/2.jpg')
    const texture1 = useTexture('/img/1.jpg')
    const viewport = useThree(s=>s.viewport)
    let ratio =  viewport.height * aspect / height
    if(viewport.width < viewport.height) ratio =  viewport.width * aspect / width


    const mouseHandler = (e) => {
      console.log('dfs');
      
        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight
        mesh.current.material.uniforms.uMouse.value = new THREE.Vector2(x, y)
    }

  return (
    <mesh onPointerMove={mouseHandler} ref={mesh}>
      <planeGeometry args={[width * ratio, height * ratio, 32, 32]} />
      <shaderMaterial 
        vertexShader={VertextShader} 
        fragmentShader={FragmentShader} 
        uniforms={{
            uMouse: null,
            uTexture1 : new THREE.Uniform(texture1),
        }}
      />
    </mesh>
  )
}

export default ImageSlider
