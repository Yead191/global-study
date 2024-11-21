import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    useEffect(()=>{
        document.title = 'Profile | Global Study'
    },[])

    
    const navigate = useNavigate()
    const { user, updateUser } = useContext(AuthContext)
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')


        //update user
        updateUser({
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                toast.success(`Successfully updated profile!`)
                navigate('/profile')

            })
            .catch((error) => toast.error(error.message))
        // console.log(user);
        // ...

        setIsEditing(false);
    };

    return (
        <section className=" bg-white flex flex-col place-items-center justify-center min-h-screen place-content-center">
            <div>
                <h1 className="text-4xl font-semibold text-purple-400 text-center">Global Study User Profile</h1>
            </div>
            <div className="mt-40 flex flex-col items-center p-4 bg-gray-800 text-white rounded-md w-72 shadow-md justify-center h-[300px] relative">

                <div className="absolute h-[230px] w-10/12 -top-36">
                    <img
                        src={user.photoURL}
                        alt="Profile"
                        className=" w-full h-full object-cover  rounded-full border-4 border-gray-600 mb-4 "
                    />
                </div>
                <h2 className="text-lg font-bold">{user?.displayName}</h2>
                <p className="text-sm text-gray-400 mb-4">{user?.email}</p>

                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
                    >
                        Edit Profile
                    </button>
                )}

                {isEditing && (
                    <form onSubmit={handleSubmit} className="mt-4 w-full">
                        <div className="mb-2">
                            <label className="block text-gray-300 text-sm">Name:</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                className="w-full p-2 rounded bg-gray-700 text-white"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-300 text-sm">Photo URL:</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Enter Photo URL"
                                className="w-full p-2 rounded bg-gray-700 text-white"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded w-full"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded w-full mt-2"
                        >
                            Cancel
                        </button>
                    </form>
                )}
            </div>

        </section>



    );
};

export default Profile;
