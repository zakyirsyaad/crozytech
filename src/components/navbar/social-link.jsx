'use client'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Link from 'next/link'

export default function SocialLink() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger >
                        <p className='uppercase font-semibold'>Social</p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Instagram
                            </NavigationMenuLink>
                        </Link>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Linkedin
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}
