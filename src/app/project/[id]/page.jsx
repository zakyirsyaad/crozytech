import Image from 'next/image'
import React from 'react'

export default async function page({ params }) {
    const id = params.id
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/getproject/${id}`)
    const getDetailProjects = await res.json()
    const detailProject = getDetailProjects.data

    return (
        <main>
            <h1 className='font-bold text-3xl'>{detailProject.nama}</h1>
            <Image src={detailProject.foto_url[0]} alt={detailProject.nama} width={400} height={400} />
        </main>
    )
}
