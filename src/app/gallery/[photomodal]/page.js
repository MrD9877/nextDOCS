'use client'
import Modal from "@/components/Modal.js"
import { Suspense } from "react";

export default async function PhotoModal({ params }) {
    const obj = await params
    const { photomodal } = obj
    return (
        <>
            <Suspense fallback="loading..">
                <Modal index={photomodal} />
            </Suspense>
        </>
    )
}
