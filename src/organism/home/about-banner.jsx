import Link from 'next/link'
import React from 'react'

export default function AboutBanner() {
    return (
        <section className='text-center space-y-1'>
            <p className='mt-14 px-8 font-semibold md:px-40 lg:px-80 lg:mt-20 lg:text-2xl'>
                We convey an impression of innovation and modernity through various technology-related services, such as software development.
            </p>
            <Link href="/about" className='text-[10px] md:text-[12px] text-primary/50 uppercase underline'>more about us</Link>
        </section>
    )
}
