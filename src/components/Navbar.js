'use client'

import React from 'react'
import Link from 'next/link'
import "../app/globals.css"
import { usePathname } from 'next/navigation'


export default function Navbar() {
    const pathname = usePathname()

    return (
        <>
            <div className='flex flex-col mb-16'>
                <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
                <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
                <Link className={`link ${pathname === '/gallery' ? 'active' : ''}`} href="/gallery">gallery</Link>
            </div>
        </>
    )
}

