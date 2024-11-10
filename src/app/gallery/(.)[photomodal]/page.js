import Modal from "@/components/Modal.js"
import GalleryCard from '@/components/GalleryCard';
import { api } from '@/components/Photoapi';
import { Suspense } from "react";

export default async function PhotoModalIntercept({ params }) {
    const obj = await params
    const { photomodal } = obj
    return (
        <>
            <GalleryCard api={api} />
            <Suspense fallback="loading..">
                <Modal index={photomodal} />
            </Suspense>
        </>
    )
}