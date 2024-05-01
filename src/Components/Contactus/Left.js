import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import React from 'react'


export default function Left() {
    return (

        <div className="flex justify-center items-center space-x-14">
            <div className="flex flex-col items-center">
                <div className="container mx-auto">
                    <div>
                        <input
                            className="rounded-full border px-4 py-2 my-1 bg-orange-300"
                            type="text"
                        />
                    </div>

                    <div>
                        <input
                            className="rounded-full  px-4 py-2 my-1 bg-orange-300"
                            type="text"
                        />
                    </div>

                    <div>
                        <input
                            className="rounded-full  px-4 py-2 my-1 bg-orange-300"
                            type="text"
                        />
                    </div>

                    <div className="flex justify-center w-full">
                        <button
                            className="border border-red-900 px-4 py-4 my-3 rounded-full"
                            type="button"
                            style={{ width: '130px' }}
                        ></button>
                    </div>
                </div>
            </div>

            <div className="class2">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <MailIcon className="w-6 h-6 text-red-950" />
                        <span className="text-gray-600">yourGmailID@gmail.com</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <PhoneIcon className="w-6 h-6 text-red-950" />
                        <span className="text-gray-600">+1234567890</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <LocationMarkerIcon className="w-6 h-6 text-red-950" />
                        <span className="text-gray-600">Your Address</span>
                    </div>
                </div>
            </div>
        </div>

    )
}