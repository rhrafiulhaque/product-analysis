import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='md:flex md:px-20 pt-5 pb-5 md:justify-between text-center bg-sky-400 '>
            <h1 className='text-2xl text-white font-bold'>Computer Hub</h1>
            <div className=''>
                <Link to={'/'} className="pr-5 text-white text-md font-semibold text-base">Home</Link>
                <Link to={'/review'} className="pr-5 text-white text-md font-semibold text-base">Review</Link>
                <Link to={'/dashboard'} className="pr-5 text-white text-md font-semibold text-base">Dashboard</Link>
                <Link to={'/blogs'} className="pr-5 text-white text-md font-semibold text-base">Blogs</Link>

            </div>
        </div>
    );
};

export default NavBar;