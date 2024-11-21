import React from 'react';
import { FaDollarSign, FaUserFriends, FaArrowRight, FaRocket } from 'react-icons/fa';


const OurFeatures = () => {
    return (
        <section className="px-6 md:px-16 py-12 lg::w-8/12 mx-auto  ">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Our Features</h2>
                    <p className="text-gray-600 mt-2">
                        “Explore the Array of Outstanding Features We Offer, Elevating Your Study Abroad Experience to Unprecedented Levels of Excellence.”
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
                    <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center py-24">
                        <div className="flex items-center justify-center mb-4 relative">
                            <FaDollarSign className="text-5xl text-red-600" />
                            <span className="absolute -top-5 -right-3 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                1
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-[#AE2323] mb-4">Affordable Services</h3>
                        <p className="text-gray-600 text-xs ">Access High-Quality Services at Affordable Prices, Ensuring Your Study Abroad Dreams Are Within Reach.</p>
                        <div className="mt-6">
                            <button className="bg-[#AE2323] text-white rounded-full p-3 hover:bg-red-700 transition">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center py-24">
                        <div className="flex items-center justify-center mb-4 relative">
                        <FaUserFriends className="text-4xl text-red-600" />
                            <span className="absolute -top-5 -right-3 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                2
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-[#AE2323] mb-4">Transparent Procedures</h3>
                        <p className="text-gray-600 text-xs ">Experience Transparent Procedures that Foster Trust and Confidence, Providing Clarity and Peace of Mind throughout Your Study Abroad Journey.</p>
                        <div className="mt-6">
                            <button className="bg-[#AE2323] text-white rounded-full p-3 hover:bg-red-700 transition">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center py-24">
                        <div className="flex items-center justify-center mb-4 relative">
                        <FaRocket className="text-4xl text-red-600" />
                            <span className="absolute -top-5 -right-5 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                3
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-[#AE2323] mb-4">Efficient & Flexible</h3>
                        <p className="text-gray-600 text-xs ">Experience an Efficient and Flexible Approach that Accommodates Your Individual Needs and Maximizes Your Study Abroad Opportunities.</p>
                        <div className="mt-6">
                            <button className="bg-[#AE2323] text-white rounded-full p-3 hover:bg-red-700 transition">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>

                </div>
            </section>
    );
};

export default OurFeatures;