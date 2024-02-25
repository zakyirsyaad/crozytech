import React from 'react'

export default function VideoProfile() {
    const videoSource = 'https://firebasestorage.googleapis.com/v0/b/jekydatabase.appspot.com/o/Whello%20-%20Agency%20introduction.mp4?alt=media&token=e29f2a89-099e-453a-89d0-032071e8084c'
    return (
        <video autoPlay muted loop controls playsInline className='w-80 flex justify-center rounded shadow-xl lg:w-1/2'>
            <source src={videoSource} type='video/mp4' />
        </video>
    )
}
