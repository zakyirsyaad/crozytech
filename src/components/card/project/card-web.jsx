'use client'
import React, { Suspense, useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import { Skeleton } from '@/components/ui/skeleton'
import { useToast } from '@/components/ui/use-toast'
import Link from 'next/link'

// const imgProject = "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
export default function CardWeb() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const { toast } = useToast()

    const getWebProject = async () => {
        const res = await fetch('https://landing-page-kahlova.vercel.app/projects?kategori=Web%20Development')
        const projects = await res.json()
        const dataProjects = projects.data
        setProjects(dataProjects)
        setLoading(false)
        toast({ title: "Success loading Web projects" })
    }

    useEffect(() => {
        getWebProject()
    }, [])

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
                {loading ? <Skeleton className="h-[200px] md:w-[300px] lg:w-[425px] lg:h-[225px]" />
                    : projects.map((project, index) => (
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                            <Link href={`/project/${project.id}`}>
                                <Image src={project.foto_url[0]} alt={project.nama} width={400} height={400}
                                    className=' h-[200px] md:w-[300px] lg:w-[425px] lg:h-[225px] object-cover object-center rounded lg:grayscale hover:filter-none duration-300' />
                            </Link>
                        </CarouselItem>
                    ))}
            </CarouselContent>
        </Carousel>

    )
}
