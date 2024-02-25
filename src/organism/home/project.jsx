'use client'
import React from 'react'
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


export default function Project() {
    const imgUIUX = "https://firebasestorage.googleapis.com/v0/b/jekydatabase.appspot.com/o/Screenshot%202024-02-25%20015937.png?alt=media&token=2d28fb86-2cbb-4ed6-8539-83ed1e49be6d"
    const imgWeb = "https://firebasestorage.googleapis.com/v0/b/jekydatabase.appspot.com/o/Screenshot%202024-01-03%20211723.png?alt=media&token=a407ed23-0ca3-4d94-bfad-9b478cca6a10"
    const imgMobileApp = "https://firebasestorage.googleapis.com/v0/b/jekydatabase.appspot.com/o/Screenshot%202024-01-03%20171329.png?alt=media&token=139e73fe-d689-424d-9ba6-2c29ef9240e3"
    return (
        <Carousel className="mt-10 mx-10 lg:mx-40" plugins={[
            Autoplay({
                delay: 2000,
            }),
        ]}>
            <CarouselContent className="lg:-ml-4">
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 shadow-2xl">
                    <Card>
                        <CardHeader>
                            <CardTitle>UI/UX</CardTitle>
                            <CardDescription>
                                <Link href="/project">see more</Link>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src={imgUIUX} alt="foto ui/ux project Crozy Tech" loading='lazy' className='aspect-[3/2] object-cover' />
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 shadow-2xl">
                    <Card>
                        <CardHeader>
                            <CardTitle className="truncate">Website/Web Application</CardTitle>
                            <CardDescription> <Link href="/project">see more</Link></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src={imgWeb} alt="foto ui/ux project Crozy Tech" loading='lazy' className='aspect-[3/2] object-cover' />
                        </CardContent>
                    </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3 shadow-2xl">
                    <Card>
                        <CardHeader>
                            <CardTitle>Mobile Application</CardTitle>
                            <CardDescription> <Link href="/project">see more</Link></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img src={imgMobileApp} alt="foto ui/ux project Crozy Tech" loading='lazy' className='aspect-[3/2] object-contain' />
                        </CardContent>
                    </Card>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}
