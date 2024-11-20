import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="flex-grow bg-white flex flex-col items-center justify-center ">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 mt-56 md:mt-0">Page Not Found</h1>
                <Link
                    to="/"
                    className="px-6 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-300"
                >
                    Go Home
                </Link>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ErrorPage;