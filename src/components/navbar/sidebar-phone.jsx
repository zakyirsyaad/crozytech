import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignLeft } from 'lucide-react'
import { ModeToggle } from '../mode-toggle'
import Navlink from './navlink'


export default function SidebarPhone() {
    return (
        <Sheet>
            <SheetTrigger><AlignLeft /></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetDescription>
                        <ModeToggle />
                        <Navlink />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
