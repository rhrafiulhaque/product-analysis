import React from 'react';
import useReview from '../../Hooks/useReview';
import ReviewShow from '../ReviewShow/ReviewShow';

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className=' mt-10'>
            <h1 className='text-center font-semibold text-3xl'>Customer Review: {reviews.length} </h1>
            <div className='grid grid-cols-2 gap-4 px-20'>
                {
                    reviews.map(review => <ReviewShow key={review.id} review={review}></ReviewShow>)
                }
            </div>
        </div>
    );
};

export default Review;