import React from 'react';
import img from './../../img/mac.png'

const Home = () => {
    return (
        <div className='container mx-auto px-10 grid grid-cols-2 gap-4'>
            <div className='pt-20'>
                <h1 className='text-7xl pb-8 font-bold text-center'>Welcome To The <span className=' text-blue-500'>Computer Hub</span></h1>
                <p className='text-center text-2xl pb-5'>Your Best Computer is Available Here</p>
                <p>Computer Hub  mission is to provide computer systems and services for businesses and individuals - systems that are state of the art, highly efficient, and reliable; service that is highly competent, dedicated, and timely.  Our ultimate objective is to be a complete support system for businesses and individuals, a support system that will empower our clients with enhanced productivity, increased competitiveness, and overall satisfaction. </p>
            </div>
            <div>
               <img className='pt-20' src={img} alt="" />
            </div>
            
        </div>
    );
};

export default Home;