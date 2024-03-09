import Spinner from '@/components/loader/spinner'
import React from 'react'

export default function Loading() {
    return (
        <main className='h-screen flex flex-col justify-center items-center gap-12'>
            <Spinner />
        </main>
    )
}
