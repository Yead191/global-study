import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { RxCross1 } from 'react-icons/rx';

const Contact = () => {
    useEffect(()=>{
        document.title = 'Contact | Global Study'
    },[])



    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset()
        toast.success('Thanks for submitting. Our team will reach you soon!')
        // console.log('Form Data:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 lg:px-20 mt-16">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg relative">
                <button
                    className='p-2 bg-red-500 rounded-2xl text-white absolute -top-3 -left-3 z-10 transition hover:scale-125'
                    onClick={() => window.history.back()}
                >
                    <RxCross1 />
                </button>

                <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact us</h1>
                <p className="text-gray-600 mb-8">
                    We'd like to know a bit more about you. This will help us provide you with the most relevant information when we get in touch.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            className="input input-bordered w-full"
                            required />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            className="input input-bordered w-full"
                            required />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <input
                            type="number"
                            name="day"
                            placeholder="Day"
                            className="input input-bordered w-full"
                            required />
                        <input
                            type="text"
                            name="month"
                            placeholder="Month"
                            className="input input-bordered w-full"
                            required />
                        <input
                            type="number"
                            name="year"
                            placeholder="Year"
                            className="input input-bordered w-full"
                            required />
                    </div>


                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="input input-bordered w-full"
                        required />


                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile number"
                        className="input input-bordered w-full"
                        required />


                    {[
                        { name: 'location', placeholder: 'Where do you live?' },
                        { name: 'country', placeholder: 'What country are you currently located in?' },
                        { name: 'startDate', placeholder: 'When would you like to start studying?' },
                        { name: 'subject', placeholder: 'Which subject would you like to study? (optional)' },
                        { name: 'studyLocation', placeholder: 'Where would you like to study? (optional)' },
                    ].map((field) => (
                        <input
                            type='text'
                            key={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                            className="input input-bordered w-full"
                        />


                    ))}


                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="subscribe"

                            className="checkbox checkbox-primary"
                        />
                        <span className="text-gray-600">Yes, I’d like to hear more from Global Study.</span>
                    </label>


                    <textarea
                        name="message"
                        placeholder="How can we help? Send us a message! (optional)"

                        className="textarea textarea-bordered w-full"
                    />


                    <button type="submit" className="btn btn-primary w-full">
                        Contact us
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
