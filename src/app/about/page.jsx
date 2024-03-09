import Punchline from '@/organism/about/punchline'
import Team from '@/organism/about/team'
import React from 'react'

export default function page() {
    return (
        <>
            <h1 className='font-bold text-3xl lg:text-5xl mb-3'>MEET OUR TEAM </h1>
            <h5 className='text-sm text-primary/50 lg:text-lg md:w-3/4 lg:w-2/3'>Founded in Yogyakarta, we convey the impression of innovation and modernity through various services related to software development technology by designing, building and maintaining to optimize your business.
                Meet our talented team of developers by our shared passion for impression of innovation and modernity through various technology-related services, such as software development.</h5>
            <Team />
            <Punchline />
        </>
    )
}
