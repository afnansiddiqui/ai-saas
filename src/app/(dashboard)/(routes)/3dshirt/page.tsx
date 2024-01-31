import Image from 'next/image'
import Canvas from '@/canvas'
import Customizer from '@/pages/Customizer'
import Home from '@/pages/Home'

export default function dShirt() {
    return (
        <div className='app transition-all ease-in'>
            <Home />
            <Canvas />
            <Customizer />
        </div>
    )
}
