import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export const Effects = () => {
    return (
        <EffectComposer>
            <Bloom luminanceThreshold={1} mipmapBlur intensity={0.5} radius={0.4} />
            <Noise opacity={0.05} premultiply blendFunction={BlendFunction.ADD} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
    )
}
