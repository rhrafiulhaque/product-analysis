import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import ReviewShow from '../ReviewShow/ReviewShow';

const HomeReview = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className=' my-10'>
            <h1 className='text-center font-semibold text-3xl'>Customer Review: {reviews.slice(0,3).length} </h1>
            <div className='grid grid-cols-3 gap-4 px-20 text-center mb-5'>
                {
                    reviews.slice(0,3).map(review => <ReviewShow key={review.id} review={review}></ReviewShow>)
                }                
            </div>
            <div className=' mx-auto text-center'>
                <Link to={'/review'}>
            <button className=' bg-sky-700 p-4 text-center rounded-md text-white hover:bg-sky-600 duration-700'>Show More</button>
            </Link>
            </div>
        </div>
    );
};

export default HomeReview;