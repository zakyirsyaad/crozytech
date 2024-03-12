'use client'
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link'
import { Button } from '@/components/ui/button'


export default function Project() {
    const [project, setProject] = useState([])
    const [loading, setLoading] = useState(true)

    const getProject = async () => {
        setLoading(true)
        const res = await fetch('https://landing-page-kahlova.vercel.app/getallproject')
        const projects = await res.json()
        const dataProject = projects.data
        setProject(dataProject)
        setLoading(false)
    }

    useEffect(() => {
        getProject()
    }, [])

    return (
        <Carousel className="mt-20 mx-10 lg:mx-40 space-y-3 border-2 p-5 lg:p-10 rounded" plugins={[
            Autoplay({
                delay: 2000,
            }),
        ]}>
            <div className='flex flex-col items-center lg:flex-row justify-between gap-2'>
                <p className='uppercase text-lg lg:text-2xl'>Our Featured Work</p>
                <Button variant="outline">
                    <Link href={'/project'} className='capitalize'>see all project</Link>
                </Button>
            </div>

            <CarouselContent className="lg:-ml-4">
                {project.map((project, index) => (
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 shadow-2xl" key={index}>
                        <Card id="bg-featured" className=' flex flex-col justify-between' >
                            <CardHeader>
                                <div className='space-y-5'>
                                    <p className='text-sm text-end'><span className='border-2 px-2 py-1 rounded-md'>{project.kategori}</span></p>
                                    <CardTitle className="capitalize truncate">{project.nama}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="truncate">
                                    {project.deskripsi}
                                </CardDescription>
                                <Link href={`/project/${project.id}`}>see more</Link>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}

            </CarouselContent>
        </Carousel >
    )
}
