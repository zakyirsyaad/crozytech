'use client'
import React, { Suspense } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export default function BannerProject({ detailProject }) {
    return (
        <Carousel
            plugins={[Autoplay({ delay: 3000 })]}
        >
            <CarouselContent>
                {detailProject.foto_url.map((url, index) => (

                    <CarouselItem key={index} className="">
                        <Image src={url} alt={detailProject.nama} width={400} height={400} className='w-full h-[200px] md:h-[350px] lg:h-[500px] object-cover rounded' />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
