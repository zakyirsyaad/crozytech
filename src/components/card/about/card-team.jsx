import Image from 'next/image'
import React from 'react'

export default function CardTeam() {
    const team1 = "https://firebasestorage.googleapis.com/v0/b/ecanteen-b8f4e.appspot.com/o/karina-tess-l35dDPD3Gys-unsplash.jpg?alt=media&token=b0bdcb1f-2e60-431a-9ffb-3349862ea580"
    return (
        <div className='space-y-5'>
            <Image src={team1} alt="team" width={400} height={400} className=' h-[200px] md:w-[300px] lg:w-[425px] lg:h-[225px] object-cover object-top rounded lg:grayscale hover:filter-none duration-300' />
            <div>
                <p className='font-bold text-xl'>Zaky Irsyad Rais</p>
                <p>CTO</p>
            </div>

        </div>
    )
}
