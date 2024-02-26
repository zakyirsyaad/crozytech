'use client'
import Loader from '@/components/loader/loader'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function NotFound() {
    const pathname = usePathname()
    const router = useRouter()
    return (
        <main className='h-screen flex flex-col justify-center items-center gap-12'>
            <Loader />
            <div className='text-center space-y-5'>
                <p className='text-sm font-bold md:text-xl lg:text-3xl'>THIS PAGE {pathname} IS UNDER CONSTRUCTION</p>
                <Button variant="outline" onClick={() => router.back()}>Back</Button>
            </div>

        </main>
    )
}