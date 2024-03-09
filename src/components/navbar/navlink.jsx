import Link from 'next/link'
import React from 'react'

export default function Navlink() {
    return (
        <nav className='space-x-5 uppercase font-semibold text-sm'>
            <Link href="/about" className='hover:text-[#00FFC2] duration-300 hover:underline decoration-wavy underline-offset-4'>About</Link>
            <Link href="/project" className='hover:text-[#00FFC2] duration-300 hover:underline decoration-wavy underline-offset-4'>Project</Link>
            <Link href="/pricing" className='hover:text-[#00FFC2] duration-300 hover:underline decoration-wavy underline-offset-4'>Pricing</Link>
            <Link href="/contact" className='hover:text-[#00FFC2] duration-300 hover:underline decoration-wavy underline-offset-4'>Contact</Link>

        </nav>
    )
}
