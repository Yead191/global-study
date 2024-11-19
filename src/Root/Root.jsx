import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen font-montserrat'>
            <header className=''>
                <Navbar></Navbar>
            </header>
            <main className='flex-grow '>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Root;