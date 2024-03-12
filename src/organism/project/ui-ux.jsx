import CardUIUXProject from '@/components/card/project/card-uiux-project'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default async function UiUx() {
    return (
        <section className='space-y-10 border-2 p-10 rounded' >
            <div>
                <h2 className='font-semibold text-2xl lg:text-4xl mb-3 uppercase'>UI/UX Project</h2>
                <Separator />
            </div>
            <CardUIUXProject />
        </section>
    )
}


