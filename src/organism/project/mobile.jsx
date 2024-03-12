import CardMobile from '@/components/card/project/card-mobile'
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function Mobile() {
    return (
        <section className='space-y-10 border-2 p-10 rounded'>
            <div>
                <h2 className='font-semibold text-2xl lg:text-4xl mb-3 uppercase'>Mobile Application</h2>
                <Separator />
            </div>
            <CardMobile />
        </section>
    )
}
