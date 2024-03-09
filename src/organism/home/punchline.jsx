import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Punchline() {
    return (
        <section className='text-center my-24 mx-10 lg:mx-52 space-y-5' >
            <div className='space-y-3'>
                <p className='font-bold text-lg lg:text-5xl capitalize' id='punchline'>“Anyone who has never made a mistake has never tried anything new”</p>
                <p className='text-sm font-medium lg:text-2xl'>Albert Einstein</p>
            </div>

            <Button className="bg-[#00FFC2] font-bold text-primary dark:text-secondary lg:text-2xl px-8 py-3 shadow-2xl lg:px-10 lg:py-8" asChild>
                <Link href={"https://wa.link/aapdkj"}>Collaborate Now ! </Link>
            </Button>


        </section>
    )
}
