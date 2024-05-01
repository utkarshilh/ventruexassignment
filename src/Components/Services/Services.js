import React from 'react'
import Button from '../../Tools/Button'


export default function Services() {
    return (
        <div className='bg-amber-900'>
            <div className='flext flex justify-center'>
                <h1 className=' text-5xl font-bold text-white mb-8 '>SERVICES</h1>
            </div>
            <div className="flex justify-center">
                <div class="grid grid-cols-4 gap-4">
                    <div className="bg-white p-4 w-40 h-40 text-center rounded-lg">01</div>
                    <div className="bg-white p-4 w-40 h-40 rounded-lg">02</div>
                    <div className="bg-white p-4 w-40 h-40 rounded-lg">03</div>
                    <div className="bg-white p-4 w-40 h-40 rounded-lg">04</div>
                    <div className="bg-white p-4 w-40 h-40 rounded-lg">05</div>
                    <div className="bg-white p-4 w-40 h-40 rounded-lg">06</div>
                    <div className="bg-white p-4 w-40 h-40 rounded-lg">07</div>
                    <div className="bg-white p-4 w-40 h-40 rounded-lg">08</div>
                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <Button name="Help" />
            </div>
        </div>
    )
}
