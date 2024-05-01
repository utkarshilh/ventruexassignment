import React, { useRef, useEffect, useState } from 'react';
import Button from '../Tools/Button';
import HomePhoto from '/Users/apple/Desktop/new projects/tailWindCSs/venturexassignment/src/Photo/HomePhoto.png';

export default function Home() {
    const [headingWidth, setHeadingWidth] = useState(0);
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const paragraphRef = useRef(null);

    useEffect(() => {
        setHeadingWidth(headingRef.current.offsetWidth);
    }, []);

    useEffect(() => {
        if (headingWidth > 0) {
            subheadingRef.current.style.letterSpacing = `${headingWidth / 16}px`; // Assuming font-size is 4xl (16px)
            paragraphRef.current.style.width = `${headingWidth}px`;
        }
    }, [headingWidth]);

    return (
        <div style={{ backgroundColor: 'rgb(254,243,199)' }}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mx-auto max-w-4xl">
                {/* Left Part */}
                <div className="flex flex-col items-start flex-grow">
                    <h1 ref={headingRef} className="text-8xl font-bold mb-2 text-red-950">What the</h1>
                    <h2 ref={subheadingRef} className='text-4xl font-bold mb-2 text-red-950'>Bear Bears</h2>
                    <p ref={paragraphRef} className="text-lg text-red-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maiores natus?</p>
                    <div className="flex gap-4 mt-2">
                        <Button name="help" />
                        <a href="" className='mt-2 text-red-950'>AboutUs</a>
                    </div>
                </div>

                {/* Right Part */}
                <div>
                    <img src={HomePhoto} alt="Image" className="w-full h-auto md:w-80 md:h-auto " />
                </div>
            </div>
        </div>
    );
}
