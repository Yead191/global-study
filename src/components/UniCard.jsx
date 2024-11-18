import React from 'react';

const UniCard = ({ university }) => {
    const { universityName, rating, universityImage } = university
    console.log(university);
    return (
        <div className="card card-compact bg-base-100  shadow-xl transition hover:scale-110">
            <figure>
                <img className='w-full h-[345px] overflow-hidden object-cover'
                    src={universityImage}
                    alt="universityImage" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{universityName}</h2>
                <div className='flex justify-between'>
                    <div className='gap-4 flex items-center'>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-6"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <button className='btn btn-sm'>{rating}</button>

                    </div>
                    <button className='btn transition hover:scale-110 btn-accent'>Learn More</button>

                </div>
              
            </div>
        </div>
    );
};

export default UniCard;