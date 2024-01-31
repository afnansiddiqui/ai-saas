'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

import state from '@/store'
import Image from 'next/image'
import { CustomButton } from '@/components'

const Home = () => {
  const snap = useSnapshot(state);

  return (
    // <div>Hello</div>
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <Image
              src='/threejs.png'
              alt='logo'
              height={300}
              width={300}
              className='w-20 h-20 object-contain'
            />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='text-9xl font-bold '>
                3D AI <br className='xl:block hidden' /> Shirt
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-5'
            >
              <p className='max-w-md font-normal text-base'>
                Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>
                  Unleash your imagination
                </strong>{" "}
                and define your own style.
              </p>

              <CustomButton
              type="filled"
              title="Customize It"
              handleClick={() => state.intro = false}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm "
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home