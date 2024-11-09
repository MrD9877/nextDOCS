'use client'
import GalleryCard from '@/components/GalleryCard';
import { api } from '@/components/Photoapi';


export default function Gallery() {
    return (
        <div>
            <GalleryCard api={api} />
        </div>
    )
}
