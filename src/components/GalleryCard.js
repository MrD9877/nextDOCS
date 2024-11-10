'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function GalleryCard({ api }) {
    const router = useRouter()
    const handlePhotoClicked = (index) => {
        router.push(`/gallery/${index}`, { scroll: false })
    }
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {api.photos.map((img, index) => {
                    return <div key={img.id}>
                        <img onClick={() => handlePhotoClicked(index)} className="h-auto max-w-full rounded-lg" src={img.src.medium} alt="" />
                    </div>
                })}
            </div>

        </div>
    )
}
