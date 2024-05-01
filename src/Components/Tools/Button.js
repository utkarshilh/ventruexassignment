import React from 'react'

export default function Button(props) {

    // console.log(JSON.stringify(props));
    return (
        <div>
            <button
                className="bg-yellow-400 text-yellow-900 font-semibold py-2 px-6 border border-gray-400 rounded-full shadow"
                style={{ width: '150px', height: '40px' }}
            >
                {props.name}
            </button>
        </div>
    )
}
