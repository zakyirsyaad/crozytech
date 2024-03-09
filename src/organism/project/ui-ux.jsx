import CardUIUXProject from '@/components/card/project/card-uiux-project'
import React from 'react'

export default async function UiUx() {
    return (
        <section className='space-y-5' >
            <h2 className='font-semibold text-2xl lg:text-4xl mb-3 uppercase'>UI/UX Project</h2>
            <CardUIUXProject />
        </section>
    )
}


