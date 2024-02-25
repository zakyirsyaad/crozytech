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


export default function SidebarPhone() {
    return (
        <Sheet>
            <SheetTrigger><AlignLeft /></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        <ModeToggle />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
