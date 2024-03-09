'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useToast } from '@/components/ui/use-toast';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton"



export default function CardUIUXProject() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    const getProjects = async () => {
        setLoading(true, toast({ title: "Loading projects UI/UX" }))
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/getallproject?kategori=1`)
        try {
            const project = await res.json()
            setProjects(project.data)
            toast({ title: "Success loading UI/UX projects" })
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    useEffect(() => {
        getProjects()
    }, [])
    return (
        <Carousel
            plugins={[Autoplay({
                delay: 3000,
            })
            ]}>
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
    );
}
