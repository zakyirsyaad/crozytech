import CardTeam from '@/components/card/about/card-team'
import React from 'react'

export default function Team() {
    return (
        <section className='mt-10 flex flex-col gap-10 md:flex-row md:flex-wrap'>
            <CardTeam />
            <CardTeam />
            <CardTeam />
            <CardTeam />
            <CardTeam />
            <CardTeam />
        </section>
    )
}
