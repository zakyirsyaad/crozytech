import React from 'react'
import BannerProject from '@/organism/project/detailproject/banner-detail'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import DescProject from '@/organism/project/detailproject/desc-project'

export default async function page({ params }) {
    const id = params.id
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/getproject/${id}`)
    const getDetailProjects = await res.json()
    const detailProject = getDetailProjects.data
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    return (
        <main className='space-y-5'>
            <Button variant="outline"> <Link href="/project" className='text-sm font-bold flex items-center gap-1'>
                <span><ChevronLeft /></span> Back to Project</Link>
            </Button>
            <div className='text-center'>
                <h2 className='font-bold text-lg md:text-2xl lg:text-4xl uppercase text-[#1a9b7b] dark:text-[#00FFC2]'>{detailProject.nama}</h2>
                <p className='text-[12px] text-primary/80'>Posted: {formatDate(detailProject.created_at)}</p>
            </div>
            <div className='space-y-10'>
                <BannerProject detailProject={detailProject} />
                <DescProject detailProject={detailProject} />
            </div>
        </main>
    )
}
