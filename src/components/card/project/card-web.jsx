'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"

const imgProject = "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
export default function CardWeb() {
    return (
        // 50% on small screens and 33% on larger screens.
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
                }),

            ]}
        >
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Image src={imgProject} alt="project" width={400} height={400} className=' h-[200px] md:w-[300px] lg:w-[425px] lg:h-[225px] object-cover object-top rounded lg:grayscale hover:filter-none duration-300' />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Image src={imgProject} alt="project" width={400} height={400} className=' h-[200px] md:w-[300px] lg:w-[425px] lg:h-[225px] object-cover object-top rounded lg:grayscale hover:filter-none duration-300' />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Image src={imgProject} alt="project" width={400} height={400} className=' h-[200px] md:w-[300px] lg:w-[425px] lg:h-[225px] object-cover object-top rounded lg:grayscale hover:filter-none duration-300' />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Image src={imgProject} alt="project" width={400} height={400} className=' h-[200px] md:w-[300px] lg:w-[425px] lg:h-[225px] object-cover object-top rounded lg:grayscale hover:filter-none duration-300' />
                </CarouselItem>
            </CarouselContent>
        </Carousel>

    )
}
