import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Punchline() {
    return (
        <section className='mt-10 flex flex-col justify-center items-center text-center h-48 px-5 rounded md:h-36 gap-3 lg:h-60' id='punchline-about'>
            <div>
                <h1 className='font-bold text-xl lg:text-4xl text-white'>Join the team</h1>
                <h5 className='lg:text-xl text-secondary text-white'>You dont have to be pro to participate, right?</h5>
            </div>
            <Button variant="secondary" className="bg-[#00FFC2] font-black text-secondary hover:text-primary lg:text-xl px-8 py-3 shadow-2xl lg:px-10 lg:py-8 uppercase" asChild>
                <Link href="https://wa.link/m883nw">
                    Join Us
                </Link>
            </Button>
        </section>
    )
}
