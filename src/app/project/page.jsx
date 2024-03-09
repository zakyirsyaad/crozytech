import Mobile from '@/organism/project/mobile'
import UiUx from '@/organism/project/ui-ux'
import Web from '@/organism/project/web'
import React from 'react'

export default function page() {
    return (
        <main>
            <h1 className='font-bold text-3xl lg:text-5xl mb-3 uppercase'>what project we do? </h1>
            <h5 className='text-sm text-primary/50 lg:text-lg md:w-3/4 lg:w-2/3'>The projects we work on aim to fulfill your desires in achieving common goals. Every product we create has a special story. Our role as a technology partner is to help overcome obstacles and stimulate our clients growth.</h5>
            <div className='mt-10 space-y-10'>
                <UiUx />
                <Mobile />
                <Web />
            </div>

        </main>
    )
}
