'use client'
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { useToast } from '@/components/ui/use-toast'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import { Skeleton } from "@/components/ui/skeleton"


export default function CardMobile() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const { toast } = useToast()

    const getProjects = async () => {
        setLoading(true, toast({ title: "Loading projects Mobile" }))
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/getallproject?kategori=2`)
        try {
            const project = await res.json()
            setProjects(project.data)
            toast({ title: "Success loading Mobile projects" })
        } catch (error) {
            console.log(error)
            toast({ title: "Error loading projects" })
        }
        setLoading(false)
    }
    useEffect(() => {
        getProjects()
    }, [])
    return (
        // 50% on small screens and 33% on larger screens.
        <Carousel
            plugins={[Autoplay({
                delay: 3000,
            }),

            ]}
        >
            <CarouselContent>
                {loading ? <Skeleton className="h-[200px] md:w-[300px] lg:w-[425px] lg:h-[225px] " />
                    : projects.map((project, index) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                            <Link href={`/project/${project.id}`}>
                                <Image src={project.foto_url[0]} alt={project.nama} width={400} height={400}
                                    className=' h-[200px] md:w-[300px] lg:w-[425px] lg:h-[225px] object-cover object-top rounded lg:grayscale hover:filter-none duration-300' />
                            </Link>
                        </CarouselItem>
                    ))}


            </CarouselContent>
        </Carousel>

    )
}
