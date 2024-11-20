import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IoCalendarNumberOutline, IoMailOpenSharp } from "react-icons/io5";
import { TbWorld } from 'react-icons/tb';
import { FiClock } from 'react-icons/fi';
import { PiBuildingApartmentDuotone, PiCurrencyCircleDollarBold } from 'react-icons/pi';
import { FcRating } from 'react-icons/fc';
import { GiGraduateCap } from 'react-icons/gi';
import { GoDotFill } from 'react-icons/go';
import { FaMapLocation } from 'react-icons/fa6';
import { RxCross1 } from 'react-icons/rx';
import { AuthContext } from '../provider/AuthProvider';
import successLogo from '../assets/Group.png'


const SingleUni = ({ university }) => {
    const [disable , setDisable] = useState(false)
    const { user } = useContext(AuthContext)
    const { universityId } = useParams()
    const data = useLoaderData()
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])

    const [uni, setUni] = useState(null)

    useEffect(() => {

        let singleUni = null;
        for (const country of data) {
            singleUni = country.universities.find(university => university.universityId === universityId);
            if (singleUni) break
        }
        setUni(singleUni)
    }, [data, universityId]);

    if (!uni) {
        return <div className="flex min-h-screen justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
    }
    const { universityName, universityImage, description, applyDate, rating, additionalInfo } = uni

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments([...comments, comment])
            setComment("")
        }
    }


    // console.log(uni);
    return (
        <div className='mt-16'>
            <div className='bg-[#586e86] h-[120px] flex items-center justify-center '>
                <h1 className='text-center text-white  text-4xl font-semibold flex items-center justify-center'>{universityName}</h1>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto my-6  shadow-xl rounded-r-xl relative '>

                <button
                    className='p-2 bg-red-500 rounded-2xl text-white absolute -top-3 -left-3 z-10 transition hover:scale-125'
                    onClick={() => window.history.back()}
                >
                    <RxCross1 />
                </button>

                <div className='bg-base-200 px-5 py-7 flex flex-col'>
                    <div className=" flex items-center">
                        <h1 className="text-4xl font-bold">Program Details</h1>
                        <div className="flex-grow border-t-2 border-black ml-4"></div>
                    </div>
                    <p className='my-5 '><span className='underline text-xl font-semibold'>Description:</span> {description}</p>
                    <div className='border border-black'></div>

                    <div className='grid grid-cols-2 lg:grid-cols-3 my-6 gap-4 flex-grow'>
                        <div className=' flex gap-2'>
                            <IoCalendarNumberOutline className=' text-lg' />
                            <div>
                                <p className='font-semibold text-gray-600'>DURATION</p>
                                <p className='text-sm'>BSc: 4 Years, MSC: 2 Years</p>
                            </div>
                        </div>



                        <div className=' flex gap-2'>
                            <TbWorld
                                className=' text-xl' />
                            <div>
                                <p className='font-semibold text-gray-600'>LANGUAGES</p>
                                <p className='text-sm' >English</p>
                            </div>

                        </div>
                        <div className=' flex gap-2'>
                            <FiClock

                                className=' text-xl' />
                            <div>
                                <p className='font-semibold text-gray-600'>PACE</p>
                                <p className='text-sm' >Full time, Part time</p>
                            </div>

                        </div>
                        <div className=' flex gap-2'>
                            <IoMailOpenSharp


                                className=' text-xl' />
                            <div>
                                <p className='font-semibold text-gray-600'>APPLICATION DEADLINE</p>
                                <p className='text-sm' >{applyDate}</p>
                            </div>

                        </div>
                        <div className=' flex gap-2'>
                            <PiBuildingApartmentDuotone className=' text-xl' />
                            <div>
                                <p className='font-semibold text-gray-600'>STUDY FORMAT</p>
                                <p className='text-sm' >On Campus</p>
                            </div>

                        </div>
                        <div className=' flex gap-2'>
                            <FcRating className=' text-xl' />
                            <div>
                                <p className='font-semibold text-gray-600'>RATING</p>
                                <p className='' >{rating}</p>
                            </div>

                        </div>

                        <div className=' flex gap-2'>
                            <GiGraduateCap className=' text-xl' />
                            <div>
                                <p className='font-semibold text-gray-600'>PROGRAMS</p>
                                <div className='flex flex-col space-y-1'>
                                    {
                                        additionalInfo.programs?.map((info, index) => <p key={index} className='text-sm inline-flex items-center' > <GoDotFill />
                                            {info} </p>)
                                    }
                                </div>
                            </div>

                        </div>

                        <div className=' flex gap-2'>
                            <FaMapLocation
                                className=' text-xl' />
                            <div>
                                <p className='font-semibold text-gray-600'>LOCATION</p>
                                <p className='' >{additionalInfo.location}</p>
                            </div>

                        </div>
                        <div className=' flex gap-2'>
                            <PiCurrencyCircleDollarBold className=' text-xl' />
                            <div>
                                <p className='font-semibold text-gray-600'>TUITION FEES</p>
                                <p className='' >{additionalInfo.tuitionFees}</p>
                            </div>

                        </div>


                    </div>

                    <button disabled={disable} onClick={() => document.getElementById('my_modal_5').showModal()} className='btn btn-success text-white  w-2/4 mx-auto flex justify-center items-center'>APPLY NOW</button>

                </div>

                <div>
                    <img className='w-full h-full overflow-hidden object-cover rounded-r-lg' src={universityImage} alt="" />
                </div>



            </div>
            {/* modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn hidden" >open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box place-items-center">
                    <img src={successLogo} alt="" />
                    <h3 className="font-bold my-2 text-3xl">Congrats!</h3>
                    <p className="py-4 text-center">You have successfully applied to <span className='font-semibold text-xl text-purple-500'>{universityName}</span>.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={()=> setDisable(true)} className="btn ">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            {/* comment */}
            <div className='lg:w-4/12 mx-auto my-6 p-4 '>
                <h2 className='text-2xl font-semibold mb-4'>Give a Feedback Here</h2>


                <form onSubmit={handleCommentSubmit} className='flex flex-col md:flex-row gap-4'>
                    <input
                        type='text'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className='flex-1 p-2 border border-gray-300 rounded-md'
                        placeholder='Write a comment...'
                    />
                    <button type='submit' className='btn btn-primary px-4 py-2'>
                        Submit
                    </button>
                </form>

                {/* Display Comments */}
                <div className='mt-6 space-y-4'>
                <p className='text-gray-600 text-lg font-semibold'>All Comments:</p>

                    {comments.length > 0 ? (
                        comments.map((cmt, index) => (
                            <div key={index} className='p-2 bg-gray-100 rounded-md shadow'>
                                <div className='flex gap-3 items-center'>
                                    <div>
                                        <img className='h-10 w-10 rounded-full' src={user?.photoURL} alt="" />
                                    </div>
                                    <div>
                                        <p className='font-semibold'>{user?.displayName}</p>
                                        <p className=''> {cmt}</p>

                                    </div>
                                </div>


                            </div>
                        ))
                    ) : (
                        <p className='text-gray-600'>No comments yet. Be the first to comment!</p>
                    )}
                </div>
            </div>


        </div>
    );
};

export default SingleUni;

/**
 * {
    "universityId": "UK-002",
    "universityName": "University of Cambridge",
    "universityImage": "https://i.ibb.co.com/DVwvW3f/Banner-Image-The-University-of-Cambridge.webp",
    "description": "Established in 1209, the University of Cambridge is globally recognized for its academic rigor and cutting-edge research. It has contributed immensely to the fields of science, literature, and arts, with alumni including Isaac Newton, Stephen Hawking, and Charles Darwin. Cambridge fosters innovation and intellectual growth within its vibrant collegiate system.",
    "applyDate": "2025-01-15",
    "rating": 4.8,
    "additionalInfo": {
        "location": "Cambridge, England",
        "programs": [
            "Law",
            "Mathematics",
            "Science"
        ],
        "tuitionFees": "£35,000 per year"
    }
}
 */