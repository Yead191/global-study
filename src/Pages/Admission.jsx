import React, { useEffect } from 'react';
import { FaFileAlt, FaFileUpload, FaEnvelope, FaCheckCircle, FaGlobe } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Admission = () => {
    useEffect(() => {
        document.title = 'Admission | Global Study'
    }, [])
    const steps = [
        {
            id: 1,
            icon: <FaFileAlt className="text-5xl text-purple-600" />,
            title: 'Complete your application form',
            description: 'Look out for your confirmation email – this shows we’ve received your application.',
        },
        {
            id: 2,
            icon: <FaFileUpload className="text-5xl text-purple-600" />,
            title: 'Submit your documents',
            description: (
                <>
                    Transfer them safely and easily by the{' '}
                    <Link className="text-purple-600 underline">
                        Upload Portal
                    </Link>.
                </>
            ),
        },
        {
            id: 3,
            icon: <FaEnvelope className="text-5xl text-purple-600" />,
            title: 'Receive your offer letter',
            description: 'This includes details of your offer, conditions, accommodation, and tuition fees.',
        },
        {
            id: 4,
            icon: <FaCheckCircle className="text-5xl text-purple-600" />,
            title: 'Accept your place',
            description: 'Pay your deposit to secure your place, then meet the conditions of your offer.',
        },
        {
            id: 5,
            icon: <FaGlobe className="text-5xl text-purple-600" />,
            title: 'Apply for your visa',
            description: 'We’ll provide the documents you need, and our visa support team is here to help.',
        },
        {
            id: 5,
            icon: <IoSearch className="text-5xl text-purple-600" />,
            title: 'Start your application today',
            description: '',
        },
    ];

    return (
        <div className="min-h-screen bg-white py-10 px-4 flex flex-col justify-center items-center mt-20 lg:w-8/12 mx-auto font-poppins ">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">How to Apply</h1>
                <p className="text-gray-600 mt-3">
                    Study abroad in 5 simple steps. Follow the instructions below to submit your application and start
                    your international study journey.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="card shadow-lg bg-base-200 rounded-lg p-6 flex flex-col items-center text-center space-y-3"
                    >
                        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            {step.icon}
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">{step.title}</h2>
                        <p className="text-gray-600 mt-2">{step.description}</p>
                    </div>
                ))}
            </div>
            <div className="mt-10 text-center">
                <Link className="btn btn-primary">
                    Apply Now
                </Link>
            </div>


            <section className='my-8 w-full '>

                <h1 className='text-4xl font-semibold mb-12 text-center'>Your application questions, answered
                </h1>


                <h4 className='text-3xl font-semibold'>What kind of offer could I receive?</h4>
                <p className='my-2 font-sm'>Once you’ve submitted your application form, you could receive one of the following offers: </p>

                {/* 1st faq */}
                <div className='flex flex-col gap-y-3 my-8'>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-semibold">Unconditional</div>
                        <div className="collapse-content">
                            <p>There are no conditions you need to meet to secure your place on your chosen course. </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-semibold">Conditional</div>
                        <div className="collapse-content">
                            <p>You need to meet certain conditions, such as academic and English language requirements, to secure your place. Your specific conditions will vary depending on your course type, subject, university and study length. You'll find full details in your offer letter.</p>
                        </div>
                    </div>
                </div>
                <h4 className='text-3xl font-semibold'>What conditions might I need to meet before I can accept my offer?</h4>
                <p className='my-2 font-sm'>Your offer letter will include full details of any conditions you must meet, such as:</p>

                {/* 2nd faq */}
                <div className='flex flex-col gap-y-3 my-8'>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-semibold">Academic requirements</div>
                        <div className="collapse-content">
                            <p>While our courses will equip you with the academic skills you need to excel at university, you’ll need a certain amount of previous education to study with us. <br /> <br /> This usually involves completion of education for a specified length of time or to a specified study level, such as a high school diploma or undergraduate degree.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-semibold">English language requirements</div>
                        <div className="collapse-content">
                            <p>Each course has a required level of English, which is assessed using a range of approved tests.

                                Depending on the type of course you’ve applied for, you may need to take a
                                Secure English Language Test
                                such as IELTS. For some courses, such as our iCAS options, alternative English language tests may be accepted.

                            </p>
                        </div>
                    </div>
                </div>

                <h4 className='text-3xl font-semibold'>When is the deadline for accepting my place?</h4>
                <p className='my-2 font-sm'>This varies depending on your chosen study destination. </p>

                {/* 3rd faq */}
                <div className='flex flex-col gap-y-3 my-8'>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-semibold">UK</div>
                        <div className="collapse-content">
                            <p>Most UK centers can accept students right up until the course begins, but we recommend accepting your place as soon as you can to avoid missing out. </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-semibold">US</div>
                        <div className="collapse-content">
                            <p>You’ll need to accept your place at least 6 weeks before your course start date to ensure you don’t miss any classes. </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-semibold">AUSTRALIA</div>
                        <div className="collapse-content">
                            <p>Deadlines vary based on your nationality/citizenship, but UWA College will provide your personal deadline when you apply. </p>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Admission;
