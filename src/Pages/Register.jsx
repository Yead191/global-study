import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {SignUp, updateUser, setUser} = useContext(AuthContext) || {}

    const handleSignUp = e=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")

        SignUp(email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setUser(user)
            updateUser({
                displayName: name,
                photoURL: photo
            })
            .then(() => {
                navigate( location?.state ? location.state  :'/')

            })
            .catch((error)=> console.log(error))
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });


        // console.log(name, photo, email, password);
        
        
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col lg:flex-row shadow-lg rounded-lg bg-white max-w-4xl w-full">
                {/* Left Section */}
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-8 lg:w-1/2 flex flex-col justify-center items-center rounded-l-lg radius5xl">
                    <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                    <p className="mb-6 text-center">
                        Enter your personal details to use all of the site's features.
                    </p>
                    <Link to='/login' className="bg-white text-purple-700 hover:bg-gray-200 px-6 py-2 rounded-xl font-medium transition">
                        SIGN IN
                    </Link>
                </div>

                {/* Right Section */}
                <div className="p-8 lg:w-1/2 flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Create Account</h2>
                    <div className="flex gap-3 mb-6">
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
                            G
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
                            F
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
                            I
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
                            L
                        </button>
                    </div>
                    <form onSubmit={handleSignUp} className='w-full'>
                        <input
                            name='name'
                            type="text"
                            placeholder="Name"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <input
                            name='photo'
                            type="text"
                            placeholder="Photo URL"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <input
                            name='email'
                            type="email"
                            placeholder="Email"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <input
                            name='password'
                            type="password"
                            placeholder="Password"
                            className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <div className='flex justify-center items-center'>

                        <button className="bg-purple-600  text-white hover:bg-purple-700 px-6 py-2 rounded-lg font-medium transition">
                            SIGN UP
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;