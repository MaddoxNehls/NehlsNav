"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
    const headerMenu = [
        {
            id: 1,
            name: 'Ride',
            icon: '/ride1.svg'
        },
        {
            id: 2,
            name: 'Packages',
            icon: '/package.svg'
        },
        {
            id: 3,
            name: 'Luxury Ride',
            icon: '/luxury.svg' 
        },
        {
            id: 4,
            name: 'Carpool',
            icon: '/carpool.svg' 
        }
    ]
    return (
        <div className='p-5 border-b-[4px] border-gray-200 flex items-center justify-between'>
            <div className='flex items-center gap-24'>
                <Image src='/nehlsnav.png'
                    width={240} height={240}
                    alt='Logo' className='cursor-pointer' />
            </div>
            <div className='flex items-center justify-center gap-12'>
                {headerMenu.map((item) => (
                    <button 
                        className='flex gap-2 items-center cursor-pointer p-2 rounded transition-transform transform hover:scale-105' 
                        key={item.id}
                        style={{ background: 'none', border: 'none' }}
                    >
                        <Image src={item.icon} 
                            width={28} height={28} alt={`${item.name} icon`} />
                        <h2 className='text-[16px] font-medium'>{item.name}</h2>
                    </button>
                ))}
            </div>
            <UserButton />
        </div>
    )
}

export default Header
