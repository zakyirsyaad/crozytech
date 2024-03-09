'use client'
import Loader from '@/components/loader/loader'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'

export default function NotFound() {
    const pathname = usePathname()
    const router = useRouter()

    const backPage = () => {
        router.back()
    }

    return (
        <main className='h-screen flex flex-col justify-center items-center gap-12'>
            <Loader />
            <div className='text-center space-y-5'>
                <p className='text-sm font-bold md:text-xl lg:text-3xl capitalize'>this page {pathname} is under maintenance</p>
                <p>Come back here to check regularly</p>
                <Button variant="outline" onClick={() => backPage()}>Back Page</Button>
            </div>

        </main>
    )
}