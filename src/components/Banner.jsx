import React from 'react';

const Banner = ({ countryName, countryImg }) => {
    return (
        <div className='relative h-[420px] w-full'>
            <img
                className='h-full w-full overflow-hidden object-cover object-bottom'
                src={countryImg}
                alt="image loading"
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-5xl text-white bg-black bg-opacity-50'>
                Study in {countryName}
            </h1>
        </div>

    );
};

export default Banner;