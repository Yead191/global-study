import React from 'react';
import { FaGlobe, FaBook, FaUserTie, FaPhoneAlt } from 'react-icons/fa';
import educator from '../assets/educator.jpg'

const GlobalDream = () => {
    return (
        <section className='md:w-10/12 mx-auto my-8'>
                <div className="space-y-12">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-16 ">
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition hover:scale-110">
                            <FaGlobe className="text-4xl text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold">15+ Destinations</h3>
                            <p className="text-gray-600 mt-2">
                                "Explore Over 15 Destinations and Unlock Boundless Opportunities for Growth and Learning."
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition hover:scale-110 ">
                            <FaBook className="text-4xl text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold">2500+ Courses</h3>
                            <p className="text-gray-600 mt-2">
                                "Discover a Diverse Selection of 2500+ Courses to Expand Your Knowledge and Fuel Your Academic Journey."
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition hover:scale-110">
                            <FaUserTie className="text-4xl text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold">Experienced</h3>
                            <p className="text-gray-600 mt-2">
                                "Trust the Expertise of our Experienced Professionals for Unparalleled Guidance and Support."
                            </p>
                        </div>
                        <div className="bg-red-600 text-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition hover:scale-110">
                            <FaPhoneAlt className="text-4xl mb-4" />
                            <h3 className="text-xl font-bold">Request a Call Back</h3>
                            <p className="mt-2">01624343171, 01971919191</p>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 items-center">

                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                <span className="text-purple-600">Global Dream</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Global Study Educational Consultants has managed to find a space among the existing reputed agents
                                and has become one of the most preferred and trusted consultants for abroad study. Whether you have
                                long educational gaps, budget issues, or poor academic background – we have a destination to choose
                                from based on your profile and requirements.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="flex items-center text-lg font-semibold text-purple-600">
                                        <FaBook className="mr-2" /> Certified Institute
                                    </h3>
                                    <p className="text-gray-600">
                                        "Choose a Certified Institute and Ensure Quality Education and Accredited Programs for Your Academic Pursuits."
                                    </p>
                                </div>
                                <div>
                                    <h3 className="flex items-center text-lg font-semibold text-purple-600">
                                        <FaUserTie className="mr-2" /> Qualified Teachers
                                    </h3>
                                    <p className="text-gray-600">
                                        "Benefit from the Guidance of Highly Qualified Teachers who Inspire and Nurture Your Academic Growth."
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2">
                                    <h4 className="text-gray-700 font-medium">Practical Knowledge</h4>
                                    <div className="bg-gray-300 rounded-full h-3">
                                        <div className="bg-purple-600 h-3 rounded-full" style={{ width: '92%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-gray-700 font-medium">Happy Students</h4>
                                    <div className="bg-gray-300 rounded-full h-3">
                                        <div className="bg-purple-600 h-3 rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img
                                src={educator}
                                alt="Dream Abroad"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default GlobalDream;