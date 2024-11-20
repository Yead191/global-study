import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const About = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='mt-28'>

            {/* {
                user && <div>
                    <img src={user.photoURL} alt="" />
                    <p>{user.email}</p>
                </div>
            } */}
        </div>
    );
};

export default About;