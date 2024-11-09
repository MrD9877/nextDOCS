'use client'
import React, { useEffect, useState } from 'react'
import { api } from './Photoapi'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Modal(index) {
    const router = useRouter()
    const [photo, setPhoto] = useState()
    const [src, setSrc] = useState()
    const fechPhoto = () => {
        const photo = parseInt(index.index)
        const image = api.photos[photo]
        setPhoto(() => {
            setSrc(image.src.original)
            return image
        })
    }
    useEffect(() => {
        fechPhoto()
    }, [])
    const closeModal = () => {
        router.push("/gallery", { scroll: false })
    }
    return (
        <div className="w-screen h-screen flex justify-center align-middle">
            {/* <!-- Main modal --> */}
            <div id="default-modal" tabIndex="-1" aria-hidden="true" style={{ left: "30%" }} className="overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between 5 border-b rounded-t dark:border-gray-600">
                            <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-4 md:p-5 space-y-4 w-full flex justify-center">
                            {src ? <Image src={src} height={400} width={400} alt='img' /> : "loading.."}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
