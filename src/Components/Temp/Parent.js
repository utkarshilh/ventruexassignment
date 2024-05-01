import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Heading from '../../Tools/Heading'


export default function Parent() {
    return (
        <div>
            <div className="text-center mx-auto py-12">
                <Heading name="CONTACT US" />
            </div>

            <div className="flex justify-center items-center h-screen">

                <Child1 />
                <Child2 />
            </div>
        </div>
    )
}
