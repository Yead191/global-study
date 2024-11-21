import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import HomeBanner2 from '../components/HomeBanner2';

import OurFeatures from '../components/OurFeatures';
import GlobalDream from '../components/GlobalDream';



const Home = () => {
    const countries = useLoaderData()
    // console.log(countries);

    return (
        <div className='mt-24 mb-6'>
            <header>
                <HomeBanner2></HomeBanner2>
            </header>
            <div className='text-center space-y-3 my-8'>
                <h1 className='text-3xl md:text-5xl text-[#AE2323]'> Transform Your Future With Global Study</h1>
                <p className='text-lg'>Unlock Your Potential and soar Towards Success</p>
                <button className='btn bg-[#AE2323] text-white rounded-none px-9'>CONTACT US</button>

            </div>

            <GlobalDream></GlobalDream>
            
            <section className='my-12'>
                <h4 className='text-center '>Choose Your Dream Country</h4>
                <h1 className='text-center text-4xl font-bold'>Top Countries to Study</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 w-10/12 mx-auto '>
                    {
                        countries.map(country =>
                            <Link  data-aos="zoom-in-up"  to={`country/${country.countryId}`} key={country.countryId} country={country} >
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
            <OurFeatures></OurFeatures>
        </div>
    );
};

export default Home;