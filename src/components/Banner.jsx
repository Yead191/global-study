import React, { useState } from 'react';

const Banner = ({ countryName, countryImg }) => {
    const [isLoading, setIsLoading] = useState(true)
    const handleImageLoad = () => {
        setIsLoading(false);
    }

    return (
        <div className="relative h-[420px] w-full">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            )}
            <img
                className={`h-full w-full overflow-hidden object-cover object-bottom transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                src={countryImg}
                alt="image loading"
                onLoad={handleImageLoad}
            />
            {!isLoading && (
                <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl text-white bg-black bg-opacity-50">
                    Study in {countryName}
                </h1>
            )}
        </div>

    );
};

export default Banner;