import Link from 'next/link'
import React from 'react'

export default function Navlink() {
    return (
        <nav className='space-x-5 uppercase font-semibold text-sm'>
            <Link href="/about">About</Link>
            <Link href="/project">Project</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}
