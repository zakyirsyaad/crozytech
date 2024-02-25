import React from 'react'
import VideoProfile from '../../components/video-profile'

export default function Banner() {
    return (
        <section className='text-center pt-10 flex flex-col justify-center items-center space-y-10 lg:pt-24'>
            <div>
                <p className='text-xl font-extrabold md:text-3xl lg:text-6xl'> MAKE INTO THE <span className='' id='span-banner' > DIGITAL WORLD</ span></p >
                <p className='text-[9px] md:text-sm lg:text-xl'>Crozy - Digital agency with specialist what you need</p>
            </div>
            <VideoProfile />
        </section >
    )
}
