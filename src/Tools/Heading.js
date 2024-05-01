import React from 'react'

export default function Heading(props) {
    return (
        <div>
            <h1 className=' text-5xl font-bold text-red-950 mb-8 '>{props.name}</h1>
        </div>
    )
}
