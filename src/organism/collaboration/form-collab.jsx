import { Input } from '@/components/ui/input'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import DrawerCollab from '@/components/drawer-collab'


export default function FormCollab() {
    return (
        <form className='w-full md:w-3/4 lg:w-1/3 space-y-5'>
            <div>
                <DrawerCollab />
            </div>
            <Input type="text" placeholder="Name" required />
            <Input type="email" placeholder="Email" required />
            <Input type="text" placeholder="Whatsapp Number" required />
            <Input type="text" placeholder="Company/Personal Name" required />
            <Select required>
                <SelectTrigger>
                    <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Product Design">Product Design</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Mobile Development">Mobile Develompent</SelectItem>
                </SelectContent>
            </Select>
            <Select required>
                <SelectTrigger>
                    <SelectValue placeholder="Estimated Budget" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Low Budget"> Rp.500.000 &gt; Rp. 1000.000</SelectItem>
                    <SelectItem value="Middle Budget">Rp. 1000.000 - Rp. 3000.000</SelectItem>
                    <SelectItem value="High Budget"> &gt; Rp. 3000.000</SelectItem>
                </SelectContent>
            </Select>
            <Textarea placeholder="How can we help you?" required />
            <Button className='w-full' type="submit">Submit</Button>
        </form>
    )
}
