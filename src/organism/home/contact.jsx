import React from 'react'
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function Contact() {
    return (
        <section className='space-y-5 mt-20 mx-10 lg:mx-40 cursor-default'>
            <div className='flex flex-col items-end gap-y-5  md:flex-row md:items-center justify-between group duration-300'>
                <div>
                    <p className='font-bold text-xl md:text-2xl lg:text-4xl'>UI/UX Design</p>
                    <p className='font-light text-primary/50'>UI/UX design is the process of creating user interfaces and experiences that consider visual aspects, functionality, and user satisfaction.</p>
                </div>
                <Button asChild className="ease-out duration-300 transition-all lg:opacity-0 group-hover:opacity-100 font-bold uppercase">
                    <Link href="/">Lets Contact</Link>
                </Button>

            </div>
            <Separator />
            <div className='flex flex-col items-end gap-y-5  md:flex-row md:items-center justify-between gap-5 group duration-300'>
                <div>
                    <p className='font-bold text-xl md:text-2xl lg:text-4xl'>Website/Web Application</p>
                    <p className='font-light text-primary/50'>A website or web application is a digital platform accessible via the internet that provides users with information, services, or functionality tailored to their needs and interests.</p>
                </div>
                <Button asChild className="ease-out duration-300 transition-all lg:opacity-0 group-hover:opacity-100 font-bold uppercase">
                    <Link href="/">Lets Contact</Link>
                </Button>

            </div>
            <Separator />
            <div className='flex flex-col items-end gap-y-5  md:flex-row md:items-center md:gap-5 justify-between group duration-300'>
                <div>
                    <p className='font-bold text-xl md:text-2xl lg:text-4xl'>Mobile Application</p>
                    <p className='font-light text-primary/50'>A mobile application is a software application designed to run on mobile devices, providing users with specific functionalities, services, or entertainment on their smartphones or tablets.</p>
                </div>
                <Button asChild className="ease-out duration-300 transition-all lg:opacity-0 group-hover:opacity-100 font-bold uppercase">
                    <Link href="/">Lets Contact</Link>
                </Button>
            </div>
        </section>
    )
}
