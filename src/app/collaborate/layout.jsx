import React from 'react'

export const metadata = {
    title: "CrozyTech - Collaborate",
    description: "Generated by create next app",
};

export default function layout({ children }) {
    return (
        <main className='mx-4 mt-10 mb-20 lg:mx-8' >
            {children}
        </main >
    )
}