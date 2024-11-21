import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';

const ForgetPass = () => {
    useEffect(()=>{
        document.title = 'Forgot | Global Study'
    },[])
    const { forgetMail, forgetPassword, setForgetMail } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleForget = e => {
        e.preventDefault()
        if (!forgetMail) {
            toast.error('Please provide an email address!');
            return;
        }
        forgetPassword(forgetMail)
            .then(() => {
                // Password reset email sent!
                // ..
                toast.success('Password reset email sent. Please Login Again!')
                navigate('/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
                // ..
            });

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col  shadow-lg rounded-lg bg-white  w-full lg:w-1/4 mx-auto">

                <div className="p-8 flex flex-col justify-center items-center relative">
                    <button
                        className='p-2 bg-red-500 rounded-2xl text-white absolute -top-3 -left-3 z-10 transition hover:scale-125'
                        onClick={() => window.history.back()}
                    >
                        <RxCross1 />
                    </button>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800"> Forgot Your Password?</h2>
                    <p className='text-gray-500 mb-3'>Reset Your Password from Email</p>

                    <form onSubmit={handleForget} className='w-full'>
                        <input

                            name='email'
                            type="email"
                            placeholder="Email"
                            value={forgetMail}
                            onChange={(e) => setForgetMail(e.target.value)}
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                            required />


                        <div className='flex items-center justify-center'>

                            <button className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-2 rounded-xl font-medium transition hover:scale-110">
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default ForgetPass;