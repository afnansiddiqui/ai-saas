import Image from 'next/image'
import Canvas from '@/canvas'
import Customizer from '@/pages/Customizer'
import Home from '@/pages/Home'
import Navbar from '@/components/navbar'

export default function dShirt() {
    return (
      <div className='app transition-all ease-in'>
            <Navbar />
            <Home />
            <Canvas />
            <Customizer />
        </div>
    )
}
