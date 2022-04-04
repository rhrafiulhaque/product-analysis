import React from 'react';
import useReview from '../../Hooks/useReview';

const Review = () => {
    const  [reviews,setReviews] =useReview();
    return (
        <div>
            <h1>Customer Review: {reviews.length} </h1>
            {
                //reviews.map(review=>)
            }

        </div>
    );
};

export default Review;