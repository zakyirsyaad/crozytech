import Link from 'next/link'
import React from 'react'

export default function Navlink() {
    return (
        <nav className='space-x-5 uppercase font-semibold text-sm'>
            <Link href="/">About</Link>
            <Link href="/">Project</Link>
            <Link href="/">Contact</Link>
        </nav>
    )
}
