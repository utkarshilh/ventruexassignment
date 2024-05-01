import React from 'react'
import Heading from '../Tools/Heading'
import Left from './Left'
import Right from './Right'
export default function Contact() {
    return (
        <div>

            <div className="text-center mx-auto py-12">
                <Heading name="CONTACT US" />
            </div>
            <Left style={{ marginTop: '-13rem' }} />

            {/* <Right /> */}
        </div>

    )
}
