import React from 'react'
import { notFound } from 'next/navigation'


export default async function Reviews({ params }) {
    const par = await params
    const { blogerID, reviews } = par
    if (parseInt(blogerID) > 100 || parseInt(reviews) > 1000 || isNaN(blogerID)) {
        notFound()
    }
    return (
        <div>
            for {blogerID} :{reviews}
        </div>
    )
}
