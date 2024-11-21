import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from './Banner';
import { MdOutlineStar } from "react-icons/md";
import { IoStarOutline } from 'react-icons/io5';
import UniCard from './UniCard';



const Country = () => {
    useEffect(()=>{
        document.title = 'Country | Global Study'
    },[])

    const data = useLoaderData()
    const { countryId } = useParams()
    const [uni, setUniversities] = useState([])
    useEffect(() => {
        if (countryId) {
            const filterByCountry = [...data].filter(university => university.countryId === countryId)
            setUniversities(filterByCountry[0])
        }
    }, [data, countryId])

    // console.log(uni);
    // const{universities: newCountry} = universities
    const { universities, countryImg, countryName, whyStudy } = uni || {}

    // console.log(universities, countryImg);
    return (
        <div className='mt-16 '>
            <Banner countryName={countryName} countryImg={countryImg} ></Banner>

            <section className='my-8 w-11/12 md:w-10/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
                    <div className='md:col-span-9'>
                        <h1 className='text-4xl font-semibold'>Why to study in <span className='text-5xl text-purple-400'>{countryName}</span>?</h1>
                        <p className='my-4'>{whyStudy}</p>

                        <h1 className='text-4xl text-center font-bold mb-3 mt-16'> Top 3 University of {countryName}</h1>
                        <p className='text-center text-sm text-gray-500 my-2'>Choose University</p>
                        
                    </div>
                    <aside className=' md:col-span-3 shadow-2xl rounded-2xl'>
                        <div className='rounded-2xl px-5 py-10'>
                            <h1 className='text-3xl font-bold mb-3 pl-4'>Benefits</h1>
                            <p className='pl-4 inline-flex items-center text-xl gap-3 font-semibold'> <span className='px-5 py-3 bg-red-500'><MdOutlineStar
                                className=' text-3xl text-white ' /></span> Scholarship
                            </p>
                            <p className='pl-4 inline-flex items-center text-xl gap-3 font-semibold'> <span className='px-5 py-3 bg-red-500'><MdOutlineStar
                                className=' text-3xl text-white ' /></span> Best teachers
                            </p>
                            <p className='pl-4 inline-flex items-center text-xl gap-3 font-semibold'> <span className='px-5 py-3 bg-red-500'><MdOutlineStar
                                className=' text-3xl text-white ' /></span> Opportunities to earn
                            </p>
                            <p className='pl-4 inline-flex items-center text-xl gap-3 font-semibold'> <span className='px-5 py-3 bg-red-500'><MdOutlineStar
                                className=' text-3xl text-white ' /></span> Top Faculties
                            </p>

                        </div>
                    </aside>

                </div>

                {/* university card */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                            {
                                universities?.map(university => <UniCard university={university} key={university.universityId}></UniCard> )
                            }
                        </div>





            <button onClick={() => window.history.back()} className='btn btn-secondary my-5'>Go Back</button>
            </section>

        </div>
    );
};

export default Country;