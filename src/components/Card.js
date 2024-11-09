"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


export default function Card(head, child, navigate) {
    const router = useRouter()
    return (
        <div>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{head}</h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-5xl font-extrabold tracking-tight">{child}</span>
                </div>
                <button onClick={() => router.push(navigate)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">change screen</button>
            </div>
        </div>
    )
}
