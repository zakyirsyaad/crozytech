import FormCollab from '@/organism/collaboration/form-collab'
import HeaderCollaboration from '@/organism/collaboration/header-collaboration'
import React from 'react'

export default function page() {
    return (
        <main className='flex flex-col items-center space-y-10'>
            <HeaderCollaboration />
            <FormCollab />
            <p className='text-xl text-center font-extrabold md:text-3xl lg:text-4xl uppercase'> MAKE indonesia INTO THE <br /> <span className='font-black' id='span-banner' > DIGITAL WORLD</ span></p >

        </main>
    )
}
