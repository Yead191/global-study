import React from 'react';
import HomeBanner from '../components/HomeBanner';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const countries = useLoaderData()
    // console.log(countries);

    return (
        <div className='mt-24 mb-6'>
            <header>
                <HomeBanner></HomeBanner>
            </header>
            <section className='my-8'>
                <h4 className='text-center '>Choose Country</h4>
                <h1 className='text-center text-4xl font-bold'>Top Countries to Study</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 w-10/12 mx-auto '>
                    {
                        countries.map(country =>
                            <Link to={`country/${country.countryId}`} key={country.countryId} country={country} > 
                                <div className="card card-compact bg-base-100 shadow-xl transition hover:scale-110">
                                    <figure>
                                        <img className='md:h-[260px] object-cover w-full overflow-hidden'
                                            src={country.countryFlag}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className=" text-2xl text-center">{country.countryName}</h2>
                                        {/* <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn More</button>
                              </div> */}
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;