import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'


export default function DrawerCollab() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="secondary">How is the collaboration flow?</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="flex flex-col items-center space-y-5">
                    <DrawerTitle>Flow collaboration With Crozy Tech</DrawerTitle>
                    <DrawerDescription>
                        <ul className='space-y-2 lg:text-lg'>
                            <li>1. Discuss project after your submit form, wait for message from CrozyTech.</li>
                            <li>2. Design.</li>
                            <li>3. Development.</li>
                            <li>4. Testing.</li>
                            <li>5. Deploy.</li>
                            <li>6. Done, Happy Collaboration.</li>
                            <li>7. Maintenance (agreement with us).</li>
                        </ul>
                    </DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>

    )
}
