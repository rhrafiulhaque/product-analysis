import React from 'react';
import useReview from '../../Hooks/useReview';
import ReviewShow from '../ReviewShow/ReviewShow';

const Review = () => {
    const  [reviews,setReviews] =useReview();
    return (
        <div>
            <h1>Customer Review: {reviews.length} </h1>
            {
                reviews.map(review=><ReviewShow key={review.id} review ={review}></ReviewShow>)
            }

        </div>
    );
};

export default Review;