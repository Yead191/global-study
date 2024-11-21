import React, { useState } from 'react';
import abroadLogo from '../assets/abroad2.jpeg'

const AboutBanner = () => {
    const [isLoading, setIsLoading] = useState(true)
    const handleImageLoad = () => {
        setIsLoading(false);
    }
    return (
        <div className="relative h-[350px] w-full">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            )}
            <img
                className={`h-full w-full overflow-hidden object-cover object-center transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                src={abroadLogo}
                alt="image loading"
                onLoad={handleImageLoad}
            />
            {!isLoading && (
                <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl text-white bg-black bg-opacity-50">
                    About Us
                </h1>
            )}
        </div>
    );
};

export default AboutBanner;