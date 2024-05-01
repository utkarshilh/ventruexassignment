import React from 'react';
import Button from '../Tools/Button';
import First from '/Users/apple/Desktop/new projects/tailWindCSs/venturexassignment/src/Photo/first.png'
import Second from '/Users/apple/Desktop/new projects/tailWindCSs/venturexassignment/src/Photo/second.png'
import Third from '/Users/apple/Desktop/new projects/tailWindCSs/venturexassignment/src/Photo/third.png'
import Fourth from '/Users/apple/Desktop/new projects/tailWindCSs/venturexassignment/src/Photo/fourth.png'
import Fifth from '/Users/apple/Desktop/new projects/tailWindCSs/venturexassignment/src/Photo/fifth.png'
import Sixth from '/Users/apple/Desktop/new projects/tailWindCSs/venturexassignment/src/Photo/sixth.png'
import Seventh from '/Users/apple/Desktop/new projects/tailWindCSs/venturexassignment/src/Photo/seventh.png'
import Eighth from '/Users/apple/Desktop/new projects/tailWindCSs/venturexassignment/src/Photo/eighth.png'
export default function Services() {
    return (
        <div className='bg-amber-900 '>
            <div className="container mx-auto p-12" >
                <div className='flex justify-center'>
                    <h1 className='text-5xl font-bold text-white mb-8'>SERVICES</h1>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 w-full sm:w-45 h-40 text-center rounded-lg flex items-center justify-center">
                            <img src={First} alt="" className="mr-4" />
                            <div className="text-center text-amber-900">
                                <h5 className='font-bold text-april w-auto truncate'>Round Rock </h5>
                                <p>PLUMBING</p>
                            </div>
                        </div>


                        <div className="bg-white p-4 w-full sm:w-45 h-40 text-center rounded-lg flex items-center justify-center">
                            <img src={Second} alt="" className="mr-4" />
                            <div className="text-center text-amber-900">
                                <h5 className='font-bold text-april w-auto truncate'>Round Rock </h5>
                                <p>PLUMBING</p>
                            </div>
                        </div>

                        <div className="bg-white p-4 w-full sm:w-45 h-40 text-center rounded-lg flex items-center justify-center">
                            <img src={Third} alt="" className="mr-4" />
                            <div className="text-center text-amber-900">
                                <h5 className='font-bold text-april w-auto truncate'>Round Rock </h5>
                                <p>PLUMBING</p>
                            </div>
                        </div>


                        <div className="bg-white p-4 w-full sm:w-45 h-40 text-center rounded-lg flex items-center justify-center">
                            <img src={Fourth} alt="" className="mr-4" />
                            <div className="text-center text-amber-900">
                                <h5 className='font-bold text-april w-auto truncate'>Round Rock </h5>
                                <p>PLUMBING</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 w-full sm:w-45 h-40 text-center rounded-lg flex items-center justify-center">
                            <img src={Fifth} alt="" className="mr-4" />
                            <div className="text-center text-amber-900">
                                <h5 className='font-bold text-april w-auto truncate'>Round Rock </h5>
                                <p>PLUMBING</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 w-full sm:w-45 h-40 text-center rounded-lg flex items-center justify-center">
                            <img src={Sixth} alt="" className="mr-4" />
                            <div className="text-center text-amber-900">
                                <h5 className='font-bold text-april w-auto truncate'>Round Rock </h5>
                                <p>PLUMBING</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 w-full sm:w-45 h-40 text-center rounded-lg flex items-center justify-center">
                            <img src={Seventh} alt="" className="mr-4" />
                            <div className="text-center text-amber-900">
                                <h5 className='font-bold text-april w-auto truncate'>Round Rock </h5>
                                <p>PLUMBING</p>
                            </div>
                        </div>
                        <div className="bg-white p-4 w-full sm:w-45 h-40 text-center rounded-lg flex items-center justify-center">
                            <img src={Eighth} alt="" className="mr-4" />
                            <div className="text-center text-amber-900">
                                <h5 className='font-bold text-april w-auto truncate'>Round Rock </h5>
                                <p>PLUMBING</p>
                            </div>
                        </div>





                    </div>
                </div>
                <div className='flex justify-center mt-8'>
                    <Button name="Help" />
                </div>
            </div>
        </div>



    );
}
