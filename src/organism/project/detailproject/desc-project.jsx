import React from 'react';

export default function DescProject({ detailProject }) {

    return (
        <section className='space-y-5'>
            <div>
                <h3 className='font-semibold text-sm md:text-lg lg:text-2xl capitalize'>Description</h3>
                <p className='text-primary/50'>{detailProject.deskripsi}</p>
            </div>
            <div>
                <h3 className='font-semibold text-sm md:text-lg lg:text-2xl'>Tech Stack</h3>
                {detailProject.tech_made.map((stack, index) => (
                    <p className='uppercase text-primary/50' key={index}>{stack}</p>
                ))}
            </div>
        </section>
    );
}
