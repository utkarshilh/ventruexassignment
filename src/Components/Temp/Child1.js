import React from 'react'

export default function Child1() {
    return (
        <div className="border p-4 m-2">
            <div className="container mx-auto">

                <input
                    className="rounded-full border border-red-900 px-4 py-2 my-1 bg-orange-300"
                    type="text"
                />
                <br />
                <input
                    className="rounded-full border border-red-900 px-4 py-2 my-1 bg-orange-300"
                    type="text"
                />
                <br />
                <input
                    className="rounded-full border border-red-900 px-4 py-2 my-1 bg-orange-300"
                    type="text"
                />

                <div className="flex justify-center">
                    <button
                        className="border border-red-900 px-4 py-2 rounded-lg mt-2"
                        style={{ width: '100px' }} // Set the width of the button here
                        type="button"
                    >

                    </button>
                </div>
            </div>
        </div>
    )
}
