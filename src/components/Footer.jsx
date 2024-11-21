import React from 'react';
import logo from '../assets/logo.jpg'


const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside >
                <div className='h-20 '>
                    <img className='w-52 h-full object-cover object-top overflow-hidden rounded-xl' src={logo} alt="" />

                </div>

                <p>
                    Global Study Hub by Yead LTD.
                    <br />
                    Providing reliable tech since 2020
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;