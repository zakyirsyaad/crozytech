import React from 'react'
import SidebarPhone from '../components/navbar/sidebar-phone'
import SocialLink from '../components/navbar/social-link'
import Navlink from '../components/navbar/navlink'
import { ModeToggle } from '@/components/mode-toggle'

export default function Navbar() {
    return (
        <header>
            <div className='md:hidden p-4 flex justify-between'>
                <SidebarPhone />
                <SocialLink />
            </div>
            <div className='md:flex items-center justify-between p-4 hidden'>
                <Navlink />
                <div className='space-x-3 flex items-center'>
                    <SocialLink />
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
