import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Base from './Base'
import ImageSlider from './ImageSlider'

function Experience() {
    return (
        <Canvas>

            <OrbitControls />

            <ImageSlider />

        </Canvas>
    )
}

export default Experience
