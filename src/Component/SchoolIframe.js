import React from 'react'
import { Html } from '@react-three/drei'
const SchoolIframe = ({ url }) => {
    return (
        <Html transform occlude={'blending'}
            zIndexRange={[10, 1]} position={[-69.0, 3.7, -6]} rotation-y={0}
            scale={0.30}  >
            <iframe width={"1600px"} height={"700vh"} src={url} frameborder="5" />

        </Html>
    )
}

export default SchoolIframe