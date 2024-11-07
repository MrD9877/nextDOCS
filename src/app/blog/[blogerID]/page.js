import React from 'react'

export default async function Bloger({ params }) {
    const par = await params
    return (
        <div>
            this is {par.blogerID}
        </div>
    )
}
