import React, { useEffect, useState } from 'react';
// import { AuthContext } from '../provider/AuthProvider';
import AboutBanner from '../components/AboutBanner';
import student from '../assets/student.png'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';



const About = () => {
    useEffect(()=>{
        document.title = 'About | Global Study'
    },[])
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className='mt-16'>
            <header>
                <AboutBanner></AboutBanner>
            </header>
            <section className="p-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                        YOUR GUIDE TO FULFILL INTERNATIONAL EDUCATIONAL DREAMS
                    </h1>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Text Section */}
                        <div className="lg:col-span-2 space-y-6">
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Established in 2014, <strong>Global Study Educational Consultants</strong> has managed to find a space among the existing reputed agents and has become one among the most preferred and trusted consultants for abroad study. What makes us unique and special is that if you have a calling to study and settle abroad, we have an option based on your profile. Whether you have long educational gaps, budget issues, poor academic background – we have a destination to choose from, based on your profile and requirement.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                We provide student visa services to various countries like the UK, Canada, Australia, Germany, New and Austria. We offer end-to-end services from counseling prospective students to giving them details regarding the entire admission process, helping them choose the best universities and right countries, processing and following up applications, fee payment, visa application, and onshore assistance.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                <strong>Global Study</strong> has a sole aim: to guide students to select potential overseas institutions that can facilitate them to shape their future. With our proficiency and years of experience, we spot the most suitable university for each learner that matches their dreams and goals. We support each student personally to decide the suitable academy for their preferred course.
                            </p>
                        </div>

                        {/* Highlights Section */}
                        <div className="space-y-8 relative">
                            {/* Student Image Section */}
                            <div className="card bg-white shadow-md rounded-lg p-4 relative">
                                <img
                                    src={student}
                                    alt="Student Image"
                                    className="rounded-lg object-cover"
                                />
                                {/* 9+ Years of Experience */}
                                <div className="card bg-[#AE2323] text-white shadow-md rounded-lg p-6 absolute top-1/2 -left-9 transform -translate-y-1/2">
                                    <div className="text-center">
                                        <h2 className="text-4xl font-bold">9+</h2>
                                        <p className="mt-2 text-lg">Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-10 text-gray-600">
                        <p className="leading-relaxed">
                            All this has been made possible under the visionary leadership of its CEO and Director, George Mathew. The directors have studied abroad, worked there, and undergone specialized training at various universities around the globe. Further, our counselors travel abroad and have been trained by international experts to guide students professionally in selecting the right course at the ideal university.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="md:max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-12">
                    {/* Stat 1 */}
                    <div className="text-center">
                        <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                            {({ isVisible }) => (
                                <h2 className="text-4xl font-bold text-gray-800">
                                    {isVisible ? <CountUp start={0} end={2500} duration={3} separator="," /> : 0}+
                                </h2>
                            )}
                        </VisibilitySensor>
                        <p className="text-[#AE2323] text-lg mt-2">Courses</p>
                    </div>

                    <div className="h-12 w-px bg-[#AE2323] hidden md:block"></div>

                    {/* Stat 2 */}
                    <div className="text-center">
                        <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                            {({ isVisible }) => (
                                <h2 className="text-4xl font-bold text-gray-800">
                                    {isVisible ? <CountUp start={0} end={17} duration={3} /> : 0}+
                                </h2>
                            )}
                        </VisibilitySensor>
                        <p className="text-[#AE2323] text-lg mt-2">Countries</p>
                    </div>

                    <div className="h-12 w-px bg-[#AE2323] hidden md:block"></div>

                    {/* Stat 3 */}
                    <div className="text-center">
                        <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                            {({ isVisible }) => (
                                <h2 className="text-4xl font-bold text-gray-800">
                                    {isVisible ? <CountUp start={0} end={300} duration={3} /> : 0}+
                                </h2>
                            )}
                        </VisibilitySensor>
                        <p className="text-[#AE2323] text-lg mt-2">Affiliated Universities</p>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-8">
                    <Link to={`/contact`} className="btn bg-[#AE2323] text-white px-8 rounded-md">
                        Contact Us
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default About;